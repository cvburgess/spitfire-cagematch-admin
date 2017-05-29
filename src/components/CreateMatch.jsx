import React from 'react';
import styled from 'styled-components';

const primaryColor = '#185A9D';

const Container = styled.div`
  color: #FFF;
  background: ${primaryColor};
  padding: 10px;
  display: flex;
  align-items: center;
  flex-flow: row wrap;
`;

const Input = styled.input`
  margin: 0 10px;
  background: none;
  border: none;
  border-bottom: 2px solid #FFF;
  color: #FFF;
  text-align: center;
  font: inherit;
`;

const Button = styled.button`
  color: #FFF;
  width: 150px;
  height: 40px;
  background: ${primaryColor};
  border: 2px solid #FFF;
  font: inherit;
  margin-left: auto;
  padding: 5px 10px;
`;

const CreateMatch = ({ onDateChange, onCreateMatch }) =>
  <Container>
    <span>Create match</span>
    <Input type="date" />
    <Button>Create</Button>
  </Container>
;

CreateMatch.propTypes = {
};

export default CreateMatch;
