import React, { useState } from 'react';
  
  import { Button, Text } from "./style";
  
  function index(props) {
    return (
      <Button primary={props.primary}>
          <Text> {props.text} </Text>
      </Button>
    );
  }
  
  export default index;