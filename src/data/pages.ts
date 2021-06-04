import {
  Anniversaries,
  Home,
  Map,
  Florists,
  MyPage,
  Reviews,
  Search,
  Wishlist,
  Bills,
} from "@pages";

import {
  ManSVG,
  HomeSVG,
  ChatSVG,
  FilesSVG,
  SearchSVG,
  MarkerSVG,
} from "@assets";

export const anniversaries = {
  name: "기념일",
  title: "기념일",
  path: "/anniversaries",
  icon: ChatSVG,
};

export const home = {
  name: "홈",
  title: "💐꽃과 케이크🎂",
  path: "/",
  icon: HomeSVG,
};

export const mapSearch = {
  name: "지도검색",
  title: "지도검색",
  path: "/map",
  icon: MarkerSVG,
};

export const mypage = {
  name: "마이페이지",
  path: "/mypage",
  title: "마이페이지",
  icon: ManSVG,
};

export const reviews = {
  name: "후기",
  title: "후기",
  path: "/reviews",
  icon: FilesSVG,
};

export const search = {
  name: "둘러보기",
  path: "/search",
  title: "둘러보기",
  icon: SearchSVG,
};

export const wishlist = {
  name: "장바구니",
  path: "/wishlist",
  title: "장바구니",
  icon: SearchSVG,
};

export const florists = {
  name: "꽃집목록",
  path: "/florists",
  title: "꽃집 목록",
  icon: SearchSVG, // 임시
};

export const bills = {
  name: "결제내역",
  path: "/bills",
  title: "결제 내역",
  icon: SearchSVG, // 임시
};

export const items: Array<PageInfo> = [
  home,
  search,
  reviews,
  anniversaries,
  mypage,
];

const pages: Array<PageRouteInfo> = [
  {
    ...anniversaries,
    component: Anniversaries,
  },
  {
    ...home,
    component: Home,
  },
  {
    ...mypage,
    component: MyPage,
  },
  {
    ...reviews,
    component: Reviews,
  },
  {
    ...search,
    component: Search,
  },
  {
    ...wishlist,
    component: Wishlist,
  },
  {
    ...florists,
    component: Florists,
  },
  {
    ...mapSearch,
    component: Map,
  },
  {
    ...bills,
    component: Bills,
  },
];

export default pages;
