import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import ToggleVotingButton from './ToggleVotingButton';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const Datelabel = styled.span`

`;

const MatchRow = ({ id, date, isVotingOpen, teams }) =>
  <Container>
    <Datelabel>{format(date, 'MMM Do')}</Datelabel>
    <ToggleVotingButton
      isVotingOpen={isVotingOpen}
      onToggle={() => alert('toggle')} />
  </Container>
;

MatchRow.propTypes = {
  id: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired,
  isVotingOpen: React.PropTypes.bool.isRequired,
  teams: React.PropTypes.array,
};

export default MatchRow;
