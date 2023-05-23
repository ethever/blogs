import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import rehypeHighlight from "rehype-highlight";
import haskell from "highlight.js/lib/languages/haskell";
import unfonts from "unplugin-fonts/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        providerImportSource: "@mdx-js/react",
        remarkPlugins: [remarkMath],
        rehypePlugins: [
          rehypeMathjax,
          () =>
            rehypeHighlight({
              languages: { haskell: haskell },
            }),
        ],
      }),
    },
    unfonts({ google: { families: ["Josefin Sans", "Nanum Gothic"] } }),
    react(),
  ],
  // build: { minify: false },
});
