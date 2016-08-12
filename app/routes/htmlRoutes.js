var path = require('path');
var Emails = require('../model/emails.model');


module.exports = function(app){

    app.get('/index', function(req, res){
        res.sendFile(path.join(__dirname + '/../public/index.html'));

    });

    app.get('/home', function(req, res){
        res.sendFile(path.join(__dirname + '/../public/home.html'));

    });

    app.get('/about', function(req, res){
        res.sendFile(path.join(__dirname + '/../public/about.html'));

    });

    app.get('/gallery', function(req, res){
        res.sendFile(path.join(__dirname + '/../public/gallery.html'));

    });

    app.get('/blog', function(req, res){
        res.sendFile(path.join(__dirname + '/../public/blog.html'));

    });

    app.get('/contact', function(req, res){
        res.sendFile(path.join(__dirname + '/../public/contact.html'));

    });


    // POST ROUTES

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

