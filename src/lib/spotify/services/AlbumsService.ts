import type { BaseHttpRequest } from "../core/BaseHttpRequest";
import type { CancelablePromise } from "../core/CancelablePromise";
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AlbumObject } from "../models/AlbumObject";
import type { PagingArtistDiscographyAlbumObject } from "../models/PagingArtistDiscographyAlbumObject";
import type { PagingSavedAlbumObject } from "../models/PagingSavedAlbumObject";
import type { PagingSimplifiedAlbumObject } from "../models/PagingSimplifiedAlbumObject";
import type { PagingSimplifiedTrackObject } from "../models/PagingSimplifiedTrackObject";
export class AlbumsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get Album
   *
   * Get Spotify catalog information for a single album.
   *
   * @param id
   * @param market
   * @returns AlbumObject An album
   * @throws ApiError
   */
  public getAnAlbum(
    id: string,
    market?: string,
  ): CancelablePromise<AlbumObject> {
    return this.httpRequest.request({
      method: "GET",
      url: "/albums/{id}",
      path: {
        id: id,
      },
      query: {
        market: market,
      },
      errors: {
        401: `Bad or expired token. This can happen if the user revoked a token or
                the access token has expired. You should re-authenticate the user.
                `,
        403: `Bad OAuth request (wrong consumer key, bad nonce, expired
                timestamp...). Unfortunately, re-authenticating the user won't help here.
                `,
        429: `The app has exceeded its rate limits.
                `,
      },
    });
  }
  /**
   * Get Several Albums
   *
   * Get Spotify catalog information for multiple albums identified by their Spotify IDs.
   *
   * @param ids
   * @param market
   * @returns any A set of albums
   * @throws ApiError
   */
  public getMultipleAlbums(
    ids: string,
    market?: string,
  ): CancelablePromise<{
    albums: Array<AlbumObject>;
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/albums",
      query: {
        ids: ids,
        market: market,
      },
      errors: {
        401: `Bad or expired token. This can happen if the user revoked a token or
                the access token has expired. You should re-authenticate the user.
                `,
        403: `Bad OAuth request (wrong consumer key, bad nonce, expired
                timestamp...). Unfortunately, re-authenticating the user won't help here.
                `,
        429: `The app has exceeded its rate limits.
                `,
      },
    });
  }
  /**
   * Get Album Tracks
   *
   * Get Spotify catalog information about an album’s tracks.
   * Optional parameters can be used to limit the number of tracks returned.
   *
   * @param id
   * @param market
   * @param limit
   * @param offset
   * @returns PagingSimplifiedTrackObject Pages of tracks
   * @throws ApiError
   */
  public getAnAlbumsTracks(
    id: string,
    market?: string,
    limit = 20,
    offset?: number,
  ): CancelablePromise<PagingSimplifiedTrackObject> {
    return this.httpRequest.request({
      method: "GET",
      url: "/albums/{id}/tracks",
      path: {
        id: id,
      },
      query: {
        market: market,
        limit: limit,
        offset: offset,
      },
      errors: {
        401: `Bad or expired token. This can happen if the user revoked a token or
                the access token has expired. You should re-authenticate the user.
                `,
        403: `Bad OAuth request (wrong consumer key, bad nonce, expired
                timestamp...). Unfortunately, re-authenticating the user won't help here.
                `,
        429: `The app has exceeded its rate limits.
                `,
      },
    });
  }
  /**
   * Get Artist's Albums
   *
   * Get Spotify catalog information about an artist's albums.
   *
   * @param id
   * @param includeGroups
   * @param market
   * @param limit
   * @param offset
   * @returns PagingArtistDiscographyAlbumObject Pages of albums
   * @throws ApiError
   */
  public getAnArtistsAlbums(
    id: string,
    includeGroups?: string,
    market?: string,
    limit = 20,
    offset?: number,
  ): CancelablePromise<PagingArtistDiscographyAlbumObject> {
    return this.httpRequest.request({
      method: "GET",
      url: "/artists/{id}/albums",
      path: {
        id: id,
      },
      query: {
        include_groups: includeGroups,
        market: market,
        limit: limit,
        offset: offset,
      },
      errors: {
        401: `Bad or expired token. This can happen if the user revoked a token or
                the access token has expired. You should re-authenticate the user.
                `,
        403: `Bad OAuth request (wrong consumer key, bad nonce, expired
                timestamp...). Unfortunately, re-authenticating the user won't help here.
                `,
        429: `The app has exceeded its rate limits.
                `,
      },
    });
  }
  /**
   * Get User's Saved Albums
   *
   * Get a list of the albums saved in the current Spotify user's 'Your Music' library.
   *
   * @param limit
   * @param offset
   * @param market
   * @returns PagingSavedAlbumObject Pages of albums
   * @throws ApiError
   */
  public getUsersSavedAlbums(
    limit = 20,
    offset?: number,
    market?: string,
  ): CancelablePromise<PagingSavedAlbumObject> {
    return this.httpRequest.request({
      method: "GET",
      url: "/me/albums",
      query: {
        limit: limit,
        offset: offset,
        market: market,
      },
      errors: {
        401: `Bad or expired token. This can happen if the user revoked a token or
                the access token has expired. You should re-authenticate the user.
                `,
        403: `Bad OAuth request (wrong consumer key, bad nonce, expired
                timestamp...). Unfortunately, re-authenticating the user won't help here.
                `,
        429: `The app has exceeded its rate limits.
                `,
      },
    });
  }
  /**
   * Save Albums for Current User
   *
   * Save one or more albums to the current user's 'Your Music' library.
   *
   * @param ids
   * @param requestBody
   * @returns any The album is saved
   * @throws ApiError
   */
  public saveAlbumsUser(
    ids: string,
    requestBody?: Record<string, any>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/me/albums",
      query: {
        ids: ids,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        401: `Bad or expired token. This can happen if the user revoked a token or
                the access token has expired. You should re-authenticate the user.
                `,
        403: `Bad OAuth request (wrong consumer key, bad nonce, expired
                timestamp...). Unfortunately, re-authenticating the user won't help here.
                `,
        429: `The app has exceeded its rate limits.
                `,
      },
    });
  }
  /**
   * Remove Users' Saved Albums
   *
   * Remove one or more albums from the current user's 'Your Music' library.
   *
   * @param ids
   * @param requestBody
   * @returns any Album(s) have been removed from the library
   * @throws ApiError
   */
  public removeAlbumsUser(
    ids: string,
    requestBody?: Record<string, any>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/me/albums",
      query: {
        ids: ids,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        401: `Bad or expired token. This can happen if the user revoked a token or
                the access token has expired. You should re-authenticate the user.
                `,
        403: `Bad OAuth request (wrong consumer key, bad nonce, expired
                timestamp...). Unfortunately, re-authenticating the user won't help here.
                `,
        429: `The app has exceeded its rate limits.
                `,
      },
    });
  }
  /**
   * Check User's Saved Albums
   *
   * Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.
   *
   * @param ids
   * @returns boolean Array of booleans
   * @throws ApiError
   */
  public checkUsersSavedAlbums(ids: string): CancelablePromise<Array<boolean>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/me/albums/contains",
      query: {
        ids: ids,
      },
      errors: {
        401: `Bad or expired token. This can happen if the user revoked a token or
                the access token has expired. You should re-authenticate the user.
                `,
        403: `Bad OAuth request (wrong consumer key, bad nonce, expired
                timestamp...). Unfortunately, re-authenticating the user won't help here.
                `,
        429: `The app has exceeded its rate limits.
                `,
      },
    });
  }
  /**
   * Get New Releases
   *
   * Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).
   *
   * @param limit
   * @param offset
   * @returns any A paged set of albums
   * @throws ApiError
   */
  public getNewReleases(
    limit = 20,
    offset?: number,
  ): CancelablePromise<{
    albums: PagingSimplifiedAlbumObject;
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/browse/new-releases",
      query: {
        limit: limit,
        offset: offset,
      },
      errors: {
        401: `Bad or expired token. This can happen if the user revoked a token or
                the access token has expired. You should re-authenticate the user.
                `,
        403: `Bad OAuth request (wrong consumer key, bad nonce, expired
                timestamp...). Unfortunately, re-authenticating the user won't help here.
                `,
        429: `The app has exceeded its rate limits.
                `,
      },
    });
  }
}
