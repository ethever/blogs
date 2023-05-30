import loadable from "@loadable/component";
import { TocEntry } from "remark-mdx-toc";
import { LoadableLibrary } from "@loadable/component";

type Q = typeof import("*.mdx") & {
  toc: TocEntry[];
};
export type Ta = LoadableLibrary<Q>;

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
export const latexMathsSymbols = loadable.lib(
  () => import("../blogs/latex-maths-symbols.mdx")
) as Ta;
export const words = loadable.lib(() => import("../blogs/words.mdx")) as Ta;
export const bitTorrent = loadable.lib(
  () => import("../blogs/bittorrent.mdx")
) as Ta;
export const booksSources = loadable.lib(
  () => import("../blogs/books-sources.mdx")
) as Ta;
export const blogs = loadable.lib(() => import("../blogs/blogs.mdx")) as Ta;
export const filecoin = loadable.lib(
  () => import("../blogs/filecoin.mdx")
) as Ta;

// eslint-disable-next-line react-refresh/only-export-components
function Load(im: Promise<Q>) {
  return loadable.lib(() => im) as Ta;
}

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
  { page: latexMathsSymbols, title: "latex maths symbols" },
  { page: words, title: "worlds" },
  { page: bitTorrent, title: "The BitTorrent Protocol" },
  { page: booksSources, title: "Books Sources" },
  { page: blogs, title: "Blogs" },
  { page: filecoin, title: "filecoin" },
  {
    page: Load(
      import("../blogs/Zero knowledge Proof.mdx") as unknown as Promise<Q>
    ),
    title: "Zero knowledge proof",
  },
];
