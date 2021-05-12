import { Global, css, useTheme } from "@emotion/react";

export default () => {
  const { theme }: any = useTheme();
  const global = css`
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background: ${theme === "light" ? "none" : "#181818"};
      color: ${theme === "light" ? "initial" : "#fff"};
      transition-duration: 0.5s;
      transition-property: background-color, color;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }
  `;
  return <Global styles={global} />;
};
