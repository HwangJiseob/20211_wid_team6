import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";

import { FilterSVG, HeartSVG } from "@assets";
import { bakeries } from "@data/stores";
import { AppContext } from "@libs/hooks";
import { defaultBreakpoint } from "@libs/config";

const Florists = () => {
  const { location }: any = React.useContext(AppContext);
  const stores = bakeries.filter((bakery) => bakery.location.name === location);
  return (
    <div>
      <Carousel>carousel</Carousel>
      <MidLine>
        <div>리뷰순</div>
        <div>
          <FilterSVG />
          필터
        </div>
      </MidLine>
      <Cards>
        {stores.map((store: Store) => (
          <Card key={store.id} store={store} />
        ))}
      </Cards>
    </div>
  );
};

const Cards = styled.ul`
  all: unset;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
`;

const Card = ({ store }: StoreProps) => {
  const wrapper = css`
    /* all: unset; */
    width: 100%;
    height: 180px;
  `;
  const imageContainer = css`
    height: 150px;
    background: #e3f2ff;
  `;
  const icon = css`
    position: relative;
    float: right;
    right: 10px;
    top: 15px;
  `;

  return (
    <Link
      to={store.path}
      css={css`
        color: inherit;
        text-decoration: none;
      `}
    >
      <div css={wrapper}>
        <div css={imageContainer}>
          <HeartSVG css={icon} />
        </div>
        <div>{store.name}</div>
      </div>
    </Link>
  );
};

const Carousel = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 33vh;
  background: #e6afc0;
  border-radius: 10px;
  margin: 10px 0 10px 0;
  ${defaultBreakpoint} {
    height: 150px;
    margin: 0 0 10px 0;
  }
`;

const MidLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 10px 0;
`;

export default Florists;
