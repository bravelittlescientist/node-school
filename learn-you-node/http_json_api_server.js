// learnyounode
//
// HTTP JSON API Server
// Given a port, servce data on GET responses. Endpoints:
// 
// /api/parsetime: {iso : ISO-format time}
// respond with {hour: minute: second: } object
//
// /api/unixtime: {iso : ISO-format time}
// respond with {unixtime: UNIX epoch time}

var http = require('http');
var url = require('url');

// First command line arg is port
var port = +process.argv[2];

// Endpoints provide functions to parse iso dates. While
// I don't have to extend in this case, this format will make
// it easier to extend later if needed.
var endpoints = {
    // parsetime: return object with hour, min, second from ISO format
    "/api/parsetime" : function (o) {
        var date = new Date(o["iso"]);
        var result = {
            "hour" : date.getHours(),
            "minute" : date.getMinutes(),
            "second" : date.getSeconds()
        };
        return JSON.stringify(result);
    },

    // unixtime: return object with UNIX epoch time 
    "/api/unixtime" : function (o) {
        var date = new Date(o["iso"]);
        var result = {
            "unixtime" : date.getTime()
        };
        return JSON.stringify(result);
    }
}

// Create and run server
var server = http.createServer(function (request, response) {

    // Check if GET
    if (request.method == "GET") {
  
        var api_request = url.parse(request.url, true);

        // Manage endpoints
        // First, check for invalid endpoint
        if (!endpoints.hasOwnProperty(api_request.pathname)) {
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.end("Invalid API endpoint");     
        }

        // Return endpoint response by calling its associated function
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(endpoints[api_request.pathname](api_request.query));

    } else {
        // Only handling GETs for this exercise
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        respond.end("Only accepting GET requests");
    }
});
server.listen(port);
