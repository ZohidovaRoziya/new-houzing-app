import React, { useRef } from 'react';
import { CarouselWrapper, Icon, Img, MainCarousel, Ourlay } from "./styles";
import img1 from "../../../assets/images/img1.jpg";
import img2 from "../../../assets/images/img2.jpg";

export const Carousel = () => {
  const slider = useRef();
  return (
    <CarouselWrapper>
      <Icon.Left onClick={() => slider.current?.next()} />
      <Icon.Right onClick={() => slider.current?.prev()} />
      <MainCarousel ref={slider} dots autoplay>
        <Img src={img1} alt="rasm" />
        <Img src={img2} alt="rasm" />
        <Img src={img1} alt="rasm" />
        <Img src={img2} alt="rasm" />
        <Img src={img1} alt="rasm" />
        <Img src={img1} alt="rasm" />
        <Ourlay></Ourlay>
      </MainCarousel>
    </CarouselWrapper>
  );
};

export default Carousel