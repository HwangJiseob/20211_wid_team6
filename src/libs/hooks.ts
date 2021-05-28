import React from "react";

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
  // const { kakao }: any = window;

  React.useEffect(() => {
    const kakaoMap = new KakaoMap({ id, options });
    kakaoMap.searchAddress("신촌");
  }, []);
};

export const AppContext = React.createContext({});

const hooks = {
  preventTransition,
  switchTheme,
  AppContext,
};

export default hooks;
