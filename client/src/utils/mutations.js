import { gql } from "@apollo/client";

export const ADD_USER = gql`
    mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
        addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
            token
            user {
                _id
                email
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                email
                password
            }
        }
    }
`;

export const ADD_SIGHTING = gql`
    mutation addSighting($latitude: Float!, $longitude: Float!, $city: String!, $state: String!, $date_time: String!, $text: String!  ){
        addSighting(latitude: $latitude, longitude: $longitude, city: $city, state: $state, date_time: $date_time, text:$text){
                    latitude, 
                    longitude, 
                    city, 
                    state, 
                    date_time, 
                    text

        }
    }

`