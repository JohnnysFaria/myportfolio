import React from 'react';
import Styled from 'styled-components';
import { device } from '../Utils/size'

const Container = Styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 30px 10px;
    align-items: center;
    border-bottom: 4px solid #2A2623;

    @media ${device.tablet} {
      padding: 30px 0 0 0;
    }
`;
const Title = Styled.div`
    font-family: Playfair Display;
    font-size: 64px;
    font-weight: 700;
    line-height: 85px;
    letter-spacing: 0.02em;
    text-align: center;

    @media ${device.tablet} {
      font-size: 22px;
      line-height: 26px;
  }


`;
const H2 = Styled.h2`
    font-family: Lora;
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0.02em;
    text-align: left;

    @media ${device.tablet} {
      font-size: 10px;
      line-height: 12px;
  }
`;
const H3 = Styled.h3`
    font-family: Lora;
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0.02em;
    text-align: right;

    @media ${device.tablet} {
      font-size: 10px;
      line-height: 12px;
  }
`;
const Container2 = Styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    align-items: center;
`;
const Subtitle = Styled.h4`
    font-family: Lora;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.02em;
    text-align: left;
`;



export const Header = () => {
  return (
    <>
      <Container id='hero'>
        <H2>
          Desenvolvedor <br />
          Front End
        </H2>
        <Title>JOHNNY FARIA</Title>
        <H3>
          Localizado em <br />
          São Paulo
        </H3>
      </Container>
      <Container2>
        <Subtitle>
          <li>JavaScript</li>
        </Subtitle>
        <Subtitle>
          <li>React</li>
        </Subtitle>
        <Subtitle>
          <li>CSS</li>
        </Subtitle>
      </Container2>
    </>
  );
};

export default Header;
