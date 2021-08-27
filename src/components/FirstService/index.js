import React from "react";
import { ButtonLink } from "../ButtonElements";
import {
  Column1,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  InfoRow2,
  Column2,
  Column3,
  BtnWrap,
  TopLine,
  Heading,
} from "../FirstService/FirstServiceElements";

const FirstService = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow style={{ marginBottom: "0" }}>
            <Column1>
              <TextWrapper style={{ maxWidth: "70vw" }}>
                <TopLine>La consultation individuelle</TopLine>
                <Subtitle>
                  {" "}
                  La première séance est la plus importante. Elle me permet de
                  faire connaissance, de récolter toutes informations, habitude
                  de vie, situations familiale et professionnelle afin de cibler
                  le problème et de proposer les méthodes les mieux adaptées
                  afin de le résoudre. Préparation à un évènement (examens,
                  accouchement, deuil...), changement de comportement face à une
                  addiction, une phobie, modifier son ressenti face à une
                  situation anxiogène, accepter les souffrances liées au passé,
                  trouble du sommeil, gestion de stress ...
                </Subtitle>
                <Subtitle>
                  Afin de résoudre ces problèmes, nous pratiquerons différentes
                  activités et méthodes en fonction de ce qui vous correspond le
                  mieux.
                </Subtitle>
              </TextWrapper>
            </Column1>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow2>
            <Column1>
              <Heading>Séances de sophrologie</Heading>
            </Column1>
            <Column2>
              <Heading>Streching (étirement musculaire)</Heading>
            </Column2>
            <Column3>
              <Heading>Automassage</Heading>
            </Column3>
          </InfoRow2>
          <InfoRow2>
            <Column1>
              <Heading>Méditation</Heading>
            </Column1>
            <Column2>
              <Heading>Visualisation</Heading>
            </Column2>
            <Column3>
              <Heading>Relaxation</Heading>
            </Column3>
          </InfoRow2>
        </InfoWrapper>
      </InfoContainer>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow style={{ margin: "50px 0 50px 0" }}>
            <Column1>
              <TextWrapper style={{ maxWidth: "70vw" }}>
                <Subtitle>
                  Un suivi régulier, répétitif permet à l’esprit de rester
                  stable. C’est un apprentissage de longue haleine pour
                  ressentir les résultats jusqu’à pouvoir se relaxer un court
                  instant quel que soit l’endroit. La solution est en chacun de
                  nous et je suis là pour vous aider à la trouver.
                </Subtitle>
                <Subtitle>
                  Ensemble sera fixé le nombre de séances, le rythme avec
                  régulièrement des bilans d’évolution.
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
                <Heading style={{ fontSize: "2rem" }}>
                  1ère séance : 1h30/2h
                </Heading>
                <Heading style={{ fontSize: "2rem" }}>
                  Durée des autres séances : 1h
                </Heading>
              </TextWrapper>
            </Column1>
            <Column2>
              <TextWrapper style={{ maxWidth: "70vw" }}>
                <Heading style={{ fontSize: "2rem" }}>
                  Tarif: 60.00€ TTC/séance
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

export default FirstService;
