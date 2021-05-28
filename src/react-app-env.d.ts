/// <reference types="react-scripts" />
/// <reference types="@emotion/react" />
/// <reference types="@emotion/react/types/css-prop" />
/// <reference types="daum.maps.d.ts"/>

declare interface ReactProps {
  children?: React.ReactNode;
}

declare interface AppContextData {
  location: KakaoLocation;
  setLocation: React.Dispatch<React.SetStateAction<KakaoLocation>>;
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

declare interface KakaoLocation {
  name: string;
  path: string;
  latlng: [number, number];
}

declare interface Store {
  name: string;
  id: string;
  path: string;
  address: string;
  hour: [string, string];
  sector: "bakery" | "florist";
  location: KakaoLocation;
  coords?: [number, number];
}

declare interface StoreProps {
  children?: ReactProps;
  store: Store;
}

declare interface Coords {
  lat: number;
  lng: number;
}

declare class KakaoMap {
  map: any;
  geocoder: any;
  markers: Array<any>;
  searchAddress: (address: string) => void;
  moveLocation: (coords: Coords) => any;
  makeMarkers: (stores: Array<Stores>) => void;
  removeMarkers: () => void;
}
