import React from "react";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";

import { ArrowRightSVG, HomeSVG, SearchSVG, ShareSVG } from "@assets";
import IconButton from "@components/IconButton";
import { Wrapper, Container, LeftSide, Center, RightSide } from "./Commons";

const StyledWrapper = styled(Wrapper)`
  color: red;
  ::after {
    width: 100%;
    height: 100%;
    content: "";
    background: white;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 75%;
  }
`;

const StoreHeader = () => {
  const history = useHistory();
  const { location } = history;
  const { pathname } = location;
  const name = pathname.split("/")[2];
  return (
    <StyledWrapper>
      <Container>
        <LeftSide>
          <IconButton onClick={() => history.goBack()}>
            <ArrowRightSVG width="20px" height="20px" />
          </IconButton>
          <IconButton onClick={() => history.push("/")}>
            <HomeSVG width="20px" height="20px" />
          </IconButton>
        </LeftSide>
        <Center>{name}</Center>
        <RightSide>
          <SearchSVG width="20px" height="20px" />
          <ShareSVG width="20px" height="20px" />
        </RightSide>
      </Container>
    </StyledWrapper>
  );
};

export default StoreHeader;
