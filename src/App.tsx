import { Box } from "@mui/joy";
import A from "./blogs/a.mdx";
import { CenteredContainer } from "./components/CenteredContainer";
import { MDXProvider } from "@mdx-js/react";
import { components } from "./mdxOverrides";
import DrawerAppBar from "./components/AppBar";

function App() {
  return (
    <MDXProvider components={components}>
      <CenteredContainer
        maxWidth={false}
        sx={{
          flexDirection: "row",
          height: "100%",
        }}
      >
        <Box
          maxWidth="ss"
          width="100%"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            height: "100%",
          }}
        >
          <DrawerAppBar />
        </Box>
        <Box
          maxWidth="md"
          width="100%"
          sx={{
            height: "100%",
          }}
        >
          <A />
        </Box>
        <Box maxWidth="ss" width="100%">
          Ethever.eth's blogs
        </Box>
      </CenteredContainer>
    </MDXProvider>
  );
}

export default App;
