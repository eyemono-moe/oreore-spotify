import type { Component } from "solid-js";
import Controller from "./Controller";
import CurrentTrackInfo from "./CurrentTracknfo";

const Player: Component = () => {
  return (
    <div class="flex flex-col gap-4 justify-between h-full">
      <CurrentTrackInfo />
      <Controller />
    </div>
  );
};

export default Player;
