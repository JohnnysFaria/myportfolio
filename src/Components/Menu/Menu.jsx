import React from 'react';
import { Link } from 'react-scroll';
import Styled from 'styled-components';
import { device } from '../Utils/size'

const Container = Styled.nav`
    position: fixed;
    width: 100%;
    top:0;
    padding: 0 3rem;

    @media ${device.mobileL} {
      top: 587px;
      padding: 0;

    }
`;

const Nav = Styled.nav`
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 81px;
    color: black;
    border-bottom: 4px solid #292421;
    font-family: "Playfair Display", serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-style: normal;
    color: black;
`;

const NavbarLink = Styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    border: 1px solid #968879; 
    background: linear-gradient(0deg, #DAD5CE, #DAD5CE);
    text-decoration:none;
    font-family: Playfair Display;
    font-size: 16px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #2A2623;
    &:hover,
    &:focus{
    background: #292421;
    color: #DAD5CE;
}`;

const Menu = () => {
  return (
    <Container>
      <Nav>
        <NavbarLink
          to="hero"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          Sobre
        </NavbarLink>

        <NavbarLink
          to="projetos"
          spy={true}
          smooth={true}
          offset={-170}
          duration={500}
        >
          Projetos
        </NavbarLink>

        <NavbarLink
          to="xp"
          spy={true}
          smooth={true}
          offset={-165}
          duration={500}
        >
          Exp
        </NavbarLink>

        <NavbarLink
          to="formacao"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
        >
          Formação
        </NavbarLink>

        <NavbarLink
          to="contato"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >

          Contato
        </NavbarLink>
      </Nav>
    </Container>
  );
};

export default Menu;
