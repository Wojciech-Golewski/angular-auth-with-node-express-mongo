var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

var posts = [
    {
        message: 'hello'
    },
    {
        message: 'hi'
    }
];

app.use(cors());
app.use(bodyParser.json());

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/register', (req, res) => {
    var userData = req.body;
    console.log(userData.email);

    // TODO: missing validation

    res.sendStatus(200);
});

mongoose.connect(
    'mongodb+srv://johnDoe:Password.1@angularauthtest-kmk3l.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err) console.log('connected to mongoDB');
    }
);

app.listen(3000);