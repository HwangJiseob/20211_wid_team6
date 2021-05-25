import styled from "@emotion/styled";
import { layout } from "@libs/config";

const { mobileBreakpoint } = layout;

export const Wrapper = styled.div`
  display: none;
  ${mobileBreakpoint()} {
    display: block;
    height: 60px;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
  }
`;

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 50px auto 50px;
  place-items: center;
  gap: 5px;
`;

export const Center = styled.div`
  color: #515c6f;
  font-weight: bold;
`;

export const Side = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const LeftSide = styled(Side)``;
export const RightSide = styled(Side)``;

const commons = {
  Wrapper,
  Container,
  Center,
  Side,
  LeftSide,
  RightSide,
};

export default commons;
