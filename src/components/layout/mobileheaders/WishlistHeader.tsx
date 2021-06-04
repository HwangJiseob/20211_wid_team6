import React from "react";
import { useHistory } from "react-router-dom";

import { ArrowRightSVG, HomeSVG } from "@assets";
import IconButton from "@components/IconButton";
import { Wrapper, Container, LeftSide, Center, RightSide } from "./Commons";

const WishlistHeader = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <Container>
        <LeftSide>
          <IconButton onClick={() => history.goBack()}>
            <ArrowRightSVG width="20px" height="20px" />
          </IconButton>
          <IconButton onClick={() => history.push("/")}>
            <HomeSVG width="20px" height="20px" />
          </IconButton>
        </LeftSide>
        <Center>장바구니</Center>
        <RightSide />
      </Container>
    </Wrapper>
  );
};

export default WishlistHeader;
