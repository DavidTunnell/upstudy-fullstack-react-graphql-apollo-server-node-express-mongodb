const { AuthenticationError } = require("apollo-server-express");
const { User, TokenEmailVerification } = require("../models");
const { signToken } = require("../utils/auth");

const bcrypt = require("bcrypt");
const {
    generateToken,
    generateVerificationEmailOptions,
    generatePasswordResetEmailOptions,
    sendEmail,
    generatePassword,
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
            try {
                sendEmail(emailOptions);
            } catch (error) {
                throw new AuthenticationError(
                    "Failed to send email. Try again later."
                );
            }
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
        forgotPassword: async (parent, { email }) => {
            var newPw = generatePassword(10);
            var encryptedPw = bcrypt.hashSync(newPw, 10);
            const user = await User.findOneAndUpdate(
                { email },
                { password: encryptedPw }
            );
            if (!user) {
                throw new AuthenticationError(
                    "If the email you entered exists, you will be sent an email with a new password."
                );
            }
            //send email with new password
            const emailOptions = generatePasswordResetEmailOptions(
                user.username,
                user.email,
                newPw
            );
            try {
                sendEmail(emailOptions);
            } catch (error) {
                throw new AuthenticationError(
                    "Failed to send email. Try again later."
                );
            }
            return user;
        },
        updatePassword: async (parent, { email, oldPassword, newPassword }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError(
                    "The email does not have a record associated with it."
                );
            }
            const correctPw = await user.isCorrectPassword(oldPassword);
            if (!correctPw) {
                throw new AuthenticationError(
                    "The existing password you entered is incorrect."
                );
            }
            //if we are here they existing password was correct, so create and update with new password.
            var encryptedPw = bcrypt.hashSync(newPassword, 10);
            const userUpdated = await User.findOneAndUpdate(
                { email },
                { password: encryptedPw }
            );
            if (!userUpdated) {
                throw new AuthenticationError(
                    "There was a problem updating your password."
                );
            }
            return userUpdated;
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
