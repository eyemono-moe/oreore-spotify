/* @refresh reload */
import { render } from "solid-js/web";

import App from "./App";

const root = document.getElementById("root");

// biome-ignore lint/style/noNonNullAssertion: div#root in index.html
render(() => <App />, root!);
