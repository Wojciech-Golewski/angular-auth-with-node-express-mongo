var User = require('./models/User');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jwt-simple');

module.exports = {
    register: (req, res) => {
        var userData = req.body;
        var user = new User(userData);
        // TODO: missing validation
    
        user.save((err, result) => {
            if (err) console.log('error encountered while registering a new user');
    
            res.send(req.body);
        });
    },
    login: async (req, res) => {
        var loginData = req.body;
        var user = await User.findOne({email: loginData.email});
    
        if (!user) return res.status(401)
            .send({message: 'Email or Password invalid'});
    
        bcrypt.compare(loginData.password, user.password, (err, isMatch) => {
            if (!isMatch) return res.status(401).send({message: 'Password is invalid'});
    
            var payload = {};
            var token = jwt.encode(payload, 'secret_123_should_come_from_config_file');
            res.status(200).send({token: token});
        });
    }
}