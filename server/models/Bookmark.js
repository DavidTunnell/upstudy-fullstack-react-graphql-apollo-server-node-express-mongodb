const { Schema } = require("mongoose");

// This is a subdocument schema
//model definition
const bookmarkSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        path: {
            type: String,
            required: true,
        },
    },
    { timestamps: {} },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

module.exports = bookmarkSchema;
