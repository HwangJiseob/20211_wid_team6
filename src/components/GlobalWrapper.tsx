import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";

import LayoutWrapper from "./layout/Wrapper";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import Global from "./layout/Global";

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
