import styled from "styled-components";

export const TermsContainer = styled.div`
  background: #fff;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const TermsH1 = styled.h1`
  font-size: 48px;
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: auto;
  margin-right: auto;
  max-width: 50vw;
  line-height: 1.1;
  line-weight: 600;
  text-align: center;
  color: #222;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const TermsText = styled.p`
  font-size: 18px;
  line-height: 24px;
  max-width: 50vw;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  text-align: justify;
  color: #333;

  @media screen and (max-width: 480px) {
    min-width: 75vw;
  }
`;
