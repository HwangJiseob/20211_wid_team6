import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

import { layout } from "@libs/config";
import {
  Carousel,
  Menu,
  Introduction,
  Screen,
  SecondScreen,
  ThirdScreen,
} from "@components/pages/Store";

const { mobileBreakpoint } = layout;

const Store = ({ store }: StoreProps) => {
  const { theme }: any = useTheme();
  const [selected, setSelected] = React.useState("메뉴");

  return (
    <Wrapper>
      <FirstScreen>
        <Carousel />
        <Introduction store={store} />
        <Menu theme={theme} selected={selected} setSelected={setSelected} />
      </FirstScreen>
      <SecondScreen />
      <ThirdScreen />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${mobileBreakpoint()} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
`;

const FirstScreen = styled(Screen)`
  ${mobileBreakpoint()} {
    height: 100vh;
  }
`;

export default Store;
