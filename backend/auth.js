var User = require('./models/User');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jwt-simple');
var express = require('express');
var router = express.Router();

router.post('/register', (req, res) => {
    var userData = req.body;
    var user = new User(userData);
    // TODO: missing validation

    user.save((err, newUser) => {
        if (err) return res.status(500).send({message: 'Error while saving user'});

        var payload = { subject: newUser._id };
        var token = jwt.encode(payload, 'secret_123_should_come_from_config_file');
        res.status(200).send({token: token});
    });
});

router.post('/login', async (req, res) => {
    var loginData = req.body;
    var user = await User.findOne({email: loginData.email});

    if (!user) return res.status(401)
        .send({message: 'Email or Password invalid'});

    bcrypt.compare(loginData.password, user.password, (err, isMatch) => {
        if (!isMatch) return res.status(401).send({message: 'Password is invalid'});

        var payload = { subject: user._id };
        var token = jwt.encode(payload, 'secret_123_should_come_from_config_file');
        res.status(200).send({token: token});
    });
});

var auth = {
    router,
    checkAuthenticated(req, res, next) {
        if (!req.header('authorization')) return res.status(401)
            .send({ message: 'Unauthorized. Missing auth header.' });

        var token = req.header('authorization').split(' ')[1];
        
        var payload = jwt.decode(token, 'secret_123_should_come_from_config_file');

        if (!payload) return res.status(401)
            .send({ message: 'Unauthorized. Auth header invalid.' });

        req.userId = payload.subject;

        next();
    }
}

module.exports = auth;