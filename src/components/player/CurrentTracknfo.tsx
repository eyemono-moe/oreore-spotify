import { type Component, Show } from "solid-js";
import { usePlaybackSDK } from "../../context/playbackSdk";
import TrackInfo from "../track/TrackInfo";

const CurrentTrackInfo: Component = () => {
  const [state] = usePlaybackSDK();
  return (
    <Show
      when={state.playbackState?.track_window.current_track}
      fallback={
        <div>
          <h3>再生中の曲情報</h3>
          <p>再生中の曲はありません</p>
        </div>
      }
    >
      {/* biome-ignore lint/style/noNonNullAssertion: <explanation> */}
      <TrackInfo track={state.playbackState?.track_window.current_track!} />
    </Show>
  );
};

export default CurrentTrackInfo;
