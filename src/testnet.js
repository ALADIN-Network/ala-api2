const apiGen = require('./apigen')

module.exports = Testnet

const API_VERSION = 'v1'

Testnet.api = require('ala-json2/api/v1')
Testnet.schema = require('ala-json2/schema')

// Change httpEndpoint to public testnet when available
const configDefaults = {httpEndpoint: 'http://127.0.0.1:8888'}

/**
  @arg {object} config
*/
function Testnet (config) {
  config = Object.assign({}, configDefaults, config)
  return apiGen(API_VERSION, Testnet.api, config)
}
