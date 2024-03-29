import * as undici from 'undici'

export const fetch = globalThis.fetch ? globalThis.fetch : undici.fetch
export const Headers = globalThis.Headers ? globalThis.Headers : undici.Headers
export const Request = globalThis.Request ? globalThis.Request : undici.Request
export const Response = globalThis.Response ? globalThis.Response : undici.Response
