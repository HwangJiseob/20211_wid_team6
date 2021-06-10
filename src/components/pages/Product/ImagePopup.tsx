/* eslint-disable no-use-before-define */

import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";

import { OptionContext } from "@libs/hooks";

const { PUBLIC_URL } = process.env;

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

interface ImagePopupProps {
  children?: any;
  popup: number;
}

const ImagePopup = (props: ImagePopupProps) => {
  const options: Flower[] = React.useContext(OptionContext);
  const { popup } = props;
  console.log(popup);

  return (
    <Wrapper>
      {popup > -1 && (
        <Swiper
          id="swiper"
          onInit={(swiper) => Object.assign(swiper, { activeIndex: popup })}
          onSwiper={(swiper) => swiper.updateSlides()}
          initialSlide={popup}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {options.map((option, index) => (
            <SwiperSlide key={option.name}>
              <img
                src={`${PUBLIC_URL}/images/4_${index}.jpg`}
                alt={`꽃다발 옵션 이미지${index}`}
                css={css`
                  width: 100%;
                  max-height: 1200px;
                  object-fit: contain;
                `}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  overflow: hidden !important;
  background: black;

  .swiper-slide {
    display: grid;
    place-items: center;
  }
`;

export default ImagePopup;
