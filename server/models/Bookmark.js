const { Schema } = require("mongoose");

// This is a subdocument schema
//model definition
const bookmarkSchema = new Schema(
    {
        categoryId: {
            type: Schema.ObjectId,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        path: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        archived: {
            type: Boolean,
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
