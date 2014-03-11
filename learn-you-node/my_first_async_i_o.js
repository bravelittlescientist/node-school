// learnyounode
//
// My first async I/O
// Count newlines in a file, asynchronously.

var fs = require('fs')

// Filename to read provided in first command-line argument.
var filename = process.argv[2];

// Read file asynchronously and perform counting in callback
// Subtract one because we're splitting
fs.readFile(filename, function(err,data) {
    var lines = data.toString().split("\n").length - 1;
    console.log(lines);
});
