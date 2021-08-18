import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesH2,
  ServicesP,
  ServicesCard,
  ServicesIcon,
  ImageBgService,
  ServiceFrontContent,
  ServiceFrontContentText,
} from "./ServicesElements";
import Icon1 from "../../images/meditation_sea.jpg";
import Icon2 from "../../images/undraw_meditation.png";
import Icon3 from "../../images/undraw_meditation.png";
import serviceFirstImage from "../../images/girl_meditating_desert.jpg";
import serviceSecondImage from "../../images/group_meditation.jpg";
import serviceThirdImage from "../../images/amma.jpg";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Les Séances</ServicesH1>
      <ServicesWrapper>
        <Flippy
          flipOnHover={true} // default false
          flipOnClick={false} // default false
          flipDirection="horizontal" // horizontal or vertical
          style={{
            width: "400px",
            height: "600px",
            filter: "drop-shadow(6px 3px 6px #666)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex",
            alignItems: "center",
            maxHeight: "600px",
          }}
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
          <BackSide style={{ backgroundColor: "#fff", borderRadius: "15px" }}>
            La consultation individuelle
          </BackSide>
        </Flippy>
        <Flippy
          flipOnHover={true} // default false
          flipOnClick={false} // default false
          flipDirection="horizontal" // horizontal or vertical
          style={{
            width: "400px",
            height: "600px",
            filter: "drop-shadow(6px 3px 6px #666)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex",
            alignItems: "center",
            maxHeight: "600px",
          }}
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
          <BackSide style={{ backgroundColor: "#fff", borderRadius: "15px" }}>
            La séance de groupe
          </BackSide>
        </Flippy>
        <Flippy
          flipOnHover={true} // default false
          flipOnClick={false} // default false
          flipDirection="horizontal" // horizontal or vertical
          style={{
            width: "400px",
            height: "600px",
            filter: "drop-shadow(6px 3px 6px #666)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex",
            alignItems: "center",
            maxHeight: "600px",
          }}
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
          <BackSide style={{ backgroundColor: "#fff", borderRadius: "15px" }}>
            Le amma assis
          </BackSide>
        </Flippy>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
