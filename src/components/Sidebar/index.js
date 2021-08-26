import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SidebarRouteLink,
} from "./SidebarElements";

function Sidebar({ isOpen, toggle }) {
  if (
    window.location.pathname === "/contact" ||
    window.location.pathname === "/terms" ||
    window.location.pathname === "/404" ||
    window.location.pathname === "/consultationindividuelle" ||
    window.location.pathname === "/seancedegroupe" ||
    window.location.pathname === "/ammaassis"
  ) {
    return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarRouteLink to="" onClick={toggle}>
              Accueil
            </SidebarRouteLink>
            <SidebarRouteLink to="/#services" onClick={toggle}>
              Séances
            </SidebarRouteLink>
            <SidebarRouteLink to="/#A propos" onClick={toggle}>
              A propos
            </SidebarRouteLink>
            <SidebarRouteLink
              to="//www.facebook.com/merveilledesprit"
              target="_blank"
              aria-label="Facebook"
            >
              Facebook
            </SidebarRouteLink>
            <SidebarRouteLink
              to="//www.instagram.com/le_meilleur_de_soi_bienetre/"
              target="_blank"
              aria-label="Instagram"
            >
              Instagram
            </SidebarRouteLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/contact">Contact</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    );
  } else {
    return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="accueil" onClick={toggle}>
              Accueil
            </SidebarLink>
            <SidebarLink to="services" onClick={toggle}>
              Séances
            </SidebarLink>
            <SidebarLink to="A propos" onClick={toggle}>
              A propos
            </SidebarLink>
            <SidebarRouteLink
              to="//www.facebook.com/merveilledesprit"
              target="_blank"
              aria-label="Facebook"
            >
              Facebook
            </SidebarRouteLink>
            <SidebarRouteLink
              to="//www.instagram.com/le_meilleur_de_soi_bienetre/"
              target="_blank"
              aria-label="Instagram"
            >
              Instagram
            </SidebarRouteLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/contact">Contact</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    );
  }
}

export default Sidebar;
