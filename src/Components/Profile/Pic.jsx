import React from 'react';
import { useState } from 'react';
import Profilep from '../../img/profilepic.png';
import Mypic from '../../img/profilepicactive.png';



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
