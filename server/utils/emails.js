const Bcrypt = require("bcrypt");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const TokenEmailVerification = require("../models/TokenEmailVerification");

const transporter = nodemailer.createTransport(
    sendgridTransport({
        auth: {
            api_key: process.env.SENDGRID_API_KEY,
        },
    })
);

module.exports = {
    // function for our authenticated routes
    generateToken: function (user) {
        return new TokenEmailVerification({
            _userId: user._id,
            token: crypto.randomBytes(16).toString("hex"),
        });
    },
    // generateEmailOptions: function (user) {
    //     return {
    //         from: "noreply@upstudy.io",
    //         to: user.email,
    //         subject: "Account Verification Link",
    //         text:
    //             "Hello " +
    //             user.username +
    //             ",\n\n" +
    //             "Please verify your account by clicking the link: \nhttp://www.upstudy.io/confirmation/" +
    //             user.email +
    //             "/" +
    //             token.token +
    //             "\n\nThank You!\n",
    //     };
    // },
};
