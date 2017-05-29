import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AddTeam from './AddTeam';

const secondaryColor = '#43CEA2';
const dangerColor = '#F15E14';
const warningColor = '#F1BE14';

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
  background: ${warningColor}
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

const sortByVotes = (teamA, teamB) => teamB.votes.length - teamA.votes.length;

const TeamList = ({ canAddTeams, canRemoveTeams, onSelectTeam, teamsInMatch, teamsNotInMatch }) =>
  <List>
    {teamsInMatch.sort(sortByVotes).map(team =>
      <Item key={team.id}>
        <VotesBadge>{team.votes.length}</VotesBadge>
        <TeamName>{team.name}</TeamName>
        {canRemoveTeams ? <RemoveTeamButton>X</RemoveTeamButton> : null}
      </Item>
    )}
    {canAddTeams ?
      <Item>
        <AddBadge>+</AddBadge>
        <AddTeam
          onSelectTeam={onSelectTeam}
          teams={teamsNotInMatch}>
        </AddTeam>
      </Item>
    : null}
  </List>
;

TeamList.propTypes = {
};

export default TeamList;
