import React from 'react';
import { useState } from 'react';
import Styled from 'styled-components';
import Profilep from '../../img/profilepic.png';
import Mypic from '../../img/profilepicactive.png';

const Container = Styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    align-items: center;
  
`;

const Pic = Styled.div`
    width: 100%;
`;

export const Profile = () => {
  const [over, setOver] = useState(false);
  return (
    <>
      <Container>
        <Pic
          onMouseOver={() => setOver(true)}
          onMouseOut={() => setOver(false)}
        >
          <img src={over ? Mypic : Profilep} alt="arrow" />
        </Pic>
      </Container>
    </>
  );
};

export default Profile;
