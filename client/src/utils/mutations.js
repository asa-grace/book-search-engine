import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser(
        $username: String!
        $email: String!
        $password: String!
    ) {
        addUser(
            username: $username
            email: $email
            password: $password
        ) {
            token
            user {
                _id
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($books: [ID]!) {
        saveBook(books: $books) {
            books {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
        mutation removeBook($books: [ID]!) {
            removeBook(books: $books) {
                books {
                    bookId
                    authors
                    description
                    title
                    image
                    link
                }
            }
        }
`;