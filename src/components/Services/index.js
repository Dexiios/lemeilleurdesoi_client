import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesH2,
  ServicesP,
  ServicesCard,
  ServicesIcon,
} from "./ServicesElements";
import Icon1 from "../../images/meditation_sea.jpg";
import Icon2 from "../../images/undraw_meditation.png";
import Icon3 from "../../images/undraw_meditation.png";
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
          style={{ width: "400px", height: "600px", filter: "drop-shadow(6px 3px 6px #666)", display: "flex", flexDirection: "column", justifyContent: "flex", alignItems: "center", maxHeight: "600px"  }}
        >
          <FrontSide
            style={{
              backgroundColor: "#41669d",
            }}
          >
            La consultation individuelle
          </FrontSide>
          <BackSide style={{ backgroundColor: "#175852" }}>ROCKS</BackSide>
        </Flippy>
        <Flippy
          flipOnHover={true} // default false
          flipOnClick={false} // default false
          flipDirection="horizontal" // horizontal or vertical
          style={{ width: "400px", height: "600px", filter: "drop-shadow(6px 3px 6px #666)", display: "flex", flexDirection: "column", justifyContent: "flex", alignItems: "center", maxHeight: "600px"  }}
        >
          <FrontSide
            style={{
              backgroundColor: "#41669d",
            }}
          >
            Les séances de groupe
          </FrontSide>
          <BackSide style={{ backgroundColor: "#175852" }}>ROCKS</BackSide>
        </Flippy>
        <Flippy
          flipOnHover={true} // default false
          flipOnClick={false} // default false
          flipDirection="horizontal" // horizontal or vertical
          style={{ width: "400px", height: "600px", filter: "drop-shadow(6px 3px 6px #666)", display: "flex", flexDirection: "column", justifyContent: "flex", alignItems: "center", maxHeight: "600px"  }}
        >
          <FrontSide
            style={{
              backgroundColor: "#41669d",
            }}
          >
            Le Amma assis
          </FrontSide>
          <BackSide style={{ backgroundColor: "#175852" }}>ROCKS</BackSide>
        </Flippy>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
