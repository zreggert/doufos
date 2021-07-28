import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
    query allUsers {
        users {
            _id
            email
        }
    }`

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      email
    }
  }
`;

export const QUERY_SIGHTINGS = gql`
  query allSightings{
    sightings {
      _id
      latitude
      longitude
      location
      date_time
      text
    }
  }`;