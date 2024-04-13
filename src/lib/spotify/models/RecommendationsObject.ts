/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RecommendationSeedObject } from "./RecommendationSeedObject";
import type { TrackObject } from "./TrackObject";
export type RecommendationsObject = {
  /**
   * An array of recommendation seed objects.
   *
   */
  seeds: Array<RecommendationSeedObject>;
  /**
   * An array of track objects ordered according to the parameters supplied.
   *
   */
  tracks: Array<TrackObject>;
};
