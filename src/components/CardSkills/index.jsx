import React from 'react';

import { Container, Image } from './styles';

function CardSkills(props) {
  return(
    <Container>
      <Image src={props.image} />
    </Container>
  );
}

export default CardSkills;