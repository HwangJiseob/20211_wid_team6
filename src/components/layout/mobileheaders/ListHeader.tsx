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
import { wishlist, mapSearch } from "@data/pages";
import { showPopupCallback, AppContext } from "@libs/hooks";
import { LocationsPopup } from "@components/popups";
import { Wrapper, Container, LeftSide, Center, RightSide } from "./Commons";

const ListMobileHeader = () => {
  const { location }: any = React.useContext(AppContext);
  const history = useHistory();

  const { theme }: any = useTheme();
  const [popup, setPopup] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);

  const showPopup = showPopupCallback({ setClicked, setPopup });

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
          {location.name}
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
      <LocationsPopup
        clicked={clicked}
        setClicked={setClicked}
        popup={popup}
        setPopup={setPopup}
      />
    </Wrapper>
  );
};

interface BackgroundProps {
  children?: any;
  popup?: boolean;
  theme?: any;
  clicked?: boolean;
}

const Background = styled.div<BackgroundProps>`
  position: absolute;
  width: 100%;
  height: 60px;
  left: 0;
  background: ${(props: BackgroundProps) =>
    props.theme === "light" ? "#fff" : "#181818"};
  z-index: -10;
`;

export default ListMobileHeader;
