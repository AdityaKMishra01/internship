const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    image: {  // Corrected typo here
        data: Buffer,
        contentType: String
    },
    createdAt: {
        type: Date,
        default: Date.now  // Automatically sets the current date and time
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
