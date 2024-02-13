import React from 'react';
import Styled from 'styled-components';
import Titles from '../Utils/Titles';

const A = Styled.div`
    width: 100%;
    height: 500px;
    background: tomato;
`;

const XP = () => {
  return (
    <>
      <Titles title="XP" />
      <A id="xp">XP PAGE</A>
    </>
  );
};

export default XP;
