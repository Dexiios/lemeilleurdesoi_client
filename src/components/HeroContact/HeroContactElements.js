import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 70vh;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, transparent 100%);
      z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImageBg = styled.img`
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  filter: blur(1px);
  -webkit-filter: blur(2px);
  -o-object-fit: cover;
  object-fit: cover;
  transform: scale(1.02); 
`;
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  position: absolute;
  top: 25vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 55px;
  text-align: center;

  @media screen and (max-width: 870px) {
    font-size: 50px;
  }

  @media screen and (max-width: 480px) {
    font-size: 42px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 34px;
  text-align: center;
  max-width: 700px;

  @media screen and (max-width: 870px) {
    font-size: 24px;
    margin: 24px 15px 0 15px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
    margin: 24px 15px 0 15px;
  }

  @media screen and (max-width: 280px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
