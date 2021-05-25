import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { HeadphoneSVG, HeartSVG, ReviewSVG } from "@assets";

interface CardProps {
  children?: ReactProps;
  store: any;
}

const option = css`
  display: flex;
  align-items: center;
`;

const Card = ({ store }: CardProps) => {
  return (
    <CardWrapper>
      <div
        css={css`
          font-size: 24px;
          font-weight: bold;
        `}
      >
        {store.name}
      </div>
      <ul
        css={css`
          all: unset;
          list-style: none;
          display: flex;
          justify-content: space-evenly;
          width: 100%;
        `}
      >
        <li css={option}>
          <HeadphoneSVG />
          전화
        </li>
        <li css={option}>
          <HeartSVG />
          찜하기
        </li>
        <li css={option}>
          <ReviewSVG />
          리뷰쓰기
        </li>
      </ul>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 90%;
  height: 120px;
  border-radius: 10px;
  border: 1px solid black;
  margin: 0 0 20px 0;
`;

export default Card;
