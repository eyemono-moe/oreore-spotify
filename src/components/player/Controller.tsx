import { type Component, Show } from "solid-js";
import { usePlaybackSDK } from "../../context/playbackSdk";

const Controller: Component = () => {
  const [state] = usePlaybackSDK();

  return (
    <div>
      <button
        onClick={async () => {
          await state.player?.previousTrack();
        }}
        type="button"
      >
        prev
      </button>
      <Show
        when={state.playbackState?.paused}
        fallback={
          <button
            onClick={async () => {
              await state.player?.pause();
            }}
            type="button"
          >
            pause
          </button>
        }
      >
        <button
          onClick={async () => {
            await state.player?.resume();
          }}
          type="button"
        >
          play
        </button>
      </Show>
      <button
        onClick={async () => {
          await state.player?.nextTrack();
        }}
        type="button"
      >
        next
      </button>
    </div>
  );
};

export default Controller;
