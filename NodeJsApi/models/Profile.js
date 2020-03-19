const mongoose = require('mongoose');

//
const ProfileSchema = mongoose.Schema({
    "aboutMe": String,
    "contacts": {
        "facebook": String,
        "website": String,
        "vk": String,
        "twitter": String,
        "instagram": String,
        "youtube": String,
        "github": String,
        "mainLink": String
    },
    "lookingForAJob": Boolean,
    "lookingForAJobDescription": String,
    "fullName": String,
    "id": Number,
    "photos": {
        "small": String,
        "large": String
    }
});

module.exports = mongoose.model('Profile', ProfileSchema);