import { type Component, Show } from "solid-js";
import Player from "./components/player/Player";
import { AuthInfoProvider, useAuthInfo } from "./context/auth";
import { PlaybackSDKProvider } from "./context/playbackSdk";

const Main: Component = () => {
  const [state, { login }] = useAuthInfo();

  return (
    <>
      <Show
        when={state.me}
        fallback={
          <button type="button" onClick={login}>
            Login
          </button>
        }
      >
        <p>Logged in as {state.me?.display_name}</p>
      </Show>
      <Player />
    </>
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
