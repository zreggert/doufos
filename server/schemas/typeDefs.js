const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        first_name: String
        last_name: String
        email: String
        password: String
        password_confirm: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]!
        user(userId: ID!): User
    }
`;

module.exports = typeDefs;