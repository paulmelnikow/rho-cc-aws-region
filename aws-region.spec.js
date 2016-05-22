var awsRegion = require('./aws-region');

var c = require('rho-contracts');

var should = require('should');

// For convenience and conciseness.
var good = should.doesNotThrow;
var bad = function (block) { should.throws(block, c.ContractError); };

describe('awsRegion', function () {

    it('accepts what it should', function () {
        good(function () { awsRegion.check('us-east-1'); });
        good(function () { awsRegion.check('us-madeup-8675309'); });
    });

    it('rejects what it should', function () {
        bad(function () { awsRegion.check(' '); });
        bad(function () { awsRegion.check('useast1'); });
    });

});
