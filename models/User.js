const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    id: Number,
    photoUrl: String,
    followed: Boolean,
    fullName: String,
    status: String,
    location: {
        city: String,
        country: String
    }
});

module.exports = mongoose.model('Users', UserSchema);