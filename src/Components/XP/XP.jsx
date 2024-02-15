import React from 'react';
import Styled from 'styled-components';
import Titles from '../Utils/Titles';
import CardXp, { Eclipse } from './CardXp';

const Container = Styled.section`
  display: flex;
  color: black;
  width: 100%;
`;

const Wrapper = Styled.div`
  width: 50%;
`
const WrapperCargo = Styled.div`
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
        <CardXp 
          cargo="Auxiliar Administrativo" 
          empresa="Allianz Partners" 
          descricao="Suporte administrativo em atendimento ao cliente, gestão de documentos e assistência técnica básica, gerenciamento eficiente de arquivos físicos e eletrônicos, colaboração em projetos especiais para alcançar metas, manutenção de registros precisos de clientes."
          competencias='Javascript'
          c1='Javascript'
          c2='React'
          c3='Power BI'
          c4='CSS'
          />
        <CardXp 
          cargo="Auxiliar Administrativo" 
          empresa="Allianz Partners" 
          descricao="Suporte administrativo em atendimento ao cliente, gestão de documentos e assistência técnica básica, gerenciamento eficiente de arquivos físicos e eletrônicos, colaboração em projetos especiais para alcançar metas, manutenção de registros precisos de clientes."
          competencias='Javascript'
          c1='Javascript'
          c2='React'
          c3='CSS'
          c4='Power BI'
          />
        <CardXp 
          cargo="Analista Administrativo"
          empresa="Rumo Centro Automotivo" 
          descricao="Suporte administrativo em atendimento ao cliente, gestão de documentos e assistência técnica básica, gerenciamento eficiente de arquivos físicos e eletrônicos, colaboração em projetos especiais para alcançar metas, manutenção de registros precisos de clientes."
          c1='Javascript'
          c2='React'
          c3='CSS'
          c4='Power BI'
        />
        </WrapperCargo>



      </Container>
    </>
  );
};

export default XP;
