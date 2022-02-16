import React from "react";
import { ButtonLink } from "../ButtonElements";
import {
  Column1,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
  BtnWrap,
} from "../FourthService/FourthServiceElements";

import {
  TarifSectionContainer,
  TarifWrapBorder,
  TarifInfoWrap,
  TarifImage,
  TarifText,
  TarifBorderBlock,
} from "../FirstService/FirstServiceElements";

import TimeImage from "../../images/hourglass.png";
import EuroImage from "../../images/euro.png";

const FourthService = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow style={{ margin: "70px 0 0 0" }}>
            <Column1>
              <TextWrapper style={{ maxWidth: "70vw" }}>
                <TopLine>L'Abyanga (modelage ayurvédique)</TopLine>
                <Subtitle>
                  L'Abyanga est un massage aux huiles provenant de l'Inde et alternant pressions, frictions et étirements de tout le corps. C'est un massage bien-être dynamique et enveloppant qui detoxifie et tonifie l'organisme.
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
              <TarifText>1h</TarifText>
              <TarifText>Par séance</TarifText>
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

export default FourthService;
