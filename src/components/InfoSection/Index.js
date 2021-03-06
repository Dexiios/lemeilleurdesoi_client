import React, { useEffect } from "react";
import { Button, ButtonLink } from "../ButtonElements";
import {
  Column2,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  PhotoCredit,
} from "./InfoElements";
import Aos from "aos";
import "aos/dist/aos.css";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  buttonLabel,
  img,
  darkText,
  description,
  description2,
  alt,
  primary,
  dark,
  dark2,
  destination,
  buttonRoute,
  photoAuthor,
}) => {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);
  if (window.location.pathname === "/contact") {
    return (
      <>
        <InfoContainer lightBg={lightBg} id={id}>
          <InfoWrapper
            style={{
              maxWidth: "1150px",
            }}
          >
            <InfoRow imgStart={imgStart}>
              <Column1>
                <TextWrapper data-aos="fade-down">
                  <TopLine>{topLine}</TopLine>
                  <Heading
                    style={{
                      textAlign: "center",
                    }}
                    lightText={lightText}
                  >
                    {headline}
                  </Heading>
                  <Subtitle
                    style={{
                      textAlign: "center",
                    }}
                    darkText={darkText}
                  >
                    {description}
                  </Subtitle>
                  <Subtitle
                    style={{
                      textAlign: "center",
                      fontWeight: "700",
                    }}
                    darkText={darkText}
                  >
                    {description2}
                  </Subtitle>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap data-aos="fade-up">
                  <Img src={img} alt={alt}/>
                </ImgWrap>
              </Column2>
            </InfoRow>
          </InfoWrapper>
        </InfoContainer>
      </>
    );
  } else {
    return (
      <>
        <InfoContainer lightBg={lightBg} id={id}>
          <InfoWrapper>
            <InfoRow imgStart={imgStart}>
              <Column1>
                <TextWrapper data-aos="fade-down">
                  <TopLine>{topLine}</TopLine>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <Subtitle darkText={darkText}>{description}</Subtitle>
                  <Subtitle darkText={darkText}>{description2}</Subtitle>
                  <BtnWrap>
                    {buttonRoute ? (
                      <ButtonLink
                        to={destination}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        primary={primary ? 1 : 0}
                        dark={dark ? 1 : 0}
                        dark2={dark2 ? 1 : 0}
                      >
                        {buttonLabel}
                      </ButtonLink>
                    ) : (
                      <Button
                        to={destination}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        primary={primary ? 1 : 0}
                        dark={dark ? 1 : 0}
                        dark2={dark2 ? 1 : 0}
                      >
                        {buttonLabel}
                      </Button>
                    )}
                  </BtnWrap>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap data-aos="fade-up">
                  <Img src={img} alt={alt} />
                  <PhotoCredit>{photoAuthor}</PhotoCredit>
                </ImgWrap>
              </Column2>
            </InfoRow>
          </InfoWrapper>
        </InfoContainer>
      </>
    );
  }
};

export default InfoSection;
