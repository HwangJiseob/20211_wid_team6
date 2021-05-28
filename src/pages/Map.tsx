/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useHistory } from "react-router-dom";

import { showPopupCallback, AppContext } from "@libs/hooks";
import { KakaoMap } from "@libs/KakaoMap";
import { defaultBreakpoint } from "@libs/config";
import { SearchSVG, ArrowRightSVG } from "@assets";
import IconButton from "@components/IconButton";
import { LocationsPopup } from "@components/popups";

const arrowRightSVG = css`
  width: 25px;
  height: 25px;
`;

const searchSVG = css`
  width: 28px;
  height: 28px;
  padding-right: 10px;
  margin-right: 10px;
  border-right: 2px solid #515c6f;
`;

const { kakao }: any = window;

const id = "kakaomap";

const Map = () => {
  const [kakaoMap, setKakaoMap]: any = React.useState({});
  const { location }: any = React.useContext(AppContext);
  const [lat, lng] = location.latlng;
  const options = {
    center: new kakao.maps.LatLng(lat, lng),
    level: 5,
  };

  React.useEffect(() => {
    const kakaoDiv = document.getElementById(id);
    if ((kakaoDiv?.childNodes.length || 0) < 3) {
      const kakaoMapInstance = new KakaoMap({ id, options });
      setKakaoMap(kakaoMapInstance);
    }
    if (kakaoMap.map) {
      kakaoMap?.moveLocation({ lat, lng });
    }
  });
  return (
    <Wrapper>
      <HeaderPart />
      <MapRenderer id={id} />
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

const HeaderPart = () => {
  const [popup, setPopup] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);

  const { location }: any = React.useContext(AppContext);
  const history = useHistory();

  const showPopup = showPopupCallback({ setClicked, setPopup });

  return (
    <>
      <HighZIndex>
        <LocationsPopup
          clicked={clicked}
          setClicked={setClicked}
          popup={popup}
          setPopup={setPopup}
        />
      </HighZIndex>
      <LocationSearch>
        <IconButton onClick={showPopup}>
          <LeftSide>{location.name}</LeftSide>
        </IconButton>

        <RightSide>
          <IconButton>
            <SearchSVG css={searchSVG} />
          </IconButton>
          <IconButton onClick={history.goBack}>
            <ArrowRightSVG css={arrowRightSVG} />
          </IconButton>
        </RightSide>
      </LocationSearch>
    </>
  );
};

const LocationSearch = styled.div`
  width: 100%;
  display: none;
  ${defaultBreakpoint} {
    display: grid;
    grid-template-columns: 80px auto;
    align-items: center;
    z-index: 200;
    position: fixed;
    top: 0;
    left: 0;
    background: #e3f2ff;
    color: black;
    height: calc(65px);
    /*
    + 60px for header.mobile_height
    +  5px for margins and paddings
    ---------------------------------------
    = 65px
  */
  }
`;

const LeftSide = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`;

const RightSide = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 10px;
`;

// const LocationSearchContainer = styled.div`
//   height: 100%;
//   display: grid;
//   grid-template-columns: 50px auto 50px;
//   place-items: center;
//   gap: 5px;
//   z-index: 10;
// `;

const MapRenderer = styled.div`
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

const HighZIndex = styled.div`
  z-index: 100;
  /* width: 100%; */
  position: fixed;
`;

export default Map;
