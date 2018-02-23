const outputDir = 'reports/cucumber';

exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['src/specs/*.js'],

    allScriptsTimeout: 500000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

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

    specs: [
        'src/specs/cucumber/*.feature'
    ],

    cucumberOpts: {
        require: ['./src/specs/cucumber/step_definitions/**/*.js'],
        tags: [],
        format: 'json:reports/cucumber/results.json',
    },

    plugins: [{
                package: 'protractor-multiple-cucumber-html-reporter-plugin',
                options:{
                    automaticallyGenerateReport: true,
                    removeExistingJsonReportFile: true,
                    removeOriginalJsonReportFile: true,
                    jsonOutputPath: outputDir,
                    openReportInBrowser: true,
                    customData: {
                                        title: 'Run info',
                                        data: [
                                            {label: 'Project', value: 'Your Project'},
                                            {label: 'Release', value: '1.0.0'},
                                            {label: 'Execution Start Time', value: new Date().toISOString()},
                                            {label: 'Execution End Time', value: 'How to get this one?'}
                                        ]
                                    }
                },
            }],

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
