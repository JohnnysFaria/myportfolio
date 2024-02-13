import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Styled from 'styled-components';
import Menu from './Components/Menu/Menu';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Profile from './Components/Profile/Profile';
import { Sobre } from './Components/Profile/Sobre';
import Projetos from './Components/Projetos/Projetos';
import Home from './Components/Home/Home';
import XP from './Components/XP/XP';

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
`;
const Container2 = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <Background>
      <BrowserRouter>
        <Container>
          <Menu />
          <Header />
          <Container2>
            <Profile />
            <Sobre />
          </Container2>
          <Projetos />
          <Home />
          <XP />
          <Home />
          <Footer />
        </Container>
      </BrowserRouter>
    </Background>
  );
};

export default App;
