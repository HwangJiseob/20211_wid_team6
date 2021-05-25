import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { HeartSVG, CartSVG, SearchSVG } from "@assets";
import IconButton from "@components/IconButton";
import { Wrapper } from "./Commons";

const HomeHeader = () => {
  const inputContainer = css`
    background: #b8c1d2;
    border-radius: 18px;
    border: none;
    width: 100%;
    height: 30px;
    max-width: 500px;
    display: grid;
    grid-template-columns: 35px auto;
    place-items: center;
  `;
  const textInput = css`
    background: none;
    width: 100%;
    border: none;
    box-sizing: border-box;
    margin: 0 10px 0 0;
    :focus {
      outline: none;
    }
  `;
  const rightSide = css`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  `;
  return (
    <Wrapper>
      <Container>
        <label htmlFor="search-header-home" css={inputContainer}>
          <SearchSVG
            css={css`
              padding: 0 0 0 5px;
            `}
          />
          <input id="search-header-home" css={textInput} />
        </label>
        <div css={rightSide}>
          <IconButton>
            <HeartSVG width="20px" height="20px" />
          </IconButton>
          <IconButton>
            <CartSVG width="20px" height="20px" />
          </IconButton>
        </div>
      </Container>
    </Wrapper>
  );
};

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: auto 50px;
  place-items: center;
  gap: 5px;
`;

export default HomeHeader;
