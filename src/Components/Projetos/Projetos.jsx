import React from 'react';
import Styled from 'styled-components';
import Titles from '../Utils/Titles';

const Container = Styled.div`
  width: 100%;
`;

export const Projetos = () => {
  return (
    <>
      <Container id="projetos">
        <Titles title="Projetos" />
      </Container>
    </>
  );
};

export default Projetos;
