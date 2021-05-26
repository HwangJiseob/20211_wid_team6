import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { HelmetProvider } from "react-helmet-async";

import { findPreferColor } from "@libs/functions";
import { AppContext } from "@libs/hooks";
import {
  Wrapper as LayoutWrapper,
  Header,
  Main,
  Footer,
  Global,
} from "./layout";

const GlobalWrapper = ({ children }: ReactProps) => {
  const isLight = findPreferColor();
  const [theme, setTheme] = React.useState(isLight ? "light" : "dark");
  const themeProps: ThemeProps = {
    theme,
    setTheme,
  };

  const [location, setLocation] = React.useState("신촌");

  const appProps: AppContextData = {
    location,
    setLocation,
  };
  return (
    <HelmetProvider>
      <BrowserRouter basename="/20211_wid_team6">
        <ThemeProvider theme={themeProps}>
          <AppContext.Provider value={appProps}>
            <LayoutWrapper>
              <Global />
              <Header />
              <Main>{children}</Main>
              <Footer />
            </LayoutWrapper>
          </AppContext.Provider>
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default GlobalWrapper;
