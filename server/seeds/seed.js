const mongoose = require("mongoose");
const { User, TokenEmailVerification } = require("../models");
const bcrypt = require("bcrypt");
require("dotenv").config();

//get mongoose connection object
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/" + process.env.DB_NAME,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
    }
);

//sync index on startup to ensure token expirations happen
const syncIndexes = async () => {
    await TokenEmailVerification.syncIndexes();
    await User.syncIndexes();
};
syncIndexes();

//hash password function for seed passwords
const hashPassword = (password) => {
    return bcrypt.hashSync(password, 10);
};

//data object to be inserted in to db
const userSeed = [
    {
        username: "David Tunnell",
        email: "d@t.com",
        password: hashPassword("12345"),
        isVerified: false,
        savedBooks: [],
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

//first delete user data in database and then populate with seed data
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
