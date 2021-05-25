import React from "react";
import styled from "@emotion/styled";

import { layout } from "@libs/config";
import Screen from "./Screen";

const { mobileBreakpoint, header } = layout;

const SecondScreen = () => {
  const items = [1, 2, 3, 4];
  return (
    <Wrapper>
      <Container>
        <Contents>
          <Title> 빠른 주문</Title>
          <Items>
            {items.map((item) => (
              <Item key={item}>
                <ExampleImage />
                {item}
              </Item>
            ))}
          </Items>
        </Contents>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled(Screen)`
  ${mobileBreakpoint()} {
    ${`height: calc(100vh - ${header.mobile_height})`}
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;

const Title = styled.h2`
  all: unset;
  font-size: 24px;
  text-indent: 10px;
  padding: 15px 0 0 0;
`;

const Contents = styled.div`
  display: grid;
  grid-template-rows: 72px auto;
  width: 90%;
  height: 90%;
  border-radius: 10px;
  background: #707070;
`;

const Items = styled.ul`
  all: unset;
  display: grid;
  padding: 0 10px;
  ${mobileBreakpoint()} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
  }
`;

const ExampleImage = styled.div`
  width: 100%;
  height: 100%;
  max-height: 120px;
  background: #e3f2ff;
`;

const Item = styled.li`
  all: unset;
`;

export default SecondScreen;
