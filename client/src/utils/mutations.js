import { gql } from "@apollo/client";

export const ADD_USER = gql`
    mutation addUser($first_name: String!, $last_name: String!, $email: String!, $password: String!) {
        addUser(first_name: $first_name, last_name: $last_name, email: $email, password: $password) {
            token
            user {
                _id
                email
            }
        }
    }
`;

