import React from 'react'
import Cards from './Cards'
import {Titles} from '../Utils/Titles';
import Styled from 'styled-components';
import { device } from '../Utils/size'
import Cursos from './Cursos';

const Container = Styled.div`
    display: flex;

    @media ${device.tablet} {
        flex-wrap: wrap;
        justify-content: center;
    }
`

const Formacao = () => {
  return (
    <>
        <Titles title='Algo aqui'/>
    <Container>
        <Cards modalidade='Graduação' text='Analise e Desenvolvimento de Sistemas' instituicao='Uninove' />
        <Cards modalidade='Graduação' text='Analise e Desenvolvimento de Sistemas' instituicao='Uninove' />
        <Cards modalidade='Graduação' text='Analise e Desenvolvimento de Sistemas' instituicao='Uninove' />
        <Cards modalidade='Graduação' text='Analise e Desenvolvimento de Sistemas' instituicao='Uninove' />
    </Container>
    <Cursos/>
    </>
  )
}

export default Formacao;
