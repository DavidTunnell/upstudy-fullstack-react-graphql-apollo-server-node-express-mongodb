const { AuthenticationError } = require("apollo-server-express");
const { User, TokenEmailVerification } = require("../models");
const { signToken } = require("../utils/auth");
const {
    generateToken,
    generateVerificationEmailOptions,
    sendEmail,
} = require("../utils/email");

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
        },
    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const userCheck = await User.findOne({
                $or: [{ email }, { username }],
            });
            if (userCheck) {
                throw new AuthenticationError(
                    "An account with that email or username already exists. Please try again."
                );
            } else {
                const user = await User.create({ username, email, password });

                //THEN: create new page for users to validate with
                const token = signToken(user);
                return { token, user };
            }
        },
        addEmailVerificationToken: async (
            parent,
            { userId, username, email }
        ) => {
            const newUserEmailToken = generateToken(userId);

            newUserEmailToken.save(function (err) {
                if (err) {
                    return res.status(500).send({ msg: err.message });
                }
            });
            // //NEXT: send email
            const emailOptions = generateVerificationEmailOptions(
                username,
                email,
                newUserEmailToken
            );
            sendEmail(emailOptions);
        },
        verifyEmail: async (parent, { email, token }) => {
            //Need to filter out tokens older than x hours - need to understand what date is made on create
            const tokenReturned = await TokenEmailVerification.findOne({
                token: token,
                expireAt: { $gt: new Date(Date.now() - 86400000) },
            });
            if (!tokenReturned) {
                throw new AuthenticationError(
                    "This token doesn't exist or has expired."
                );
            }
            const userReturned = await User.findOne({
                token: token,
                email: email,
            });
            if (!userReturned) {
                throw new AuthenticationError(
                    "There is no user associated with that token."
                );
            }
            userReturned.isVerified = true;
            var updatedUser = await userReturned.save();
            if (!updatedUser) {
                throw new AuthenticationError(
                    "There was an error verifying this email address."
                );
            }
            return { user: userReturned };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError(
                    "If the user you entered exists, you entered the wrong username and/or password."
                );
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError(
                    "If the user you entered exists, you entered the wrong username and/or password."
                );
            }
            const token = signToken(user);
            return { token, user };
        },

        addBook: async (
            parent,
            { userId, authors, description, bookId, image, link, title }
        ) => {
            const book = {
                authors,
                description,
                bookId,
                image,
                link,
                title,
            };
            console.log(book);

            return User.findOneAndUpdate(
                { _id: userId },
                {
                    $addToSet: { savedBooks: book },
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },
        removeUser: async (parent, { userId }) => {
            return User.findOneAndDelete({ _id: userId });
        },
        removeBook: async (parent, { userId, bookId }) => {
            return User.findOneAndUpdate(
                { _id: userId },
                { $pull: { savedBooks: { bookId: bookId } } },
                { new: true }
            );
        },
    },
};

module.exports = resolvers;
