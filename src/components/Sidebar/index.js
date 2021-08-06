import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from './SidebarElements'

function Sidebar ({isOpen, toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="accueil" onClick={toggle}>Accueil</SidebarLink>
          <SidebarLink to="Seances">Séances</SidebarLink>
          <SidebarLink to="A propos">A propos</SidebarLink>
          <SidebarLink to="Facebook">Facebook</SidebarLink>
          <SidebarLink to="Instagram">Instagram</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/contact'>Contact</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
