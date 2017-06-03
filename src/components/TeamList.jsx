import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AddTeam from './AddTeam';

const primaryColor = '#185A9D';
const secondaryColor = '#43CEA2';
const dangerColor = '#F15E14';

const List = styled.ul`
  list-style-type: none;
`;

const Item = styled.li`
  margin: 5px 0;
  display-flex;
  align-items: center;
`;

const VotesBadge = styled.div`
  font-size: 14px;
  margin: 10px;
  color: #FFF;
  background: ${secondaryColor};
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  border-radius: 5px;
`;

const AddBadge = VotesBadge.extend`
  background: #FFF;
`;

const TeamName = styled.span`
  margin-right: 40px;
`;

const RemoveTeamButton = styled.button`
  font-size: 10px;
  margin-left: auto;
  color: #FFF;
  background: ${dangerColor};
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 10px;
  border-radius: 20px;
  border: none;
`;

const CreateTeamButton = RemoveTeamButton.extend`
  background: ${primaryColor};
  margin-left: 10px;
`;

const TeamList = ({
  canAddTeams,
  canRemoveTeams,
  createTeamName,
  onCreateNameChange,
  onRemoveTeamFromMatch,
  onCreateTeam,
  onSelectTeam,
  teamsInMatch,
  teamsNotInMatch
}) =>
  <List>
    {teamsInMatch.map(team =>
      <Item key={team.teamId}>
        <VotesBadge>{team.votes.length}</VotesBadge>
        <TeamName>{team.name}</TeamName>
        {canRemoveTeams ? <RemoveTeamButton onClick={() => onRemoveTeamFromMatch(team)}>X</RemoveTeamButton> : null}
      </Item>
    )}
    {canAddTeams ?
      <Item>
        <AddBadge>+</AddBadge>
        <AddTeam
          createTeamName={createTeamName}
          onCreateNameChange={onCreateNameChange}
          onSelectTeam={onSelectTeam}
          teams={teamsNotInMatch}>
        </AddTeam>
        <CreateTeamButton onClick={onCreateTeam}>▶</CreateTeamButton>
      </Item>
    : null}
  </List>
;

TeamList.propTypes = {
  canAddTeams: PropTypes.bool,
  canRemoveTeams: PropTypes.bool,
  onSelectTeam: PropTypes.func,
  teamsInMatch: PropTypes.array,
  teamsNotInMatch: PropTypes.array
};

export default TeamList;
