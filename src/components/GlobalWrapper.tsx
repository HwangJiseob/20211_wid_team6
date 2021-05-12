import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";

import {
  Wrapper as LayoutWrapper,
  Header,
  Main,
  Footer,
  Global,
} from "./layout";

const GlobalWrapper = ({ children }: ReactProps) => {
  const [theme, setTheme] = React.useState("light");
  const themeProps: ThemeProps = {
    theme,
    setTheme,
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeProps}>
        <LayoutWrapper>
          <Global />
          <Header />
          <Main>{children}</Main>
          <Footer />
        </LayoutWrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default GlobalWrapper;
