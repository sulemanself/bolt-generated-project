import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin-left: 30px;
`;

const NavLink = styled(Link)`
  cursor: pointer;
  font-weight: 600;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>Your Name</Logo>
        <NavLinks>
          <NavItem><NavLink to="home" smooth={true} duration={500}>Home</NavLink></NavItem>
          <NavItem><NavLink to="about" smooth={true} duration={500}>About</NavLink></NavItem>
          <NavItem><NavLink to="stack" smooth={true} duration={500}>Stack</NavLink></NavItem>
          <NavItem><NavLink to="projects" smooth={true} duration={500}>Projects</NavLink></NavItem>
          <NavItem><NavLink to="book-call" smooth={true} duration={500}>Book a Call</NavLink></NavItem>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
