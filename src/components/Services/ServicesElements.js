import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f9fafb;

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 480px) {
  }
`;

export const ServicesWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 60px;

  @media screen and (max-width: 1300px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 80px;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 80px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #333;
  margin-bottom: 34px;
  margin-top: 50px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-top: 100px;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  color: #333;
  margin-bottom: 50px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 34px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const ImageBgService = styled.img`
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 15px;
`;

export const ImageBgServiceBlur = styled.img`
  background-repeat: no-repeat;
  z-index: 2;
  -webkit-filter: blur(2px);
  transform: scale(1.02);
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 15px;
`;

export const ServiceFrontContent = styled.div`
  z-index: 3;
  position: absolute;
  top: 250px;
  width: 100%;
  display: flex;

  @media screen and (max-width: 480px) {
    top: 200px;
  }
`;

export const ServiceBackContent = styled.div`
  z-index: 3;
  position: absolute;
  top: 50px;
  width: 100%;
  display: flex;
`;

export const ServiceFrontContentText = styled.p`
  color: #fff;
  font-size: 34px;
  text-align: center;
  width: 100%;
  text-shadow: #000 1px 0 10px;

  @media screen and (max-width: 280px) {
    font-size: 28px;
  }
`;

export const ServiceBackContentText = styled.p`
  color: #fff;
  font-size: 18px;
  text-align: justify;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (max-width: 413px) {
    font-size: 15px;
  }
`;

export const BtnWrapService = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 85px;
  margin-bottom: 80px;
`;

export const FlippyContainer = styled.div`
  width: 400px;
  height: 600px;
  filter: drop-shadow(6px 3px 6px #666);
  max-height: 600px;

  @media screen and (max-width: 480px) {
    width: 300px;
    filter: drop-shadow(6px 3px 6px #666);
    max-height: 600px;
    margin-left: 10%;
  }
`;
