export const products: Product[] = [
  {
    name: "한송이",
    path: "/products/0001",
    limit: 1,
    price: 3_000,
    storeId: "1464f404",
    imgSrc: "3_5_1.jpg",
  },
  {
    name: "S 꽃다발",
    path: "/products/0002",
    limit: 5,
    price: 6_000,
    storeId: "1464f404",
    imgSrc: "3_6_S.jpg",
  },
  {
    name: "M 꽃다발",
    path: "/products/0003",
    limit: 8,
    price: 20_000,
    storeId: "1464f404",
    imgSrc: "3_7_M.jpg",
  },
  {
    name: "L 꽃다발",
    path: "/products/004",
    limit: 15,
    price: 35_000,
    storeId: "1464f404",
    imgSrc: "3_8_L.jpg",
  },
  {
    name: "XL 꽃다발",
    path: "/products/005",
    limit: 20,
    price: 35_000,
    storeId: "1464f404",
    imgSrc: "3_9_XL.jpg",
  },
];

interface Flower {
  name: string;
  price: number;
  order: number;
  imgSrc?: string;
}

export const flowers: Flower[] = [
  {
    name: "자나 장미",
    price: 2_500,
    order: 0,
  },
  {
    name: "리시안셔스",
    price: 1_000,
    order: 1,
  },
  {
    name: "거베라",
    price: 2_500,
    order: 2,
  },
  {
    name: "빅토리아 장미",
    price: 2_000,
    order: 3,
  },
  {
    name: "옥시페탈룸",
    price: 1_500,
    order: 4,
  },
  {
    name: "글라디올러스",
    price: 3_000,
    order: 5,
  },
  {
    name: "퀘스트 장미",
    price: 3_000,
    order: 6,
  },
  {
    name: "사루비아",
    price: 2_000,
    order: 7,
  },
  {
    name: "해바라기",
    price: 2_500,
    order: 8,
  },
];

export const editions = [
  {
    name: "자몽 튤립 에디션",
    price: 39_800,
    dicsount: 10,
    imgSrc: "3_1_자몽 튤립 에디션.jpg",
  },
  {
    name: "노란 장미 에디션",
    price: 25_900,
    dicsount: 10,
    imgSrc: "3_2_노란 장미 에디션.jpg",
  },
  {
    name: "파랑새 에디션",
    price: 56_900,
    dicsount: 0,
    imgSrc: "3_3_파랑새 에디션.jpg",
  },
  {
    name: "코랄빛 에디션",
    price: 56_900,
    dicsount: 0,
    imgSrc: "3_4_코랄빛 에디션.jpg",
  },
];

export default flowers;
