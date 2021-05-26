import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { useHistory } from "react-router-dom";

import {
  SearchSVG,
  MarkerSVG,
  HeartSVG,
  CartSVG,
  InvertedTriangle,
} from "@assets";
import IconButton from "@components/IconButton";
import { wishlist } from "@data/pages";
import { AppContext } from "@libs/hooks";
import { Wrapper, Container, LeftSide, Center, RightSide } from "./Commons";

const ListMobileHeader = () => {
  const { location, setLocation }: any = React.useContext(AppContext);
  const history = useHistory();
  const [popup, setPopup] = React.useState(false);
  const { theme }: any = useTheme();

  const click = (standard: string) => {
    setLocation(standard);
    setPopup(false);
  };

  return (
    <Wrapper>
      <Container>
        <LeftSide>
          <SearchSVG width="20px" height="20px" />
          <MarkerSVG width="20px" height="20px" />
        </LeftSide>
        <Center onClick={() => setPopup(!popup)}>
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
      {popup && (
        <PopupWrapper>
          <PopupBackground theme={theme} />
          <PopupContainer theme={theme}>
            <PopupHeaders>
              <PopupHeader>즐겨찾기</PopupHeader>
              <PopupHeader>내 주변</PopupHeader>
            </PopupHeaders>
            <PopupRow>
              <LocationButton
                location={location}
                standard="신촌"
                onClick={() => click("신촌")}
              >
                신촌
              </LocationButton>
              <LocationButton
                location={location}
                standard="홍대"
                onClick={() => click("홍대")}
              >
                홍대
              </LocationButton>
            </PopupRow>
          </PopupContainer>
        </PopupWrapper>
      )}
    </Wrapper>
  );
};

interface PopupProps {
  children?: any;
  popup?: boolean;
  theme?: any;
}

const PopupWrapper = styled.div`
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: calc(100vh - 120px);
  left: 0;
`;

const PopupBackground = styled.div<PopupProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${(props: PopupProps) =>
    props.theme === "light" ? "#fff" : "#181818"};
  opacity: 70%;
`;

const PopupContainer = styled.div<PopupProps>`
  position: absolute;
  box-sizing: border-box;
  padding: 10px 10px 0 10px;
  width: 100%;
  height: 50vh;
  background: ${(props: PopupProps) =>
    props.theme === "light" ? "#fff" : "#181818"};
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
}

const LocationButton = styled.button<LocationButtonProps>`
  all: unset;
  ${(props: LocationButtonProps) => {
    return `border: 1px solid ${
      props.location === props.standard ? "blue" : "#b4b4b4"
    };
    color: ${props.location === props.standard ? "blue" : "#b4b4b4"};`;
  }}
  border-radius: 10px;
  height: 48px;
  width: 100%;
  display: grid;
  place-items: center;
`;

export default ListMobileHeader;
