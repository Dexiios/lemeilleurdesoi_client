import styled from "styled-components";

export const NotFoundContainer = styled.div`
  width: 100%;
  height: 64vh;
  display: grid;
  text-align: center;

  @media screen and (min-height: 1366px) {
      height: 69vh;
  }
`;

export const NotFoundImg = styled.img`
  height: 300px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-block-start: auto;
  max-width: 80vw;

  @media screen and (max-width: 480px) {
    height: 150px;
  }
`;

export const NotFoundMessage = styled.p`
  color: #333;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
  margin-top: 30px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;
