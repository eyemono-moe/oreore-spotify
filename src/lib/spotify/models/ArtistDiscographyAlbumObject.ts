/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SimplifiedAlbumObject } from "./SimplifiedAlbumObject";
export type ArtistDiscographyAlbumObject = SimplifiedAlbumObject & {
  /**
   * This field describes the relationship between the artist and the album.
   *
   */
  album_group: ArtistDiscographyAlbumObject.album_group;
};
export namespace ArtistDiscographyAlbumObject {
  /**
   * This field describes the relationship between the artist and the album.
   *
   */
  export enum album_group {
    ALBUM = "album",
    SINGLE = "single",
    COMPILATION = "compilation",
    APPEARS_ON = "appears_on",
  }
}
