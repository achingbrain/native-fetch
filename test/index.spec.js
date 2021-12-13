/* eslint-env mocha */

import { expect } from 'aegir/utils/chai.js'
import * as NativeFetch from 'native-fetch'
import * as Undici from 'undici'

describe(`env ${process.env.AEGIR_RUNNER}`, function () {
  it('fetch should be correct in each env', function () {
    switch (process.env.AEGIR_RUNNER) {
      case 'electron-main':
        expect(NativeFetch.fetch).to.equal(Undici.fetch)
        expect(globalThis.fetch).to.be.undefined()
        break
      case 'electron-renderer':
        expect(NativeFetch.fetch).to.equal(globalThis.fetch)
        expect(NativeFetch.Headers).to.equal(globalThis.Headers)
        expect(NativeFetch.Request).to.equal(globalThis.Request)
        expect(NativeFetch.Response).to.equal(globalThis.Response)
        expect(globalThis.fetch).to.be.ok()
        break
      case 'node':
        expect(NativeFetch.fetch).to.equal(Undici.fetch)
        expect(globalThis.fetch).to.be.undefined()
        break
      case 'browser':
        expect(NativeFetch.fetch).to.equal(globalThis.fetch)
        expect(NativeFetch.Headers).to.equal(globalThis.Headers)
        expect(NativeFetch.Request).to.equal(globalThis.Request)
        expect(NativeFetch.Response).to.equal(globalThis.Response)
        expect(globalThis.fetch).to.be.ok()
        break
      case 'webworker':
        expect(NativeFetch.fetch).to.equal(globalThis.fetch)
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
