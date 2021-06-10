import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { defaultBreakpoint } from "@libs/config";

const { PUBLIC_URL } = process.env;

const Carousel = () => {
  const images = ["1", "2", "3"];

  return (
    <Wrapper>
      <div
        css={css`
          position: absolute;
          width: 100%;
          height: 100%;
          background: white;
          opacity: 60%;
        `}
      />
      <img
        src={`${PUBLIC_URL}/images/3_0_대표이미지1.jpg`}
        alt="대표이미지1"
        css={css`
          width: 100%;
          object-fit: contain;
        `}
      />
      <Buttons>
        {images.map((image) => (
          <div
            key={image}
            css={css`
              width: 16px;
              height: 16px;
              border-radius: 8px;
              background: #7e7e7e;
              opacity: 50%;
            `}
          />
        ))}
      </Buttons>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  appearance: slider-horizontal;
  background: #faf8d0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 33vh;
  ${defaultBreakpoint} {
    height: 50vh;
  }
`;

const Buttons = styled.ul`
  all: unset;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 0;
  transform: translate(0, -100%);
  width: 240px;

  div:first-of-type {
    opacity: 90%;
  }
  ${defaultBreakpoint} {
    position: absolute;
    top: calc(50vh - 30px);
    left: 50%;
    margin: 0;
    transform: translate(-50%, -50%);
    width: 50%;
  }
`;

export default Carousel;
