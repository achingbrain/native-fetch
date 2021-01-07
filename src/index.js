'use strict'
const isElectron = require('is-electron')
const IS_ENV_WITH_DOM = typeof window === 'object' && typeof document === 'object' && document.nodeType === 9
const IS_ELECTRON = isElectron()
const IS_ELECTRON_MAIN = IS_ELECTRON && !IS_ENV_WITH_DOM

if (globalThis.fetch && globalThis.Headers && globalThis.Request && globalThis.Response) {
  module.exports = require('./browser')
} else {
  if (IS_ELECTRON_MAIN) {
    module.exports = require('./electron')
  } else {
    module.exports = require('./node')
  }
}
