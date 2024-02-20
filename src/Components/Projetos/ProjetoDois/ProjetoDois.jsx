import React from 'react'
import Styled from 'styled-components';
import InfoProjeto from './InfoProjeto';
import Thumbnail from './Thumbnail';
import BtnProjeto from '../BtnProjeto';
import { device } from '../../Utils/size';  

const Section = Styled.section`
    display: flex;
    flex-wrap: wrap;
`

const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
      flex-direction: column;
  }
`;

const WrapperBtn = Styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  @media ${device.tablet} {
    justify-content: center;
  }

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
