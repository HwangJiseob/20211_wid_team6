import React from "react";
import styled from "@emotion/styled";

import { layout, defaultBreakpoint } from "@libs/config";
import { formatNumber } from "@libs/functions";
import { editions } from "@data/products";
import Screen from "./Screen";

const { header } = layout;
const { PUBLIC_URL } = process.env;

const SecondScreen = () => {
  return (
    <Wrapper>
      <Container>
        <Contents>
          <Title> 빠른 주문</Title>
          <Items>
            {editions.map((edition) => (
              <Item key={edition.name}>
                <ExampleImage
                  src={`${PUBLIC_URL}/images/${edition.imgSrc}`}
                  alt="test"
                />
                {edition.name}
                <div>
                  {edition.dicsount > 0 && (
                    <Discount>{edition.dicsount}%</Discount>
                  )}
                  <span>{formatNumber(edition.price)}원</span>
                </div>
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
  ${defaultBreakpoint} {
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
  font-size: 25px;
  text-indent: 10px;
  padding: 15px 0 0 0;
  font-weight: bold;
  color: #727c8b;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  border-radius: 10px;
  background: #f7f7f7;
  ${defaultBreakpoint} {
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
  ${defaultBreakpoint} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin: 0;
  }
`;

const ExampleImage = styled.img`
  width: 100%;
  height: 360px;
  max-height: 240px;
  background: #e3f2ff;

  ${defaultBreakpoint} {
    /* height: 120px; */
    height: 70%;
    width: 100%;
  }
`;

const Item = styled.li`
  all: unset;
  width: 80%;
  ${defaultBreakpoint} {
    width: 100%;
    height: 100%;
  }
`;

const Discount = styled.span`
  color: #ff4500;
  font-weight: bold;
  margin: 0 10px 0 0;
`;

export default SecondScreen;
