import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements'

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>Le Meilleur de Soi</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='accueil'>Accueil</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='seances'>Séances</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='A propos'>A propos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href='https://www.facebook.com/merveilledesprit'>
                Facebook
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to=''>Instagram</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
              <NavBtnLink to='/contact'>Contact</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
