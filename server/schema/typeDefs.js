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

    type Role {
        role: String
        associatedIds: [String]
    }

    type User {
        _id: ID
        username: String
        email: String
        password: String
        isVerified: Boolean!
        roles: [Role]
        savedBooks: [Book]
    }

    type Subject {
        _id: ID
        name: String
        description: String
        image: String
        bgColor: String
        createdBy: String
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
        subjects: [Subject]!
        subject(subjectId: ID!): Subject
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        verifyEmail(email: String!, token: String!): TokenEmailVerification
        forgotPassword(email: String!): User
        updatePassword(
            email: String!
            oldPassword: String!
            newPassword: String!
        ): User

        addEmailVerificationToken(
            userId: String!
            username: String!
            email: String!
        ): TokenEmailVerification

        addSubject(
            name: String!
            description: String!
            image: String
            bgColor: String!
            createdBy: String!
        ): Subject

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
