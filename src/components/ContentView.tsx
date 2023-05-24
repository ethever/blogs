import { useAtom } from "jotai";
import { currentPageComponentAtom } from "../state";

export function ContentView() {
  const [Page] = useAtom(currentPageComponentAtom);
  return (
    <>
      <Page fallback={<div>loading page</div>}>
        {({ default: Add }) => <Add />}
      </Page>
    </>
  );
}
