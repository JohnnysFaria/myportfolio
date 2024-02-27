import React, { useState } from 'react'
import Styled from 'styled-components'
import Caneta from '../../img/caneta.svg'
import CanetaOn from '../../img/canetaLaranga.svg'

const Card = Styled.div`
    background: #D9D9D9D9;
    padding: 15px;
    margin: 10px;
    border: 1px solid black;
`
const Writter = Styled.div`
    max-width: 222px;
    min-width:160px;
    min-height: 150px;
    border: 1px solid #857F6D;
`
const Image = Styled.div`
    position: relative;
    top: -30px;
    left: -25px;
`

const Teste = Styled.div`
  position: absolute;
`

const Box = Styled.div`

    padding: 23px;
`

const Paragrafo = Styled.p`
      font-family: Playfair Display;
      font-size: 14px;
      font-weight: 700;
      line-height: 19px;
      letter-spacing: 0.02em;
      text-align: left;
      padding: 2px;
    &:nth-child(1) {
      color: #857F6D;
    }
    &:nth-child(2) {
      color: #2A2623;
      font-size: 16px;
      line-height: 21.33px;
    }
    &:nth-child(3) {
      color: #843A28;
;
    }
`

const Cards = ({modalidade, text, instituicao}) => {
    const [over, setOver] = useState(false);
  return (

    <>
        <Card>
            <Writter>
        <Teste>
          <Image
              onMouseOver={() => setOver(true)}
              onMouseOut={() => setOver(false)}
              >
              <img src={over ? CanetaOn : Caneta} alt="arrow" />
          </Image>
        </Teste>
        <Box>

            <Paragrafo>{modalidade}</Paragrafo>  
            <Paragrafo>{text}</Paragrafo> 
            <Paragrafo>{instituicao}</Paragrafo> 
        </Box>
            </Writter>
        </Card>
    </>
  )
}

export default Cards;