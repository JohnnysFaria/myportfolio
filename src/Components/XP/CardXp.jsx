import React from 'react'
import Styled from 'styled-components'

const Card = Styled.div`
  background:#D9D9D9; 
  width:100%;
  border: 4px solid #2A2623;
  margin: 25px 0; 
  padding: 10px;

`

const Cargo = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`
const DadosEmpresa = Styled.h1`
  display: flex;
  align-items:center;
  margin: 5px 0;

`
export const Eclipse = Styled.div`
  width: 5px;
  height: 5px;
  background: #2A2623;
  border-radius:50%;
  margin: 0px 10px 0 10px;
`
const P = Styled.p`
  font-family: Playfair Display;
  font-size: 12px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0.02em;
`

const Descricao = Styled.span`
  font-family: Lora;
  font-family: Lora;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: justify;
  margin-bottom: 10px;
`

const Competencias = Styled.div`
  margin-top: 10px; 
  padding-top: 10px;
  border-top: 1px solid #857F6D;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
n;
`
const Value = Styled.div`
  font-family: Lora;
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: justify;
`

const CardXp = ({cargo, empresa, descricao, c1, c2, c3, c4}) => {
  return (
    <Card>
    <Cargo>
        <DadosEmpresa>
        <P>
        {cargo}
        </P>
          <Eclipse></Eclipse>
        <P>
        {empresa}
        </P>
        </DadosEmpresa>
        <P>
          2022/2023
        </P>
    </Cargo>
        <Descricao>
        <strong>Principais atividades: </strong> {descricao}
        </Descricao>
        <Competencias>
          <Value>{c1}</Value>
          <Value>{c2}</Value>
          <Value>{c3}</Value>
          <Value>{c4}</Value>
        </Competencias>
    </Card>
  )
}

export default CardXp