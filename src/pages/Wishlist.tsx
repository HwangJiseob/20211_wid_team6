import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useHistory } from "react-router-dom";

import { AppContext } from "@libs/hooks";
import { formatNumber } from "@libs/functions";
import { HomeSVG } from "@assets";

interface StepProps {
  children?: any;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const step2Input = css`
  all: unset;
  font-size: 16px;
  height: 50px;
`;

const WishList = () => {
  const [step, setStep] = React.useState(0);

  switch (step) {
    case 0:
      return <Step1 step={step} setStep={setStep} />;
    case 1:
      return <Step2 step={step} setStep={setStep} />;
    case 2:
      return <Step3 />;
    default:
      return <Step1 step={step} setStep={setStep} />;
  }
};

const Step1 = (props: StepProps) => {
  const { setStep } = props;
  const { wishes }: any = React.useContext(AppContext);

  const prices = wishes.map((wish: any) => {
    const { product, options } = wish;
    return (
      product.price +
      options
        .map((option: any) => option.price * option.num)
        .reduce((acc: any, cur: any) => acc + cur)
    );
  });
  const resultPrice =
    prices.length > 0 ? prices.reduce((acc: any, cur: any) => acc + cur) : 0;

  return (
    <Wrapper>
      {wishes.length === 0 ? (
        <div>장바구니에 담은 상품이 없습니다.</div>
      ) : (
        <>
          <div>
            <div>스노우 폭스</div>
            <Products>
              {wishes.map((wish: any) => {
                const { product, options }: any = wish;
                const targets = options.filter((option: any) => option.num > 0);
                return (
                  <Product key={product.name}>
                    <div>{product.name}</div>
                    <div>기본: {product.price}</div>
                    <OptionBoard>
                      <div>세부: </div>
                      <Options>
                        {targets.map((target: any) => {
                          return (
                            <Option>
                              <div key={target.name}>
                                <span>{target.name} </span>
                                <span>({formatNumber(target.price)}원) </span>
                              </div>
                              <PlusMinus>
                                <Button>-</Button>
                                {target.num}
                                <Button>+</Button>
                              </PlusMinus>
                            </Option>
                          );
                        })}
                      </Options>
                    </OptionBoard>
                  </Product>
                );
              })}
            </Products>
            <Tab>
              <div>총 금액</div>
              <div>{formatNumber(resultPrice)}원</div>
            </Tab>
          </div>
          <PayButton
            onClick={() => {
              setStep(1);
            }}
          >
            주문하기
          </PayButton>
        </>
      )}
    </Wrapper>
  );
};

const Step2 = (props: StepProps) => {
  const { setStep } = props;
  const { wishes, setWishes, bills, setBills }: any =
    React.useContext(AppContext);

  const [requirements, setRequirements] = React.useState("");
  const [pickupTime, setPickupTime] = React.useState("");

  const prices = wishes.map((wish: any) => {
    const { product, options } = wish;
    return (
      product.price +
      options
        .map((option: any) => option.price * option.num)
        .reduce((acc: any, cur: any) => acc + cur)
    );
  });

  const contract = () => {
    setWishes([]);
    setBills([
      ...bills,
      {
        time: new Date(),
        price: prices.reduce((acc: any, cur: any) => acc + cur),
        requirements,
        pickupTime,
        products: wishes,
      },
    ]);
    setStep(2);
  };

  return (
    <Wrapper>
      <div>
        <InputContainer>
          기타 요청사항
          <input
            value={requirements}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setRequirements(e.currentTarget.value);
            }}
            css={step2Input}
            placeholder="예) 흰색 계열 포장지로 포장해주세요"
          />
        </InputContainer>
        <InputContainer>
          픽업시간
          <input
            value={pickupTime}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setPickupTime(e.currentTarget.value);
            }}
            css={step2Input}
            placeholder="예) 10/25 월요일 오후 6시"
          />
        </InputContainer>
      </div>
      <PayButton onClick={contract}>결제하기</PayButton>
    </Wrapper>
  );
};

const Step3 = () => {
  const history = useHistory();
  const { bills }: any = React.useContext(AppContext);
  console.log(bills);
  const [bill] = bills;
  const [target] = bill.products;
  const options = target.options.filter((option: any) => option.num > 0);
  return (
    <Wrapper>
      <div>
        <div
          css={css`
            font-size: 18px;
            color: #727c8b;
            font-weight: bold;
            text-align: center;
            margin: 5vh 0;
          `}
        >
          주문이 접수되었습니다
        </div>
        <div
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          <div
            css={css`
              width: 300px;
              color: #7e7e7e;
              text-align: center;
              padding-bottom: 30px;
              border-bottom: 1px solid#D5D5D5;
            `}
          >
            확정되면 문자나 카톡으로 알려드릴게요
          </div>
        </div>
      </div>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <div
          css={css`
            width: 300px;
            min-height: 30vh;
          `}
        >
          <div
            css={css`
              font-size: 20px;
              font-weight: bold;
              color: #727c8b;
            `}
          >
            라벨플레르
          </div>
          <div
            css={css`
              color: #535353;
            `}
          >
            {target.product.name}
          </div>
          <div
            css={css`
              color: #898989;
            `}
          >
            <div>기본: {formatNumber(target.product.price)}원</div>
            <OptionBoard>
              <div>선택: </div>
              <Options>
                {options.map((option: any) => {
                  return (
                    <div key={option.name}>
                      <span>{option.name} </span>
                      <span>(+{formatNumber(option.price)}원) </span>
                    </div>
                  );
                })}
              </Options>
            </OptionBoard>
            <div>기타 요청사항: {bill.requirements}</div>
            <div>픽업시간: {bill.pickupTime}</div>
          </div>
        </div>
      </div>
      <div
        css={css`
          display: grid;
          gap: 20px;
        `}
      >
        <PayButton onClick={() => history.push("/bills")}>
          주문내역 확인
        </PayButton>
        <PayButton onClick={() => history.push("/")}>
          <HomeSVG /> 더 둘러보기
        </PayButton>
      </div>
    </Wrapper>
  );
};

const InputContainer = styled.div`
  width: 100%;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #e7e7e7;
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  min-height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Products = styled.ul`
  all: unset;
  display: block;

  li {
    border-top: 1px solid #b4b4b4;
    margin: 5px 0 0 0;
    padding: 10px 0;
  }
  li:last-child {
    border-bottom: 1px solid #b4b4b4;
  }
`;

const Product = styled.li`
  all: unset;
  display: block;
`;

const OptionBoard = styled.div`
  display: grid;
  grid-template-columns: 40px auto;
`;

const Options = styled.div`
  width: 100%;
`;

const Option = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  margin: 0 0 5px 0;
`;

const PlusMinus = styled.div`
  height: 20px;
  width: 100%;
  max-width: 200px;
  border-radius: 10px;
  border: 1px solid #e7e7e7;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Button = styled.button`
  all: unset;
  color: #7e7e7e;
`;

const PayButton = styled(Button)`
  border-radius: 10px;
  font-weight: bold;
  font-size: 20px;
  width: 100%;
  min-height: 50px;
  text-align: center;
  border: 1px solid #707070;
  margin: auto 0 0 0;
`;

const Tab = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 20px;
  width: 100%;
  justify-content: space-between;
  margin: 15px 0 0 0;
`;

export default WishList;
