import { TocEntry } from "remark-mdx-toc";
import { useAtom } from "jotai";
import { currentPageComponentAtom } from "../state";

export function ContentView() {
  const [Page, setPage] = useAtom(currentPageComponentAtom);
  return (
    <>
      <Page fallback={<div>loading page</div>}>
        {({ default: Add, title, toc }) => <Add />}
      </Page>
    </>
  );
}
