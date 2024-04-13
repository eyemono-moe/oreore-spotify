import type { BaseHttpRequest } from "../core/BaseHttpRequest";
import type { CancelablePromise } from "../core/CancelablePromise";
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagingSavedShowObject } from "../models/PagingSavedShowObject";
import type { PagingSimplifiedEpisodeObject } from "../models/PagingSimplifiedEpisodeObject";
import type { ShowObject } from "../models/ShowObject";
import type { SimplifiedShowObject } from "../models/SimplifiedShowObject";
export class ShowsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get Show
   *
   * Get Spotify catalog information for a single show identified by its
   * unique Spotify ID.
   *
   * @param id
   * @param market
   * @returns ShowObject A show
   * @throws ApiError
   */
  public getAShow(id: string, market?: string): CancelablePromise<ShowObject> {
    return this.httpRequest.request({
      method: "GET",
      url: "/shows/{id}",
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
   * Get Several Shows
   *
   * Get Spotify catalog information for several shows based on their Spotify IDs.
   *
   * @param ids
   * @param market
   * @returns any A set of shows
   * @throws ApiError
   */
  public getMultipleShows(
    ids: string,
    market?: string,
  ): CancelablePromise<{
    shows: Array<SimplifiedShowObject>;
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/shows",
      query: {
        market: market,
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
   * Get Show Episodes
   *
   * Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.
   *
   * @param id
   * @param market
   * @param limit
   * @param offset
   * @returns PagingSimplifiedEpisodeObject Pages of episodes
   * @throws ApiError
   */
  public getAShowsEpisodes(
    id: string,
    market?: string,
    limit = 20,
    offset?: number,
  ): CancelablePromise<PagingSimplifiedEpisodeObject> {
    return this.httpRequest.request({
      method: "GET",
      url: "/shows/{id}/episodes",
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
   * Get User's Saved Shows
   *
   * Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.
   *
   * @param limit
   * @param offset
   * @returns PagingSavedShowObject Pages of shows
   * @throws ApiError
   */
  public getUsersSavedShows(
    limit = 20,
    offset?: number,
  ): CancelablePromise<PagingSavedShowObject> {
    return this.httpRequest.request({
      method: "GET",
      url: "/me/shows",
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
  /**
   * Save Shows for Current User
   *
   * Save one or more shows to current Spotify user's library.
   *
   * @param ids
   * @param requestBody
   * @returns any Show saved
   * @throws ApiError
   */
  public saveShowsUser(
    ids: string,
    requestBody?: {
      /**
       * A JSON array of the [Spotify IDs](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids).
       * A maximum of 50 items can be specified in one request. *Note: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored.*
       */
      ids?: Array<string>;
    },
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/me/shows",
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
   * Remove User's Saved Shows
   *
   * Delete one or more shows from current Spotify user's library.
   *
   * @param ids
   * @param market
   * @param requestBody
   * @returns any Show removed
   * @throws ApiError
   */
  public removeShowsUser(
    ids: string,
    market?: string,
    requestBody?: {
      /**
       * A JSON array of the [Spotify IDs](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids).
       * A maximum of 50 items can be specified in one request. *Note: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored.*
       */
      ids?: Array<string>;
    },
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/me/shows",
      query: {
        ids: ids,
        market: market,
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
   * Check User's Saved Shows
   *
   * Check if one or more shows is already saved in the current Spotify user's library.
   *
   * @param ids
   * @returns boolean Array of booleans
   * @throws ApiError
   */
  public checkUsersSavedShows(ids: string): CancelablePromise<Array<boolean>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/me/shows/contains",
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
}
