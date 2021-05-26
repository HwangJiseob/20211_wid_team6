import React from "react";

import { SearchSVG, MarkerSVG, HeartSVG, CartSVG } from "@assets";
import { Wrapper, Container, LeftSide, Center, RightSide } from "./Commons";

const ListMobileHeader = () => {
  return (
    <Wrapper>
      <Container>
        <LeftSide>
          <SearchSVG width="20px" height="20px" />
          <MarkerSVG width="20px" height="20px" />
        </LeftSide>
        <Center>신촌</Center>
        <RightSide>
          <HeartSVG width="20px" height="20px" />
          <CartSVG width="20px" height="20px" />
        </RightSide>
      </Container>
    </Wrapper>
  );
};

export default ListMobileHeader;
