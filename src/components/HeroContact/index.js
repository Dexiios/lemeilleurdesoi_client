import React from "react";
import {
  HeroContainer,
  HeroBg,
  ImageBg,
  HeroContent,
  HeroH1,
  HeroP,
  PhotoCreditHeroContact,
} from "./HeroContactElements";
import HeroImage from "../../images/hero_contact_image.jpg";

const HeroContact = () => {

  return (
    <HeroContainer id="accueil">
      <HeroBg>
        <ImageBg src={HeroImage} />
      </HeroBg>
      <HeroContent>
        <HeroH1>Contact</HeroH1>
        <HeroP>Prendre un rendez-vous, me poser une question ou bien tout simplement discuter c'est ici que ça se passe</HeroP>
      </HeroContent>
      <PhotoCreditHeroContact>Photo par Su San Lee sur Unsplash</PhotoCreditHeroContact>
    </HeroContainer>
  );
};

export default HeroContact;
