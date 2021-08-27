import React, { useEffect } from "react";
import { ButtonLink, ButtonFirstService, ButtonSecondService, ButtonThirdService } from "../ButtonElements";
import { BtnWrapService } from "./ServicesElements";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesH2,
  ImageBgService,
  ServiceFrontContent,
  ServiceFrontContentText,
  PhotoCreditService,
} from "./ServicesElements";
import serviceFirstImage from "../../images/girl_meditating_desert.jpg";
import serviceSecondImage from "../../images/group.jpg";
import serviceThirdImage from "../../images/amma.jpg";
import Flippy, { FrontSide } from "react-flippy";
import "./Services.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  return (
    <ServicesContainer id="services">
      <ServicesH1>Les Séances</ServicesH1>
      <ServicesH2>
        Je propose pour l'instant 3 types de séances, d'autres seront disponibles à
        l'avenir.
      </ServicesH2>
      <ServicesWrapper>
        <Flippy
          data-aos="fade"
          data-aos-delay="200"
          className="flippy_custom"
          flipOnHover={false} // default false
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
              <ServiceFrontContentText style={{fontSize: "30px"}}>
                La consultation individuelle
              </ServiceFrontContentText>
              <ButtonFirstService
                to="/consultationindividuelle"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                className="first_service"
              >
                En savoir plus
              </ButtonFirstService>
            </ServiceFrontContent>
          </FrontSide>
          <PhotoCreditService>
            Photo par Sage Friedman sur Unsplash
          </PhotoCreditService>
        </Flippy>
        <Flippy
          data-aos="fade"
          data-aos-delay="500"
          flipOnHover={false} // default false
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
                L'atelier en groupe
              </ServiceFrontContentText>
              <ButtonSecondService
                to="/seancedegroupe"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                style={{ textDecoration: "none", width: "50%", margin: "auto" }}
              >
                En savoir plus
              </ButtonSecondService>
            </ServiceFrontContent>
          </FrontSide>
          <PhotoCreditService>
            Photo par Papaioannou Kostas sur Unsplash
          </PhotoCreditService>
        </Flippy>
        <Flippy
          data-aos="fade"
          data-aos-delay="1000"
          flipOnHover={false} // default false
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
              <ButtonThirdService
                to="/ammaassis"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                style={{ textDecoration: "none", width: "50%", margin: "auto" }}
              >
                En savoir plus
              </ButtonThirdService>
            </ServiceFrontContent>
          </FrontSide>
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
