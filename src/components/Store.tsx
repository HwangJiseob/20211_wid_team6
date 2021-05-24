import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { HeadphoneSVG, HeartSVG, ReviewSVG } from "@assets";
import { layout } from "@libs/config";

const { mobileBreakpoint } = layout;

const Store = ({ store }: StoreProps) => {
  const [open, close] = store.hour;
  const option = css`
    display: flex;
    align-items: center;
  `;
  const info = css`
    display: flex;
    width: 90%;
    justify-content: space-between;
  `;
  const more = css`
    margin: 25px 0 0 0;
    width: 90%;
    color: #838383;
    display: flex;
    flex-direction: row-reverse;
  `;
  return (
    <Wrapper>
      <FirstScreen>
        <Carousel />
        <Introduction>
          <Card>
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
          </Card>
          <div css={info}>
            <div>주소</div>
            <div>{store.address}</div>
          </div>
          <div css={info}>
            <div>영업시간</div>
            <div>{`${open} - ${close}`}</div>
          </div>
          <div css={more}>
            <div>정보 더보기</div>
          </div>
        </Introduction>
        <Whitespace />
      </FirstScreen>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${mobileBreakpoint()} {
    position: absolute;
    top: 0;
    z-index: -1;
    left: 0;
    width: 100%;
  }
`;

const FirstScreen = styled.div`
  ${mobileBreakpoint()} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
  }
`;

const Carousel = () => {
  const images = ["1", "2", "3"];
  return (
    <div
      css={css`
        appearance: slider-horizontal;
        background: #faf8d0;
        height: 240px;
      `}
    >
      <Buttons>
        {images.map((image) => (
          <div
            key={image}
            css={css`
              width: 16px;
              height: 16px;
              border-radius: 8px;
              background: #7e7e7e;
            `}
          />
        ))}
      </Buttons>
    </div>
  );
};

const Buttons = styled.ul`
  all: unset;
  ${mobileBreakpoint()} {
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    display: flex;
    justify-content: space-evenly;
  }
`;

const Introduction = styled.div`
  display: grid;
  place-items: center;
  /* flex-direction: column; */
`;

const Card = styled.div`
  display: grid;
  place-items: center;
  width: 90%;
  height: 120px;
  border-radius: 10px;
  border: 1px solid black;
  margin: 0 0 20px 0;
`;

const Whitespace = styled.div`
  height: 60px;
`;

export default Store;
