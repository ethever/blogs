import { useAtom } from "jotai";
import { Toolbar } from "@mui/material";
import { currentPageComponentAtom } from "../state";
import { Box, Button, Typography } from "@mui/joy";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { posts } from "../state/posts";

function PageChanger() {
  const [page, setPage] = useAtom(currentPageComponentAtom);

  const nextPage = () => {
    const curIndex = posts.findIndex((post) => post === page);
    const newIndex = curIndex + 1;
    if (newIndex >= posts.length) {
      return;
    }
    setPage(posts[newIndex]);
  };
  const lastPage = () => {
    const curIndex = posts.findIndex((post) => post === page);
    const newIndex = curIndex - 1;
    if (newIndex < 0) return;
    setPage(posts[newIndex]);
  };

  return (
    <Box
      sx={(theme) => ({
        padding: `${theme.spacing(1)} 0`,
        display: "flex",
        justifyContent: "space-between",
        position: "sticky",
        bottom: 0,
      })}
    >
      <Button onClick={lastPage} startDecorator={<KeyboardArrowLeftIcon />}>
        Last Article
      </Button>
      <Button onClick={nextPage} endDecorator={<KeyboardArrowRightIcon />}>
        Next Article
      </Button>
    </Box>
  );
}
function SuspenseContainer() {
  return (
    <Box sx={{ height: "100vh" }}>
      <Typography>Loading...</Typography>
    </Box>
  );
}
export function ContentView() {
  const [{ page: Page }] = useAtom(currentPageComponentAtom);
  return (
    <>
      <Toolbar />
      <Box
        sx={{
          overflowX: "hidden",
          minHeight: "100%",
        }}
      >
        <Page fallback={<SuspenseContainer />}>
          {({ default: Add }) => <Add />}
        </Page>
      </Box>
      <PageChanger />
      <Toolbar />
    </>
  );
}
