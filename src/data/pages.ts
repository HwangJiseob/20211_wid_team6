import Home from "../pages/Home";
import Login from "../pages/Login";

interface PageInfo {
  path: string;
  title: string;
  component: () => JSX.Element;
}

const pages: Array<PageInfo> = [
  {
    path: "/",
    title: "꽃과 케이크",
    component: Home,
  },
  {
    path: "/login",
    title: "로그인",
    component: Login,
  },
];

export default pages;
