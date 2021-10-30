const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
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
        addEmailVerificationToken: async (parent, { user }) => {
            const newUserEmailToken = generateToken(user);
            newUserEmailToken.save(function (err) {
                if (err) {
                    return res.status(500).send({ msg: err.message });
                }
            });

            //NEXT: send email
            const emailOptions = generateVerificationEmailOptions(
                user,
                newUserEmailToken
            );
            sendEmail(emailOptions);
        },
        // verifyEmail: async () => {
        //     return "";
        // },
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
            // if (!user.isVerified) {
            //     throw new AuthenticationError(
            //         "Your email address hasn't been verified yet."
            //     );
            // }
            // console.log(user.isVerified);
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
