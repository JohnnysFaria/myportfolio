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
import { InfoProjeto } from './Components/Projetos/InfoProjeto';
import Titles from './Components/Utils/Titles';
import BtnProjeto from './Components/Projetos/BtnProjeto';

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
const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WrapperBtn = Styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;



const App = () => {
  return (
    <Background>
      <BrowserRouter>
        <Container>
          <Menu />
          <Header />
          <Wrapper>
            <Profile />
            <Sobre />
          </Wrapper>
          <Titles title='Projetos'/>
          <Wrapper>
            <InfoProjeto/>
            <Projetos />
          </Wrapper>
          <WrapperBtn>
          <BtnProjeto/>
          </WrapperBtn>
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
