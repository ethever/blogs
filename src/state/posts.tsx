import loadable from "@loadable/component";
import { TocEntry } from "remark-mdx-toc";
import { LoadableLibrary } from "@loadable/component";

export type Ta = LoadableLibrary<
  typeof import("*.mdx") & {
    toc: TocEntry[];
  }
>;

export const tutorial = loadable.lib(() => import("../blogs/a.mdx")) as Ta;
export const createAnInteractiveTOC = loadable.lib(
  () =>
    import(
      "../blogs/create-an-interactive-table-of-contents-for-a-nextjs-blog-with-remark.mdx"
    )
) as Ta;
export const originProtocol = loadable.lib(
  () => import("../blogs/origin-protocol.mdx")
) as Ta;
export const aFirstCourseInLogic = loadable.lib(
  () => import("../blogs/a-first-course-in-logic.mdx")
) as Ta;

export const posts = [
  {
    page: tutorial,
    title: "tutorial",
  },
  {
    page: createAnInteractiveTOC,
    title: "create an interactive table of contents",
  },
  { page: originProtocol, title: "origin protocol" },
  { page: aFirstCourseInLogic, title: "A First Course in Logic" },
];
