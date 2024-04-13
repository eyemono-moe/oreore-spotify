import type { BaseHttpRequest } from "../core/BaseHttpRequest";
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
export class GenresService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get Available Genre Seeds
   *
   * Retrieve a list of available genres seed parameter values for [recommendations](/documentation/web-api/reference/get-recommendations).
   *
   * @returns any A set of genres
   * @throws ApiError
   */
  public getRecommendationGenres(): CancelablePromise<{
    genres: Array<string>;
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/recommendations/available-genre-seeds",
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
