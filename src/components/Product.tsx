import React from "react";
import styled from "@emotion/styled";

import { defaultBreakpoint } from "@libs/config";
import { flowers } from "@data/products";
import { formatNumber } from "@libs/functions";
import { AppContext } from "@libs/hooks";
import Carousel from "./pages/Store/Carousel";

const Product = (props: ProductProps) => {
  const { wishes, setWishes }: any = React.useContext(AppContext);
  console.log(wishes, setWishes);
  const { product } = props;
  const [options, setOptions] = React.useState(
    flowers.map((flower, index) => {
      return { ...flower, num: index === 0 ? 1 : 0 };
    }),
  );

  const numSum = options
    .map((option) => option.num)
    .reduce((acc, cur) => acc + cur);

  const priceSum: number =
    numSum === 0
      ? 0
      : product.price +
        options
          .map((option) => option.price * option.num)
          .reduce((acc, cur) => acc + cur);

  console.log(priceSum, numSum);

  const add = (option: string) => {
    if (product.limit === 1) {
      const [target] = options.filter((o) => o.name === option);
      const idx = options.indexOf(target);
      const one = flowers.map((flower, index) => {
        return { ...flower, num: index === idx ? 1 : 0 };
      });
      setOptions([...one]);
      return null;
    }
    if (numSum >= product.limit) {
      console.log("exceed");
      return null;
    }
    const [target] = options.filter((o) => o.name === option);
    const idx = options.indexOf(target);
    options[idx] = { ...target, num: target.num + 1 };
    setOptions([...options]);
    return null;
  };
  const deduct = (option: string) => {
    if (numSum <= 0) {
      return null;
    }
    const [target] = options.filter((o) => o.name === option);
    if (target.num <= 0) {
      return null;
    }
    const idx = options.indexOf(target);
    options[idx] = { ...target, num: target.num - 1 };
    setOptions([...options]);
    return null;
  };

  return (
    <Wrapper>
      <Carousel />
      <Wrapper2>
        <Container>
          <div>
            <div>꽃 선택</div>
            <div>필수 1송이, 최대 {product.limit}송이 선택</div>
          </div>
          <Options>
            {options.map((option) => (
              <Option key={option.name}>
                <ExampleImage />
                <div style={{ padding: "0 0 0 10px" }}>
                  <div>{option.name}</div>
                  <div>+{formatNumber(option.price)}원</div>
                </div>
                <PlusMinus>
                  <Button onClick={() => deduct(option.name)}>-</Button>
                  <div>{option.num} 송이</div>
                  <Button
                    onClick={() => {
                      add(option.name);
                    }}
                  >
                    +
                  </Button>
                </PlusMinus>
              </Option>
            ))}
          </Options>
          <Banner>
            <Tab>
              <div>선택 개수</div>
              <div>{numSum}개</div>
            </Tab>
            <Tab>
              <div>총 금액</div>
              <div>{formatNumber(priceSum)}원</div>
            </Tab>
            <CartButton
              onClick={() => {
                setWishes([...wishes, options]);
              }}
            >
              {priceSum === 0 ? "선택해주세요" : "장바구니에 담기"}
            </CartButton>
          </Banner>
        </Container>
      </Wrapper2>
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

const Wrapper2 = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  padding: 20px 0;
  width: 90vw;
`;

const Options = styled.ul`
  all: unset;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Option = styled.li`
  all: unset;
  display: grid;
  grid-template-columns: 60px 1fr 1fr;
  height: 60px;
`;

const ExampleImage = styled.div`
  height: 100%;
  background: #e3f2ff;
`;

const PlusMinus = styled.div`
  height: 30px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #e7e7e7;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Button = styled.button`
  all: unset;
`;

const Banner = styled.div`
  display: flex;
  border-top: 1px solid #e7e7e7;
  padding: 20px 0 0 0;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Tab = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 20px;
  width: 100%;
  justify-content: space-between;
  margin: 0 0 10px 0;
`;

const CartButton = styled(Button)`
  width: 100%;
  text-align: center;
  border: 1px solid #e7e7e7;
  border-radius: 10px;
  margin: 10px 0 0 0;
  height: 60px;
`;

export default Product;
