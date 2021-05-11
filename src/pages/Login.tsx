// import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Div = styled.div`
  color: white;
`;

const Login = () => {
  return (
    <Div
      css={css`
        background-color: black;
      `}
    >
      LOGIN
    </Div>
  );
};

export default Login;
