var User = require('../models/user');

exports.register = function (req, res) {
    var user = new User({
        username: req.body.username,
        password: req.body.password
    });
    user.save(function (err) {
        if (err)
            res.status(400).json(err);
        else
            res.status(201).json(user);
    });
};

exports.getUsers = function (req, res) {
    User.find(function (err, users) {
        if (err)
            res.status(400).json(err);
        else
            res.status(200).json(users);
    });
};

exports.getUserById=function  (req,res) {
    User.find({_id:req.params.user_id},function(err,user){
         if (err)
            res.status(400).json(err);
        else
            res.status(200).json(user);
    });
};

exports.modifyUser=function  (req,res) {
     User.update({_id: req.user._id},
      {password: req.body.password}, function (err, num, raw) {
        if (err)
            res.status(400).json(err);
        else
            res.status(204).end();
    });
};

exports.deleteUser=function  (req,res) {
    User.remove({_id:req.params.user_id},function  (err) {
         if (err)
            res.status(400).json(err);
        else
            res.status(204).end();
    });
};

exports.getCurrentUser=function  (req,res) {
    User.find({username:req.query.username},function  (err,user) {
        if (err)
            res.status(400).json(err);
        else
            res.status(200).json(user);
    });
};