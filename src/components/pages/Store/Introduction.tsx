import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { HeadphoneSVG, HeartSVG, ReviewSVG } from "@assets";
import { defaultBreakpoint } from "@libs/config";

interface IntroductionProps {
  children?: ReactProps;
  store: any;
}
const option = css`
  display: flex;
  align-items: center;
`;
const info = css`
  display: flex;
  justify-content: space-between;
`;
const more = css`
  margin: 25px 0 0 0;
  width: 90%;
  color: #838383;
  display: flex;
  /* flex-direction: row-reverse; */
`;

const Introduction = ({ store }: IntroductionProps) => {
  const [open, close] = store.hour;
  return (
    <IntroductionWrapper>
      <CardWrapper>
        <div
          css={css`
            font-size: 24px;
            font-weight: bold;
          `}
        >
          {store.name}
        </div>
        <ul
          css={css`
            all: unset;
            list-style: none;
            display: flex;
            justify-content: space-evenly;
            width: 100%;
          `}
        >
          <li css={option}>
            <HeadphoneSVG />
            전화
          </li>
          <li css={option}>
            <HeartSVG />
            찜하기
          </li>
          <li css={option}>
            <ReviewSVG />
            리뷰쓰기
          </li>
        </ul>
      </CardWrapper>
      <Others>
        <div css={info}>
          <div>주소</div>
          <div>{store.address}</div>
        </div>
        <div css={info}>
          <div>영업시간</div>
          <div>{`${open} - ${close}`}</div>
        </div>
        <div css={more}>
          <div>정보 더보기</div>
        </div>
      </Others>
    </IntroductionWrapper>
  );
};

const IntroductionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  place-items: center;
  margin: 20px 0 0 0;
  ${defaultBreakpoint} {
    grid-template-columns: initial;
    margin: 0;
  }
`;

const CardWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 90%;
  max-width: 480px;
  height: 120px;
  border-radius: 10px;
  border: 1px solid black;
  margin: 0 0 20px 0;
`;

const Others = styled.div`
  width: 90%;
`;

export default Introduction;
