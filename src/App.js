import React, { useState } from "react";

import Banner from "./assets/images/banner.svg";
import Face from "./assets/icons/smile.svg";
import Email from "./assets/icons/mail.svg";
import Instagram from "./assets/icons/instagram.svg";
import Phone from "./assets/icons/phone.svg";
import Code from "./assets/icons/code.svg";
import Figma from "./assets/icons/figma.svg";
import Smartphone from "./assets/icons/smartphone.svg";
import Html from "./assets/images/html.svg";
import Css from "./assets/images/css.svg";
import Js from "./assets/images/javascript.svg";
import Tailwind from "./assets/images/tailwind.svg";
import ReactJS from "./assets/images/react.svg";
import Next from "./assets/images/next.svg";

import Button from "./components/Button";
import Card from "./components/Card/index";
import CardProject from "./components/CardProject";
import CardServices from "./components/CardServices";
import CardSkills from "./components/CardSkills";

import GlobalStyle from "./styles/GlobalStyles";
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
  About,
  AboutMe,
  Contact,
  Projects,
  ProjectTitle,
  Project,
  Services,
  ServicesTitle,
  Service,
  Skills,
  SkillsTitle,
  Skill,
  Footer,
  TextFooter,
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
            <Links href=""> Sobre mim </Links>
            <Links href=""> Projetos </Links>
            <Links href=""> Serviços </Links>
            <Links href=""> Minhas skils </Links>
          </Menu>
        </Navbar>
        <Main>
          <Resume>
            <Text> Olá, eu sou Júlio Bento </Text>
            <SubText> Desenvolvedor Front-End & UI Designer </SubText>
            <ContainerButtons>
              <Button primary text="Download CV" />
              <Button text="Entrar em contato" />
            </ContainerButtons>
          </Resume>
          <ImageContainer>
            <Image src={Banner} alt="Banner" />
          </ImageContainer>
        </Main>
        <About>
          <h1> Sobre mim </h1>
          <AboutMe>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident
          </AboutMe>
          <Contact>
            <Card icon={Face} name="Meu Nome" text="Júlio César Bento" />
            <Card icon={Email} name="E-mail" text="juliobento237@gmail.com" />
            <Card icon={Instagram} name="Instagram" text="@jcbento_" />
            <Card icon={Phone} name="Telefone" text="(19) 98987-1941" />
          </Contact>
        </About>
        <Projects>
          <ProjectTitle> Sobre mim </ProjectTitle>
          <Project>
            <CardProject />
            <CardProject />
            <CardProject />
            <CardProject />
            <CardProject />
            <CardProject />
          </Project>
        </Projects>
        <Services>
          <ServicesTitle> Serviços </ServicesTitle>
          <Service>
            <CardServices icon={Code} text="Criação de sites" />
            <CardServices icon={Figma} text="UI Designer" />
            <CardServices icon={Smartphone} text="Sites responsivos" />
          </Service>
        </Services>
        <Skills>
          <SkillsTitle> Minhas skills </SkillsTitle>
          <Skill>
            <CardSkills image={Html} />
            <CardSkills image={Css} />
            <CardSkills image={Js} />
            <CardSkills image={Tailwind} />
            <CardSkills image={ReactJS} />
            <CardSkills image={Next} />
          </Skill>
        </Skills>
      </Container>
        <Footer>
          <TextFooter>
            Orgulhosamente feito por <span> Júlio Bento </span>
          </TextFooter>
        </Footer>
    </>
  );
}

export default App;
