import type { Component } from "solid-js";
import { usePlaybackSDK } from "../../context/playbackSdk";
import Controller from "./Controller";
import CurrentTrackInfo from "./CurrentTracknfo";

const Player: Component = () => {
  const [playbackState] = usePlaybackSDK();

  return (
    <div>
      <CurrentTrackInfo />
      <Controller />
      <pre>{JSON.stringify(playbackState, null, 2)}</pre>
    </div>
  );
};

export default Player;
