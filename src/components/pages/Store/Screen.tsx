import styled from "@emotion/styled";

import { layout } from "@libs/config";

const { mobileBreakpoint } = layout;

const Screen = styled.div`
  ${mobileBreakpoint()} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }
`;

export default Screen;
