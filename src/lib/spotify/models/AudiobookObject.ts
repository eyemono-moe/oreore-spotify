/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AudiobookBase } from "./AudiobookBase";
import type { PagingSimplifiedChapterObject } from "./PagingSimplifiedChapterObject";
export type AudiobookObject = AudiobookBase & {
  /**
   * The chapters of the audiobook.
   *
   */
  chapters: PagingSimplifiedChapterObject;
};
