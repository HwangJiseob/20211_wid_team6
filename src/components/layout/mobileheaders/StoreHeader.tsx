import React from "react";
import { useLocation } from "react-router-dom";

import { ArrowRightSVG, HomeSVG, SearchSVG, ShareSVG } from "@assets";
import { Wrapper, Container, LeftSide, Center, RightSide } from "./Commons";

const StoreHeader = () => {
  const location = useLocation();
  const { pathname } = location;
  const name = pathname.split("/")[2];
  return (
    <Wrapper>
      <Container>
        <LeftSide>
          <ArrowRightSVG width="20px" height="20px" />
          <HomeSVG width="20px" height="20px" />
        </LeftSide>
        <Center>{name}</Center>
        <RightSide>
          <SearchSVG width="20px" height="20px" />
          <ShareSVG width="20px" height="20px" />
        </RightSide>
      </Container>
    </Wrapper>
  );
};

export default StoreHeader;
