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
    likes: 2200,
    reviews: 1500,
    imgSrc: "2_1_라벨플레르.jpg",
  },
  {
    name: "르망마지끄",
    id: "49f62dd4",
    path: "/stores/르망마지끄",
    address: "서울 서대문구 연세로 156",
    location: sinchon,
    hour: ["08:30", "22:00"],
    sector: "florist",
    likes: 2400,
    reviews: 1400,
    imgSrc: "2_2_레망마지끄.jpg",
  },
  {
    name: "라초아플라워",
    id: "615cf958",
    path: "/stores/플라워타운",
    address: "서울 서대문구 연세로 156",
    location: sinchon,
    hour: ["08:30", "22:00"],
    sector: "florist",
    likes: 2500,
    reviews: 1300,
    imgSrc: "2_3_라초아플라워.jpg",
  },
  {
    name: "르마에플라워",
    id: "a8bef084",
    path: "/stores/원모타임",
    address: "서울 서대문구 연세로 156",
    location: sinchon,
    hour: ["08:30", "22:00"],
    sector: "florist",
    likes: 2300,
    reviews: 1000,
    imgSrc: "2_4_르마에플라워.jpg",
  },
];

const stores = [...florists];

export default stores;
