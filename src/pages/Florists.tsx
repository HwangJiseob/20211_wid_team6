import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";

import { FilterSVG, HeartSVG } from "@assets";
import { florists } from "@data/stores";
import { AppContext } from "@libs/hooks";
import { defaultBreakpoint } from "@libs/config";

const { PUBLIC_URL } = process.env;

const Florists = () => {
  const [filter, setFilter] = React.useState("reviews");
  const { location }: any = React.useContext(AppContext);

  const stores = florists.filter(
    (florist) => florist.location.name === location.name,
  );

  stores.sort((A, B) => {
    let a;
    let b;
    switch (filter) {
      case "reviews":
        a = A.reviews;
        b = B.reviews;
        return a < b ? -1 : a > b ? 1 : 0;
      case "likes":
        a = A.likes;
        b = B.likes;
        return a < b ? -1 : a > b ? 1 : 0;
      case "name":
        a = A.name;
        b = B.name;
        return a < b ? -1 : a > b ? 1 : 0;
      default:
        return 1;
    }
  });

  return (
    <div>
      <Carousel
        style={{
          background: `no-repeat url(${PUBLIC_URL}/images/2_slide.png)`,
          backgroundSize: "cover",
        }}
      >
        <div>
          첫 구매시
          <div>5000원 할인</div>
        </div>
      </Carousel>
      <MidLine>
        <label htmlFor="select">
          <select
            id="select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            css={css`
              all: unset;
              font-size: 18px;
              border: none;
              :focus {
                outline: none;
              }
            `}
          >
            <option value="reviews">리뷰순</option>
            <option value="likes">인기순</option>
            <option value="name">가나다순</option>
          </select>
        </label>
        <div>
          <FilterSVG />
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
    overflow: hidden;
    /* width: 100%; */
  `;
  const icon = css`
    position: relative;
    float: right;
    right: 10px;
    top: 30px;
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
        <HeartSVG css={icon} />
        <img
          src={`${PUBLIC_URL}/images/${store.imgSrc}`}
          css={css`
            width: 100%;
          `}
          alt="test"
        />
        <div
          css={css`
            font-size: 20px;
          `}
        >
          {store.name}
        </div>
      </div>
    </Link>
  );
};

const Carousel = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  object-fit: cover;
  height: 33vh;
  background: #e6afc0;
  border-radius: 10px;
  margin: 10px 0 10px 0;
  text-align: center;
  color: #4e4b74;
  font-size: 25px;
  font-weight: bold;
  ${defaultBreakpoint} {
    height: 150px;
    margin: 0 0 10px 0;
  }
`;

const MidLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 10px 0;
  font-size: 18px;
`;

export default Florists;
