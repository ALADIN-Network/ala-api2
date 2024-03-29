[![Build Status](https://travis-ci.org/ALAIO/ala-api2.svg?branch=master)](https://travis-ci.org/ALAIO/ala-api2)
[![NPM](https://img.shields.io/npm/v/ala-api2.svg)](https://www.npmjs.org/package/ala-api2)

# Ala API

Application programming interface to ALA blockchain nodes.  This is mostly for read-only API calls.  If you decide you need to sign transactions, your better off using this API in the [alaexplorerjs](https://github.com/ALADIN-Network/alaexplorerjs) package.

# Requirement

Build and run [alad](https://github.com/ALADIN-Network/ala) or direct requests to a public testnet or production node.

## Usage

```javascript
api = require('ala-api2') // Or api = require('./src')

testnet = api.Testnet() // See ./src/testnet.js for configuration

// Any API call without a callback parameter will print documentation: description,
// parameters, return value, and possible errors.  All methods and documentation
// are created from JSON files in alaexplorerjs/json/api/v1..
testnet.getInfo()

// A Promise is returned if a callback is not provided.
testnet.getInfo({}).then(result => console.log(result))
testnet.getBlock(1).then(result => console.log(result))

// For callbacks instead of Promises provide a callback
callback = (err, res) => {err ? console.error(err) : console.log(res)}

// The server does not expect any parameters only the callback is needed
testnet.getInfo(callback)

// Parameters are added before the callback
testnet.getBlock(1, callback)

// Parameters can be an object
testnet.getBlock({block_num_or_id: 1}, callback)
testnet.getBlock({block_num_or_id: 1}).then(result => console.log(result))
```

## Configuration

```js
api = require('ala-api2') // Or api = require('./src')

options = {
  httpEndpoint: 'http://127.0.0.1:8888', // default
  debug: false
}

testnet = api.Testnet(options)
```

## API Documentation

API methods and documentation are generated from:
* [chain.json](https://github.com/ALADIN-Network/ala-json2/blob/master/api/v1/chain.json)
* [account_history.json](https://github.com/ALADIN-Network/ala-json2/blob/master/api/v1/account_history.json)

## Environment

Node 6+ and browser (browserify, webpack, etc)

## TODO

Automate code-coverage after a public testnet is available.
