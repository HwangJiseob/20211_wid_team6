import React from "react";
import styled from "@emotion/styled";

import { layout, defaultBreakpoint } from "@libs/config";

const { header } = layout;

interface MenuProps {
  children?: any;
  theme: any;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

interface WrapperProps {
  children?: any;
  theme: any;
}

const Menu = ({ theme, selected, setSelected }: MenuProps) => {
  return (
    <Wrapper theme={theme}>
      {selected === "메뉴" ? (
        <ButtonSelected>메뉴</ButtonSelected>
      ) : (
        <Button onClick={() => setSelected("메뉴")}>메뉴</Button>
      )}
      {selected === "리뷰" ? (
        <ButtonSelected>리뷰</ButtonSelected>
      ) : (
        <Button onClick={() => setSelected("리뷰")}>리뷰</Button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div<WrapperProps>`
  height: ${header.mobile_height};
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  z-index: 10;
  ${defaultBreakpoint} {
    box-shadow: 0px -20px 40px -25px
      ${(props: WrapperProps) => (props.theme === "light" ? "gray" : "gray")};
  }
`;

const Button = styled.button`
  all: unset;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background: #efefef;
`;
const ButtonSelected = styled(Button)`
  background: initial;
`;

export default Menu;
