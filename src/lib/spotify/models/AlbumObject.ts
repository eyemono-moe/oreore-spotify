/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AlbumBase } from "./AlbumBase";
import type { CopyrightObject } from "./CopyrightObject";
import type { ExternalIdObject } from "./ExternalIdObject";
import type { PagingSimplifiedTrackObject } from "./PagingSimplifiedTrackObject";
import type { SimplifiedArtistObject } from "./SimplifiedArtistObject";
export type AlbumObject = AlbumBase & {
  /**
   * The artists of the album. Each artist object includes a link in `href` to more detailed information about the artist.
   *
   */
  artists?: Array<SimplifiedArtistObject>;
  /**
   * The tracks of the album.
   *
   */
  tracks?: PagingSimplifiedTrackObject;
  /**
   * The copyright statements of the album.
   *
   */
  copyrights?: Array<CopyrightObject>;
  /**
   * Known external IDs for the album.
   *
   */
  external_ids?: ExternalIdObject;
  /**
   * A list of the genres the album is associated with. If not yet classified, the array is empty.
   *
   */
  genres?: Array<string>;
  /**
   * The label associated with the album.
   *
   */
  label?: string;
  /**
   * The popularity of the album. The value will be between 0 and 100, with 100 being the most popular.
   *
   */
  popularity?: number;
} & {
  /**
   * The artists of the album. Each artist object includes a link in `href` to more detailed information about the artist.
   *
   */
  artists: Array<SimplifiedArtistObject>;
  /**
   * The tracks of the album.
   *
   */
  tracks: PagingSimplifiedTrackObject;
  /**
   * The copyright statements of the album.
   *
   */
  copyrights: Array<CopyrightObject>;
  /**
   * Known external IDs for the album.
   *
   */
  external_ids: ExternalIdObject;
  /**
   * A list of the genres the album is associated with. If not yet classified, the array is empty.
   *
   */
  genres: Array<string>;
  /**
   * The label associated with the album.
   *
   */
  label: string;
  /**
   * The popularity of the album. The value will be between 0 and 100, with 100 being the most popular.
   *
   */
  popularity: number;
};
