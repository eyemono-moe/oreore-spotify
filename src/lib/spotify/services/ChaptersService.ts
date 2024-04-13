import type { BaseHttpRequest } from "../core/BaseHttpRequest";
import type { CancelablePromise } from "../core/CancelablePromise";
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChapterObject } from "../models/ChapterObject";
import type { PagingSimplifiedChapterObject } from "../models/PagingSimplifiedChapterObject";
export class ChaptersService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get Audiobook Chapters
   *
   * Get Spotify catalog information about an audiobook's chapters. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.
   *
   * @param id
   * @param market
   * @param limit
   * @param offset
   * @returns PagingSimplifiedChapterObject Pages of chapters
   * @throws ApiError
   */
  public getAudiobookChapters(
    id: string,
    market?: string,
    limit = 20,
    offset?: number,
  ): CancelablePromise<PagingSimplifiedChapterObject> {
    return this.httpRequest.request({
      method: "GET",
      url: "/audiobooks/{id}/chapters",
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
   * Get a Chapter
   *
   * Get Spotify catalog information for a single audiobook chapter. Chapters are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.
   *
   * @param id
   * @param market
   * @returns ChapterObject A Chapter
   * @throws ApiError
   */
  public getAChapter(
    id: string,
    market?: string,
  ): CancelablePromise<ChapterObject> {
    return this.httpRequest.request({
      method: "GET",
      url: "/chapters/{id}",
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
   * Get Several Chapters
   *
   * Get Spotify catalog information for several audiobook chapters identified by their Spotify IDs. Chapters are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.
   *
   * @param ids
   * @param market
   * @returns any A set of chapters
   * @throws ApiError
   */
  public getSeveralChapters(
    ids: string,
    market?: string,
  ): CancelablePromise<{
    chapters: Array<ChapterObject>;
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/chapters",
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
}
