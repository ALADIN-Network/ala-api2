const apiGen = require('./apigen')

module.exports = Testnet

const API_VERSION = 'v1'

Testnet.api = require('alaexplorerjs-json-v2.0.2/api/v1')
Testnet.schema = require('alaexplorerjs-json-v2.0.2/schema')

// Change httpEndpoint to public testnet when available
const configDefaults = {httpEndpoint: 'http://127.0.0.1:8888'}

/**
  @arg {object} config
*/
function Testnet (config) {
  config = Object.assign({}, configDefaults, config)
  return apiGen(API_VERSION, Testnet.api, config)
}
