import { gql } from "@apollo/client";

export const GET_USERS = gql`
    query Query {
        users {
            _id
            username
            email
            password
            savedBooks {
                authors
                description
                bookId
                image
                link
                title
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
            savedBooks {
                authors
                description
                bookId
                image
                link
                title
            }
            roles {
                role
                associatedIds
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
