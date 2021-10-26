const mongoose = require("mongoose");
const { User } = require("../models");
const bcrypt = require("bcrypt");
require("dotenv").config();

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/" + process.env.DB_NAME,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
    }
);

const hashPassword = (password) => {
    return bcrypt.hashSync(password, 10);
};

const userSeed = [
    {
        username: "David Tunnell",
        email: "d@t.com",
        password: hashPassword("12345"),
        savedBooks: [],
    },
];

User.deleteMany({})
    .then(() => User.collection.insertMany(userSeed))
    .then((data) => {
        console.log(data.insertedCount + " records inserted.");
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
