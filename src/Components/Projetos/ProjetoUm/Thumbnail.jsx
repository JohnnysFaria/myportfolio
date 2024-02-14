import React, {useState} from 'react';
import Styled from 'styled-components';
import Cover from '../../../img/projeto1.png';
import CoverActive from '../../../img/projeto1ativo.png';


const Container = Styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    align-items: center;
`;

const Pic = Styled.div`
    width: 100%;
`;

export const Thumbnail = () => {
  const [over, setOver] = useState(false);
  return (
    <>
      <Container id="projetos">
        <Pic
          onMouseOver={() => setOver(true)}
          onMouseOut={() => setOver(false)}
        >
          <img src={over ? CoverActive : Cover} alt="arrow" />
        </Pic>
      </Container>
    </>
  );
};

export default Thumbnail ;
