import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ToggleResultsButton from './ToggleResultsButton';

const primaryColor = '#185A9D';

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

  & * {
    flex: 1 100%;
  }
`;

const Results = ({ winningTeam, toggleResults }) =>
  <Container>
    <h2>The winner is...</h2>
    <h1>{winningTeam.name}</h1>
    <ToggleResultsButton
      isWinnerVisible={true}
      onClick={toggleResults} />
  </Container>

Results.propTypes = {
  winningTeam: PropTypes.object
};

export default Results;
