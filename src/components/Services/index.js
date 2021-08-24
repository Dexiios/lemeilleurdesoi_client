import React, { useEffect } from "react";
import { ButtonLink } from "../ButtonElements";
import { BtnWrapService } from "./ServicesElements";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesH2,
  ImageBgService,
  ImageBgServiceBlur,
  ServiceFrontContent,
  ServiceFrontContentText,
  ServiceBackContent,
  ServiceBackContentText,
  PhotoCreditService,
} from "./ServicesElements";
import serviceFirstImage from "../../images/girl_meditating_desert.jpg";
import serviceSecondImage from "../../images/group.jpg";
import serviceThirdImage from "../../images/amma.jpg";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "./Services.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <ServicesContainer id="services">
      <ServicesH1>Les Séances</ServicesH1>
      <ServicesH2>
        Je propose pour l'instant 3 types séances, d'autres seront disponibles à l'avenir.
      </ServicesH2>
      <ServicesWrapper>
        <Flippy
          data-aos="fade"
          data-aos-delay="200"
          className="flippy_custom"
          flipOnHover={true} // default false
          flipOnClick={false} // default false
          flipDirection="horizontal" // horizontal or vertical
        >
          <FrontSide
            style={{
              backgroundColor: "#fff",
              padding: "0px",
              borderRadius: "15px",
            }}
          >
            <ImageBgService src={serviceFirstImage} />
            <ServiceFrontContent>
              <ServiceFrontContentText>
                La consultation individuelle
              </ServiceFrontContentText>
            </ServiceFrontContent>
          </FrontSide>
          <BackSide
            style={{
              backgroundColor: "#fff",
              borderRadius: "15px",
              padding: "0px",
            }}
          >
            <ImageBgServiceBlur
              style={{ filter: "blur(2px) brightness(60%)" }}
              src={serviceFirstImage}
            />
            <ServiceBackContent>
              <ServiceBackContentText>
                Cette consultation se fait pour des problèmes profonds tels que
                les troubles du sommeil, phobie, angoisse, stress,
                hyperactivité, préparation aux examens. La première dure environ
                1h30 et selon les résultats elle sera suivie de plusieurs
                séances de 1h une à deux fois par mois. Tout est dans la
                patience et l’assiduité pour atteindre l’objectif fixé. Le temps
                est notre allié. En fonction du problème à gérer, je propose des
                séances de sophrologie, de relaxation ou de méditation pleine
                conscience guidée.
              </ServiceBackContentText>
            </ServiceBackContent>
            <ServiceFrontContent style={{ top: "400px" }}>
              <ServiceFrontContentText>Tarif : 20€/h</ServiceFrontContentText>
            </ServiceFrontContent>
          </BackSide>
          <PhotoCreditService>
            Photo par Sage Friedman sur Unsplash
          </PhotoCreditService>
        </Flippy>
        <Flippy
          data-aos="fade"
          data-aos-delay="500"
          flipOnHover={true} // default false
          flipOnClick={false} // default false
          flipDirection="horizontal" // horizontal or vertical
          className="flippy_custom"
        >
          <FrontSide
            style={{
              backgroundColor: "#fff",
              padding: "0px",
              borderRadius: "15px",
            }}
          >
            <ImageBgService src={serviceSecondImage} />
            <ServiceFrontContent>
              <ServiceFrontContentText>
                La séance de groupe
              </ServiceFrontContentText>
            </ServiceFrontContent>
          </FrontSide>
          <BackSide
            style={{
              backgroundColor: "#fff",
              borderRadius: "15px",
              padding: "0px",
            }}
          >
            <ImageBgServiceBlur
              style={{ filter: "blur(2px) brightness(60%)" }}
              src={serviceSecondImage}
            />
            <ServiceBackContent>
              <ServiceBackContentText>
                Une à deux fois par mois, je propose des séances chez vous avec
                des amis ou à mon cabinet (maximum 5 personnes) d’une durée de
                1h30 environ. Ce sont des moments de relaxation avec
                apprentissage de technique de respiration, méditation,
                relaxation. Rencontre de personnes, moment de détente et de
                partage, conseils pour un bien-être physique et psychologique.
              </ServiceBackContentText>
            </ServiceBackContent>
            <ServiceFrontContent style={{ top: "400px" }}>
              <ServiceFrontContentText>Tarif : 20€/h</ServiceFrontContentText>
            </ServiceFrontContent>
          </BackSide>
          <PhotoCreditService>
            Photo par Papaioannou Kostas sur Unsplash
          </PhotoCreditService>
        </Flippy>
        <Flippy
          data-aos="fade"
          data-aos-delay="1000"
          flipOnHover={true} // default false
          flipOnClick={false} // default false
          flipDirection="horizontal" // horizontal or vertical
          className="flippy_custom"
        >
          <FrontSide
            style={{
              backgroundColor: "#fff",
              padding: "0px",
              borderRadius: "15px",
            }}
          >
            <ImageBgService src={serviceThirdImage} />
            <ServiceFrontContent>
              <ServiceFrontContentText>Le amma assis</ServiceFrontContentText>
            </ServiceFrontContent>
          </FrontSide>
          <BackSide
            style={{
              backgroundColor: "#fff",
              borderRadius: "15px",
              padding: "0px",
            }}
          >
            <ImageBgServiceBlur
              style={{ filter: "blur(2px) brightness(60%)" }}
              src={serviceThirdImage}
            />
            <ServiceBackContent>
              <ServiceBackContentText>
                C’est un massage de 30 à 20 minutes pouvant se faire partout.
              </ServiceBackContentText>
            </ServiceBackContent>
            <ServiceFrontContent style={{ top: "400px" }}>
              <ServiceFrontContentText>Tarif : 20€/h</ServiceFrontContentText>
            </ServiceFrontContent>
          </BackSide>
          <PhotoCreditService>
            Photo par Toa Heftiba sur Unsplash
          </PhotoCreditService>
        </Flippy>
      </ServicesWrapper>
      <BtnWrapService>
        <ButtonLink
          to="/contact"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
          style={{ textDecoration: "none" }}
        >
          Prendre rendez-vous
        </ButtonLink>
      </BtnWrapService>
    </ServicesContainer>
  );
};

export default Services;
