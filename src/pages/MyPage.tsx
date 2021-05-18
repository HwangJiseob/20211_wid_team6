import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Div = styled.div`
  color: white;
`;

const MyPage = () => {
  return (
    <>
      <Div
        css={css`
          color: black;
        `}
      >
        LOGIN
      </Div>
    </>
  );
};

export default MyPage;
