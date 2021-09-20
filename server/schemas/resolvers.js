const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        books: async () => {
            return Book.find();
        },

        me: async () => {
            return User.find();
        }
    }
}

module.exports = resolvers;