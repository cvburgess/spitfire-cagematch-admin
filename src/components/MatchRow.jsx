import React from 'react';
import styled from 'styled-components';
import { format, isBefore } from 'date-fns';
import ToggleVotingButton from './ToggleVotingButton';
import TeamList from './TeamList';

const primaryColor = '#185A9D';

const Container = styled.div`
  border-bottom: 2px solid #185A9D;
  display: flex;
  align-items: center;
  padding: 20px;
`;

const Datelabel = styled.span`

`;

const MatchRow = ({ id, date, isVotingOpen, teams }) =>
  <Container>
    <Datelabel>{format(date, 'MMM Do')}</Datelabel>
    <TeamList
      canAddTeams={false}
      canRemoveTeams={!isVotingOpen && isBefore(new Date(), date)}
      teams={teams} />
    {isBefore(date, new Date()) ? null :
      <ToggleVotingButton
        isVotingOpen={isVotingOpen}
        onToggle={() => alert('toggle')} />
    }
  </Container>
;

MatchRow.propTypes = {
  id: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired,
  isVotingOpen: React.PropTypes.bool.isRequired,
  teams: React.PropTypes.array,
};

export default MatchRow;
