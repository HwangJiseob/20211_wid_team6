import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { layout } from "@libs/config";

const { mobileBreakpoint } = layout;

const Carousel = () => {
  const images = ["1", "2", "3"];

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

export default Carousel;
