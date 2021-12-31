const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Error!!");
            }
        }
    },
    project: {
        type: String,
        required: true,
        minlength: 3
    },
    message: {
        type: String,
        minlength: 3
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;