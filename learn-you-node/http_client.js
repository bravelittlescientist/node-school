// learnyounode
//
// http client
// Make get requests to a command-line provided url. Print them.
var http = require('http');

// First command line argument is the target url
var url = process.argv[2];

// Retriever stream
http.get(url, function(response) {
    // Set encoding to get a string
    response.setEncoding("utf8");
    
    // listen to stream
    response.on("data", console.log);
    response.on("error", console.error);
});
