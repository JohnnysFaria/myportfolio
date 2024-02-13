import React from 'react';
import Styled from 'styled-components';

const H1 = Styled.h1`
  width: 100%;
  padding: 0.7rem;
  background: #292421;
  font-family: Playfair Display;
  font-size: 32px;
  font-weight: 700;
  line-height: 43px;
  letter-spacing: 0.02em;
  color: #F7F7F7;
  text-align: center;
`;

export const Titles = ({ title }) => {
  return (
    <>
      <H1>{title}</H1>
    </>
  );
};

export default Titles;
