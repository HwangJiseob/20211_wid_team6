import styled from "@emotion/styled";
import { layout } from "@libs/config";

const { mobileBreakpoint } = layout;

const Wrapper = styled.div`
  display: none;
  ${mobileBreakpoint()} {
    display: block;
    height: 100%;
  }
`;

export default Wrapper;
