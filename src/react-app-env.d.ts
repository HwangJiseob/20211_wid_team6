/// <reference types="react-scripts" />
/// <reference types="@emotion/react" />
/// <reference types="@emotion/react/types/css-prop" />

declare interface ReactProps {
  children?: React.ReactNode;
}

declare interface EmotionGlobalProps {
  theme: string;
}

declare type ThemeMode = "light" | "dark";

declare interface ThemeProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

declare interface PageInfo {
  name: string; // page filename
  path: string; // relative path for react-router-dom route
  title: string; // title content for <title> tag
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

declare interface PageRouteInfo extends PageInfo {
  component: () => JSX.Element;
}

declare interface Store {
  name: string;
  id: string;
  path: string;
  address: string;
  hour: [string, string];
  sector: "bakery" | "florist";
}

declare interface StoreProps {
  children?: ReactProps;
  store: Store;
}
