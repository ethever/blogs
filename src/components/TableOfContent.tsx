import { useAtom } from "jotai";
import { currentPageComponentAtom } from "../state";
import { Box, List, ListItemButton } from "@mui/joy";

export default function TableOfContent() {
  const [Page] = useAtom(currentPageComponentAtom);

  return (
    <Page fallback={<div>loading table of content.</div>}>
      {({ toc }) => {
        console.error({ toc, value: toc });

        return (
          <Box
            sx={{
              top: 0,
              position: "sticky",
            }}
          >
            <List>
              {toc.map((t) => {
                return (
                  <>
                    <ListItemButton component="a" href={`#${t.attributes.id}`}>
                      {t.value}
                    </ListItemButton>
                    {t.children.length !== 0 && (
                      <List>
                        {t.children.map((c) => {
                          return (
                            <ListItemButton
                              component="a"
                              href={`#${t.attributes.id}`}
                            >
                              {c.value}
                            </ListItemButton>
                          );
                        })}
                      </List>
                    )}
                  </>
                );
              })}
            </List>
          </Box>
        );
      }}
    </Page>
  );
}
