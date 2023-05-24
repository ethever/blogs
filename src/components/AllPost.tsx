import { Box, List, ListItemButton } from "@mui/joy";
import { useAtom } from "jotai";
import { currentPageComponentAtom } from "../state";
import { posts } from "../state/posts";

export default function AllPost() {
  const [_, setPage] = useAtom(currentPageComponentAtom);
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
          >
            {post.title}
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
