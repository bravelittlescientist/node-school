// learnyounode
//
// My first I/O
// Count newlines in a file, synchronously.

var fs = require('fs')

// Filename to read provided in first command-line argument.
var filename = process.argv[2];

// Get contents of file as string and count by splitting
file_content = fs.readFileSync(filename).toString();
lines = file_content.split("\n").length - 1;

console.log(lines);
