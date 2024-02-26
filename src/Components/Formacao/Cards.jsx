import React, { useState } from 'react'
import Styled from 'styled-components'
import Caneta from '../../img/caneta.svg'
import CanetaOn from '../../img/canetaLaranga.svg'

const Card = Styled.div`
    background: #D9D9D9D9;
    padding: 15px;
    margin: 10px;
`
const Writter = Styled.div`
    font-size: 16px;
    line-height: 23px;
    max-width: 222px;
    min-width:160px;
    min-height: 150px;
    border: 1px solid #857F6D;
`
const Image = Styled.div`
    position: relative;
    top: -20px;
    left: 50px;
`

const Cards = ({modalidade, text, instituicao}) => {
    const [over, setOver] = useState(false);
  return (

    <>



        <Card>

            <Writter>
            <Image
          onMouseOver={() => setOver(true)}
          onMouseOut={() => setOver(false)}
        >
          <img src={over ? CanetaOn : Caneta} alt="arrow" />
        </Image>
            <p>{modalidade}</p>  
            <p>{text}</p> 
            <p>{instituicao}</p> 
            </Writter>
        </Card>
    </>
  )
}

export default Cards;