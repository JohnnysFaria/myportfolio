import React from 'react';
import { useState } from 'react';
import Styled from 'styled-components';
import Profilep from '../../img/profilepic.png';
import Mypic from '../../img/profilepicactive.png';
import { device } from '../Utils/size'





export const Pic = () => {
  const [over, setOver] = useState(false);
  return (
    <>
        <div
          onMouseOver={() => setOver(true)}
          onMouseOut={() => setOver(false)}
        >
          <img src={over ? Mypic : Profilep} alt="arrow" />
        </div>
    </>
  );
};

export default Pic;
