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
    generateToken: function (userId) {
        return new TokenEmailVerification({
            _userId: userId,
            token: crypto.randomBytes(16).toString("hex"),
        });
    },
    generateVerificationEmailOptions: function (username, email, token) {
        return {
            from: "no-reply@upstudy.io",
            to: email,
            subject: "Upstudy - Account Verification Link",
            text:
                "Hello " +
                username +
                ",\n\n" +
                "Please verify your account by clicking the link: \n" +
                process.env.APP_DOMAIN +
                "/verify?email=" +
                email +
                "&token=" +
                token.token +
                "\n\nThank You!\n",
        };
    },
    sendEmail: function (emailOptions) {
        transporter.sendMail(emailOptions, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Verification email sent successfully.");
            }
        });
    },
    verifyEmail: function (emailOptions) {},
};
