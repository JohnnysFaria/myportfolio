import React from 'react'
import Styled from 'styled-components'

const Cargo = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background:#D9D9D9;
  width:100%;
  border: 4px solid #2A2623;
  margin: 10px 0; 
  padding: 10px;
  font-family: Playfair Display;
  font-size: 12px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0.02em;
`
const DadosEmpresa = Styled.h1`
display: flex;
align-items:center;

`
const Eclipse = Styled.div`
  width: 5px;
  height: 5px;
  background: #2A2623;
  border-radius:50%;
  margin: 10px;
`
const P = Styled.p`
    font-family: Playfair Display;
  font-size: 12px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0.02em;
`


const CardXp = ({cargo, empresa}) => {
  return (
    <div>
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
    </div>
  )
}

export default CardXp