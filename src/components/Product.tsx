import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useHistory } from "react-router-dom";

import { defaultBreakpoint } from "@libs/config";
import { flowers } from "@data/products";
import { formatNumber } from "@libs/functions";
import { AppContext } from "@libs/hooks";
import { FilterSVG } from "@assets";
import Carousel from "./pages/Store/Carousel";

const { PUBLIC_URL } = process.env;

const Product = (props: ProductProps) => {
  const history = useHistory();
  const { wishes, setWishes }: any = React.useContext(AppContext);
  const { product } = props;
  const [filter, setFilter] = React.useState("order");
  const [options, setOptions] = React.useState(
    flowers.map((flower) => {
      return { ...flower, num: 0 };
    }),
  );

  const numSum = options
    .map((option) => option.num)
    .reduce((acc, cur) => acc + cur);

  const priceSum: number =
    product.price +
    options
      .map((option) => option.price * option.num)
      .reduce((acc, cur) => acc + cur);

  const filterate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const standard = e.target.value;
    const target = options;
    switch (standard) {
      case "order":
        target.sort((A, B) => {
          return A.order - B.order;
        });
        setOptions(target);
        break;
      case "ascendant":
        target.sort((A, B) => {
          return A.price - B.price;
        });
        setOptions(target);
        break;
      case "descendant":
        target.sort((A, B) => {
          return B.price - A.price;
        });
        setOptions(target);
        break;
      default:
        break;
    }
    setFilter(standard);
    return true;
  };

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
      <Phrase>
        <div
          css={css`
            font-size: 27px;
            color: #262627;
          `}
        >
          {product.name}
        </div>
        <div
          css={css`
            font-size: 14px;
            color: black;
          `}
        >
          선택한 꽃 이외에 적절한 꽃들을 조합하여 다발로 제작해 드립니다.
        </div>
      </Phrase>
      <Carousel />
      <Wrapper2>
        <Container>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
            `}
          >
            <div>
              <div
                css={css`
                  font-size: 20px;
                  color: #727c8b;
                  font-weight: bold;
                `}
              >
                꽃 선택
              </div>
              <div
                css={css`
                  color: #7e7e7e;
                `}
              >
                필수 1송이, 최대 {product.limit}송이 선택
              </div>
            </div>
            <div
              css={css`
                font-size: 14px;
                color: #7e7e7e;
              `}
            >
              <label htmlFor="select2">
                <select
                  id="select2"
                  value={filter}
                  onChange={filterate}
                  css={css`
                    appearance: none;
                    font-size: 18px;
                    border: none;
                    :focus {
                      outline: none;
                    }
                  `}
                >
                  <option value="order">추천순</option>
                  <option value="descendant">고가순</option>
                  <option value="ascendant">저가순</option>
                </select>
              </label>
              <FilterSVG />
            </div>
          </div>
          <Options>
            {options.map((option) => (
              <Option key={option.name}>
                <ExampleImage
                  src={`${PUBLIC_URL}/images/4_${option.order}.jpg`}
                  alt={`${option.name} 꽃다발 이미지`}
                />
                <div style={{ padding: "0 0 0 10px" }}>
                  <div>{option.name}</div>
                  <div
                    css={css`
                      color: #898989;
                    `}
                  >
                    +{option.price}원
                  </div>
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
                if (numSum > 0) {
                  setWishes([
                    ...wishes,
                    {
                      product,
                      options,
                    },
                  ]);
                  history.push("/wishlist");
                }
                return null;
              }}
            >
              {numSum === 0 ? "선택해주세요" : "장바구니에 담기"}
            </CartButton>
          </Banner>
        </Container>
      </Wrapper2>
    </Wrapper>
  );
};

const Phrase = styled.div`
  position: absolute;
  top: 35vh;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  display: grid;
  place-items: center;
  gap: 16px;
  grid-template-rows: 1fr 1fr;
  z-index: 1;
`;

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
  grid-template-columns: 60px 2fr 1fr;
  align-items: center;
  /* height: 60px; */
`;

const ExampleImage = styled.img`
  width: 60px;
  box-sizing: border-box;
  background: #e3f2ff;
`;

const PlusMinus = styled.div`
  height: 30px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #707070;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: #535353;
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
  color: #727c8b;
`;

const CartButton = styled(Button)`
  width: 100%;
  text-align: center;
  border: 1px solid #707070;
  border-radius: 10px;
  margin: 10px 0 0 0;
  height: 60px;
  color: #727c8b;
`;

export default Product;
