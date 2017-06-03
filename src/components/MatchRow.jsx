import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { format, endOfToday, isAfter, isToday } from 'date-fns';
import ToggleVotingButton from './ToggleVotingButton';
import ToggleResultsButton from './ToggleResultsButton';
import TeamList from './TeamList';

const primaryColor = '#185A9D';

const Container = styled.div`
  border-bottom: 2px solid ${primaryColor};
  display: flex;
  align-items: center;
  padding: 20px;
  flex-wrap: wrap;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 500px) {
    margin-left: auto;
  }
`;

const Datelabel = styled.span``;

const isTeamIdInMatch = (teamsInMatch, team) => teamsInMatch.find(({ teamId }) => teamId === team);
const teamsNotInMatch = (allTeams, teamsInMatch) => allTeams.filter(({ teamId }) => !isTeamIdInMatch(teamsInMatch, teamId));

const MatchRow = ({
  allTeams,
  createTeamName,
  date,
  isVotingOpen,
  isWinnerVisible,
  matchId,
  onCreateNameChange,
  onCreateTeamForMatch,
  onRemoveTeamFromMatch,
  onSelectTeam,
  onToggleVoting,
  toggleResults,
  teamsInMatch
}) =>
  <Container>
    <Datelabel>{format(date, 'MMM Do')}</Datelabel>
    <TeamList
      canAddTeams={!isVotingOpen && !isAfter(endOfToday, date)}
      canRemoveTeams={!isVotingOpen && !isAfter(endOfToday, date)}
      createTeamName={createTeamName}
      onCreateNameChange={onCreateNameChange}
      onCreateTeam={onCreateTeamForMatch}
      onRemoveTeamFromMatch={onRemoveTeamFromMatch}
      onSelectTeam={onSelectTeam}
      teamsInMatch={teamsInMatch}
      teamsNotInMatch={teamsNotInMatch(allTeams, teamsInMatch)} />
    <ButtonContainer>
      {isToday(date) &&
        <ToggleVotingButton
          isVotingOpen={isVotingOpen}
          onClick={onToggleVoting} />
      }
      {isToday(date) && !isVotingOpen &&
        <ToggleResultsButton
          isWinnerVisible={isWinnerVisible}
          onClick={toggleResults} />
      }
    </ButtonContainer>
  </Container>
;

MatchRow.propTypes = {
  matchId: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  isVotingOpen: PropTypes.bool.isRequired,
  teams: PropTypes.array,
};

export default MatchRow;
