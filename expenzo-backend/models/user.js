const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const User = mongoose.model('user', userSchema);

module.exports = User;
