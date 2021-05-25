import React from "react";
import { useHistory } from "react-router-dom";

import { ArrowRightSVG, HomeSVG, SearchSVG, ShareSVG } from "@assets";
import IconButton from "@components/IconButton";
import { Wrapper, Container, LeftSide, Center, RightSide } from "./Commons";

const StoreHeader = () => {
  const history = useHistory();
  const { location } = history;
  const { pathname } = location;
  const name = pathname.split("/")[2];
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
