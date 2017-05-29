import React, { Component } from 'react';
import styled from 'styled-components';
import Matches from './containers/Matches';

const Container = styled.div`
  font-family: Open Sans, sans-serif;
  font-size: 16px;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Matches></Matches>
      </Container>
    );
  }
}

export default App;
