import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 30px 10px;
    align-items: center;
    border-bottom: 4px solid #2A2623;
`;
const Title = Styled.div`
    font-family: Playfair Display;
    font-size: 64px;
    font-weight: 700;
    line-height: 85px;
    letter-spacing: 0.02em;
    text-align: center;
`;
const H2 = Styled.h2`
    font-family: Lora;
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0.02em;
    text-align: left;
`;
const H3 = Styled.h3`
    font-family: Lora;
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0.02em;
    text-align: right;
`;
const Container2 = Styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
`;
const Subtitle = Styled.h4`
    margin-left:20px;
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
      <Container>
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
