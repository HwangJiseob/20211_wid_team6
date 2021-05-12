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
