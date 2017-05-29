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
        "teamId": "2089d8eb-2fa9-4a61-81db-9a66a01ec815",
        "name": "Goat Simulator",
        "logoData": null
      },
      {
        "votes": [],
        "teamId": "2089d8eb-2fa9-4a61-81db-9a66a01ec811",
        "name": "Charles!",
        "logoData": null
      },
      {
        "votes": [
          {
            "voteId": "933c1ffd-9f26-416e-8457-0a60c732fa4c"
          }
        ],
        "teamId": "18476fa7-8b57-49e0-b170-86a56a758116",
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
        "teamId": "2089d8eb-2fa9-4a61-81db-9a66a01ec815",
        "name": "Goat Simulator",
        "logoData": null
      },
      {
        "votes": [],
        "teamId": "2089d8eb-2fa9-4a61-81db-9a66a01ec811",
        "name": "Charles!",
        "logoData": null
      },
      {
        "votes": [
          {
            "voteId": "933c1ffd-9f26-416e-8457-0a60c732fa4c"
          }
        ],
        "teamId": "18476fa7-8b57-49e0-b170-86a56a758116",
        "name": "Guilty Pleasure",
        "logoData": null
      }
    ]
  }
];

class Matches extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      creatingDate: ""
    };
  }

  onCreateMatch = (event) => {
    this.setState({
      creatingDate: ""
    });
  };

  onDateChange = (event) => {
    this.setState({
      creatingDate: event.target.value
    });
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
          id={match.matchId}
          date={match.date}
          isVotingOpen={match.isVotingOpen}
          teams={match.teams} />
      )}
    </div>
  }
}

Matches.propTypes = {
  matches: PropTypes.array
};

export default Matches;
