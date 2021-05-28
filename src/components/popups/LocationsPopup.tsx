import React from "react";
import styled from "@emotion/styled";
import { useTheme, keyframes } from "@emotion/react";
import { AppContext } from "@libs/hooks";
import { useHistory } from "react-router-dom";

import { switchScrollAvailable } from "@libs/functions";
import { sinchon, hongdae } from "@data/locations";

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

declare interface PopupProps {
  clicked: boolean;
  popup: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const LocationsPopup = (props: PopupProps) => {
  const { clicked, setClicked, popup, setPopup } = props;
  const { location, setLocation }: any = React.useContext(AppContext);
  const { theme }: any = useTheme();
  const history = useHistory();
  const { pathname } = history.location;
  const page = pathname.split("/")[1];

  const removePopup = () => {
    setClicked(false);
    switchScrollAvailable();
    setTimeout(() => {
      setPopup(false);
    }, 450);
  };

  return (
    <PopupWrapper popup={popup} page={page}>
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
            location={location.name}
            theme={theme}
            standard="신촌"
            onClick={() => setLocation(sinchon)}
          >
            신촌
          </LocationButton>
          <LocationButton
            location={location.name}
            theme={theme}
            standard="홍대"
            onClick={() => setLocation(hongdae)}
          >
            홍대
          </LocationButton>
        </PopupRow>
      </PopupContainer>
    </PopupWrapper>
  );
};

interface PopupStyleProps {
  children?: any;
  popup?: boolean;
  page?: string;
  theme?: any;
  clicked?: boolean;
}

const PopupWrapper = styled.div<PopupStyleProps>`
  display: ${(props: PopupStyleProps) => (props.popup ? "flex" : "none")};
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: calc(100vh - 120px);
  height: ${({ page }: PopupStyleProps) =>
    page === "map" ? "calc(100vh - 60px);" : "calc(100vh - 120px)"};
  left: 0;
  z-index: -20;
`;

const PopupBackground = styled.div<PopupStyleProps>`
  animation: ${(props: PopupStyleProps) =>
    props.clicked ? showupAnimation : removeAnimation};
  animation-duration: 0.5s;
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${(props: PopupStyleProps) =>
    props.theme === "light" ? "#fff" : "#181818"};
  opacity: 70%;
  z-index: -20;
`;

const PopupContainer = styled.div<PopupStyleProps>`
  animation: ${(props: PopupStyleProps) =>
    props.clicked ? moveDownAnimation : removeAnimation};
  animation-duration: 0.5s;
  position: absolute;
  box-sizing: border-box;
  padding: 10px 10px 0 10px;
  width: 100%;
  height: 50vh;
  background: ${(props: PopupStyleProps) =>
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

export default LocationsPopup;
