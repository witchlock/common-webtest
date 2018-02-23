'use strict';

var path = require('path');
var {After, Before} = require('cucumber');

//Screenshot for each test case
After(function (testCase) {
    var that = this;
    return browser.takeScreenshot().then(function (stream) {
        return that.attach(stream, 'image/png');
    })
});
