import React from "react";

import { switchScrollAvailable } from "./functions";
import { KakaoMap } from "./KakaoMap";

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

interface initKakoMapArgs {
  id: string;
  options: any;
  location: any;
}

export const initKakaoMap = ({ id, options }: initKakoMapArgs) => {
  React.useEffect(() => {
    const kakaoMap = new KakaoMap({ id, options });
    kakaoMap.searchAddress("신촌");
  }, []);
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

const hooks = {
  preventTransition,
  switchTheme,
  initKakaoMap,
  showPopupCallback,
  AppContext,
};

export default hooks;
