import React from 'react'
import Styled from 'styled-components';
import Tel from '../../img/telefone.png'
import Mail from '../../img/mail.png'
import {device} from '../Utils/size'

const Container = Styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: #292421;
    padding: 40px;
  

    @media ${device.mobileL} {
        flex-wrap: wrap;
        margin: 20px 0;
    }
`

const Parafrago = Styled.p`
    max-width: 603px;
    font-family: Playfair Display;
    font-size: 32px;
    font-weight: 700;
    line-height: 43px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #F4F4F2;

    @media ${device.tablet} {
        font-size: 16px;
        line-height: 22px;
    }
`

const Contato = Styled.div`
    display: flex;
    align-items: center;
    font-family: Lora;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #F7F7F7;


`

export const Footer = () => {
  return (
    <>
    <Container id='contato'>
        <Parafrago>Estou disponível para novos projetos no momento. Entre em contato comigo e marcamos uma conversa. ☕</Parafrago>
        <Contato>
            <div>
                <img src={Tel} alt="" />
             <span>(11) 95084-9398</span>
            </div>
            <div>
                <img src={Mail} alt="" />
                <span>johnnys.faria@gmail.com</span>
            </div>
        </Contato>
    </Container>
    </>
  )
}

export default Footer;