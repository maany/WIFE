var express = require('express');
var router = express.Router();
var fs = require('fs');
var readline = require('readline');
var gmailAuth = require('./gmail_auth');

router.get('/list', function(req, res, next) {
    var auth = gmailAuth.token;
    var emails = getEmails(auth);
    res.render('index', { title: 'Express' });
});
function getEmails(auth){
    var emails = [];
    
    return emails;
}
module.exports = router;
