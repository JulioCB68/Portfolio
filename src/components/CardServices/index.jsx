import React from 'react';

import { Container, Icon, Text } from './styles';

function CardServices(props) {
  return(
    <Container>
      <Icon src={props.icon} />
      <Text> {props.text} </Text>
    </Container>
  );
}

export default CardServices;