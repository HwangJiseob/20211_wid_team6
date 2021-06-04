import React from "react";
import styled from "@emotion/styled";

import { defaultBreakpoint } from "@libs/config";
import { products } from "@data/products";
import Screen from "./Screen";

const ThirdScreen = () => {
  return (
    <Wrapper>
      <Container>
        <Items>
          <Title>제작 주문</Title>
          {products.map((product) => (
            <Item key={product.name}>
              <ExampleImage />
              <RightSide>
                <span>{product.name}</span>
                <span>{product.price}원~</span>
              </RightSide>
            </Item>
          ))}
        </Items>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled(Screen)`
  ${defaultBreakpoint} {
    min-height: 100vh;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100% !important;
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
  border-radius: 10px;
  background: #d3d3d3;

  li {
    border-top: 1px solid #b4b4b4;
    width: 90%;
    margin: 5px 0 0 0;
    padding: 5px 0 0 0;
  }
  li:nth-of-type(1) {
    border-top: initial;
  }
  li:last-child {
    margin: 5px 0 10px 0;
  }
`;

const Title = styled.h2`
  all: unset;
  font-weight: bold;
  color: #7f7f7f;
  width: 100%;
  font-size: 24px;
  text-indent: 10px;
  padding: 15px 0 15px 0;
`;

const ExampleImage = styled.div`
  display: block;
  ${defaultBreakpoint} {
    width: 100px;
    min-height: 80px;
    background: #e6afc0;
  }
`;

const Item = styled.li`
  all: unset;
  display: flex;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 0 0 0 20px;
`;

export default ThirdScreen;
