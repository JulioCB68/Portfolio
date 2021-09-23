import React, {
  useState
} from 'react';

import Banner from './assets/images/banner.svg';

import Button from './components/Button';

import GlobalStyle from './styles/GlobalStyles';
import {
  Container,
  Navbar,
  Logo,
  Hamburger,
  Menu,
  Links,
  Main,
  Resume,
  Text,
  SubText,
  ContainerButtons,
  ImageContainer,
  Image,
} from "./styles/App";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <GlobalStyle />
      <Container>
        <Navbar>
          <Logo href=""> Portfólio </Logo>
          <Hamburger onClick={() => setIsOpen(!isOpen)}>
            <span />
            <span />
            <span />
          </Hamburger>
          <Menu isOpen={isOpen}>
            <Links href="" > Sobre mim </Links>
            <Links href="" > Projetos </Links>
            <Links href="" > Serviços </Links>
            <Links href="" > Minhas skils </Links>
          </Menu>
        </Navbar>
        <Main>
          <Resume>
            <Text> Olá, eu sou Júlio Bento </Text>
            <SubText> Desenvolvedor Front-End & UI Designer </SubText>
            <ContainerButtons>
              <Button primary text="Download CV"/>
              <Button text="Entrar em contato"/>
            </ContainerButtons>
          </Resume>
          <ImageContainer>
            <Image src={Banner} alt="Banner" />
          </ImageContainer>
        </Main >
      </Container>
    </>
  );
}

export default App;