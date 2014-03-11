// learnyounode
//
// Time Server
// Make TCP connections and write current time to them

var net = require('net');
var strftime = require('strftime');

// Port to listen on is first argument
var port = +process.argv[2];
var time = "";

// Current time
function format_zero(n) {
    var zero = "00" + n;
    return zero.slice(-2);
}

function current() {
    var date = new Date();

    var y = date.getFullYear();
    var mo = format_zero(date.getMonth() + 1);
    var d = format_zero(date.getDate());
    var h = format_zero(date.getHours());
    var m = format_zero(date.getMinutes());

    return y + "-" + mo + "-" + d + " " + h + ":" + m + "\n";
}

var server = net.createServer(function (socket) {
    socket.end(current());
})
server.listen(port);
