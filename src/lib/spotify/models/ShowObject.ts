/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagingSimplifiedEpisodeObject } from "./PagingSimplifiedEpisodeObject";
import type { ShowBase } from "./ShowBase";
export type ShowObject = ShowBase & {
  /**
   * The episodes of the show.
   *
   */
  episodes: PagingSimplifiedEpisodeObject;
};
