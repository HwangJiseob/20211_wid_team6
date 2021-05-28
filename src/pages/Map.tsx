import React from "react";
import styled from "@emotion/styled";

import { initNaverMap } from "@libs/navermaps";
import { defaultBreakpoint } from "@libs/config";

const id = "navermaps";
const settings = {};

const Map = () => {
  React.useEffect(() => {
    initNaverMap({ id, settings });
  }, []);
  return <NaverMap id={id} />;
};

const NaverMap = styled.div`
  width: 100%;
  height: calc(100vh - 275px);
  /*
    + 100px for header.pc_height
    + 150px for footer.pc_height
    +  25px for margins and paddings
    ---------------------------------------
    = 275px
  */
  ${defaultBreakpoint} {
    height: calc(100vh - 150px);
    /*
      + 60px for header.mobile_height
      + 60px for naviator in mobile version
      + 30px for margins and paddings
      ---------------------------------------
      = 150px
     */
  }
`;

export default Map;
