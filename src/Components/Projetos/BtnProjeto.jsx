import React from 'react'
import styled from 'styled-components'
import Arrow from '../../img/arrow.png'

const Btn = styled.button`
    display: flex;
    align-items: center;
    text-align: center;
    border-radius: 2px;
    border: none;
    background: #D5723A;
    box-shadow: 0px 2px 6px 0px #2F2F2F1A;
    cursor: pointer;
    border: none;
    transition: 0.1s;
    padding: 0.8rem 1.6rem;
    margin-top: 20px;
`
const P = styled.p`
  margin-right: 0.5rem;
`

const BtnProjeto = () => {
  return (
    <Btn>
      <P>Ver Projeto</P>
      <img src={Arrow}/>   
    </Btn>
  )
}

export default BtnProjeto