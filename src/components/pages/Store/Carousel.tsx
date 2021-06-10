/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { defaultBreakpoint } from "@libs/config";
import "swiper/swiper-bundle.min.css";
import "./carousel.css";

const { PUBLIC_URL } = process.env;

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

interface CarouselProps {
  children?: any;
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [popup, setPopup] = React.useState(-1);

  return (
    <Wrapper>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {images.map((imgSrc, index) => (
          <SwiperSlide key={imgSrc} onClick={() => setPopup(index)}>
            <img
              src={`${PUBLIC_URL}/images/${imgSrc}`}
              alt={`슬라이드 이미지1${index}`}
              css={css`
                width: 100%;
                max-height: 1200px;
                object-fit: contain;
              `}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {popup > -1 && (
        <ImagePopup onClick={() => setPopup(-1)}>
          <Swiper
            initialSlide={popup}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {images.map((imgSrc, index) => (
              <SwiperSlide key={imgSrc} onClick={() => setPopup(-1)}>
                <img
                  src={`${PUBLIC_URL}/images/${imgSrc}`}
                  alt={`슬라이드 이미지${index}`}
                  css={css`
                    width: 100%;
                    max-height: 1200px;
                    object-fit: contain;
                  `}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </ImagePopup>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  appearance: slider-horizontal;
  background: #faf8d0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 33vh;
  ${defaultBreakpoint} {
    height: 50vh;
  }
`;

const ImagePopup = styled.div`
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

export default Carousel;
