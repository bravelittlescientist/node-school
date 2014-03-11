// learnyounode
//
// Make it modular
// Given a directory and an extension, print only files with
// that extension. Use a module to accomplish most of the work
// (except for printing and reading arguments);

var fs = require('fs');
var filter_ls = require('./util_filter_ls');

// First argument is directory to read, second is extension
var directory = process.argv[2];
var extension = process.argv[3];

filter_ls(directory, extension, function(err, data) {
    // Check for error message.
    if (err) {
        console.log("Error " + err);
        return;
    }

    // Otherwise, print out the members of data
    var i;
    for (i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
});
