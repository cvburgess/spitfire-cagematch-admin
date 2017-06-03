import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { format, isBefore } from 'date-fns';
import ToggleVotingButton from './ToggleVotingButton';
import TeamList from './TeamList';

const primaryColor = '#185A9D';

const Container = styled.div`
  border-bottom: 2px solid ${primaryColor};
  display: flex;
  align-items: center;
  padding: 20px;
`;

const Datelabel = styled.span``;

const isTeamIdInMatch = (teamsInMatch, team) => teamsInMatch.find(({ teamId }) => teamId === team);
const teamsNotInMatch = (allTeams, teamsInMatch) => allTeams.filter(({ teamId }) => !isTeamIdInMatch(teamsInMatch, teamId));

const MatchRow = ({
  allTeams,
  createTeamName,
  date,
  isVotingOpen,
  matchId,
  onCreateNameChange,
  onCreateTeamForMatch,
  onRemoveTeamFromMatch,
  onSelectTeam,
  onToggleVoting,
  teamsInMatch
}) =>
  <Container>
    <Datelabel>{format(date, 'MMM Do')}</Datelabel>
    <TeamList
      canAddTeams={!isVotingOpen && isBefore(new Date(), date)}
      canRemoveTeams={!isVotingOpen && isBefore(new Date(), date)}
      createTeamName={createTeamName}
      onCreateNameChange={onCreateNameChange}
      onCreateTeam={() => onCreateTeamForMatch(matchId)}
      onRemoveTeamFromMatch={onRemoveTeamFromMatch}
      onSelectTeam={onSelectTeam}
      teamsInMatch={teamsInMatch}
      teamsNotInMatch={teamsNotInMatch(allTeams, teamsInMatch)} />
    {isBefore(date, new Date()) ? null :
      <ToggleVotingButton
        isVotingOpen={isVotingOpen}
        onToggle={onToggleVoting} />
    }
  </Container>
;

MatchRow.propTypes = {
  matchId: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  isVotingOpen: PropTypes.bool.isRequired,
  teams: PropTypes.array,
};

export default MatchRow;
