import type { BaseHttpRequest } from "../core/BaseHttpRequest";
import type { CancelablePromise } from "../core/CancelablePromise";
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtistObject } from "../models/ArtistObject";
import type { CursorPagingSimplifiedArtistObject } from "../models/CursorPagingSimplifiedArtistObject";
import type { PagingArtistDiscographyAlbumObject } from "../models/PagingArtistDiscographyAlbumObject";
import type { PagingArtistObject } from "../models/PagingArtistObject";
import type { TrackObject } from "../models/TrackObject";
export class ArtistsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get Artist
   *
   * Get Spotify catalog information for a single artist identified by their unique Spotify ID.
   *
   * @param id
   * @returns ArtistObject An artist
   * @throws ApiError
   */
  public getAnArtist(id: string): CancelablePromise<ArtistObject> {
    return this.httpRequest.request({
      method: "GET",
      url: "/artists/{id}",
      path: {
        id: id,
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
   * Get Several Artists
   *
   * Get Spotify catalog information for several artists based on their Spotify IDs.
   *
   * @param ids
   * @returns any A set of artists
   * @throws ApiError
   */
  public getMultipleArtists(ids: string): CancelablePromise<{
    artists: Array<ArtistObject>;
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/artists",
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
   * Get Artist's Top Tracks
   *
   * Get Spotify catalog information about an artist's top tracks by country.
   *
   * @param id
   * @param market
   * @returns any A set of tracks
   * @throws ApiError
   */
  public getAnArtistsTopTracks(
    id: string,
    market?: string,
  ): CancelablePromise<{
    tracks: Array<TrackObject>;
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/artists/{id}/top-tracks",
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
   * Get Artist's Related Artists
   *
   * Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's listening history.
   *
   * @param id
   * @returns any A set of artists
   * @throws ApiError
   */
  public getAnArtistsRelatedArtists(id: string): CancelablePromise<{
    artists: Array<ArtistObject>;
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/artists/{id}/related-artists",
      path: {
        id: id,
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
   * Get Followed Artists
   *
   * Get the current user's followed artists.
   *
   * @param type
   * @param after
   * @param limit
   * @returns any A paged set of artists
   * @throws ApiError
   */
  public getFollowed(
    type: "artist",
    after?: string,
    limit = 20,
  ): CancelablePromise<{
    artists: CursorPagingSimplifiedArtistObject;
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/me/following",
      query: {
        type: type,
        after: after,
        limit: limit,
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
   * Follow Artists or Users
   *
   * Add the current user as a follower of one or more artists or other Spotify users.
   *
   * @param type
   * @param ids
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public followArtistsUsers(
    type: "artist" | "user",
    ids: string,
    requestBody?: Record<string, any>,
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/me/following",
      query: {
        type: type,
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
   * Unfollow Artists or Users
   *
   * Remove the current user as a follower of one or more artists or other Spotify users.
   *
   * @param type
   * @param ids
   * @param requestBody
   * @returns any Artist or user unfollowed
   * @throws ApiError
   */
  public unfollowArtistsUsers(
    type: "artist" | "user",
    ids: string,
    requestBody?: Record<string, any>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/me/following",
      query: {
        type: type,
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
   * Check If User Follows Artists or Users
   *
   * Check to see if the current user is following one or more artists or other Spotify users.
   *
   * @param type
   * @param ids
   * @returns boolean Array of booleans
   * @throws ApiError
   */
  public checkCurrentUserFollows(
    type: "artist" | "user",
    ids: string,
  ): CancelablePromise<Array<boolean>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/me/following/contains",
      query: {
        type: type,
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
   * Get User's Top Artists
   *
   * Get the current user's top artists based on calculated affinity.
   *
   * @param timeRange
   * @param limit
   * @param offset
   * @returns PagingArtistObject Pages of artists
   * @throws ApiError
   */
  public getUsersTopArtists(
    timeRange = "medium_term",
    limit = 20,
    offset?: number,
  ): CancelablePromise<PagingArtistObject> {
    return this.httpRequest.request({
      method: "GET",
      url: "/me/top/artists",
      query: {
        time_range: timeRange,
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
