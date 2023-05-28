import ReactDOM from "react-dom/client";

import "unfonts.css";
import "./i18n.tsx";
import "./styles/code.css";
import "./styles/katex.css";
import { Root } from "./root.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Root />
);
