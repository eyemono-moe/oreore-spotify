import { makePersisted } from "@solid-primitives/storage";
import pkceChallenge from "pkce-challenge";
import {
  type ParentComponent,
  createContext,
  createEffect,
  onMount,
  useContext,
} from "solid-js";
import { createStore, reconcile } from "solid-js/store";
import { number, object, safeParse, string } from "valibot";
import { type PrivateUserObject, SpotifyClient } from "../lib/spotify";

type AuthContextState = {
  me: PrivateUserObject | null;
};

type AuthContextAction = {
  login: () => void;
  logout: () => void;
  api: () => Promise<SpotifyClient>;
};

type AuthContext = [state: AuthContextState, actions: AuthContextAction];

const defaultState = (): AuthContextState => ({
  me: null,
});

const AuthInfoContext = createContext<AuthContext>();

type Tokens =
  | {
      pkceChallenge?: string;
      accessToken?: undefined;
      refreshToken?: undefined;
      expiresAt?: undefined;
    }
  | {
      pkceChallenge: undefined;
      accessToken: string;
      refreshToken: string;
      expiresAt: number;
    };

export const AuthInfoProvider: ParentComponent = (props) => {
  const [state, setState] = createStore<AuthContextState>(defaultState());

  const [tokens, setTokens] = makePersisted(createStore<Tokens>({}), {
    name: "spotify-auth",
  });
  const resetTokens = () => setTokens(reconcile({}));

  const getCode = () => {
    const search = new URLSearchParams(window.location.search);
    return search.get("code");
  };

  const tokenResSchema = object({
    access_token: string(),
    refresh_token: string(),
    expires_in: number(),
  });

  const actions: AuthContextAction = {
    login: async () => {
      // redirect to the Spotify login page
      const challenge = await pkceChallenge();
      setTokens("pkceChallenge", challenge.code_verifier);

      const params = new URLSearchParams({
        response_type: "code",
        client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
        redirect_uri: import.meta.env.VITE_SPOTIFY_REDIRECT_URI,
        scope: "streaming user-read-email user-read-private",
        code_challenge: challenge.code_challenge,
        code_challenge_method: "S256",
      });
      const authUrl = new URL("https://accounts.spotify.com/authorize");
      authUrl.search = params.toString();

      window.location.href = authUrl.toString();
    },
    logout: () => {
      throw new Error("Not implemented");
    },
    api: async () => {
      const token = await getOrRefreshAccessToken();
      if (!token) {
        throw new Error("Not logged in");
      }

      return new SpotifyClient({
        TOKEN: token,
      });
    },
  };

  const setAccessToken = async (code: string) => {
    const accessToken = tokens.accessToken;
    if (accessToken) {
      // already logged in
      return accessToken;
    }
    const codeVerifier = tokens.pkceChallenge;
    if (!codeVerifier) {
      throw new Error("Code verifier not found");
    }

    const body = new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: import.meta.env.VITE_SPOTIFY_REDIRECT_URI,
      client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
      code_verifier: codeVerifier,
    });

    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    });

    if (!response.ok) {
      resetTokens();
      throw new Error("Failed to get access token");
    }

    const data = safeParse(tokenResSchema, await response.json());
    if (!data.success) {
      resetTokens();
      throw new Error("Failed to get access token");
    }

    setTokens({
      pkceChallenge: undefined,
      accessToken: data.output.access_token,
      refreshToken: data.output.refresh_token,
      expiresAt: Date.now() + data.output.expires_in * 1000,
    });

    return data.output.access_token;
  };

  const getOrRefreshAccessToken = async () => {
    const token = tokens.accessToken;
    if (!token) {
      return null;
    }

    if (Date.now() > tokens.expiresAt) {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: tokens.refreshToken,
          client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
        }),
      });

      if (!response.ok) {
        resetTokens();
        return null;
      }

      const data = safeParse(tokenResSchema, await response.json());
      if (!data.success) {
        resetTokens();
        return null;
      }

      setTokens({
        accessToken: data.output.access_token,
        expiresAt: Date.now() + data.output.expires_in * 1000,
      });

      return data.output.access_token;
    }

    return token;
  };

  onMount(() => {
    const code = getCode();
    if (code) {
      setAccessToken(code);
    }
  });

  createEffect(() => {
    actions.api().then((client) => {
      client.users.getCurrentUsersProfile().then((me) => {
        setState("me", me);
      });
    });
  });

  return (
    <AuthInfoContext.Provider value={[state, actions]}>
      {props.children}
    </AuthInfoContext.Provider>
  );
};

export const useAuthInfo = () => {
  const ctx = useContext(AuthInfoContext);
  if (!ctx) {
    throw new Error("useAuthInfo must be used within an AuthInfoProvider");
  }
  return ctx;
};
