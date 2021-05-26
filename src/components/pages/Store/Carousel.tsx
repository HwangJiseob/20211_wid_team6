import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { layout } from "@libs/config";

const { mobileBreakpoint } = layout;

const Carousel = () => {
  const images = ["1", "2", "3"];

  return (
    <Wrapper>
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
  ${mobileBreakpoint()} {
    height: 240px;
  }
`;

const Buttons = styled.ul`
  all: unset;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 0;
  transform: translate(0, -100%);
  width: 240px;
  ${mobileBreakpoint()} {
    position: absolute;
    top: 200px;
    left: 50%;
    margin: 0;
    transform: translate(-50%, -50%);
    width: 50%;
  }
`;

export default Carousel;
