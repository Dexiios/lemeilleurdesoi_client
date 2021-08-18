import styled from "styled-components";

export const ServicesContainer = styled.div`
  margin-bottom: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;

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
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 64px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
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
`;

export const ServiceFrontContent = styled.div`
  z-index: 3;
  position: absolute;
  top: 250px;
  width: 100%;
  display: flex;
`;

export const ServiceFrontContentText = styled.p`
  color: #fff;
  font-size: 34px;
  text-align: center;
  width: 100%;
`;
