/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import styled from "@emotion/styled";
import { css, keyframes, useTheme } from "@emotion/react";
import { useHistory } from "react-router-dom";

import { showPopupCallback, AppContext } from "@libs/hooks";
import { KakaoMap } from "@libs/KakaoMap";
import { defaultBreakpoint } from "@libs/config";
import { SearchSVG, ArrowRightSVG, InvertedTriangle } from "@assets";
import IconButton from "@components/IconButton";
import { LocationsPopup } from "@components/popups";
import { bakeries } from "@data/stores";

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
  const [initial, setInitial] = React.useState(true);

  React.useEffect(() => {
    if (initial) {
      setTimeout(() => {
        setInitial(false);
      }, 400);
    }
  }, []);
  return <NotConstantWrapper initial={initial} />;
};

interface NotConstantWrapperProps {
  initial: boolean;
}

const NotConstantWrapper = ({ initial }: NotConstantWrapperProps) => {
  const { location }: any = React.useContext(AppContext);
  const stores = bakeries.filter(
    (bakery) => bakery.location.name === location.name,
  );
  const { theme }: any = useTheme();

  const [cards, setCards] = React.useState(stores);
  const [kakaoMap, setKakaoMap]: any = React.useState({});
  const [lat, lng] = location.latlng;
  const options = {
    center: new kakao.maps.LatLng(lat, lng),
    level: 5,
  };

  React.useEffect(() => {
    const kakaoDiv = document.getElementById(id);
    if ((kakaoDiv?.childNodes.length || 0) < 3) {
      const kakaoMapInstance = new KakaoMap({
        id,
        options,
        setCards,
      });
      setKakaoMap(kakaoMapInstance);
      setTimeout(() => {}, 500);
    }
    if (kakaoMap.map) {
      /* re-renders only for location updates */
      kakaoMap?.moveLocation({ lat, lng });
      kakaoMap?.removeMarkers();
      kakaoMap?.makeMarkers(stores);
    }
  });
  return (
    <Wrapper>
      <HeaderPart />
      {initial && <Curtain theme={theme} />}
      <MapRenderer id={id} />
      <Cards>
        {cards.length === 1 &&
          cards.map((card: Store) => {
            return (
              <Card key={card.id}>
                <div>{card.name}</div>
                <div>후기 개수</div>
                <div>평점</div>
                <div>주력 테마</div>
              </Card>
            );
          })}
      </Cards>
    </Wrapper>
  );
};

interface StyledProps {
  children?: any;
  theme: string;
}

const Cards = styled.div`
  ${defaultBreakpoint} {
    display: block;
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 30vh;
    padding: 10px 30px;
    z-index: 300;
    box-sizing: border-box;
  }
`;

const Card = styled.div`
  display: grid;
  place-items: center;
  background: #faf8d0;
  height: 100%;
`;

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
  const { theme }: any = useTheme();

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
      <LocationSearch theme={theme}>
        <IconButton onClick={showPopup}>
          <LeftSide>
            {location.name}
            <InvertedTriangle />
          </LeftSide>
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

const LocationSearch = styled.div<StyledProps>`
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
    background: ${(props: StyledProps) =>
      props.theme === "light" ? "#E3F2FF" : "#181818"};
    color: ${(props: StyledProps) =>
      props.theme === "light" ? "#000" : "#fff"};
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
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`;

const RightSide = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 10px;
`;

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

const removeAnimation = keyframes`
  from {
  }
  to {
    opacity: 0;
  }
`;

const Curtain = styled(MapRenderer)<StyledProps>`
  animation: ${removeAnimation};
  animation-duration: 0.5s;
  animation-delay: 0.2s;
  width: 100%;
  position: fixed;
  background: ${(props: StyledProps) =>
    props.theme === "light" ? "#E3F2FF" : "#181818"};
  z-index: 400;
`;

const HighZIndex = styled.div`
  z-index: 100;
  /* width: 100%; */
  position: fixed;
`;

export default Map;
