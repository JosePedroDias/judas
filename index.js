var fs = require('fs');
var http = require('http');

var mime = require('mime-sniffer');
var streamToBuffer = require('stream-to-buffer');



module.exports = function(remoteUrl, localPathPrefix, cb) {
    http
        .get(remoteUrl, function(resp) {
            streamToBuffer(resp, function (err, buffer) {
                if (err) { return cb(err); }

                mime.lookup(buffer, function(err, info) {
                    if (err) { return cb(err); }

                    var localPath = localPathPrefix + info.extension;

                    fs.writeFile(localPath, buffer, function(err) {
                        if (err) { return cb(err); }

                        cb(null, localPath);
                    });
                });
            });
        })
        .on('error', cb);
};
