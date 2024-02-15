import React from 'react'
import ProjetoUm from './ProjetoUm/ProjetosUm'
import ProjetoDois from './ProjetoDois/ProjetoDois'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
`

const Wrapper = styled.div`
    width: 100%;
    margin: 20px 0;
    border: 2px solid #2A2623;
`

export const SectionProjects = () => {
  return (
    <Container>
          <ProjetoUm/>
        <Wrapper/>
          <ProjetoDois/>
    </Container>
  )
}

export default SectionProjects;
