var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var emailSchema = new Schema({
    email: {
        type: String,
        match: [/.+\@.+\..+/, "Please enter a valid e-mail address"],
        unique: true,
        validate: [
            //Function takes in the value as an argument
            function(input) {
                //If this returns true, proceed. If not, return an error message.
                return input.length >= 6;
            },
            //Error Message
            'email invalid'
        ]
    }
});

module.exports = mongoose.model('Emails', emailSchema);