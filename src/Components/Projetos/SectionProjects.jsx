import React from 'react'
import ProjetoUm from './ProjetoUm/ProjetosUm'
import ProjetoDois from './ProjetoDois/ProjetoDois'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    border-top: 4px solid #2A2623;
    padding: 20px 0;
`

export const SectionProjects = () => {
  return (
    <div>
        <Wrapper>
        <ProjetoUm/>
        </Wrapper>
        <Wrapper>
        <ProjetoDois/>
        </Wrapper>
    </div>
  )
}

export default SectionProjects;
