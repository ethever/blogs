import { useAtom } from "jotai";
import { Box, List, ListItemButton } from "@mui/joy";
import { currentPageComponentAtom } from "../state";

export default function TableOfContent() {
  const [{ page: Page }] = useAtom(currentPageComponentAtom);

  return (
    <Page fallback={<div>loading table of content.</div>}>
      {({ toc }) => {
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
                    <ListItemButton
                      key={t.value}
                      component="a"
                      href={`#${t.attributes.id}`}
                    >
                      {t.value}
                    </ListItemButton>
                    {t.children.length !== 0 && (
                      <List>
                        {t.children.map((c) => {
                          return (
                            <ListItemButton
                              key={t.value}
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
