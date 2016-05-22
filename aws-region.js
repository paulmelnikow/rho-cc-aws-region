var c = require('rho-contracts');

var awsRegion = c.matches(/^[a-z]{2}-[a-z]+-\d+$/).rename('awsRegion');

module.exports = awsRegion;
