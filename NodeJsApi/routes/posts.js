const express = require('express');
const Post = require('../models/Post')
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts)
    } catch (e) {
        res.json({message: e})
    }
});

router.post('/', async (req, res) => {
    const post = new Post({
        message: req.body.message,
        likesCount: req.body.likesCount
    });
    try {
        const savedPost = await post.save()
        res.json(savedPost);
    } catch (err) {
        res.json({message: err})
    }
});

module.exports = router;