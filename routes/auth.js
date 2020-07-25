const express = require('express');
const router = express.Router();

let comonResObj = {
    "resultCode":0,
    "messages":[],
    "data":{
        "id":6231,
        "login":"Ozzeron",
        "email":"ozzeron@gmail.com"
    },


};

/**
 *
 * @api{get} /user Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiSuccess {string} name The user name.
 */
router.get('/', (req,res)=>{
   try {
       res.send(comonResObj)
   } catch (e) {
       res.json({message: e} )
   }
});


module.exports = router;