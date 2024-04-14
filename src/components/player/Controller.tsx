import { type Component, Show } from "solid-js";
import { usePlaybackSDK } from "../../context/playbackSdk";

const Controller: Component = () => {
  const [state] = usePlaybackSDK();

  return (
    <div class="flex gap-2 bg-transparent justify-center items-center">
      <button
        onClick={async () => {
          await state.player?.previousTrack();
        }}
        type="button"
        class="i-material-symbols:skip-previous-rounded w-10 h-10 c-white/80 hover:c-white active:c-white/50"
      />
      <button
        onClick={async () => {
          await state.player?.togglePlay();
        }}
        type="button"
        class="bg-white rounded-full bg-white/80 hover:bg-white active:bg-white/50 p-1"
      >
        <Show
          when={state.playbackState?.paused}
          fallback={
            <div class="i-material-symbols:pause-rounded w-10 h-10 c-black" />
          }
        >
          <div class="i-material-symbols:play-arrow-rounded w-10 h-10 c-black" />
        </Show>
      </button>
      <button
        onClick={async () => {
          await state.player?.nextTrack();
        }}
        type="button"
        class="i-material-symbols:skip-next-rounded w-10 h-10 c-white/80 hover:c-white active:c-white/50"
      />
    </div>
  );
};

export default Controller;
