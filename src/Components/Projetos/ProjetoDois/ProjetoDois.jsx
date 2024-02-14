import React from 'react'
import Styled from 'styled-components';
import InfoProjeto from './InfoProjeto';
import Thumbnail from './Thumbnail';
import BtnProjeto from '../BtnProjeto';

const Section = Styled.section`
    display: flex;
    flex-wrap: wrap;
`

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

const ProjetoDois = () => {
  return (
    <Section>
    <Wrapper>
    <Thumbnail  />
    <InfoProjeto/>
    </Wrapper>
    <WrapperBtn>
    <BtnProjeto/>
    </WrapperBtn>
    </Section>
  )
}

export default ProjetoDois;
