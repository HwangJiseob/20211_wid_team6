import React from "react";
import styled from "@emotion/styled";

import { layout } from "@libs/config";
import Screen from "./Screen";

const { mobileBreakpoint } = layout;

const ThirdScreen = () => {
  const items = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Wrapper>
      <Container>
        <Items>
          <Title>제작 주문</Title>
          {items.map((item) => (
            <Item key={item}>{item}</Item>
          ))}
        </Items>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled(Screen)`
  ${mobileBreakpoint()} {
    min-height: 100vh;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px 0;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  /* min-height: 80vh; */
  border-radius: 10px;
  background: #707070;

  li {
    border-top: 1px solid #b4b4b4;
    width: 90%;
    margin: 5px 0 0 0;
    padding: 5px 0 0 0;
    display: grid;
    place-items: center;
  }
  li:nth-of-type(1) {
    border-top: initial;
  }
`;

const Title = styled.h2`
  all: unset;
  width: 100%;
  font-size: 24px;
  text-indent: 10px;
  padding: 15px 0 15px 0;
`;

// const Items = styled.ul`
//   all: unset;
//   display: flex;
//   flex-direction: column;
//   padding: 0 10px;
//   ${mobileBreakpoint()} {
//   }
// `;

const Item = styled.li`
  all: unset;
  height: 54px;
`;

export default ThirdScreen;
