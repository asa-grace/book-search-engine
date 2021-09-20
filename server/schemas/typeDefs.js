const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Author {
        _id: ID
    }

    type Book {
        bookId: String
        authors: [Author]
        description: String
        title: String
        image: String
        link: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        me: User
        books(bookId: String!): [Book]
    }

    type Mutation {
       login(email: String!, password: String!): Auth
       addUser(username: String!, email: String! password: String!): Auth
       saveBook(authors: String!, description: String!, title: String!, link: String!): User
       removeBook(bookId: String!): User 
    }
`;

module.exports = typeDefs;