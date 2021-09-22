import React, { useState } from 'react';

import GlobalStyle from './styles/GlobalStyles';
import {
  Container,
  Navbar,
  Logo,
  Hamburger,
  Menu,
  Links,
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
            <Links href="">Sobre mim</Links>
            <Links href="">Projetos</Links>
            <Links href="">Serviços</Links>
            <Links href="">Minhas skils </Links>
          </Menu>
        </Navbar>
      </Container>
    </>
  );
}

export default App;
