import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScollNav] = useState(false);

  const changeNav = () => {
    if (window.location.pathname === "/contact") {
      if (window.scrollY >= 100) {
        setScollNav(true);
      } else {
        setScollNav(false);
      }
    } else {
      if (window.scrollY >= 200) {
        setScollNav(true);
      } else {
        setScollNav(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  if (
    window.location.pathname === "/contact" ||
    window.location.pathname === "/consultationindividuelle" ||
    window.location.pathname === "/seancedegroupe" ||
    window.location.pathname === "/ammaassis"
  ) {
    return (
      <>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" scrollNav={scrollNav} onClick={toggleHome}>
              Le Meilleur de Soi
            </NavLogo>
            <MobileIcon scrollNav={scrollNav} onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavBtnLink
                  to=""
                  scrollNav={scrollNav}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Accueil
                </NavBtnLink>
              </NavItem>
              <NavItem>
                <NavBtnLink
                  to="/#services"
                  scrollNav={scrollNav}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Séances
                </NavBtnLink>
              </NavItem>
              <NavItem>
                <NavBtnLink
                  to="/#A propos"
                  scrollNav={scrollNav}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  A propos
                </NavBtnLink>
              </NavItem>
              <NavItem>
                <NavBtnLink
                  to="//www.facebook.com/merveilledesprit"
                  target="_blank"
                  aria-label="Facebook"
                  scrollNav={scrollNav}
                >
                  Facebook
                </NavBtnLink>
              </NavItem>
              <NavItem>
                <NavBtnLink
                  to="//www.instagram.com/le_meilleur_de_soi_bienetre/"
                  target="_blank"
                  aria-label="Instagram"
                  scrollNav={scrollNav}
                >
                  Instagram
                </NavBtnLink>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink
                to="/contact"
                scrollNav={scrollNav}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                style={{ borderBottom: "3px solid #dbc2ad" }}
              >
                Contact
              </NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </>
    );
  } else if (
    window.location.pathname === "/terms" ||
    window.location.pathname === "/404"
  ) {
    return (
      <>
        <Nav
          style={{
            marginTop: "0",
            background: "#fff",
            boxShadow: "0 0 7px rgba(0,0,0,.1)",
          }}
          scrollNav={scrollNav}
        >
          <NavbarContainer>
            <NavLogo
              style={{ color: "#333" }}
              to="/"
              scrollNav={scrollNav}
              onClick={toggleHome}
            >
              Le Meilleur de Soi
            </NavLogo>
            <MobileIcon
              style={{ color: "#333" }}
              scrollNav={scrollNav}
              onClick={toggle}
            >
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavBtnLink
                  to=""
                  scrollNav={scrollNav}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  style={{ color: "#333" }}
                >
                  Accueil
                </NavBtnLink>
              </NavItem>
              <NavItem>
                <NavBtnLink
                  to="/#services"
                  scrollNav={scrollNav}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  style={{ color: "#333" }}
                >
                  Séances
                </NavBtnLink>
              </NavItem>
              <NavItem>
                <NavBtnLink
                  to="/#A propos"
                  scrollNav={scrollNav}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  style={{ color: "#333" }}
                >
                  A propos
                </NavBtnLink>
              </NavItem>
              <NavItem>
                <NavBtnLink
                  to="//www.facebook.com/merveilledesprit"
                  target="_blank"
                  aria-label="Facebook"
                  scrollNav={scrollNav}
                  style={{ color: "#333" }}
                >
                  Facebook
                </NavBtnLink>
              </NavItem>
              <NavItem>
                <NavBtnLink
                  to="//www.instagram.com/le_meilleur_de_soi_bienetre/"
                  target="_blank"
                  aria-label="Instagram"
                  scrollNav={scrollNav}
                  style={{ color: "#333" }}
                >
                  Instagram
                </NavBtnLink>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink
                to="/contact"
                scrollNav={scrollNav}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                style={{ color: "#333" }}
              >
                Contact
              </NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </>
    );
  } else {
    return (
      <>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" scrollNav={scrollNav} onClick={toggleHome}>
              Le Meilleur de Soi
            </NavLogo>
            <MobileIcon scrollNav={scrollNav} onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="accueil"
                  scrollNav={scrollNav}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Accueil
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  scrollNav={scrollNav}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Séances
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="A propos"
                  scrollNav={scrollNav}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  A propos
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavBtnLink
                  to="//www.facebook.com/merveilledesprit"
                  target="_blank"
                  aria-label="Facebook"
                  scrollNav={scrollNav}
                >
                  Facebook
                </NavBtnLink>
              </NavItem>
              <NavItem>
                <NavBtnLink
                  to="//www.instagram.com/le_meilleur_de_soi_bienetre/"
                  target="_blank"
                  aria-label="Instagram"
                  scrollNav={scrollNav}
                >
                  Instagram
                </NavBtnLink>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink
                to="/contact"
                scrollNav={scrollNav}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Contact
              </NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </>
    );
  }
};

export default Navbar;
