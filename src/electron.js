'use strict'
const {
  Headers: ElectronHeaders,
  Request: ElectronRequest,
  Response: ElectronResponse,
  default: electronFetch
} = require('electron-fetch')

module.exports = {
  Headers: ElectronHeaders,
  Request: ElectronRequest,
  Response: ElectronResponse,
  fetch: electronFetch
}
