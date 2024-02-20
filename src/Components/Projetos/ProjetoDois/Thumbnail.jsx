import React, {useState} from 'react';
import Styled from 'styled-components';
import Cover from '../../../img/projeto2.png';
import CoverActive from '../../../img/projeto2ativo.png';


const Container = Styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    align-items: center;
`;

const Pic = Styled.div`
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
