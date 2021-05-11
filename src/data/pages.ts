import Home from "../pages/Home";
import Login from "../pages/Login";

interface PageInfo {
  name: string;
  path: string;
  title: string;
  component: () => JSX.Element;
}

const pages: Array<PageInfo> = [
  {
    name: "Home",
    title: "꽃과 케이크",
    path: "/",
    component: Home,
  },
  {
    name: "Login",
    path: "/login",
    title: "로그인",
    component: Login,
  },
];

export default pages;
