import type { Component } from "solid-js";
import { getOpenSpotifyUri } from "../../lib/utils";

const TrackName: Component<{
  track: Spotify.Track;
}> = (props) => {
  return (
    <a
      href={getOpenSpotifyUri(props.track.uri)}
      target="_blank"
      rel="noreferrer noopener"
    >
      {props.track.name}
    </a>
  );
};

export default TrackName;
