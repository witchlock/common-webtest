'use strict';
let env = require('./environment.js');

exports.config = Object.assign({}, env, {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
        'features/*.feature'
    ],

    cucumberOpts: {
        require: [
            './features/support/world.js',
            './features/support/hooks.js',
            './features/support/step_definitions/*.js'
        ],
        tags: ["~@ignore"],
        format: 'json:reports/results.json',
        ignoreUncaughtExceptions: true
    },

    plugins: [{
        package: 'protractor-multiple-cucumber-html-reporter-plugin',
        options: {
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true,
            removeOriginalJsonReportFile: true,
            jsonOutputPath: global.CONTEXT.outputDir,
            reportPath: global.CONTEXT.outputDir,
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
});

