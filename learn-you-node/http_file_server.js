// learnyounode
//
// HTTP File Server
// Given a port and a text file location, serve up a read stream of that
// text file.

var fs = require('fs');
var http = require('http');

// First command line arg is port, second is text file location
var port = +process.argv[2];
var text_file = process.argv[3];

// Create and run server
var server = http.createServer(function (request, response) {
    var fstream = fs.createReadStream(text_file);
    fstream.pipe(response);
});
server.listen(port);
