import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import ToggleResultsButton from './ToggleResultsButton';

const primaryColor = '#185A9D';

const changeColor = keyframes`
  0% { background-color: #FFF; }
  20% { background-color: #f1be14; }
  30% { background-color: #FFF; }
  50% { background-color: #be14f1; }
  60% { background-color: #FFF; }
  70% { background-color: #185A9D; }
`;

const Container = styled.div`
  color: #FFF;
  background: ${primaryColor};
  font: inherit;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  animation: ${changeColor} 10s;

  & Button {
    margin-top: auto;
    width: 100%;
  }
`;

const appear = keyframes`
  0% { opacity:0; }
  66% { opacity:0; }
  100% { opacity:1; }
`;

const Winner = styled.span`
  font-size: 64px;
  margin-top: 30%;
  animation: ${appear} 10s;
`;

const Results = ({ winningTeam, toggleResults }) =>
  <Container>
    <Winner>{winningTeam.name}</Winner>
    <ToggleResultsButton
      isWinnerVisible={true}
      onClick={toggleResults} />
  </Container>

Results.propTypes = {
  winningTeam: PropTypes.object
};

export default Results;
