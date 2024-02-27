import React from 'react';
import Styled from 'styled-components';
import { device } from '../Utils/size'

const SobreText = Styled.div`
    display:flex;
    border: 2px dotted #2A2623;
    padding: 14px;
    margin-left: 1rem;  

    @media ${device.tablet} {
      margin: 0 auto;
      margin-top: 20px;
      padding: 20px;
    }
`;

const Text = Styled.div`
  display: flex;
  align-items:center;
  text-align: justify;
`;

const Textcontainer = Styled.div`
  text-align:left;
`;

const P = Styled.p`
  text-align:justify;
  font-family: Lora;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.02em;
  text-align: justify;

  @media ${device.tablet} {
    font-size: 16px;
    line-height: 21px;
  }
`;

const O = Styled.p`
  width: 24px;
  height: 40px;
  padding: 2px;
  border-radius: 4px;
  color: white;
  background: #2A2623;
  text-align: center;
  font-family: Lora;
  font-size: 28px;
  font-weight: 700;
  margin:0;
  margin-right: 0.2rem;

  @media ${device.tablet} {
    width: 26px;
    height: 55px;
  }
`;

export const Sobre = () => {
  return (
    <SobreText>
      <Textcontainer>
        <Text>
          <O>O</O>
          <P>
            lá! Imagine um mundo onde a curiosidade é a bússola que guia os
            passos de alguém.
          </P>
          </Text>
        <P>
          Nesse cenário, conheça Johnny Faria, um explorador incansável do
          conhecimento e da criatividade. Com olhos brilhantes e mente
          inquisitiva, Johnny Faria é como um arqueólogo do século 21,
          desenterrando tesouros de sabedoria em cada canto da internet. Seu
          intelecto é como um caleidoscópio, refletindo uma variedade infinita
          de interesses e paixões.
        </P>
        <P>
          Nesse cenário, conheça [Seu Nome], um explorador incansável do
          conhecimento e da criatividade. Com olhos brilhantes e mente
          inquisitiva, [Seu Nome] é como um arqueólogo do século 21,
          desenterrando tesouros de sabedoria em cada canto da internet. Seu
          intelecto é como um caleidoscópio, refletindo uma variedade infinita
          de interesses e paixões.
        </P>

        
      </Textcontainer>
    </SobreText>
  );
};


export default Sobre;