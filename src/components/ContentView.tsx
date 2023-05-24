import { useAtom } from "jotai";
import { Toolbar } from "@mui/material";
import { currentPageComponentAtom } from "../state";

export function ContentView() {
  const [{ page: Page }] = useAtom(currentPageComponentAtom);
  return (
    <>
      <Toolbar />
      <Page fallback={<div>loading page</div>}>
        {({ default: Add }) => <Add />}
      </Page>
      <Toolbar />
    </>
  );
}
