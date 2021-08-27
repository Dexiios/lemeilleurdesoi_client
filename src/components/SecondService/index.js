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
} from "../SecondService/SecondServiceElements";

const SecondService = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow style={{ margin: "150px 0 0 0" }}>
            <Column1>
              <TextWrapper style={{ maxWidth: "70vw" }}>
                <TopLine>Atelier de groupe (5 à 10 personnes)</TopLine>
                <Subtitle>
                  Une à deux fois par mois, je propose des séances de groupe de
                  5 à 10 personnes à domicile ou en pleine nature selon la
                  météo. Ce sont des moments de relaxation avec apprentissage de
                  techniques de respiration, méditation, relaxation. Rencontre
                  de personnes, moment de détente et de partage, conseils pour
                  bien-être physique, psychologique et émotionnel. Chaque
                  atelier est différent selon les personnes réunies.
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
                <Heading style={{ fontSize: "2rem" }}>Durée: 1h/1h30</Heading>
              </TextWrapper>
            </Column1>
            <Column2>
              <TextWrapper style={{ maxWidth: "70vw" }}>
                <Heading style={{ fontSize: "2rem" }}>
                  Tarif: 20.00€ TTC/personnes
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

export default SecondService;
