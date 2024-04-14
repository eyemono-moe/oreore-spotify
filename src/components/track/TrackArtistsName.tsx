import { type Component, For } from "solid-js";
import { getOpenSpotifyUri } from "../../lib/utils";

const TrackArtistsName: Component<{
  track: Spotify.Track;
}> = (props) => {
  return (
    <For each={props.track.artists} fallback={<span>Unknown Artist</span>}>
      {(artist) => (
        <a
          href={getOpenSpotifyUri(artist.uri)}
          target="_blank"
          rel="noreferrer noopener"
        >
          {artist.name}
        </a>
      )}
    </For>
  );
};

export default TrackArtistsName;
