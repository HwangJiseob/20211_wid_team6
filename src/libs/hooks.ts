import React from "react";

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

export const AppContext = React.createContext({});

const hooks = {
  preventTransition,
  switchTheme,
  AppContext,
};

export default hooks;
