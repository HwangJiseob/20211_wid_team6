import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { FilterSVG, HeartSVG } from "@assets";

const items = ["스노우폭스", "르망마지끄", "케이크", "꽃"];

const Search = () => {
  return (
    <div>
      <Carousel>carousel</Carousel>
      <MidLine>
        <div>리뷰순</div>
        <div>
          <FilterSVG />
          필터
        </div>
      </MidLine>
      <Cards>
        {items.map((item) => (
          <Card key={item}>{item}</Card>
        ))}
      </Cards>
    </div>
  );
};

const Card = ({ children }: ReactProps) => {
  const wrapper = css`
    width: 100%;
    height: 180px;
  `;
  const imageContainer = css`
    height: 150px;
    background: #e3f2ff;
  `;
  const icon = css`
    position: relative;
    float: right;
    right: 10px;
    top: 15px;
  `;
  return (
    <div css={wrapper}>
      <div css={imageContainer}>
        <HeartSVG css={icon} />
      </div>
      <div>{children}</div>
    </div>
  );
};

const Cards = styled.ul`
  all: unset;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
`;

// const Card = styled.div`
//   background: none;
// `;

const Carousel = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 150px;
  background: #e6afc0;
  border-radius: 10px;
  margin: 0 0 10px 0;
`;

const MidLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 10px 0;
`;

export default Search;
