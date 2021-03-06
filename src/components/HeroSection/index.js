import React, { useState } from "react";
import { ButtonHero } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  ImageBg,
  HeroContent,
  HeroH1,
  HeroBtnWrapper,
  HeroP,
  ArrowForward,
  ArrowRight,
  PhotoCreditHero
} from "./HeroElements";
import HeroImage from "../../images/man_standing_mountains.jpg";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="accueil">
      <HeroBg>
        <ImageBg src={HeroImage} />
      </HeroBg>
      <HeroContent>
        <HeroH1>Bienvenue,</HeroH1>
        <HeroP>Le Meilleur de Soi, relaxation et bien-être</HeroP>
        <HeroBtnWrapper>
          <ButtonHero
            to="ensavoirplus"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="false"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            En savoir plus {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonHero>
        </HeroBtnWrapper>
      </HeroContent>
      <PhotoCreditHero>Photo par S Migaj sur Unsplash</PhotoCreditHero>
    </HeroContainer>
  );
};

export default Hero;
