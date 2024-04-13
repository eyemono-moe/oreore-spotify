/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AlbumBase } from "./AlbumBase";
import type { SimplifiedArtistObject } from "./SimplifiedArtistObject";
export type SimplifiedAlbumObject = AlbumBase & {
  /**
   * The artists of the album. Each artist object includes a link in `href` to more detailed information about the artist.
   *
   */
  artists: Array<SimplifiedArtistObject>;
};
