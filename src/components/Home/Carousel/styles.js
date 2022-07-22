import styled from "styled-components";
import { Carousel } from "antd";
import { ReactComponent as arrow } from "../../../assets/icons/arrow-icon.svg";

export const CarouselWrapper = styled("div")`
  position: relative;
  width: 100%;
`;

export const MainCarousel = styled(Carousel)`
  /* height: fit-content; */
  height: 571px;
  @media screen and (max-width: 940px) {
    background-image: linear-gradient(
      to bottom,
      rgba(black, 0.9) 0%,
      rgba(black, 0.9) 100%
    );
  }
`;

export const Img = styled.img`
  background-color: black;
  width: 100%;
  height: 571px;
  object-fit: cover;
  @media screen and (max-width: 940px) {
    background-image: linear-gradient(
      to bottom,
      rgba(black, 0.9) 0%,
      rgba(black, 0.9) 100%
    );
  }
`;

export const Icon = styled.div`
  @media screen and (max-width: 940px) {
    display: none;
  }
`;

Icon.Left = styled(arrow)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(100%, -50%);
  width: 45px;
  height: 45px;
  color: white;
  background: white;
  padding: 12px;
  opacity: 0.5;
  border-radius: 50%;
  z-index: 999;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  & path {
    fill: #0d263b;
  }
  @media screen and (max-width: 940px) {
    display: none;
  }
`;

Icon.Right = styled(arrow)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-100%, -50%) rotate(180deg);
  width: 45px;
  height: 45px;
  color: white;
  background: white;
  padding: 12px;
  opacity: 0.5;
  border-radius: 50%;
  z-index: 999;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  & path {
    fill: #0d263b;
  }
  @media screen and (max-width: 940px) {
    display: none;
  }
`;
