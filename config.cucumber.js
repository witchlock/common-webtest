const outputDir = 'reports/cucumber';

exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['src/specs/*.js'],

    allScriptsTimeout: 500000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    capabilities: {
        'browserName': 'chrome'
    },

    specs: [
        'src/specs/cucumber/*.feature'
    ],

    cucumberOpts: {
        require: ['./src/specs/cucumber/step_definitions/**/*.js'],
        tags: [],
        format: 'json:reports/cucumber/results.json',
    },

    beforeLaunch: function () {
        var path = require('path');
        let reportsPath = path.join(__dirname, outputDir);
        var mkdirp = require('mkdirp');
        mkdirp(reportsPath, function (err) {
            if (err) console.error(err);
            else console.log('Directory for test reports is created: ' + reportsPath);
        });
    }
};
