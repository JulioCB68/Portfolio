import React from "react";

import { Container, Project, Title, Techs } from "./styles";

function CardProject() {
  return (
    <Container>
      <Project />
      <Title> Título do projeto </Title>
      <Techs> Tecnologias: HTML, CSS e JS. </Techs>
    </Container>
  );
}

export default CardProject;
