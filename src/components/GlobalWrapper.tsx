import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { HelmetProvider } from "react-helmet-async";

import { findPreferColor } from "@libs/functions";
import { AppContext } from "@libs/hooks";
import { sinchon } from "@data/locations";
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

  const [location, setLocation] = React.useState(sinchon);
  const [wishes, setWishes] = React.useState([]);
  const [bills, setBills] = React.useState([]);

  const appProps: AppContextData = {
    location,
    setLocation,
    wishes,
    setWishes,
    bills,
    setBills,
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
