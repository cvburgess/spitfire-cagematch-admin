import React from 'react';
import PropTypes from 'prop-types';
import MatchRow from '../components/MatchRow';
import CreateMatch from '../components/CreateMatch';

const matches = [
  {
    "matchId": "28f2a5ec-52f6-41f8-bdb4-a266ef61af7c",
    "isVotingOpen": false,
    "date": "Tue May 30 2017 00:00:00 GMT-0400 (EDT)",
    "teams": [
      {
        "votes": [],
        "teamId": "3",
        "name": "Goat Simulator",
        "logoData": null
      },
      {
        "votes": [],
        "teamId": "5",
        "name": "Charles!",
        "logoData": null
      },
      {
        "votes": [
          {
            "voteId": "933c1ffd-9f26-416e-8457-0a60c732fa4c"
          }
        ],
        "teamId": "1",
        "name": "Guilty Pleasure",
        "logoData": null
      }
    ]
  },
  {
    "matchId": "28f2a5ec-52f6-41f8-bdb4",
    "isVotingOpen": true,
    "date": "Wed May 24 2017 00:00:00 GMT-0400 (EDT)",
    "teams": [
      {
        "votes": [],
        "teamId": "3",
        "name": "Goat Simulator",
        "logoData": null
      },
      {
        "votes": [],
        "teamId": "5",
        "name": "Charles!",
        "logoData": null
      },
      {
        "votes": [
          {
            "voteId": "933c1ffd-9f26-416e-8457-0a60c732fa4c"
          }
        ],
        "teamId": "1",
        "name": "Guilty Pleasure",
        "logoData": null
      }
    ]
  }
];

const teams = [
  {
    "name": "Guilty Pleasure",
    "teamId": "1"
  },
  {
    "name": "Roman Gods",
    "teamId": "2"
  },
  {
    "name": "Goat Simulator",
    "teamId": "3"
  },
  {
    "name": "Not Another",
    "teamId": "4"
  },
  {
    "name": "Charles!",
    "teamId": "5"
  }
];

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

  onDateChange = (event) => {
    this.setState({
      creatingDate: event.target.value
    });
  };

  onCreateNameChange = (name) => {
    // this.
  };

  onCreateTeam = () => {
    // Apollo createTeam
    this.setState({
      createTeamName: ""
    });
  };

  toggleVotingForMatch = (matchId, isVotingOpen) => {

  };

  render() {
    const { creatingDate } = this.state;
    return <div>
      <CreateMatch
        date={creatingDate}
        onDateChange={this.onDateChange}
        onCreateMatch={this.onCreateMatch} />
      {matches.map(match =>
        <MatchRow
          key={match.matchId}
          allTeams={teams}
          id={match.matchId}
          date={match.date}
          isVotingOpen={match.isVotingOpen}
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

export default Matches;
