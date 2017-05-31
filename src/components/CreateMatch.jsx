import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const primaryColor = '#185A9D';

const Container = styled.div`
  height: 40px;
  color: #FFF;
  background: ${primaryColor};
  padding: 20px;
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

  &:focus {
    outline: none;
  }
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

const CreateMatch = ({ date, onDateChange, onCreateMatch }) =>
  <Container>
    <span>Create match</span>
    <Input
      onChange={onDateChange}
      type="date"
      value={date} />
    {date ? <Button onClick={onCreateMatch}>Create</Button> : null}
  </Container>
;

CreateMatch.propTypes = {
  date: PropTypes.string,
  onDateChange: PropTypes.func,
  onCreateMatch: PropTypes.func
};

export default CreateMatch;
