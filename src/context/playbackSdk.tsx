import {
  type ParentComponent,
  createContext,
  createEffect,
  createResource,
  createSignal,
  onCleanup,
  onMount,
  useContext,
} from "solid-js";
import { createStore } from "solid-js/store";
import { useAuthInfo } from "./auth";

type PlaybackSDKContextState = {
  playbackState: Spotify.PlaybackState | null;
  player: Spotify.Player | null;
  errors: (Spotify.Error & { type: Spotify.ErrorTypes }) | null;
  device:
    | (Spotify.WebPlaybackInstance & {
        isReady: boolean;
      })
    | null;
};

type PlaybackSDKContext = [state: PlaybackSDKContextState];

const defaultState = (): PlaybackSDKContextState => ({
  playbackState: null,
  player: null,
  errors: null,
  device: null,
});

const PlaybackSDKContext = createContext<PlaybackSDKContext>();

export const PlaybackSDKProvider: ParentComponent = (props) => {
  const [scriptRef, setScriptRef] = createSignal<HTMLScriptElement | null>(
    null,
  );
  const [sdkReady, setSdkReady] = createSignal(false);
  const [state, setState] = createStore(defaultState());

  const [, { getOrRefreshAccessToken, api }] = useAuthInfo();
  const [token] = createResource(() => getOrRefreshAccessToken());

  // setup the SDK
  onMount(() => {
    if (window.Spotify) {
      setSdkReady(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);
    setScriptRef(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      setSdkReady(true);
    };
  });

  // remove the script when the component is unmounted
  onCleanup(() => {
    const script = scriptRef();
    if (script) {
      document.body.removeChild(script);
    }

    setState("player", (prevPlayer) => {
      // disconnect the previous player
      prevPlayer?.disconnect();
      return prevPlayer;
    });
  });

  const setupSdk = async (token: string) => {
    const player = new Spotify.Player({
      name: "オレオレクライアント",
      getOAuthToken: (cb) => {
        cb(token);
      },
    });

    player.connect();
    addErrorEventListeners(player);
    addPlaybackEventListeners(player);
    addDeviceEventListeners(player);

    setState("player", (prevPlayer) => {
      // disconnect the previous player
      prevPlayer?.disconnect();
      return player;
    });
  };

  const addErrorEventListeners = (player: Spotify.Player) => {
    player.addListener("initialization_error", ({ message }) => {
      console.error(message);
      setState("errors", { type: "initialization_error", message });
    });
    player.addListener("authentication_error", ({ message }) => {
      console.error(message);
      setState("errors", { type: "authentication_error", message });
    });
    player.addListener("account_error", ({ message }) => {
      console.error(message);
      setState("errors", { type: "account_error", message });
    });
    player.addListener("playback_error", ({ message }) => {
      console.error(message);
      setState("errors", { type: "playback_error", message });
    });
  };

  const addPlaybackEventListeners = (player: Spotify.Player) => {
    player.addListener("player_state_changed", (state) => {
      setState("playbackState", state);
    });
  };

  const addDeviceEventListeners = (player: Spotify.Player) => {
    player.addListener("ready", (webPlaybackInstance) => {
      setState("device", { ...webPlaybackInstance, isReady: true });
    });
    player.addListener("not_ready", (webPlaybackInstance) => {
      setState("device", { ...webPlaybackInstance, isReady: false });
    });
  };

  // Set up the SDK when the token and the SDK are ready
  createEffect(() => {
    const _token = token();
    if (token.state === "ready" && _token && sdkReady()) {
      setupSdk(_token);
    }
  });

  // transfer playback to this device when device is ready
  createEffect(async () => {
    if (state.device?.isReady) {
      (await api()).player.transferAUsersPlayback({
        device_ids: [state.device.device_id],
      });
    }
  });

  createEffect(async () => {
    if (state.player) {
      console.log("player is ready, getting current state...");
      const currentState = await state.player.getCurrentState();
      setState("playbackState", currentState);
    }
  });

  return (
    <PlaybackSDKContext.Provider value={[state]}>
      {props.children}
    </PlaybackSDKContext.Provider>
  );
};

export const usePlaybackSDK = () => {
  const ctx = useContext(PlaybackSDKContext);
  if (!ctx) {
    throw new Error("usePlaybackSDK must be used within a PlaybackSDKProvider");
  }
  return ctx;
};
