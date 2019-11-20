var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jwt-simple');
var app = express();

var User = require('./models/User');

mongoose.promise = Promise;

var posts = [
    { message: 'hello' },
    { message: 'hi' }
];

app.use(cors());
app.use(bodyParser.json());

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.get('/users', async (req, res) => {
    try {
        var users = await User.find({}, '-password -__v');
        res.send(users);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get('/profile/:id', async (req, res) => {
    try {
        var user = await User.findById(req.params.id, '-password -__v');
        res.send(user);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.post('/register', (req, res) => {
    var userData = req.body;
    var user = new User(userData);
    // TODO: missing validation

    user.save((err, result) => {
        if (err) console.log('error encountered while registering a new user');

        res.send(req.body);
    });
});

app.post('/login', async (req, res) => {
    var userData = req.body;
    var user = await User.findOne({email: userData.email});

    if (!user) return res.status(401)
        .send({message: 'Email or Password invalid'});

    if (userData.password != user.password) return res.status(401)
        .send({message: 'Password is invalid'});

    var payload = {};

    var token = jwt.encode(payload, 'secret_123_should_come_from_config_file');

    res.status(200).send({token: token});
});

mongoose.connect(
    'mongodb+srv://johnDoe:Password.1@angularauthtest-kmk3l.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err) console.log('connected to mongoDB');
    }
);

app.listen(3000);