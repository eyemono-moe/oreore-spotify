import type { Component } from "solid-js";
import AlbumImage from "./AlbumImage";
import TrackArtistsName from "./TrackArtistsName";
import TrackName from "./TrackName";

const TrackInfo: Component<{
  track: Spotify.Track;
}> = (props) => {
  return (
    <div>
      <AlbumImage track={props.track} />
      <div>
        <TrackName track={props.track} />
        <TrackArtistsName track={props.track} />
      </div>
    </div>
  );
};

export default TrackInfo;
