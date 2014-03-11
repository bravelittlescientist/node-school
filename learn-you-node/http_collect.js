// learnyounode
//
// HTTP Collect
// Collet a bunch of http responses, report length and content.

// Module dependencies
var http = require('http');
var concatStream = require('concat-stream');

// The input url will be the target of this task
var url = process.argv[2];

// Concatenate stream
http.get(url, function (response) {
    response.pipe(concatStream(function (data) {
        console.log(data.toString().length);
        console.log(data.toString());
    }));
});
