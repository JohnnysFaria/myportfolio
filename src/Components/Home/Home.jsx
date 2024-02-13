import React from 'react';
import Styled from 'styled-components';
import Titles from '../Utils/Titles';

const A = Styled.div`
    width: 100%;
    height: 500px;
    background: tomato;
`;

const Home = () => {
  return (
    <>
      <Titles title="Algo escrito" />
      <A>Aqui será o Home</A>
    </>
  );
};

export default Home;
