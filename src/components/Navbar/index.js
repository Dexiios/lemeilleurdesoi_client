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
    if (window.scrollY >= 200) {
      setScollNav(true);
    } else {
      setScollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

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
};

export default Navbar;
