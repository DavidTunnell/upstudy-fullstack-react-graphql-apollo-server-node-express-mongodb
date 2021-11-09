const { Schema, model } = require("mongoose");

//model definition
const subjectSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: false,
        },
        bgColor: {
            type: String,
            required: false,
        },
        createdBy: {
            type: String,
            required: false,
        },
        // tags
        // wiki
        // mods
        //
    },
    { timestamps: {} }
);

const Subject = model("Subject", subjectSchema);

module.exports = Subject;
