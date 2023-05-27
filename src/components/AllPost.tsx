import { Box, List, ListItemButton } from "@mui/joy";
import { useAtom } from "jotai";
import { currentPageComponentAtom } from "../state";
import { posts } from "../state/posts";

export default function AllPost() {
  const [_curPage, setPage] = useAtom(currentPageComponentAtom);

  // const curIndex = posts.findIndex((post) => post === curPage);

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <List>
        {posts.map((post, index) => (
          <ListItemButton
            key={`${post.title}-${index}`}
            onClick={() => {
              setPage(post);
            }}
            sx={(_theme) => ({
              // background:
              // curIndex === index ? theme.vars.palette.neutral[800] : "unset",
            })}
          >
            {post.title}
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
