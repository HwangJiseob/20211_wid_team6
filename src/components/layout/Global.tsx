import React from "react";
import { Global, css, useTheme } from "@emotion/react";

import { preventTransition } from "@libs/hooks";

export default () => {
  const { theme }: any = useTheme();
  const [transition, setTransition] = React.useState("");

  preventTransition(setTransition);

  const global = css`
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background: ${theme === "light" ? "#fff" : "#181818"} !important;
      color: ${theme === "light" ? "initial" : "#fff"};
      ${transition}
      transition-property: background-color, color;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }
  `;
  return <Global styles={global} />;
};
