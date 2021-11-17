'use strict'

// @ts-expect-error globalThis.fetch is defined according to the env types but it's not in node
if (globalThis.fetch && globalThis.Headers && globalThis.Request && globalThis.Response) {
  module.exports = {
    fetch: globalThis.fetch,
    Headers: globalThis.Headers,
    Request: globalThis.Request,
    Response: globalThis.Response
  }
} else {
  module.exports = {
    fetch: require('undici').fetch,
    Headers: require('undici').Headers,
    Request: require('undici').Request,
    Response: require('undici').Response
  }
}
