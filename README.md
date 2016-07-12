rho-cc-aws-region
=================

Check AWS region identifiers with [rho-contracts][].

[rho-contracts]: https://github.com/bodylabs/rho-contracts.js


Usage
-----

You must use the Body Labs package, `rho-contracts-fork`:
```js
  "dependencies": {
    "rho-contracts-fork": "^1.3.0"
  }
```

```js

const awsRegion = require('rho-cc-aws-region');

// Does not throw.
awsRegion.check('us-east-1');

// Throws.
awsRegion.check('useast1');

// False negative: does not throw, but not a real region.
awsRegion.check('us-madeup-8675309');

```


Installation
------------

```sh
npm install rho-contracts-fork rho-cc-aws-region
```


Contribute
----------

- Issue Tracker: https://github.com/bodylabs/rho-cc-aws-region/issues
- Source Code: https://github.com/bodylabs/rho-cc-aws-region

Pull requests welcome!


Support
-------

If you are having issues, please let us know.


License
-------

The project is licensed under the Mozilla Public License Version 2.0.
