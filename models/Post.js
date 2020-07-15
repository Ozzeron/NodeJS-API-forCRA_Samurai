const mongoose = require('mongoose');

//
const PostSchema = mongoose.Schema({
    "message": String,
    "likesCount": Number
});

module.exports = mongoose.model('Post', PostSchema);