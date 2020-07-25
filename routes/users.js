const express = require('express');
const router = express.Router();
const User = require('../models/User');

/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

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
        console.log('all is ok',);
        const resultUsers = responseUsers.items.slice(startIndex, endIndex);
         (page!==undefined || count!==undefined)?res.json({"items":resultUsers,"totalCount":users.length}):res.json(users.slice(0,10));
    } catch (e) {
        res.json({message: e})
        console.log(e);
    }
});


module.exports = router;

