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
    generateVerificationEmailOptions: function (user, token) {
        return {
            from: "no-reply@upstudy.io",
            to: user.email,
            subject: "Upstudy - Account Verification Link",
            text:
                "Hello " +
                user.username +
                ",\n\n" +
                "Please verify your account by clicking the link: \n" +
                process.env.APP_DOMAIN +
                "/validate/" +
                user.email +
                "/" +
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
    verifyEmail: function (emailOptions) {

    },
};
