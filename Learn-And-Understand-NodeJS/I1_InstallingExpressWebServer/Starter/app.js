// Environment Variables: Global variables specific to the 
// environment (server) our code is living in.
// * Different servers can have different variable settings, 
// * and we can access those values in code.

// HTTP Method: Specifies the type of action the request wishes to make.
// * GET, POST, DELETE, and others. Also called 'verbs'.

var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
});

app.get('/api', function(req, res) {
    res.json({ firstName: 'John', lastName: 'Doe' });
});

app.listen(port);