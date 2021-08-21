import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>A propos</FooterLinkTitle>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/terms">Conditions d'utilisation</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Réseaux Sociaux</FooterLinkTitle>
              <FooterLink
                to="//www.facebook.com/merveilledesprit"
                target="_blank"
                aria-label="Facebook"
              >
                Facebook
              </FooterLink>
              <FooterLink
                to="//www.instagram.com/le_meilleur_de_soi_bienetre/"
                target="_blank"
                aria-label="Instagram"
              >
                Instagram
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Le Meilleur de Soi
            </SocialLogo>
            <WebsiteRights>
              Le Meilleur de Soi © {new Date().getFullYear()} - Tous droits
              réservés
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/merveilledesprit"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/le_meilleur_de_soi_bienetre/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
