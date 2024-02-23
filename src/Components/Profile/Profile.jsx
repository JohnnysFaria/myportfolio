import React from 'react'
import Styled from 'styled-components';
import Pic from './Pic';
import { Sobre } from './Sobre';
import { device } from '../Utils/size'

const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.tablet} {
      flex-direction: column;
  }
`;

export const Profile = () => {
  return (
    <Wrapper>
        <Pic/>
        <Sobre/>
    </Wrapper>
  )
}
