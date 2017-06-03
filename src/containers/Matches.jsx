import React from 'react';
import PropTypes from 'prop-types';
import { isBefore } from 'date-fns';
import { graphql, compose } from 'react-apollo';
import {
  ADD_TEAM_TO_MATCH,
  CLOSE_VOTING_MUTATION,
  CREATE_MATCH_MUTATION,
  CREATE_TEAM_MUTATION,
  MATCHES_AND_TEAMS_QUERY,
  OPEN_VOTING_MUTATION,
  REMOVE_TEAM_FROM_MATCH
} from '../graphql';
import MatchRow from '../components/MatchRow';
import CreateMatch from '../components/CreateMatch';
import Results from '../components/Results';

class Matches extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      creatingDate: "",
      createTeamName: "",
      winningTeam: null
    };
  }

  onAddTeamToMatch = (team, match) => {
    const { addTeamToMatch } = this.props;
    addTeamToMatch(team.teamId, match.matchId);
    this.setState({ createTeamName: "" });
  };

  onRemoveTeamFromMatch = (team, match) => {
    const { removeTeamFromMatch } = this.props;
    removeTeamFromMatch(team.teamId, match.matchId);
  };

  onCreateMatch = () => {
    const { createMatch } = this.props;
    const { creatingDate } = this.state;
    createMatch(creatingDate);
    this.setState({ creatingDate: "" });
  };

  onCreateTeamForMatch = (match) => {
    const { createTeamName } = this.state;
    const { createTeam } = this.props;
    createTeam(createTeamName)
    .then(res => {
      const team = res.data.createTeam;
      this.onAddTeamToMatch(team, match);
      this.setState({ createTeamName: "" });
    });
  }

  onDateChange = (event) => {
    this.setState({ creatingDate: event.target.value });
  };

  onCreateNameChange = (event) => {
    this.setState({ createTeamName: event.target.value });
  };

  toggleResultsForMatch = (match) => {
    const winningTeam = match && match.teams && match.teams[0];
    this.setState((state, props) => ({
      winningTeam: state.winningTeam ? null : winningTeam
    }));
  };

  toggleVotingForMatch = (matchId, isVotingOpen) => {
    const { closeVoting, openVoting } = this.props;
    isVotingOpen ? closeVoting(matchId) : openVoting(matchId);
  };

  render() {
    const { data: { matches, teams, loading, error } } = this.props;
    const { creatingDate, createTeamName, winningTeam } = this.state;

    return (
      <div>
        {loading && <h1>Loading...</h1>}
        {error && <h1>ERROR</h1>}
        {winningTeam &&
          <Results
            toggleResults={this.toggleResultsForMatch}
            winningTeam={winningTeam} />}
        {!winningTeam &&
          <CreateMatch
            date={creatingDate}
            onDateChange={this.onDateChange}
            onCreateMatch={this.onCreateMatch} />
        }
        {!winningTeam && matches && matches.map(match =>
          <MatchRow
            key={match.matchId}
            allTeams={teams}
            createTeamName={createTeamName}
            date={match.date}
            isVotingOpen={match.isVotingOpen}
            isWinnerVisible={Boolean(winningTeam)}
            matchId={match.matchId}
            onCreateNameChange={this.onCreateNameChange}
            onCreateTeamForMatch={() => this.onCreateTeamForMatch(match)}
            onRemoveTeamFromMatch={(team) => this.onRemoveTeamFromMatch(team, match)}
            onSelectTeam={(team) => this.onAddTeamToMatch(team, match)}
            onToggleVoting={() => this.toggleVotingForMatch(match.matchId, match.isVotingOpen)}
            toggleResults={() => this.toggleResultsForMatch(match)}
            teamsInMatch={match.teams} />
        )}
      </div>
    )
  }
}

Matches.propTypes = {
  matches: PropTypes.array
};

export default compose(
  graphql(MATCHES_AND_TEAMS_QUERY),
  graphql(OPEN_VOTING_MUTATION, {
    props: ({ mutate }) => ({
      openVoting: (matchId) => mutate({ variables: { matchId } }),
    }),
  }),
  graphql(CLOSE_VOTING_MUTATION, {
    props: ({ mutate }) => ({
      closeVoting: (matchId) => mutate({
        variables: { matchId },
        update: (proxy, { data: { closeVoting } }) => {
          const data = proxy.readQuery({ query: MATCHES_AND_TEAMS_QUERY });
          const sortByVotes = (teamA, teamB) => teamB.votes.length - teamA.votes.length;
          const matches = data.matches.map(match => {
            const teams = match.teams.sort(sortByVotes);
            return Object.assign(match, { teams });
          });
          const sortedData = Object.assign(data, { matches });
          proxy.writeQuery({ query: MATCHES_AND_TEAMS_QUERY, data: sortedData });
        }
      }),
    }),
  }),
  graphql(CREATE_MATCH_MUTATION, {
    props: ({ mutate }) => ({
      createMatch: (date) => mutate({
        variables: { date },
        update: (proxy, { data: { createMatch } }) => {
          const data = proxy.readQuery({ query: MATCHES_AND_TEAMS_QUERY });
          data.matches.push(createMatch);
          data.matches.sort((matchA, matchB) => isBefore(matchA.date, matchB.date));
          proxy.writeQuery({ query: MATCHES_AND_TEAMS_QUERY, data });
        }
      }),
    }),
  }),
  graphql(CREATE_TEAM_MUTATION, {
    props: ({ mutate }) => ({
      createTeam: (name) => mutate({
        variables: { name },
        update: (proxy, { data: { createTeam } }) => {
          const data = proxy.readQuery({ query: MATCHES_AND_TEAMS_QUERY });
          data.teams.push(createTeam);
          proxy.writeQuery({ query: MATCHES_AND_TEAMS_QUERY, data });
        }
      }),
    }),
  }),
  graphql(ADD_TEAM_TO_MATCH, {
    props: ({ mutate }) => ({
      addTeamToMatch: (teamId, matchId) => mutate({ variables: { matchId, teamId } }),
    }),
  }),
  graphql(REMOVE_TEAM_FROM_MATCH, {
    props: ({ mutate }) => ({
      removeTeamFromMatch: (teamId, matchId) => mutate({ variables: { matchId, teamId } }),
    }),
  })
)(Matches);
