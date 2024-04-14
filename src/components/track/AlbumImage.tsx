import { type Component, Show } from "solid-js";
import { getMaxImage } from "../../lib/utils";

const AlbumImage: Component<{ track?: Spotify.Track }> = (props) => {
  const maxImg = () => {
    if (!props.track) return null;
    return getMaxImage(props.track.album.images);
  };

  return (
    <Show when={maxImg()}>
      {(img) => (
        <img
          src={img().url}
          alt={`${props.track?.album.name} ジャケット画像`}
          class="w-full object-contain"
        />
      )}
    </Show>
  );
};

export default AlbumImage;
