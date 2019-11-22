var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var jwt = require('jwt-simple');

var User = require('./models/User');
var Post = require('./models/Post');
var auth = require('./auth');

mongoose.promise = Promise;

app.use(cors());
app.use(bodyParser.json());

app.get('/posts/:id', async (req, res) => {
    var author = req.params.id;
    var posts = await Post.find({ author });

    res.send(posts);
});

app.post('/post', auth.checkAuthenticated, (req, res) => {

    var postData = req.body;
    postData.author = req.userId;

    var post = new Post(postData);

    post.save((err, result) => {
        if (err) {
            console.error('error encountered while saving a new post');
            return res.status(500).send({message: 'saving post error'});
        }

        res.send(req.body);
    });
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

mongoose.connect(
    'mongodb+srv://johnDoe:Password.1@angularauthtest-kmk3l.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err) console.log('connected to mongoDB');
    }
);

app.use('/auth', auth.router);
app.listen(process.env.PORT || 3000);