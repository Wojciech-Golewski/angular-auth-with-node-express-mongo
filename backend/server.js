var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
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
})

app.listen(3000);