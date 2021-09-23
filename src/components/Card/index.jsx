import React from 'react';
  
  import { Card, Icon, ContainerIcon, Title, Text } from "./styles";
  
  function index(props) {
    return (
      <Card>
          <ContainerIcon>
            <Icon src={props.icon}/>
          </ContainerIcon>
          <Title> {props.name} </Title>
          <Text> {props.text} </Text>
      </Card>
    );
  }
  
  export default index;