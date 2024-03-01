import React, {useState} from 'react';
import Styled from 'styled-components';
import Cover from '../../../img/projeto1.png';
import CoverActive from '../../../img/projeto1ativo.png';
import { device } from '../../Utils/size';


const Container = Styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    align-items: center;
`;

const Pic = Styled.div`
 
`;

const Image = Styled.img`
 @media ${device.mobileL} {
    width: 100%;
  }
`

export const Thumbnail = () => {
  const [over, setOver] = useState(false);
  return (
    <>
      <Container id="projetos">
          <Image           
           onMouseOver={() => setOver(true)}
           onMouseOut={() => setOver(false)}
           src={over ? CoverActive : Cover} alt="arrow" />
      </Container>
    </>
  );
};

export default Thumbnail ;
