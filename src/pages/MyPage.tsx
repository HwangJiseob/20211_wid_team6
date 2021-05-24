import React from "react";
import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";

import { switchTheme } from "@libs/hooks";

const Div = styled.div`
  color: white;
`;

const MyPage = () => {
  const { theme, setTheme }: any = useTheme();

  const changeTheme = switchTheme({ theme, setTheme });

  return (
    <>
      <Div
        css={css`
          color: black;
        `}
      >
        LOGIN
      </Div>
      <button type="button" onClick={changeTheme}>
        change
      </button>
    </>
  );
};

export default MyPage;
