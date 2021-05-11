// import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Div = styled.div`
  color: white;
`;

const About = () => {
  return (
    <Div
      css={css`
        background-color: black;
      `}
    >
      about
    </Div>
  );
};

export default About;
