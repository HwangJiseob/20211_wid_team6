import React from "react";

import { switchScrollAvailable } from "./functions";

export const preventTransition = (dispatch: React.Dispatch<string>) => {
  React.useEffect(() => {
    dispatch("transition-duration: 0.5s;");
  }, [dispatch]);
};

export const switchTheme = ({ theme, setTheme }: ThemeProps) => {
  return React.useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
  }, [theme, setTheme]);
};

interface ShowPopupProps {
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export const showPopupCallback = ({ setClicked, setPopup }: ShowPopupProps) => {
  return React.useCallback(() => {
    setClicked(true);
    switchScrollAvailable();
    setPopup(true);
  }, [setClicked, setPopup]);
};

export const AppContext = React.createContext({});

export const OptionContext: React.Context<any[]> = React.createContext([""]);

const hooks = {
  preventTransition,
  switchTheme,
  showPopupCallback,
  AppContext,
};

export default hooks;
