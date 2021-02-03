'use strict'

/* eslint-env mocha */
const { expect } = require('aegir/utils/chai')
const NativeFetch = require('../src')
const NodeFetch = require('node-fetch')

describe('env', function () {
  it('fetch should be correct in each env', function () {
    switch (process.env.AEGIR_RUNNER) {
      case 'electron-main':
        expect(NativeFetch.default).to.equal(NodeFetch.default)
        expect(globalThis.fetch).to.be.undefined()
        break
      case 'electron-renderer':
        expect(NativeFetch.default).to.equal(globalThis.fetch)
        expect(NativeFetch.Headers).to.equal(globalThis.Headers)
        expect(NativeFetch.Request).to.equal(globalThis.Request)
        expect(NativeFetch.Response).to.equal(globalThis.Response)
        expect(globalThis.fetch).to.be.ok()
        break
      case 'node':
        expect(NativeFetch.default).to.equal(NodeFetch.default)
        expect(globalThis.fetch).to.be.undefined()
        break
      case 'browser':
        expect(NativeFetch.default).to.equal(globalThis.fetch)
        expect(NativeFetch.Headers).to.equal(globalThis.Headers)
        expect(NativeFetch.Request).to.equal(globalThis.Request)
        expect(NativeFetch.Response).to.equal(globalThis.Response)
        expect(globalThis.fetch).to.be.ok()
        break
      case 'webworker':
        expect(NativeFetch.default).to.equal(globalThis.fetch)
        expect(NativeFetch.Headers).to.equal(globalThis.Headers)
        expect(NativeFetch.Request).to.equal(globalThis.Request)
        expect(NativeFetch.Response).to.equal(globalThis.Response)
        expect(globalThis.fetch).to.be.ok()
        break
      default:
        expect.fail(`Could not detect env. Current env is ${process.env.AEGIR_RUNNER}`)
        break
    }
  })
})
