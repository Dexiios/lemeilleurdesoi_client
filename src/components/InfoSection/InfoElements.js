import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#999")};
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
  margin: 150px 0 150px 0;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    margin: 20px 0 20px 0;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
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
  font-size: 48px;
  line-height: 1.1;
  line-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8f2" : "#222")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  text-align: justify;
  color: ${({ darkText }) => (darkText ? "#333" : "#fff")};
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

export const ImgMaps = styled.img`
  width: 100%;
  height 350px;
  border: 0;
  border-radius: 15px;
  filter: drop-shadow(4px 2px 8px #ccc);
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
