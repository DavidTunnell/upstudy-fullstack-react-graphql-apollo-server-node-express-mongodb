const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now,
    },
    name: String,
    email: String,
    phone: String,
    message: String,
});

// microBlogSchema.methods.getTotalDuration = function () {
//     let sum = 0;
//     this.exercises.forEach((element) => {
//         sum += element.duration;
//     });
//     return sum;
// };

const contact = mongoose.model("contact", contactSchema);

module.exports = contact;
