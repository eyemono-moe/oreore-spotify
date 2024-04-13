/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChapterRestrictionObject } from "./ChapterRestrictionObject";
import type { ExternalUrlObject } from "./ExternalUrlObject";
import type { ImageObject } from "./ImageObject";
import type { ResumePointObject } from "./ResumePointObject";
export type ChapterBase = {
  /**
   * A URL to a 30 second preview (MP3 format) of the chapter. `null` if not available.
   *
   */
  audio_preview_url: string | null;
  /**
   * A list of the countries in which the chapter can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.
   *
   */
  available_markets?: Array<string>;
  /**
   * The number of the chapter
   *
   */
  chapter_number: number;
  /**
   * A description of the chapter. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.
   *
   */
  description: string;
  /**
   * A description of the chapter. This field may contain HTML tags.
   *
   */
  html_description: string;
  /**
   * The chapter length in milliseconds.
   *
   */
  duration_ms: number;
  /**
   * Whether or not the chapter has explicit content (true = yes it does; false = no it does not OR unknown).
   *
   */
  explicit: boolean;
  /**
   * External URLs for this chapter.
   *
   */
  external_urls: ExternalUrlObject;
  /**
   * A link to the Web API endpoint providing full details of the chapter.
   *
   */
  href: string;
  /**
   * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the chapter.
   *
   */
  id: string;
  /**
   * The cover art for the chapter in various sizes, widest first.
   *
   */
  images: Array<ImageObject>;
  /**
   * True if the chapter is playable in the given market. Otherwise false.
   *
   */
  is_playable: boolean;
  /**
   * A list of the languages used in the chapter, identified by their [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639) code.
   *
   */
  languages: Array<string>;
  /**
   * The name of the chapter.
   *
   */
  name: string;
  /**
   * The date the chapter was first released, for example `"1981-12-15"`. Depending on the precision, it might be shown as `"1981"` or `"1981-12"`.
   *
   */
  release_date: string;
  /**
   * The precision with which `release_date` value is known.
   *
   */
  release_date_precision: ChapterBase.release_date_precision;
  /**
   * The user's most recent position in the chapter. Set if the supplied access token is a user token and has the scope 'user-read-playback-position'.
   *
   */
  resume_point?: ResumePointObject;
  /**
   * The object type.
   *
   */
  type: ChapterBase.type;
  /**
   * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the chapter.
   *
   */
  uri: string;
  /**
   * Included in the response when a content restriction is applied.
   *
   */
  restrictions?: ChapterRestrictionObject;
};
export namespace ChapterBase {
  /**
   * The precision with which `release_date` value is known.
   *
   */
  export enum release_date_precision {
    YEAR = "year",
    MONTH = "month",
    DAY = "day",
  }
  /**
   * The object type.
   *
   */
  export enum type {
    EPISODE = "episode",
  }
}
