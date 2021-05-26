import React from "react";
import { useLocation } from "react-router-dom";

import {
  HomeMobileHeader,
  SearchMobileHeader,
  StoreMobileHeader,
} from "@components/layout/mobileheaders";

const MobileHeader = () => {
  const location = useLocation();
  const { pathname } = location;
  const standard = pathname.split("/")[1];
  switch (standard) {
    case "":
      return <HomeMobileHeader />;
    case "florists":
      return <SearchMobileHeader />;
    case "stores":
      return <StoreMobileHeader />;
    default:
      return <>test</>;
  }
};

export default MobileHeader;
