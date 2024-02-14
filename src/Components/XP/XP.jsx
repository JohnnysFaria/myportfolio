import React from 'react';
import Styled from 'styled-components';
import Titles from '../Utils/Titles';
import CardXp from './CardXp';

const Container = Styled.section`
display: flex;
color: black;
    width: 100%;
`;

const Wrapper = Styled.div`
  padding: 25px;
  width: 100%;
`
const WrapperCargo = Styled.div`
  padding: 25px;
  width: 100%;
`

const P = Styled.p`
font-family: Playfair Display;
font-size: 150px;
font-weight: 700;
line-height: 144px;
letter-spacing: 0em;
text-align: left;
color: rgba(109, 109, 109, 0.20);
`



const XP = () => {
  return (
    <>
      <Titles title="Experiência" />
      <Container id="xp">
        <Wrapper>
          <P>
            EXP<br/>ERI<br/>ÊN<br/>CIA
          </P>
        </Wrapper>

        <WrapperCargo>
        <CardXp cargo="Auxiliar Administrativo" empresa="Allianz Partners" />
        <CardXp cargo="Auxiliar Administrativo" empresa="Allianz Partners" />
        <CardXp cargo="Analista Administrativo" empresa="Rumo Centro Automotivo" />
        </WrapperCargo>



      </Container>
    </>
  );
};

export default XP;
