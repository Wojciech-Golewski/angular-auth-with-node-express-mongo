var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

var User = require('./models/User');
var auth = require('./auth');

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

app.post('/register', auth.register);

app.post('/login', auth.login);

mongoose.connect(
    'mongodb+srv://johnDoe:Password.1@angularauthtest-kmk3l.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err) console.log('connected to mongoDB');
    }
);

app.listen(3000);