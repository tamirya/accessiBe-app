/*
Controller of User
*/
const User = require('../models/users');

// get user by email
exports.getByEmail = function(req, res){
    const email = req.params.email;

    User.find({email},function(err,result){
        if (err) return res.send(500).json(err);
        res.json(result); 
    })
}