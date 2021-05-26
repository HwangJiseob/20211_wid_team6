const sinchon = {
  name: "신촌",
  path: "sinchon",
};

export const bakeries: Array<Store> = [
  {
    name: "스노우폭스",
    id: "1464f404",
    path: "/stores/스노우폭스",
    address: "서울 서대문구 연세로 19",
    location: sinchon,
    hour: ["08:30", "22:00"],
    sector: "bakery",
  },
  {
    name: "르망마지끄",
    id: "49f62dd4",
    path: "/stores/르망마지끄",
    address: "서울 서대문구 연세로 156",
    location: sinchon,
    hour: ["08:30", "22:00"],
    sector: "bakery",
  },
  {
    name: "파리바게뜨",
    id: "615cf958",
    path: "/stores/파리바게뜨",
    address: "서울 서대문구 연세로 156",
    location: sinchon,
    hour: ["08:30", "22:00"],
    sector: "bakery",
  },
  {
    name: "동네빵집",
    id: "a8bef084",
    path: "/stores/동네빵집",
    address: "서울 서대문구 연세로 156",
    location: sinchon,
    hour: ["08:30", "22:00"],
    sector: "bakery",
  },
];

const stores = [...bakeries];

export default stores;
