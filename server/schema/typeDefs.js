const { gql } = require("apollo-server-express");
//https://janikvonrotz.ch/2020/01/29/apollo-graphql-server-and-client-sorting/
const typeDefs = gql`
    enum Order {
        ASC
        DESC
    }

    input SortBy {
        field: String!
        order: Order!
    }

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
        profilePic: String
    }

    type Subject {
        _id: ID
        name: String
        description: String
        image: String
        bgColor: String
        createdBy: String
        path: String
    }

    type BetaFeedback {
        _id: ID
        username: String!
        email: String!
        category: String!
        message: String!
        image: String
        createdAt: String!
        archived: Boolean!
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
        subjects(sortBy: SortBy): [Subject]!
        subject(subjectId: ID!): Subject
        betaFeedback(sortBy: SortBy): [BetaFeedback]!
    }

    type Mutation {
        getS3Url(isLoggedIn: Boolean!): String!
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

        addBetaFeedback(
            username: String!
            email: String!
            category: String!
            message: String!
            image: String
        ): BetaFeedback

        archiveBetaFeedback(feedbackId: ID!): BetaFeedback

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
