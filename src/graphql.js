import gql from 'graphql-tag';

export const MATCHES_AND_TEAMS_QUERY = gql`
  query allMatchesAndTeams {
    matches {
      matchId
      isVotingOpen
      date
      teams {
        votes {
          voteId
        }
        teamId
        name
        logoData
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
        votes {
          voteId
        }
        teamId
        name
        logoData
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
    }
  }`;

export const CLOSE_VOTING_MUTATION = gql`
  mutation closeVoting($matchId: ID!) {
    closeVoting(matchId: $matchId) {
      matchId
      isVotingOpen
    }
  }`;

export const CREATE_MATCH_MUTATION = gql`
  mutation createMatch($date: String!) {
    createMatch(date: $date){
      matchId
      isVotingOpen
      date
      teams {
        votes {
          voteId
        }
        teamId
        name
        logoData
      }
    }
  }`;
