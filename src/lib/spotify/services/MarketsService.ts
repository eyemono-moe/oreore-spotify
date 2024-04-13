import type { BaseHttpRequest } from "../core/BaseHttpRequest";
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
export class MarketsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get Available Markets
   *
   * Get the list of markets where Spotify is available.
   *
   * @returns any A markets object with an array of country codes
   * @throws ApiError
   */
  public getAvailableMarkets(): CancelablePromise<{
    markets?: Array<string>;
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/markets",
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
