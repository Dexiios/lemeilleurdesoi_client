import React, { useState } from "react";
import { Button, ButtonHero } from "../ButtonElements";
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
} from "./HeroContactElements";
import HeroImage from "../../images/hero_contact_image.jpg";

const HeroContact = () => {
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
        <HeroH1>Contact</HeroH1>
        <HeroP>Prendre un rendez-vous, me poser une question ou bien tout simplement discuter c'est ici que ça se passe</HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroContact;
