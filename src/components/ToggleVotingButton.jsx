import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const primaryColor = '#185A9D';
const dangerColor = '#F15E14';
const warningColor = '#F1BE14';

const Button = styled.button`
  color: ${props => props.isVotingOpen ? dangerColor : primaryColor};
  background: #FFF;
  height: 40px;
  border: 2px solid ${props => props.isVotingOpen ? dangerColor : primaryColor};
  margin-left: auto;
  padding: 5px 10px;
  font: inherit;
  width: 150px;
`;

const ToggleVotingButton = ({ isVotingOpen, onToggle }) =>
  <Button isVotingOpen={isVotingOpen} onClick={onToggle}>
    { isVotingOpen ? 'Close Voting' : 'Open Voting' }
  </Button>
;

ToggleVotingButton.propTypes = {
  isVotingOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired
};

export default ToggleVotingButton;
