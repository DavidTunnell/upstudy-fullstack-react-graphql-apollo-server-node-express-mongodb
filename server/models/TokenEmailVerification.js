const { Schema, model } = require("mongoose");
// const userSchema = require("./User");

const tokenSchema = new Schema({
    _userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    token: { type: String, required: true },
    expireAt: { type: Date, default: Date.now, index: { expires: 60000 } },
});

const TokenEmailVerification = model("TokenEmailVerification", tokenSchema);

module.exports = TokenEmailVerification;
