// API: A set of tools for building a software application
// * Stands for 'Application Programming Interface'. On the web
// * the tools are usually made available via a set of URLs which
// * accept and send only data via HTTP and TCP/IP.

// Endpoint: One URL in a web API.
// * Sometimes that endpoint (URL) does multiple things by making
// * choices based on the HTTP request headers.

// Serialize: Translating an object into a format that can be stored or transferred.
// * JSON, CSV, XML, and others are popular. 'Deserialize' is the opposite (converting
// * the format back into an object).

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    res.writeHead(200, {'Content-Type': 'application/json'});
    var obj = {
        firstName: 'John',
        lastName: 'Doe'
    };
    res.end(JSON.stringify(obj));

}).listen(1337, '127.0.0.1');