import React from "react";
import { useLocation } from "react-router-dom";

import {
  HomeMobileHeader,
  ListMobileHeader,
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
      return <ListMobileHeader />;
    case "stores":
      return <StoreMobileHeader />;
    default:
      return <>test</>;
  }
};

export default MobileHeader;
