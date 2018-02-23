'use strict';

var envIdentifier = process.env.ENV ? process.env.ENV : 'test';
const ENV = require('./lib/domain/appenv.' + envIdentifier + '.json');
const outputDir = 'reports';

global.CONTEXT = {
    env: ENV,
    outputDir: outputDir
};

module.exports = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    allScriptsTimeout: 500000,
    ignoreUncaughtExceptions: true,

    multiCapabilities: [{
            browserName: 'chrome',
            chromeOptions: {
                args: ['disable-infobars']
            },
            //Metadata to be displayed in the cucumber html report
            metadata: {
                browser: {
                    name: 'chrome',
                    version: '63'
                },
                device: 'PC',
                platform: {
                    name: 'Windows',
                    version: '10'
                }
            }
        },],

            SELENIUM_PROMISE_MANAGER: false, //to use protractor async/await


    beforeLaunch: function () {
        var path = require('path');
        let reportsPath = path.join(__dirname, outputDir);
        var mkdirp = require('mkdirp');
        mkdirp(reportsPath, function (err) {
            if (err) console.error(err);
            else console.log('Directory for test reports is created: ' + reportsPath);
        });
    },
};
