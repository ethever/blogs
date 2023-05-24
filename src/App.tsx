import { Box, Container } from "@mui/joy";
import { MDXProvider } from "@mdx-js/react";
import { components } from "./mdxOverrides";
import DrawerAppBar from "./components/AppBar";
import { ContentView } from "./components/ContentView";
import TableOfContent from "./components/TableOfContent";

function App() {
  return (
    <MDXProvider components={components}>
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          minHeight: "100%",
        }}
      >
        <Box
          maxWidth="300px"
          minHeight="100%"
          width="100%"
          sx={{
            display: "flex",
            flexShrink: 0,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <DrawerAppBar />
        </Box>
        <Box
          maxWidth="md"
          width="100%"
          height="100%"
          sx={(theme) => ({
            background: theme.vars.palette.background.main,
          })}
        >
          <ContentView />
        </Box>
        <Box maxWidth="300px" width="100%" minHeight="100%">
          <TableOfContent />
        </Box>
      </Container>
    </MDXProvider>
  );
}

export default App;
