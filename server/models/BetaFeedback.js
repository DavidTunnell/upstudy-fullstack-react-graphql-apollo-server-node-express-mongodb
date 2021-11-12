const { Schema, model } = require("mongoose");

//model definition
const betaFeedbackSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: false,
        },
        message: {
            type: String,
            required: false,
        },
        image: {
            type: String,
            required: false,
        },
    },
    { timestamps: {} },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

const BetaFeedbackSchema = model("betaFeedback", betaFeedbackSchema);

module.exports = BetaFeedbackSchema;
