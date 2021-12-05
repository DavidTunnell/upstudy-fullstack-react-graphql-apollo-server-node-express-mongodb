import { gql } from "@apollo/client";

export const GET_USERS = gql`
    query Query {
        users {
            _id
            username
            email
            password
            bookmarks {
                _id
                name
                type
                path
                categoryId
                archived
            }
            roles {
                role
                associatedIds
            }
        }
    }
`;

export const GET_USER = gql`
    query Query($userId: ID!) {
        user(userId: $userId) {
            _id
            username
            email
            password
            isVerified
            roles {
                role
                associatedIds
            }
            profilePic
            bookmarks {
                _id
                name
                type
                path
                categoryId
                archived
            }
        }
    }
`;

export const GET_SUBJECTS = gql`
    query Subject {
        subjects(sortBy: { field: "name", order: ASC }) {
            _id
            name
            description
            image
            bgColor
            createdBy
            path
        }
    }
`;

export const GET_SUBJECT = gql`
    query Subject($subjectId: ID!) {
        subject(subjectId: $subjectId) {
            _id
            name
            description
            image
            bgColor
            createdBy
            path
        }
    }
`;

export const GET_BETA_FEEDBACK = gql`
    query BetaFeedback {
        betaFeedback(sortBy: { field: "createdAt", order: DESC }) {
            _id
            username
            email
            category
            message
            image
            createdAt
            archived
        }
    }
`;

export const GET_BOOKMARKS = gql`
    query Bookmarks($userId: ID!, $sortBy: SortBy) {
        bookmarks(sortBy: $sortBy, userId: $userId) {
            _id
            name
            type
            path
        }
    }
`;
