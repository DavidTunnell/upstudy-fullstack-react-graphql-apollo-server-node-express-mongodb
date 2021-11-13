import gql from "graphql-tag";

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
                isVerified
                roles {
                    role
                    associatedIds
                }
            }
        }
    }
`;

export const ADD_SUBJECT = gql`
    mutation AddSubject(
        $name: String!
        $description: String!
        $bgColor: String!
        $createdBy: String!
        $image: String
    ) {
        addSubject(
            name: $name
            description: $description
            bgColor: $bgColor
            createdBy: $createdBy
            image: $image
        ) {
            _id
            name
            description
            image
            bgColor
            createdBy
        }
    }
`;

export const ADD_BETA_FEEDBACK = gql`
    mutation AddBetaFeedback(
        $username: String!
        $email: String!
        $category: String!
        $message: String!
        $image: String
    ) {
        addBetaFeedback(
            username: $username
            email: $email
            category: $category
            message: $message
            image: $image
        ) {
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

export const ARCHIVE_BETA_FEEDBACK = gql`
    mutation ArchiveBetaFeedback($feedbackId: ID!) {
        archiveBetaFeedback(feedbackId: $feedbackId) {
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

export const ADD_EMAIL_VERIFICATION_TOKEN = gql`
    mutation AddEmailVerificationTokenMutation(
        $userId: String!
        $username: String!
        $email: String!
    ) {
        addEmailVerificationToken(
            userId: $userId
            username: $username
            email: $email
        ) {
            user {
                username
                email
                isVerified
            }
            token
            expireAt
        }
    }
`;

export const VERIFY_EMAIL = gql`
    mutation VerifyEmailMutation($email: String!, $token: String!) {
        verifyEmail(email: $email, token: $token) {
            user {
                _id
                username
                email
                isVerified
            }
        }
    }
`;

export const USER_LOGIN = gql`
    mutation LoginMutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
                isVerified
                roles {
                    role
                    associatedIds
                }
            }
        }
    }
`;

export const USER_FORGOT_PASSWORD = gql`
    mutation ForgotPasswordMutation($email: String!) {
        forgotPassword(email: $email) {
            _id
        }
    }
`;
export const USER_UPDATE_PASSWORD = gql`
    mutation UpdatePasswordMutation(
        $email: String!
        $oldPassword: String!
        $newPassword: String!
    ) {
        updatePassword(
            email: $email
            oldPassword: $oldPassword
            newPassword: $newPassword
        ) {
            _id
        }
    }
`;
export const ADD_BOOK = gql`
    mutation addBook(
        $userId: ID!
        $authors: [String]!
        $description: String!
        $bookId: String!
        $image: String!
        $link: String!
        $title: String!
    ) {
        addBook(
            userId: $userId
            authors: $authors
            description: $description
            bookId: $bookId
            image: $image
            link: $link
            title: $title
        ) {
            _id
            username
            email
            savedBooks {
                authors
                description
                image
                link
                title
                bookId
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($userId: String!, $bookId: String!) {
        removeBook(userId: $userId, bookId: $bookId) {
            _id
            username
            email
            savedBooks {
                authors
                description
                image
                link
                title
                bookId
            }
        }
    }
`;
