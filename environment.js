'use strict';

var os = require('os');
var platform = os.platform();

var envIdentifier = process.env.ENV ? process.env.ENV : 'test';
const APP_ENV = require('./lib/domain/appenv.' + envIdentifier + '.json'); //could have multiple configurations
const OUTPUT_DIR = 'reports';

global.CONTEXT = {
    outputDir: OUTPUT_DIR,
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
                name: platform,
            }
        }
    },],

    params: {
        baseUrl: APP_ENV.host,

        credentials: {
            username: APP_ENV.username,
            password: APP_ENV.password
        },

        endpoints: {
            someUrl: APP_ENV.host + '/uri'
        },

        screenshotDir: OUTPUT_DIR
    },


    beforeLaunch: function () {
        var path = require('path');
        let reportsPath = path.join(__dirname, OUTPUT_DIR);
        var mkdirp = require('mkdirp');
        mkdirp(reportsPath, function (err) {
            if (err) console.error(err);
            else console.log('Directory for test reports is created: ' + reportsPath);
        });
    },
};
