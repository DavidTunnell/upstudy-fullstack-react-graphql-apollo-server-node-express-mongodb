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
            console.log(email);
            console.log(token);
            const test = TokenEmailVerification.findOne(
                {},
                function (err, token) {
                    // token is not found into database i.e. token may have expired
                    if (!token) {
                        console.log("none found");
                    }
                    // if token is found then check valid user
                    else {
                        console.log("found");
                        // User.findOne(
                        //     { _id: token._userId, email: req.params.email },
                        //     function (err, user) {
                        //         // not valid user
                        //         if (!user) {
                        //             return res
                        //                 .status(401)
                        //                 .send({
                        //                     msg: "We were unable to find a user for this verification. Please SignUp!",
                        //                 });
                        //         }
                        //         // user is already verified
                        //         else if (user.isVerified) {
                        //             return res
                        //                 .status(200)
                        //                 .send(
                        //                     "User has been already verified. Please Login"
                        //                 );
                        //         }
                        //         // verify user
                        //         else {
                        //             // change isVerified to true
                        //             user.isVerified = true;
                        //             user.save(function (err) {
                        //                 // error occur
                        //                 if (err) {
                        //                     return res
                        //                         .status(500)
                        //                         .send({ msg: err.message });
                        //                 }
                        //                 // account successfully verified
                        //                 else {
                        //                     return res
                        //                         .status(200)
                        //                         .send(
                        //                             "Your account has been successfully verified"
                        //                         );
                        //                 }
                        //             });
                        //         }
                        //     }
                        // );
                    }
                }
            );
            // console.log(test);
            return "";
            //NEXT: call this and then build it out, once backend working then do react
            //get token object from db
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
