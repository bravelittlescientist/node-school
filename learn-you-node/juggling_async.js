// learnyounode
//
// Juggle Async
// Given three urls, report content in order.

// Module dependencies
var http = require('http');
var concatStream = require('concat-stream');

// The following input urls will be the target of this task
var urls = process.argv.slice(2);
var done = [0,0,0];
var contents = {};
var i;

// function to run http get and retrieve response
function get_url_content(url, order) {
    // stream result
    http.get(url, function (response) {
        response.pipe(concatStream(function (data) {
            contents[order] = data.toString();
            done[order]=1;
            if (done[0] + done[1] + done[2] == 3) {
                report();
            }
        }));
    });
}

// Report results in order
function report() {
    for (i = 0; i < 3; i++) {
        console.log(contents[i]);
    }
}

for (i = 0; i < 3; i++) {
    get_url_content(urls[i], i);
}
