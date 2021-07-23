const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        first_name: String
        last_name: String
        email: String
        password: String
    }

    type Sighting {
        _id: ID
        latitude: Float
        longitude: Float
        city: String
        state: String
        date_time: String
        text: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]!
        user(userId: ID!): User
        sightings: [Sighting]!
    }


    type Mutation {
        addUser(name: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addSighting(latitude: Float, longitude: Float, city: String, state: String, date_time: String, text: String): Sighting
    }
`;

module.exports = typeDefs;