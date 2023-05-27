import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import rehypeHighlight from "rehype-highlight";
import haskell from "highlight.js/lib/languages/haskell";
import bash from "highlight.js/lib/languages/bash";
import shell from "highlight.js/lib/languages/shell";
import unfonts from "unplugin-fonts/vite";
import remarkGfm from "remark-gfm";
// import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeMdxTitle from "rehype-mdx-title";
import { remarkMdxToc } from "remark-mdx-toc";
import remarkNormalizeHeadings from "remark-normalize-headings";
import jotaiDebugLabel from "jotai/babel/plugin-debug-label";
import jotaiReactRefresh from "jotai/babel/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        providerImportSource: "@mdx-js/react",
        rehypePlugins: [
          rehypeMdxTitle,
          rehypeSlug,
          rehypeMathjax,
          // [
          //   rehypePrettyCode,
          //   {
          //     theme: "github-dark-dimmed",
          //   },
          // ],
          [
            rehypeHighlight,
            {
              languages: { haskell, shell, bash },
            },
          ],
        ],
        remarkPlugins: [
          remarkMath,
          remarkGfm,
          remarkMdxToc,
          remarkNormalizeHeadings,
        ],
      }),
    },
    unfonts({ google: { families: ["Josefin Sans", "Nanum Gothic"] } }),
    react({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } }),
  ],
  // build: { minify: false },
});
