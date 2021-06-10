import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { useHistory } from "react-router-dom";

import { defaultBreakpoint } from "@libs/config";
import {
  Carousel,
  Menu,
  Introduction,
  Screen,
  SecondScreen,
  ThirdScreen,
} from "@components/pages/Store";
import { CartSVG } from "@assets";
import { wishlist } from "@data/pages";

const Store = ({ store }: StoreProps) => {
  const { theme }: any = useTheme();
  const history = useHistory();
  const [selected, setSelected] = React.useState("메뉴");

  const images = [
    "3_0_대표이미지1.jpg",
    "3_0_대표이미지2.jpg",
    "3_0_대표이미지3.jpg",
  ];

  return (
    <Wrapper>
      <CartButton
        onClick={() => {
          history.push(wishlist.path);
        }}
      >
        <CartSVG width={30} height={30} />
      </CartButton>
      <FirstScreen>
        <Carousel images={images} />
        <Introduction store={store} />
        <Menu theme={theme} selected={selected} setSelected={setSelected} />
      </FirstScreen>
      <SecondScreen />
      <ThirdScreen store={store} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 20px 0 0 0;
  ${defaultBreakpoint} {
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
`;

const FirstScreen = styled(Screen)`
  ${defaultBreakpoint} {
    height: 100vh;
  }
`;

const CartButton = styled.button`
  all: unset;
  display: grid;
  place-items: center;
  position: fixed;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: #b4b4b4;
  padding: 0 5px 0 0;
  box-sizing: border-box;
  bottom: 10vh;
  z-index: 20;
  right: 10vw;
`;

export default Store;
