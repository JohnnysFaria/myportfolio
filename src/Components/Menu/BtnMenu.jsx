import React from 'react';
import Styled from 'styled-components';

const ButtonMenu = Styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    border: 1px solid #968879; 
    background: linear-gradient(0deg, #DAD5CE, #DAD5CE);
    text-decoration:none;
    font-family: Playfair Display;
    font-size: 16px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #2A2623;
    &:hover,
    &:focus{
    background: #292421;
    color: #DAD5CE;
}`;

const BtnMenu = ({ text }) => {
  return (
    <>
      <ButtonMenu>{text}</ButtonMenu>
    </>
  );
};

export default BtnMenu;
