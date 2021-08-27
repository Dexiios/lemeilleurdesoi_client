import React from "react";
import { ButtonLink } from "../ButtonElements";
import {
  Column1,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  Column2,
  TopLine,
  BtnWrap,
  Heading,
} from "../ThirdService/ThirdServiceElements";

const ThirdService = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow style={{ margin: "150px 0 0 0" }}>
            <Column1>
              <TextWrapper style={{ maxWidth: "70vw" }}>
                <TopLine>Le Amma assis (massage bien-être)</TopLine>
                <Subtitle>
                  Je pratique aussi le Amma assis. C’est un massage assis de 15
                  à 20min sur chaise ergonomique sur une personne habillée.
                  C’est un enchainement précis d’étirement, pressions et
                  percussions. De courte durée, il se fait partout, il est
                  stimulant et permet un état profond de relaxation et de
                  bien-être.
                </Subtitle>
              </TextWrapper>
            </Column1>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow
            style={{
              margin: "0 0 0 0",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            }}
          >
            <Column1>
              <TextWrapper style={{ maxWidth: "70vw" }}>
                <Heading style={{ fontSize: "2rem" }}>Durée: 15min/20min</Heading>
              </TextWrapper>
            </Column1>
            <Column2>
              <TextWrapper style={{ maxWidth: "70vw" }}>
                <Heading style={{ fontSize: "2rem" }}>
                  Tarif: 20.00€ TTC
                </Heading>
              </TextWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow style={{ margin: "0 0 50px 0" }}>
            <Column1>
              <TextWrapper style={{ maxWidth: "70vw" }}>
                <BtnWrap>
                  <ButtonLink
                    to="/contact"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    Prendre rendez vous
                  </ButtonLink>
                </BtnWrap>
              </TextWrapper>
            </Column1>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default ThirdService;
