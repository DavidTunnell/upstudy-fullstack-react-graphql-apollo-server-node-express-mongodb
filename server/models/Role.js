const { Schema } = require("mongoose");

// This is a subdocument schema
const roleSchema = new Schema(
    {
        role: {
            type: String,
            required: true,
        },
        // saved book id from GoogleBooks
        associatedIds: {
            type: [String],
            default: undefined,
        },
    },
    { _id: false }
);

module.exports = roleSchema;
