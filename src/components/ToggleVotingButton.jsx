import React from 'react';
import styled from 'styled-components';

const primaryColor = '#185A9D';
const secondaryColor = '#43CEA2';
const dangerColor = '#F15E14';
const warningColor = '#F1BE14';

const Button = styled.button`
  color: ${props => props.isVotingOpen ? dangerColor : primaryColor};
  height: 40px;
  border: 2px solid ${props => props.isVotingOpen ? dangerColor : primaryColor};
`;

const ToggleVotingButton = ({ isVotingOpen, onToggle }) =>
  <Button isVotingOpen={isVotingOpen} onClick={onToggle}>
    { isVotingOpen ? 'Close Voting' : 'Open Voting' }
  </Button>
;

ToggleVotingButton.propTypes = {
  isVotingOpen: React.PropTypes.boolean.isRequired,
  onToggle: React.PropTypes.function.isRequired
};

export default ToggleVotingButton;
