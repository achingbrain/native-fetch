'use strict'

const { Headers, Request, Response, default: nodeFetch } = require('node-fetch')
module.exports = {
  Headers,
  Request,
  Response,
  fetch: nodeFetch
}
