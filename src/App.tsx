import { type Component, Show } from "solid-js";
import SpotifyLogo from "./assets/Spotify_Logo_RGB_Green.png";
import Player from "./components/player/Player";
import { AuthInfoProvider, useAuthInfo } from "./context/auth";
import { PlaybackSDKProvider } from "./context/playbackSdk";
import { getMaxImage } from "./lib/utils";

const Main: Component = () => {
  const [state, { login }] = useAuthInfo();

  return (
    <div class="bg-black prose prose-white max-w-unset! min-h-100vh font-sans p-2 grid grid-rows-[auto_1fr] gap-2">
      <header class="p-4 rounded-2 bg-white/10 flex justify-between items-center">
        <img src={SpotifyLogo} alt="Spotify" class="h-8! w-auto!" />
        <Show
          when={state.me}
          fallback={
            <button
              type="button"
              onClick={login}
              class="bg-green c-black rounded-full px-4 py-2 font-700 hover:bg-#1fdf64 active:bg-#169c46"
            >
              Login
            </button>
          }
        >
          <img
            src={getMaxImage(state.me?.images ?? []).url}
            alt={state.me?.display_name}
            class="w-10 h-10 rounded-full"
            width={40}
            height={40}
          />
        </Show>
      </header>
      <main class="p-4 rounded-2 bg-white/10">
        <Player />
      </main>
    </div>
  );
};

function App() {
  return (
    <AuthInfoProvider>
      <PlaybackSDKProvider>
        <Main />
      </PlaybackSDKProvider>
    </AuthInfoProvider>
  );
}

export default App;
