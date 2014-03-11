// learnyounode
//
// Make it modular
// Filtered LS function in module form
module.exports = function(directory, extension, callback) {
    var path = require('path');
    var fs = require('fs');

    extension = "." + extension;

    fs.readdir(directory, function(err,data) {
        // Escalate error to callback
        if (err) {
            return callback(err);
        }

        // Process file list and call back without error
        return callback(null, data.filter(function(x) {
            return extension == path.extname(x);
        }));
    });
};
