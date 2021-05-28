import React from "react";
import styled from "@emotion/styled";
import { useTheme, keyframes } from "@emotion/react";
import { useHistory } from "react-router-dom";

import {
  SearchSVG,
  MarkerSVG,
  HeartSVG,
  CartSVG,
  InvertedTriangle,
} from "@assets";
import IconButton from "@components/IconButton";
import { wishlist, mapSearch } from "@data/pages";
import { AppContext } from "@libs/hooks";
import { switchScrollAvailable } from "@libs/functions";
import { Wrapper, Container, LeftSide, Center, RightSide } from "./Commons";

const showupAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 70%;
  }
`;

const removeAnimation = keyframes`
  from {
  }
  to {
    opacity: 0;
  }
`;

const moveDownAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate(0, -100%)
  }
  to {
    opacity: 100;
  }
`;

const ListMobileHeader = () => {
  const { location, setLocation }: any = React.useContext(AppContext);
  const history = useHistory();
  const [popup, setPopup] = React.useState(false);
  const { theme }: any = useTheme();
  const [clicked, setClicked] = React.useState(false);

  const clickLocation = (standard: string) => {
    setLocation(standard);
  };

  const showPopup = () => {
    setClicked(true);
    switchScrollAvailable();
    setPopup(true);
  };

  const removePopup = () => {
    setClicked(false);
    switchScrollAvailable();
    setTimeout(() => {
      setPopup(false);
    }, 450);
  };

  return (
    <Wrapper>
      <Background theme={theme} />
      <Container>
        <LeftSide>
          <SearchSVG width="20px" height="20px" />
          <IconButton
            onClick={() => {
              history.push(mapSearch.path);
            }}
          >
            <MarkerSVG width="20px" height="20px" />
          </IconButton>
        </LeftSide>
        <Center onClick={showPopup}>
          {location}
          <InvertedTriangle />
        </Center>
        <RightSide>
          <IconButton>
            <HeartSVG width="20px" height="20px" />
          </IconButton>
          <IconButton
            onClick={() => {
              history.push(wishlist.path);
            }}
          >
            <CartSVG width="20px" height="20px" />
          </IconButton>
        </RightSide>
      </Container>
      <PopupWrapper popup={popup}>
        <PopupBackground
          clicked={clicked}
          theme={theme}
          popup={popup}
          onClick={removePopup}
        />
        <PopupContainer clicked={clicked} theme={theme} onClick={removePopup}>
          <PopupHeaders>
            <PopupHeader>즐겨찾기</PopupHeader>
            <PopupHeader>내 주변</PopupHeader>
          </PopupHeaders>
          <PopupRow>
            <LocationButton
              location={location}
              theme={theme}
              standard="신촌"
              onClick={() => clickLocation("신촌")}
            >
              신촌
            </LocationButton>
            <LocationButton
              location={location}
              theme={theme}
              standard="홍대"
              onClick={() => clickLocation("홍대")}
            >
              홍대
            </LocationButton>
          </PopupRow>
        </PopupContainer>
      </PopupWrapper>
    </Wrapper>
  );
};

interface PopupProps {
  children?: any;
  popup?: boolean;
  theme?: any;
  clicked?: boolean;
}

const Background = styled.div<PopupProps>`
  position: absolute;
  width: 100%;
  height: 60px;
  left: 0;
  background: ${(props: PopupProps) =>
    props.theme === "light" ? "#fff" : "#181818"};
  z-index: -10;
`;

const PopupWrapper = styled.div<PopupProps>`
  display: ${(props: PopupProps) => (props.popup ? "flex" : "none")};
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: calc(100vh - 120px);
  left: 0;
  z-index: -20;
`;

const PopupBackground = styled.div<PopupProps>`
  animation: ${(props: PopupProps) =>
    props.clicked ? showupAnimation : removeAnimation};
  animation-duration: 0.5s;
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${(props: PopupProps) =>
    props.theme === "light" ? "#fff" : "#181818"};
  opacity: 70%;
  z-index: -20;
`;

const PopupContainer = styled.div<PopupProps>`
  animation: ${(props: PopupProps) =>
    props.clicked ? moveDownAnimation : removeAnimation};
  animation-duration: 0.5s;
  position: absolute;
  box-sizing: border-box;
  padding: 10px 10px 0 10px;
  width: 100%;
  height: 50vh;
  background: ${(props: PopupProps) =>
    props.theme === "light" ? "#fffde5" : "#181818"};
  transition-duration: 0.5s;
  z-index: -10;
`;

const PopupHeaders = styled.div`
  display: grid;
  grid-template-columns: 100px 100px auto;
  width: 100%;
`;

const PopupHeader = styled.button`
  all: unset;
`;

const PopupRow = styled.div`
  margin: 20px 0 0 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  place-items: center;
  width: 100%;
  gap: 10px;
`;

interface LocationButtonProps {
  children?: any;
  location?: string;
  standard?: string;
  theme?: string;
}

const LocationButton = styled.button<LocationButtonProps>`
  all: unset;
  ${(props: LocationButtonProps) => {
    return `background: ${props.theme === "light" ? "#fff" : "none"};`;
  }}
  ${(props: LocationButtonProps) => {
    return `border: 1.5px solid ${
      props.location === props.standard ? "#E3F2FF" : "#b4b4b4"
    };
    color: ${props.location === props.standard ? "black" : "#b4b4b4"};
    background: ${props.location === props.standard && "#E3F2FF"};`;
  }}
  box-sizing: border-box;
  border-radius: 10px;
  height: 48px;
  width: 100%;
  display: grid;
  place-items: center;
`;

export default ListMobileHeader;
