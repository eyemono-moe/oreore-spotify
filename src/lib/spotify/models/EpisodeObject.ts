/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EpisodeBase } from "./EpisodeBase";
import type { SimplifiedShowObject } from "./SimplifiedShowObject";
export type EpisodeObject = EpisodeBase & {
  /**
   * The show on which the episode belongs.
   *
   */
  show: SimplifiedShowObject;
};
