var path = require('path');
var Emails = require('../model/emails.model');


module.exports = function(app){

    app.get('/index', function(req, res){
        res.sendFile(path.join(__dirname + '/../public/index.html'));

    });

    app.post('/', function(req, res){
       var newEmail = new  Emails();

        newEmail.email = req.body.email;

        newEmail.save(function(err, em){
            if(err){
                res.send('error adding email');
            }else{
                console.log(em);
            }
        });
    });

    app.use(function(req, res){
        res.sendFile(path.join(__dirname + '/../public/index.html'));
    });

};