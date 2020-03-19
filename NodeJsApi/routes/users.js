const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
    try {
        const page = req.query.page;
        const count = req.query.count;
        const users = await User.find();
        const responseUsers = {
            "items": users,
            "totalCount": users.length
        };
        const startIndex = (page - 1) * count;
        const endIndex = page * count;

        const resultUsers = responseUsers.items.slice(startIndex, endIndex);
         (page!==undefined || count!==undefined)?res.json({"items":resultUsers,"totalCount":users.length}):res.json(users.slice(0,10));
    } catch (e) {
        res.json({message: e})
        console.log(e);
    }
});


module.exports = router;

