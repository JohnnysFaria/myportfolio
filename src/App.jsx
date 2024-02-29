import React from 'react';
import Styled from 'styled-components';
import Menu from './Components/Menu/Menu';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Profile from './Components/Profile/Profile';
import XP from './Components/XP/XP';
import SectionProjects from './Components/Projetos/SectionProjects';
import { device } from './Components/Utils/size'
import Formacao from './Components/Formacao/Formacao';
 
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
        <Container>
          <Menu />
            <Header />
            <Profile />
            <SectionProjects />
            <XP />
            <Formacao  />
        </Container>
        <Footer />
    </Background>
  );
};

export default App;
