import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";

import { defaultBreakpoint } from "@libs/config";
import { products } from "@data/products";
import Screen from "./Screen";

const { PUBLIC_URL } = process.env;

const item = css`
  all: unset;
  width: 100%;
  display: flex;
  text-decoration: none;
  color: black;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  justify-content: center;
`;

const ThirdScreen = (props: StoreProps) => {
  const { store } = props;
  const { id } = store;
  return (
    <Wrapper>
      <Container>
        <Items>
          <Title>제작 주문</Title>
          {products.map(
            (product) =>
              product.storeId === id && (
                <NavLink key={product.name} to={product.path} css={item}>
                  <Item>
                    <ExampleImage
                      src={`${PUBLIC_URL}/images/${product.imgSrc}`}
                      alt={`${product.name} 이미지`}
                    />
                    <RightSide>
                      <span>{product.name}</span>
                      <span>{product.price}원~</span>
                    </RightSide>
                  </Item>
                </NavLink>
              ),
          )}
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
  background: #f7f7f7;

  a {
    box-sizing: border-box;
    li {
      border-top: 1px solid #b4b4b4;
      width: 90%;
      margin: 5px 0 0 0;
      padding: 10px 0 10px 0;
    }
  }
  a:first-of-type {
    li {
      border: initial;
    }
  }
  a:last-of-type {
    li {
      margin-bottom: 10px;
    }
  }
`;

const Title = styled.h2`
  all: unset;
  font-weight: bold;
  color: #727c8b;
  width: 100%;
  font-size: 25px;
  text-indent: 10px;
  padding: 15px 0 15px 0;
`;

const ExampleImage = styled.img`
  display: block;
  ${defaultBreakpoint} {
    width: 35vw;
    max-height: 12vh;
    background: #fce2e2;
  }
`;

const Item = styled.li`
  all: unset;
  width: 100%;
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
