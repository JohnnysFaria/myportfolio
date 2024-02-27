import React from 'react'
import Styled from 'styled-components'
import { TituloH2 } from '../Utils/Titles'
import Icone from '../../img/iconeCursos.png'
import ListaCursos from './ListaCursos'





const Cursos = () => {
  return (
    <>
    <div>
        <TituloH2 titulo='Cursos Intensivos' />
        <ListaCursos nome='React: Comece seu produto full stack' duracao='120h' />
        <ListaCursos nome='Node.js: testes unitários e de integração' duracao='120h' />
        <ListaCursos nome='Tailwind CSS: Estilizando a sua página com classes utilitárias' duracao='120h' />
        <ListaCursos nome='HTTP: Entendendo a web por baixo dos panos' duracao='120h' />
        <ListaCursos nome='Next.js: Explorando o framework' duracao='120h' />
    </div>
    <div>
    <TituloH2 titulo='Idioma' />
    </div>
    </>
  )
}

export default Cursos