import React from "react";
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
} from "../FirstService/FirstServiceElements";
import { Heading } from "../InfoSection/InfoElements";

const FirstService = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper style={{ maxWidth: "70vw" }}>
                <Subtitle>
                  {" "}
                  La première séance est la plus importante. Elle me permet de
                  faire connaissance, de récolter toutes informations, habitude
                  de vie, situations familiale et professionnelle afin de cibler
                  le problème et de proposer les méthodes les mieux adaptées
                  afin de le résoudre.
                </Subtitle>
              </TextWrapper>
            </Column1>
          </InfoRow>
          <InfoRow2>
            <Column1>
              <Heading>Probleme 1</Heading>
            </Column1>
            <Column2>
              <Heading>Probleme 2</Heading>
            </Column2>
            <Column3>
              <Heading>Probleme 3</Heading>
            </Column3>
          </InfoRow2>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default FirstService;
