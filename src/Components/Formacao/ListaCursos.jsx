import React from 'react'
import Styled from 'styled-components'
import Icone from '../../img/iconeCursos.png'

const Container = Styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Paragrafo = Styled.p`
    font-family: Lora;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: justified;
    color: #2A2623;
`

const Line = Styled.div`
  width: 100%;
  border: 1px solid #726B5C;
  height: 10px;
`

const ListaCursos = ({nome, duracao}) => {
  return (
    <Container>
        <Paragrafo><img src={Icone} alt="icone" />{nome} </Paragrafo>
        <Paragrafo>{duracao}</Paragrafo>
    </Container>
  )
}

export default ListaCursos;