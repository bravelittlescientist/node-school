// learnyounode
//
// Filtered ls
// Given a directory and an extension, print only files with
// that extension

var fs = require('fs');
var path = require('path');
var i;

// First argument is directory to read, second is extension
var directory = process.argv[2];
var extension = process.argv[3];

// Read directory asynchronously and return only words with
// extname equal to extension.
fs.readdir(directory, function(err, data) {
    extension = "." + extension;
    for (i = 0; i < data.length; i++) {
        if (extension == path.extname(data[i])) {
            console.log(data[i]);
        }
    }
});
