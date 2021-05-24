import React from "react";
import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const Div = styled.div`
  color: white;
`;

const MyPage = () => {
  const { theme, setTheme }: any = useTheme();
  const changeTheme = React.useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
  }, [theme, setTheme]);

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
