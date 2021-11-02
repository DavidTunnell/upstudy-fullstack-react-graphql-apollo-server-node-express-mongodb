const { Schema, model } = require("mongoose");
// const userSchema = require("./User");

const tokenSchema = new Schema(
    {
        _userId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        token: { type: String, required: true },
    },
    { timestamps: true }
);
tokenSchema.index(
    { createdAt: 1 },
    { expireAfterSeconds: process.env.EMAIL_VERIFICATION_TOKEN_EXPIRATION } //86400 - seconds in a day
);

const TokenEmailVerification = model("TokenEmailVerification", tokenSchema);

module.exports = TokenEmailVerification;
