import React from 'react';
import { useState } from 'react';
import Styled from 'styled-components';
import Profilep from '../../img/profilepic.png';
import Mypic from '../../img/profilepicactive.png';
import { device } from '../Utils/size'



const Pic = Styled.div`

`;

export const Profile = () => {
  const [over, setOver] = useState(false);
  return (
    <>
        <Pic
          onMouseOver={() => setOver(true)}
          onMouseOut={() => setOver(false)}
        >
          <img src={over ? Mypic : Profilep} alt="arrow" />
        </Pic>
    </>
  );
};

export default Profile;
