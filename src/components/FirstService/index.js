import React from "react";
import { ButtonLink } from "../ButtonElements";
import {
  Column1,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  BtnWrap,
  TopLine,
  TarifSectionContainer,
  TarifWrapBorder,
  TarifInfoWrap,
  TarifImage,
  TarifText,
  TarifBorderBlock,
} from "../FirstService/FirstServiceElements";

import TimeImage from "../../images/hourglass.png";
import EuroImage from "../../images/euro.png";

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
                  La première séance est la plus importante. Elle me permet de
                  faire connaissance, de récolter toute information, habitude
                  de vie, situations familiale et professionnelle afin de cibler
                  le problème et de proposer les méthodes les mieux adaptées
                  afin de le résoudre. Préparation à un événement (examens,
                  accouchement, deuil...), changement de comportement face à une
                  addiction, une phobie, modifier son ressenti face à une
                  situation anxiogène, accepter les souffrances liées au passé,
                  trouble du sommeil, gestion de stress ...
                </Subtitle>
                <Subtitle>
                  Afin de résoudre ces problèmes, nous pratiquerons différentes
                  activités et méthodes en fonction de ce qui vous correspond le
                  mieux :
                </Subtitle>
                <Subtitle style={{textAlign: "start"}}>
                  - Séance de sophrologie
                  <br />
                  <br/>
                  - Stretching (étirement musculaire)
                  <br /><br/>
                  - Automassage <br /><br/>
                  - Méditation <br /><br/>
                  - Visualisation ... <br />
                </Subtitle>
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
      <TarifSectionContainer>
        <TarifWrapBorder>
          <TarifInfoWrap>
            <TarifBorderBlock>
              <TarifImage src={TimeImage} />
              <TarifText>1ère séance: 1h30/2H</TarifText>
              <TarifText>Les autres séances: 1h</TarifText>
            </TarifBorderBlock>
          </TarifInfoWrap>
          <TarifInfoWrap>
            <TarifBorderBlock>
              <TarifImage src={EuroImage} />
              <TarifText>60.00€ TTC</TarifText>
              <TarifText>Par séance</TarifText>
            </TarifBorderBlock>
          </TarifInfoWrap>
        </TarifWrapBorder>
      </TarifSectionContainer>
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
