import { Home, MyPage } from "@pages";

export const home = {
  name: "Home",
  title: "💐꽃과 케이크🎂",
  path: "/",
};

export const login = {
  name: "MyPage",
  path: "/mypage",
  title: "마이페이지",
};

export const search = {
  name: "Reviews",
  path: "/reviews",
  title: "후기",
};

export const items: Array<PageInfo> = [
  {
    ...home,
    component: Home,
  },
  {
    ...login,
    component: MyPage,
  },
];

const pages: Array<PageInfo> = [
  {
    ...home,
    component: Home,
  },
  {
    ...login,
    component: MyPage,
  },
];

export default pages;
