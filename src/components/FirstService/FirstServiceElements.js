import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: #fff;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    margin: 50px 0 50px;
  }

  @media screen and (max-width: 376px) {
    margin: 50px 0 50px;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  margin: 70px 0 0 0;
  grid-auto-columns: minmax(1fr, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    margin: 20px 0 20px 0;
  }
`;
export const InfoRow2 = styled.div`
  display: grid;
  margin: 50px 0 50px 0;
  grid-auto-columns: minmax(auto, 1fr);
  justify-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2 col3'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2' 'col3 col3'`};
    margin: 20px 0 20px 0;
  }
`;

export const Column1 = styled.div`
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const Column3 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col3;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  margin: 0 50px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    margin: 0;
  }

  @media screen and (max-width: 376px) {
    margin: 0;
  }
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 28px;
  line-height: 1.1;
  line-weight: 600;
  text-align: center;
  color: ${({ lightText }) => (lightText ? "#f7f8f2" : "#222")};

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  margin-top: 35px;
  font-size: 18px;
  line-height: 24px;
  text-align: justify;
  color: #333;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  border-radius: 15px;
`;

export const Img = styled.img`
  width: 100%;
  padding-right: 0;
  filter: drop-shadow(6px 3px 6px #666);
  border-radius: 15px;

  @media screen and (max-width: 768px) {
    margin: 0 0 10px 0;
  }

  @media screen and (max-width: 376px) {
    margin: 0 0 10px 0;
  }
`;

export const ImgPortrait = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  filter: drop-shadow(6px 3px 6px #666);
  border-radius: 15px;
`;

export const PhotoCredit = styled.p`
  top: 95%;
  left: 5%;
  color: #999;
  font-size: 12px;
  position: absolute;

  @media screen and (max-width: 480px) {
    font-size: 9px;
    top: 92%;
  }

  @media screen and (max-width: 280px) {
    font-size: 8px;
    top: 90%;
  }
`;

export const TarifSectionContainer = styled.div`
  color: #fff;
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    margin: 20px 0 20px 0;
  }

  @media screen and (max-width: 480px) {
    margin-top: 40px;
  }

  @media screen and (max-width: 280px) {
    margin-top: 30px;
  }
`;

export const TarifWrapBorder = styled.div`
  background-color: #fff;
  border-radius: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: grid;
  grid-gap: 75px;
  justify-items: center;
  padding: 50px;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const TarifBorderBlock = styled.div`
  background-color: #fff;
  border-radius: 30px;
  width: 100%;
  height: 100%;
  filter: drop-shadow(2px 1px 7px #ddd);
`;

export const TarifInfoWrap = styled.div`
  width: 100%;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const TarifImage = styled.img`
  padding: 1rem;
  height: 75px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const TarifText = styled.p`
  color: #333;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 50px;
  margin-top: 30px;
  text-align: center;

  @media screen and (max-width: 280px) {
    font-size: 15px;
  }
`;

export const TarifTextH1 = styled.h2`
  color: #333;
  font-weight: 700;
  margin-bottom: 16px;
  text-align: center;
`;
