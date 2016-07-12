'use strict';

const c = require('rho-contracts-fork');

const awsRegion = c.matches(/^[a-z]{2}-[a-z]+-\d+$/).rename('awsRegion');

module.exports = awsRegion;
