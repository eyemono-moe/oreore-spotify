import type { Component } from "solid-js";
import AlbumImage from "./AlbumImage";
import TrackArtistsName from "./TrackArtistsName";
import TrackName from "./TrackName";

const TrackInfo: Component<{
  track: Spotify.Track;
}> = (props) => {
  return (
    <div class="flex flex-col items-start gap-4 h-full">
      <AlbumImage track={props.track} />
      <div class="flex flex-col gap-2">
        <TrackName track={props.track} />
        <TrackArtistsName track={props.track} />
      </div>
    </div>
  );
};

export default TrackInfo;
