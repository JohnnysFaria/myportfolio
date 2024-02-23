import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Styled from 'styled-components';
import Menu from './Components/Menu/Menu';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Profile from './Components/Profile/Pic';
import { Sobre } from './Components/Profile/Sobre';
import Home from './Components/Home/Home';
import XP from './Components/XP/XP';
import ProjetosUm from './Components/Projetos/ProjetoUm/ProjetosUm';
import ProjetosDois from './Components/Projetos/ProjetoDois/ProjetoDois';
import SectionProjects from './Components/Projetos/SectionProjects';
import { device } from './Components/Utils/size'
 
const Background = Styled.div`
  background: #C8C3BA;
  width:100%;
  height: 100%;
`;
const Container = Styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 3rem 3rem 0 3rem;
  @media ${device.mobileL} {
    padding: 0 1rem;
  }
`;





const App = () => {
  return (
    <Background>
      <BrowserRouter>
        <Container>
          <Menu />
          <Header />

            <Profile />

            <SectionProjects />
            <XP />
            <Home />
            <Footer />
        </Container>
      </BrowserRouter>
    </Background>
  );
};

export default App;
