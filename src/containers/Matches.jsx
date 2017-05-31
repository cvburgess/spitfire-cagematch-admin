import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import {
  CLOSE_VOTING_MUTATION,
  MATCHES_AND_TEAMS_QUERY,
  OPEN_VOTING_MUTATION
} from '../graphql';
import MatchRow from '../components/MatchRow';
import CreateMatch from '../components/CreateMatch';

class Matches extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      creatingDate: "",
      createTeamName: ""
    };
  }

  onAddTeamToMatch = (team, match) => {

  };

  onCreateMatch = () => {
    this.setState({
      creatingDate: ""
    });
  };

  onCreateTeamForMatch = (matchId) => {
    this.onAddTeamToMatch({}, { matchId });
    this.setState({
      createTeamName: ""
    });
  }

  onDateChange = (event) => {
    this.setState({
      creatingDate: event.target.value
    });
  };

  onCreateNameChange = (event) => {
    this.setState({
      createTeamName: event.target.value
    });
  };

  toggleVotingForMatch = (matchId, isVotingOpen) => {
    const { closeVoting, openVoting } = this.props;
    isVotingOpen ? closeVoting(matchId) : openVoting(matchId);
  };

  render() {
    const { data: { matches, teams, loading, error } } = this.props;
    const { creatingDate } = this.state;

    return <div>
      <CreateMatch
        date={creatingDate}
        onDateChange={this.onDateChange}
        onCreateMatch={this.onCreateMatch} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>ERROR</h1>}
      {matches && matches.map(match =>
        <MatchRow
          key={match.matchId}
          allTeams={teams}
          matchId={match.matchId}
          date={match.date}
          isVotingOpen={match.isVotingOpen}
          onCreateNameChange={this.onCreateNameChange}
          onCreateTeamForMatch={this.onCreateTeamForMatch}
          onSelectTeam={(team) => this.onAddTeamToMatch(team, match)}
          onToggleVoting={() => this.toggleVotingForMatch(match.matchId, match.isVotingOpen)}
          teamsInMatch={match.teams} />
      )}
    </div>
  }
}

Matches.propTypes = {
  matches: PropTypes.array
};

// const sortByVotes = (teamA, teamB) => teamB.votes.length - teamA.votes.length;
// .sort(sortByVotes)

export default compose(
  graphql(MATCHES_AND_TEAMS_QUERY),
  graphql(OPEN_VOTING_MUTATION, {
    props: ({ mutate }) => ({
      openVoting: (matchId) => mutate({ variables: { matchId } }),
    }),
  }),
  graphql(CLOSE_VOTING_MUTATION, {
    props: ({ mutate }) => ({
      closeVoting: (matchId) => mutate({ variables: { matchId } }),
    }),
  })
)(Matches);
