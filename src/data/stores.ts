interface Stores {
  name: string;
  uuid: string;
  path: string;
  address: string;
  hour: [string, string];
  sector: "bakery" | "florist";
}

export const cakeStores: Array<Stores> = [
  {
    name: "스노우폭스",
    uuid: "1464f404-bc94-11eb-8529-0242ac130003",
    path: "stores/스노우폭스",
    address: "서울 서대문구 연세로 19",
    hour: ["08:30", "22:00"],
    sector: "bakery",
  },
];

const stores = [...cakeStores];

export default stores;
