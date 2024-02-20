import React from 'react';
import Styled from 'styled-components';
import { device } from '../../Utils/size'

const InfoText = Styled.div`
    display:flex;
    padding: 14px;
    margin-left: 1rem;  

    @media ${device.tablet} {
      margin: 0 auto;
      padding: 0;
    }
`;

const Textcontainer = Styled.div`
  text-align:left;

`;

const P = Styled.p`
  font-family: Lora;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.02em;
  text-align:justify;

  @media ${device.tablet} {
    font-size: 16px;
    line-height: 21px;
    }
`;



export const InfoProjeto = () => {
  return (
    <InfoText>
      <Textcontainer>

        <P>
            <strong>
            Projeto Dois<br/>
            </strong> 

          No mundo da criação web, o projeto de front-end é a peça-chave que dá vida a websites e aplicativos. É a arte de traduzir conceitos e visões em interfaces digitais atraentes e funcionais. Neste processo, designers e desenvolvedores trabalham em conjunto para moldar a experiência online.

          Imagine a internet como um palco, e o front-end como o cenário. Cada elemento visual, de cores a tipografia, é cuidadosamente escolhido para criar uma identidade única. A estética é importante, mas vai além disso. O design de front-end visa tornar a navegação intuitiva, proporcionando aos usuários uma jornada fluida pela informação.

          Imagine a internet como um palco, e o front-end como o cenário. Cada elemento visual, de cores a tipografia, é cuidadosamente escolhido para criar uma identidade única. A estética é importante, mas vai além disso. O design de front-end visa tornar a navegação intuitiva, proporcionando aos usuários uma jornada fluida pela informação.

          Imagine a internet como um palco, e o front-end como o cenário. Cada elemento visual, de cores a tipografia, é cuidadosamente escolhido para criar uma identidade única. A estética 
     
        </P>
      </Textcontainer>

    </InfoText>
  );
};

export default InfoProjeto;