import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const primaryColor = '#185A9D';

const Button = styled.button`
  color: #FFF;
  background: ${primaryColor};
  height: 40px;
  border: 2px solid ${primaryColor};
  padding: 5px 10px;
  font: inherit;
  width: 150px;
`;

const ToggleResultsButton = ({ isWinnerVisible, onClick }) =>
  <Button isWinnerVisible={isWinnerVisible} onClick={onClick}>
    { isWinnerVisible ? '◀' : 'Show Results' }
  </Button>
;

ToggleResultsButton.propTypes = {
  isWinnerVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ToggleResultsButton;
