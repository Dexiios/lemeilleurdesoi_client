import styled from "styled-components";

export const ContactSectionContainer = styled.div`
  color: #fff;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  padding: 25px;

  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 40px;
  }

  @media screen and (max-width: 280px) {
    margin-top: 30px;
  }
`;

export const ContactWrapBorder = styled.div`
  background-color: #fff;
  border-radius: 30px;
  width: 100%;
  display: grid;
  justify-items: center;
  filter: drop-shadow(2px 1px 7px #ddd);

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ContactInfoWrap = styled.div`
  width: 100%;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const ContactImage = styled.img`
  padding: 1rem;
  height: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const ContactText = styled.p`
  color: #333;
  font-size: 18px;
  margin-bottom: 16px;
  margin-top: 30px;
  text-align: center;

  @media screen and (max-width: 280px) {
    font-size: 15px;
  }
`;

export const ContactTextH1 = styled.h2`
  color: #333;
  font-weight: 700;
  margin-bottom: 16px;
  text-align: center;
`;
