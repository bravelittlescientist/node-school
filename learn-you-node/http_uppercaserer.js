// learnyounode
//
// HTTP Uppercaserer
// Given a port, upper-case any incoming post requests and return them
// to the client.

var http = require('http');
var map = require('through2-map');

// First command line arg is port
var port = +process.argv[2];

// Create and run server
var server = http.createServer(function (request, response) {
    
    // Check if post
    if (request.method == "POST") {
        // ... then pipe through chunks
        request.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase();
        })).pipe(response);
    }
});
server.listen(port);
