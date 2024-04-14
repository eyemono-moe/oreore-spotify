import { type Component, Show } from "solid-js";
import { getMaxImage } from "../../lib/utils";

const AlbumImage: Component<{ track?: Spotify.Track }> = (props) => {
  return (
    <Show when={props.track}>
      {(track) => (
        <img
          src={getMaxImage(track().album.images).url}
          alt={`${track().name} ジャケット画像`}
        />
      )}
    </Show>
  );
};

export default AlbumImage;
