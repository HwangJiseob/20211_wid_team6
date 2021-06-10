import { sinchon } from "./locations";

export const florists: Array<Store> = [
  {
    name: "라벨플레르",
    id: "1464f404",
    path: "/stores/라벨플레르",
    address: "서울 서대문구 연세로 9길 10",
    coords: [37.5573962853884, 126.936723922634],
    location: sinchon,
    hour: ["08:30", "22:00"],
    sector: "florist",
  },
  {
    name: "르망마지끄",
    id: "49f62dd4",
    path: "/stores/르망마지끄",
    address: "서울 서대문구 연세로 156",
    location: sinchon,
    hour: ["08:30", "22:00"],
    sector: "florist",
  },
  {
    name: "플라워타운",
    id: "615cf958",
    path: "/stores/플라워타운",
    address: "서울 서대문구 연세로 156",
    location: sinchon,
    hour: ["08:30", "22:00"],
    sector: "florist",
  },
  {
    name: "원모타임",
    id: "a8bef084",
    path: "/stores/원모타임",
    address: "서울 서대문구 연세로 156",
    location: sinchon,
    hour: ["08:30", "22:00"],
    sector: "florist",
  },
];

const stores = [...florists];

export default stores;
