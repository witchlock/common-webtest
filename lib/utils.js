var fs = require('fs');

var Utils = function () {

    this.screenshot = function (data, filename) {
        var stream = fs.createWriteStream(filename);
        stream.write(new Buffer(data, 'base64'));
        console.log("Writing screenshot to " + filename);
        stream.end();
    }
}

module.exports = new Utils();