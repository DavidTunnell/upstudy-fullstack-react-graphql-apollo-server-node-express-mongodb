const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Book {
        _id: String
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type User {
        _id: ID
        username: String
        email: String
        password: String
        isVerified: Boolean!
        savedBooks: [Book]
    }

    type TokenEmailVerification {
        user: User
        token: String
        expireAt: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]!
        user(userId: ID!): User
        userByEmail(email: String!): User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        verifyEmail(email: String!, token: String!): TokenEmailVerification
        forgotPassword(email: String!): User

        addEmailVerificationToken(
            userId: String!
            username: String!
            email: String!
        ): TokenEmailVerification

        addBook(
            userId: ID!
            authors: [String]!
            description: String!
            bookId: String!
            image: String!
            link: String!
            title: String!
        ): User
        removeUser(userId: ID!): User
        removeBook(userId: String!, bookId: String!): User
    }
`;

module.exports = typeDefs;
