import { atom } from "jotai";
import { LoadableLibrary } from "@loadable/component";
import loadable from "@loadable/component";
import { TocEntry } from "remark-mdx-toc";

export const currentPageUrlAtom = atom("./blogs/a.mdx");
export const currentPageComponentAtom = atom((get) => {
  const url = get(currentPageUrlAtom);
  return loadable.lib(() => import(url)) as LoadableLibrary<
    typeof import("*.mdx") & {
      toc: TocEntry[];
    }
  >;
});
