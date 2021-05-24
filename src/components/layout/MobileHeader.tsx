import React from "react";
import { useLocation } from "react-router-dom";

import {
  HomeMobileHeader,
  SearchMobileHeader,
} from "@components/layout/mobileheaders";

const MobileHeader = () => {
  const location = useLocation();
  const { pathname } = location;
  const standard = pathname.split("/")[1];
  switch (standard) {
    case "":
      return <HomeMobileHeader />;
    case "search":
      return <SearchMobileHeader />;
    default:
      return <>test</>;
  }
};

export default MobileHeader;
