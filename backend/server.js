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
app.use(bodyParser.text());

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/register', (req, res) => {
    console.log(req.body);
})

app.listen(3000);