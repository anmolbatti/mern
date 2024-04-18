const mongoose = require("mongoose");

const Users = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    auth_token: {
        type: String
    }
});

module.exports = new mongoose.model("users", Users);