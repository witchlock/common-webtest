var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

var {Given,Then, When} = require('cucumber');
const env = CONTEXT.env;

var homePage = require('../../../lib/pages/home.js');
var utils = require('../../../lib/utils.js');

Given('a wonderful monday', function () {
    return browser.get(env.baseUrl);
});

When('I start in the morning', function (done) {
 done();
});

Then('I should cheer up', function (done) {
     done();
});
