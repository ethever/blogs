import { Box } from "@mui/joy";
import A from "./blogs/a.mdx";
import { CenteredContainer } from "./components/CenteredContainer";
import { MDXProvider } from "@mdx-js/react";
import { components } from "./mdxOverrides";
import DrawerAppBar from "./components/AppBar";

function App() {
  return (
    <MDXProvider components={components}>
      <DrawerAppBar />
      <CenteredContainer>
        <Box maxWidth="md" width="100%">
          <A />
        </Box>
      </CenteredContainer>
    </MDXProvider>
  );
}

export default App;
