import { Home, Login } from "@pages";

export const home = {
  name: "Home",
  title: "꽃과 케이크",
  path: "/",
};

export const login = {
  name: "Login",
  path: "/login",
  title: "로그인",
};

const pages: Array<PageInfo> = [
  {
    ...home,
    component: Home,
  },
  {
    ...login,
    component: Login,
  },
];

export default pages;
