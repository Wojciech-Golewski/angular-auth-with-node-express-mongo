var express = require('express');
var cors = require('cors');
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

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/register', (req, res) => {
    console.log(req.body);
})

app.listen(3000);