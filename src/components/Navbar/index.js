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
    if (window.scrollY >= 80) {
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
          <NavLogo to="/" onClick={toggleHome}>
            Le Meilleur de Soi
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="accueil"
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
              <NavLinks to="A propos">A propos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="https://www.facebook.com/merveilledesprit">
                Facebook
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="">Instagram</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/contact">Contact</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
