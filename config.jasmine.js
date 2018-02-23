var envIdentifier = process.env.ENV ? process.env.ENV : 'test';
const ENV = require('./src/lib/domain/environment.' + envIdentifier + '.json');

global.CONTEXT = {
    env: ENV,
};

exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['src/specs/jasmine/*.js'],

    framework: 'jasmine2',

    jasmineNodeOpts: {
        isVerbose: true,
        showColors: true,
        defaultTimeoutInterval: 50000,
        print: function () {
        } //remove protractor dot report;
    },

    onPrepare: function () {
        console.log('Start testing on environment ' + envIdentifier);
        console.log('Loading environment configuration...');
        console.log(CONTEXT.env);
    }
};

