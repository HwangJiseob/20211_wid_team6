import React from "react";
import styled from "@emotion/styled";

import { SearchSVG, MarkerSVG, HeartSVG, CartSVG } from "@assets";
import Wrapper from "./Wrapper";

const SearchHeader = () => {
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

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 50px auto 50px;
  place-items: center;
  gap: 5px;
`;

const Center = styled.div`
  color: #515c6f;
  font-weight: bold;
`;

const Side = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const LeftSide = styled(Side)`
  color: red;
`;
const RightSide = styled(Side)`
  color: red;
`;

export default SearchHeader;
