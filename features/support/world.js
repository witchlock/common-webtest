'use strict';

// Configure chai
global.expect = require('chai')
    .use(require('chai-as-promised'))
    .expect;

global.Given = require('cucumber').Given;
global.When = require('cucumber').When;
global.Then = require('cucumber').Then;
global.Pages = {
    HomePage: require('../../lib/pages/home.js'),
};