import React from 'react'
import Styled from 'styled-components';
import Tel from '../../img/telefone.png'
import Mail from '../../img/mail.png'

const Container = Styled.div`
    display: flex;
    width: 100%;
    background: #292421;
`

const Parafrago = Styled.p`
    font-family: Playfair Display;
    font-size: 32px;
    font-weight: 700;
    line-height: 43px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #F4F4F2;
`

const Contato = Styled.div`
    font-family: Lora;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
`

export const Footer = () => {
  return (
    <>
    <Container>
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