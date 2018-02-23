const {Given, When, Then} = require('cucumber');
const {expect} = require('chai');

Given('a wonderful monday', function (callback) {
    expect(1).to.equal(1);
    callback();
});

When('I start in the morning', function (callback) {
    callback();
});

Then('I should cheer up', function (callback) {
    callback();
});