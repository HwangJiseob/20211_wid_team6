import React from "react";
import styled from "@emotion/styled";

import { AppContext } from "@libs/hooks";
import { KakaoMap, test } from "@libs/KakaoMap";
import { defaultBreakpoint } from "@libs/config";

const { kakao }: any = window;

const id = "navermaps";
const options = {
  // 지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
  level: 5, // 지도의 레벨(확대, 축소 정도)
};

const Map = () => {
  const app = React.useContext(AppContext);
  console.log(app);

  React.useEffect(() => {
    const kakaoMap = new KakaoMap({ id, options });
    kakaoMap.searchAddress("신촌");
  }, []);
  return (
    <Wrapper>
      <LocationSearch onClick={test} />
      <NaverMap id={id} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${defaultBreakpoint} {
    left: 0;
    position: absolute;
    width: 100%;
    height: calc(100vh - 65px);
    /*
      + 60px for header.mobile_height
      + 5px for margins and paddings
      ---------------------------------------
      = 150px
     */
  }
`;

const LocationSearch = styled.div`
  width: 100%;
  ${defaultBreakpoint} {
    z-index: 20;
    position: fixed;
    top: 0;
    left: 0;
    background: red;
    height: calc(65px);
    /*
    + 60px for header.mobile_height
    +  5px for margins and paddings
    ---------------------------------------
    = 65px
  */
  }
`;

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
    height: 100%;
  }
`;

export default Map;
