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
import HeroContactImage from "../../images/hero_contact_image.jpg";
import HeroConsultationIndividuelle from "../../images/girl_meditating_desert.jpg";
import HeroSeanceDeGroupe from "../../images/group.jpg";
import HeroAmmaAssis from "../../images/amma.jpg";
import HeroAbyanga from "../../images/abyanga.jpg";

const HeroOthers = () => {
  if (window.location.pathname === "/consultationindividuelle") {
    return (
      <HeroContainer
        id="accueil"
        style={{
          height: "50vh",
        }}
      >
        <HeroBg>
          <ImageBg
            src={HeroConsultationIndividuelle}
            style={{
              filter: "blur(8px)",
              WebkitFilter: "blur(5px)",
              transform: "scale(1.1)",
            }}
          />
        </HeroBg>
        <HeroContent>
          <HeroH1>La consultation individuelle</HeroH1>
        </HeroContent>
        <PhotoCreditHeroContact>
          Photo par Sage Friedman sur Unsplash
        </PhotoCreditHeroContact>
      </HeroContainer>
    );
  } else if (window.location.pathname === "/seancedegroupe") {
    return (
      <HeroContainer
        id="accueil"
        style={{
          height: "50vh",
        }}
      >
        <HeroBg>
          <ImageBg
            src={HeroSeanceDeGroupe}
            style={{
              filter: "blur(8px)",
              WebkitFilter: "blur(5px)",
              transform: "scale(1.1)",
            }}
          />
        </HeroBg>
        <HeroContent>
          <HeroH1>L'atelier de groupe</HeroH1>
        </HeroContent>
        <PhotoCreditHeroContact style={{color: "#bbb"}}>
          Photo par Papaioannou Kostas sur Unsplash
        </PhotoCreditHeroContact>
      </HeroContainer>
    );
  } else if (window.location.pathname === "/ammaassis") {
    return (
      <HeroContainer
        id="accueil"
        style={{
          height: "50vh",
        }}
      >
        <HeroBg>
          <ImageBg
            src={HeroAmmaAssis}
            style={{
              filter: "blur(8px)",
              WebkitFilter: "blur(5px)",
              transform: "scale(1.1)",
            }}
          />
        </HeroBg>
        <HeroContent>
          <HeroH1>Le Amma assis</HeroH1>
        </HeroContent>
        <PhotoCreditHeroContact style={{color: "#ddd"}}>
        </PhotoCreditHeroContact>
      </HeroContainer>
    );
  } 
  else if (window.location.pathname === "/abyanga") {
    return (
      <HeroContainer
        id="accueil"
        style={{
          height: "50vh",
        }}
      >
        <HeroBg>
          <ImageBg
            src={HeroAbyanga}
            style={{
              filter: "blur(8px)",
              WebkitFilter: "blur(5px)",
              transform: "scale(1.1)",
            }}
          />
        </HeroBg>
        <HeroContent>
          <HeroH1>L'Abyanga</HeroH1>
        </HeroContent>
        <PhotoCreditHeroContact style={{color: "#ddd"}}>
          Photo par Toa Heftiba sur Unsplash
        </PhotoCreditHeroContact>
      </HeroContainer>
    );
  } 
  else {
    return (
      <HeroContainer id="accueil">
        <HeroBg>
          <ImageBg src={HeroContactImage} />
        </HeroBg>
        <HeroContent>
          <HeroH1>Contact</HeroH1>
          <HeroP>
            Prendre un rendez-vous, me poser une question ou bien tout
            simplement discuter c'est ici que ça se passe
          </HeroP>
        </HeroContent>
        <PhotoCreditHeroContact>
          Photo par Su San Lee sur Unsplash
        </PhotoCreditHeroContact>
      </HeroContainer>
    );
  }
};

export default HeroOthers;
