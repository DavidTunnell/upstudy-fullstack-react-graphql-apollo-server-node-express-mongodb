const router = require("express").Router();
const { contact } = require("../models");
const nodemailer = require("nodemailer");
require("dotenv").config();

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: process.env.GMAIL_ADDRESS,
        pass: process.env.GMAIL_PASSWORD, //if you have 2 factor authentication on: https://stackoverflow.com/a/49306726/1524210
    },
    secure: true,
});

router.post("/contact/", (req, res) => {
    var contactData = [
        {
            createdAt: Date.now(),
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            message: req.body.message,
        },
    ];
    contact.create(contactData, function (err, results) {
        if (err) {
            res.status(400).json(err);
        }
        res.send(results);
    });
});

router.post("/contact/email/", (req, res) => {
    const { name, email, phone, message } = req.body;

    const text = `Name: ${name} \n Email: ${email} \n Phone #: ${phone} \n Message: ${message}`;
    const html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
        <li>Phone #: ${phone}</li>
        <li>Message: ${message}</li>
    </ul>
    `;

    const mailData = {
        from: process.env.GMAIL_ADDRESS, //it won't send from anything other than this anyway
        to: process.env.GMAIL_ADDRESS,
        subject: process.env.APP_NAME + " form submission",
        text: text,
        html: html,
    };

    transporter.sendMail(mailData, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.status(200).send({
            message: "Mail send",
            message_id: info.messageId,
        });
    });
});

// router.get("/blogs", (req, res) => {
//     microBlog
//         .find({})
//         .sort({ createdAt: "desc" })
//         .then((dbTransaction) => {
//             res.json(dbTransaction);
//         })
//         .catch((err) => {
//             res.status(400).json(err);
//         });
// });

// router.get("/blogs/:id", (req, res) => {
//     const id = req.params.id;
//     microBlog
//         .findOne({ _id: id })
//         .then((dbTransaction) => {
//             res.json(dbTransaction);
//         })
//         .catch((err) => {
//             res.status(400).json(err);
//         });
// });

// router.delete("/blogs/:id", function (req, res) {
//     const id = req.params.id;
//     microBlog
//         .find({ _id: id })
//         .deleteOne()
//         .exec()
//         .then((dbTransaction) => {
//             res.json(dbTransaction);
//         })
//         .catch((err) => {
//             res.status(400).json(err);
//         });
// });

// router.put("/workouts/:id", (req, res) => {
//     Workout.findOneAndUpdate(
//         { _id: req.params.id },
//         { $push: { exercises: req.body } },
//         function (error, success) {
//             if (error) {
//                 res.status(400).json(error);
//             } else {
//                 res.json(success);
//             }
//         }
//     );
// });

module.exports = router;
