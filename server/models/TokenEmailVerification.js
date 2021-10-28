const { Schema, model } = require("mongoose");
const userSchema = require("./User");

const tokenSchema = new Schema({
    user: userSchema,
    token: { type: String, required: true },
    expireAt: { type: Date, default: Date.now, index: { expires: 86400000 } },
});

const TokenEmailVerification = model("TokenEmailVerification", tokenSchema);

module.exports = TokenEmailVerification;
