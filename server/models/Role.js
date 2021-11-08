const { Schema } = require("mongoose");

// This is a subdocument schema
const roleSchema = new Schema(
    {
        role: {
            type: String,
            required: true,
        },
        // saved book id from GoogleBooks
        associatedId: {
            type: String,
        },
    },
    { _id: false }
);

module.exports = roleSchema;
