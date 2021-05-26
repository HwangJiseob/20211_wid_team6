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
  margin: 20px 0 0 0;
  ${mobileBreakpoint()} {
    margin: 0;
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
  display: flex;
  flex-direction: column;
  width: 90%;
  /* height: 100%; */
  /* height: 300px; */
  border-radius: 10px;
  background: #707070;
  ${mobileBreakpoint()} {
    display: grid;
    grid-template-rows: 72px auto;
    height: 90%;
  }
`;

const Items = styled.ul`
  all: unset;
  display: grid;
  padding: 0 10px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 10px;
  place-items: center;
  margin: 20px 0;
  ${mobileBreakpoint()} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin: 0;
  }
`;

const ExampleImage = styled.div`
  width: 100%;
  height: 360px;
  max-height: 240px;
  background: #e3f2ff;

  /* display: none; */
  ${mobileBreakpoint()} {
    height: 120px;
    width: 100%;
  }
`;

const Item = styled.li`
  all: unset;
  width: 80%;
  ${mobileBreakpoint()} {
    width: 100%;
  }
`;

export default SecondScreen;
