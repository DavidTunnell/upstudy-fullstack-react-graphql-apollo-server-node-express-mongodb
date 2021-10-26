const mongoose = require("mongoose");
const { User } = require("../models");
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

const userSeed = [
    {
        username: "david",
        email: "d@t.com",
        password: "12345",
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
