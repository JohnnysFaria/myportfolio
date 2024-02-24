import React from 'react';
import Styled from 'styled-components';
import Titles from '../Utils/Titles';
import PicProject from '../../img/projeto1.png';

const Container = Styled.div`
  width: 100%;
`;

const Pic = Styled.div`
    width: 100%;
`;

export const Projetos = () => {
  // const [over, setOver] = useState(false);
  return (
    <>
      <Container id="projetos">
        <Titles title="Projetos" />
        <p>
          Projeto Um No mundo da criação web, o projeto de front-end é a
          peça-chave que dá vida a websites e aplicativos. É a arte de traduzir
          conceitos e visões em interfaces digitais atraentes e funcionais.
          Neste processo, designers e desenvolvedores trabalham em conjunto para
          moldar a experiência online. Imagine a internet como um palco, e o
          front-end como o cenário. Cada elemento visual, de cores a tipografia,
          é cuidadosamente escolhido para criar uma identidade única. A estética
          é importante, mas vai além disso. O design de front-end visa tornar a
          navegação intuitiva, proporcionando aos usuários uma jornada fluida
          pela informação. Imagine a internet como um palco, e o front-end como
          o cenário. Cada elemento visual, de cores a tipografia, é
          cuidadosamente escolhido para criar uma identidade única. A estética é
          importante, mas vai além disso. O design de front-end visa tornar a
          navegação intuitiva, proporcionando aos usuários uma jornada fluida
          pela informação. Imagine a internet como um palco, e o front-end como
          o cenário. Cada elemento visual, de cores a tipografia, é
          cuidadosamente escolhido para criar uma identidade única. A estética
        </p>
        <Pic
          onMouseOver={() => setOver(true)}
          onMouseOut={() => setOver(false)}
        >
          <img src={PicProject} />
          {/* <img src={over ? Mypic : Profilep} alt="arrow" /> */}
        </Pic>
      </Container>
    </>
  );
};

export default Projetos;
