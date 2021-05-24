import React from "react";
import { useLocation } from "react-router-dom";

import {
  HomeMobileHeader,
  SearchMobileHeader,
} from "@components/layout/mobileheaders";

const MobileHeader = () => {
  const location = useLocation();
  const { pathname } = location;
  switch (pathname) {
    case "/":
      return <HomeMobileHeader />;
    case "/search":
      return <SearchMobileHeader />;
    default:
      return <>test</>;
  }
};

export default MobileHeader;
