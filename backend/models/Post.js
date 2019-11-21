var mongoose = require('mongoose');

module.exports = mongoose.model('Post', {
    message: String
});