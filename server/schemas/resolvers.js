const { AuthenticationError } = require('apollo-server-express');
const { User, Sighting } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },

        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
        },

        sightings: async () => {
            return Sighting.find();
        }
    },

    Mutation: {
        addUser: async (parent, { firstName, lastName, email, password }) => {
            const user = await User.create({ firstName, lastName, email, password });
            const token = signToken(user);

            return { token, user };
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect password');
            }

            const passCorrect = await user.profile.isCorrectPassword(password);

            if (!passCorrect) {
                throw new AuthenticationError('Password does not match.');
            }

            const token = signToken(user);
            return { token, user}
        }

    }
}

module.exports = resolvers;
