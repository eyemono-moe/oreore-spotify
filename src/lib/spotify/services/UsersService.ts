import type { BaseHttpRequest } from "../core/BaseHttpRequest";
import type { CancelablePromise } from "../core/CancelablePromise";
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CursorPagingSimplifiedArtistObject } from "../models/CursorPagingSimplifiedArtistObject";
import type { PagingArtistObject } from "../models/PagingArtistObject";
import type { PagingPlaylistObject } from "../models/PagingPlaylistObject";
import type { PagingTrackObject } from "../models/PagingTrackObject";
import type { PrivateUserObject } from "../models/PrivateUserObject";
import type { PublicUserObject } from "../models/PublicUserObject";
export class UsersService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get Current User's Profile
   *
   * Get detailed profile information about the current user (including the
   * current user's username).
   *
   * @returns PrivateUserObject A user
   * @throws ApiError
   */
  public getCurrentUsersProfile(): CancelablePromise<PrivateUserObject> {
    return this.httpRequest.request({
      method: "GET",
      url: "/me",
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
   * Get User's Profile
   *
   * Get public profile information about a Spotify user.
   *
   * @param userId
   * @returns PublicUserObject A user
   * @throws ApiError
   */
  public getUsersProfile(userId: string): CancelablePromise<PublicUserObject> {
    return this.httpRequest.request({
      method: "GET",
      url: "/users/{user_id}",
      path: {
        user_id: userId,
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
   * Get User's Playlists
   *
   * Get a list of the playlists owned or followed by a Spotify user.
   *
   * @param userId
   * @param limit
   * @param offset
   * @returns PagingPlaylistObject A paged set of playlists
   * @throws ApiError
   */
  public getListUsersPlaylists(
    userId: string,
    limit = 20,
    offset?: number,
  ): CancelablePromise<PagingPlaylistObject> {
    return this.httpRequest.request({
      method: "GET",
      url: "/users/{user_id}/playlists",
      path: {
        user_id: userId,
      },
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
   * Follow Playlist
   *
   * Add the current user as a follower of a playlist.
   *
   * @param playlistId
   * @param requestBody
   * @returns any Playlist followed
   * @throws ApiError
   */
  public followPlaylist(
    playlistId: string,
    requestBody?: Record<string, any>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/playlists/{playlist_id}/followers",
      path: {
        playlist_id: playlistId,
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
   * Unfollow Playlist
   *
   * Remove the current user as a follower of a playlist.
   *
   * @param playlistId
   * @returns any Playlist unfollowed
   * @throws ApiError
   */
  public unfollowPlaylist(playlistId: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/playlists/{playlist_id}/followers",
      path: {
        playlist_id: playlistId,
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
   * Check if Users Follow Playlist
   *
   * Check to see if one or more Spotify users are following a specified playlist.
   *
   * @param playlistId
   * @param ids
   * @returns boolean Array of booleans
   * @throws ApiError
   */
  public checkIfUserFollowsPlaylist(
    playlistId: string,
    ids: string,
  ): CancelablePromise<Array<boolean>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/playlists/{playlist_id}/followers/contains",
      path: {
        playlist_id: playlistId,
      },
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
  /**
   * Get User's Top Tracks
   *
   * Get the current user's top tracks based on calculated affinity.
   *
   * @param timeRange
   * @param limit
   * @param offset
   * @returns PagingTrackObject Pages of tracks
   * @throws ApiError
   */
  public getUsersTopTracks(
    timeRange = "medium_term",
    limit = 20,
    offset?: number,
  ): CancelablePromise<PagingTrackObject> {
    return this.httpRequest.request({
      method: "GET",
      url: "/me/top/tracks",
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
