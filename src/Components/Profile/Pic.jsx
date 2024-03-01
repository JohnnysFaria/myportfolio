import React from 'react';
import { useState } from 'react';
import Profilep from '../../img/profilepic.png';
import Mypic from '../../img/profilepicactive.png';
import { device } from '../Utils/size';
import Styled from 'styled-components';

const Image = Styled.img`
  @media ${device.mobileS} {
    max-width: 300px;
  }
`

export const Pic = () => {
  const [over, setOver] = useState(false);
  return (
    <>
        <div
          onMouseOver={() => setOver(true)}
          onMouseOut={() => setOver(false)}
        >
          <Image src={over ? Mypic : Profilep} alt="arrow" />
        </div>
    </>
  );
};

export default Pic;
