import { type Component, Show } from "solid-js";
import { AuthInfoProvider, useAuthInfo } from "./context/auth";

const Main: Component = () => {
  const [state, { login }] = useAuthInfo();

  return (
    <>
      <h1>Oreore Spotify Player</h1>
      <Show when={state.me}>
        <p>Logged in as {state.me?.display_name}</p>
      </Show>
      <button type="button" onClick={login}>
        Login
      </button>
    </>
  );
};

function App() {
  return (
    <AuthInfoProvider>
      <Main />
    </AuthInfoProvider>
  );
}

export default App;
