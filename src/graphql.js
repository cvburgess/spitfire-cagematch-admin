import gql from 'graphql-tag';

export const MATCHES_AND_TEAMS_QUERY = gql`
  query allMatchesAndTeams {
    matches {
      matchId
      isVotingOpen
      date
      teams {
        teamId
        name
        logoData
        votes {
          voteId
        }
      }
    }
    teams {
      name
      teamId
      logoData
    }
  }`;

export const ALL_MATCHES_QUERY = gql`
  query allMatches {
    matches {
      matchId
      isVotingOpen
      date
      teams {
        teamId
        name
        logoData
        votes {
          voteId
        }
      }
    }
  }`;

export const ALL_TEAMS_QUERY = gql`
  query allTeams {
    teams {
      name
      teamId
      logoData
    }
  }`;

export const OPEN_VOTING_MUTATION = gql`
  mutation openVoting($matchId: ID!) {
    openVoting(matchId: $matchId) {
      matchId
      isVotingOpen
      teams {
        teamId
        name
        logoData
        votes {
          voteId
        }
      }
    }
  }`;

export const CLOSE_VOTING_MUTATION = gql`
  mutation closeVoting($matchId: ID!) {
    closeVoting(matchId: $matchId) {
      matchId
      isVotingOpen
      teams {
        teamId
        name
        logoData
        votes {
          voteId
        }
      }
    }
  }`;

export const CREATE_MATCH_MUTATION = gql`
  mutation createMatch($date: String!) {
    createMatch(date: $date){
      matchId
      isVotingOpen
      date
      teams {
        teamId
        name
        logoData
        votes {
          voteId
        }
      }
    }
  }`;

export const CREATE_TEAM_MUTATION = gql`
  mutation createTeam($name: String!) {
    createTeam(name: $name) {
      teamId
      name
      logoData
      votes {
        voteId
      }
    }
  }`;

export const ADD_TEAM_TO_MATCH = gql`
  mutation addTeamToMatch($matchId: ID!, $teamId: ID!) {
    addTeamToMatch(matchId: $matchId, teamId: $teamId) {
      matchId
      teams {
        teamId
        name
        logoData
        votes {
          voteId
        }
      }
    }
  }
`;

export const REMOVE_TEAM_FROM_MATCH = gql`
  mutation removeTeamFromMatch($matchId: ID!, $teamId: ID!) {
    removeTeamFromMatch(matchId: $matchId, teamId: $teamId) {
      matchId
      teams {
        teamId
        name
        logoData
        votes {
          voteId
        }
      }
    }
  }
`;
