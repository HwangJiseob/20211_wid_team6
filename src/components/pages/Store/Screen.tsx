import styled from "@emotion/styled";

import { defaultBreakpoint } from "@libs/config";

const Screen = styled.div`
  ${defaultBreakpoint} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }
`;

export default Screen;
