import { Readable as NodeReadableStream } from 'stream'

declare function fetch (
  input: RequestInfo,
  init?: RequestInit
): Promise<Response>

interface Body {
  readonly body: NodeReadableStream | ReadableStream<Uint8Array> | null
  readonly bodyUsed: boolean
  arrayBuffer: () => Promise<ArrayBuffer>
  blob: () => Promise<Blob>
  formData: () => Promise<FormData>
  json: () => Promise<any>
  text: () => Promise<string>
}
declare class Headers extends globalThis.Headers {}

/** This Fetch API interface represents the response to a request. */
declare class Response extends globalThis.Response {
  constructor (body?: BodyInit | null, init?: ResponseInit);
  clone: () => Response

  // Body interface
  readonly body: NodeReadableStream | ReadableStream<Uint8Array> | null

  static error (): Response;
  static redirect (url: string, status?: number): Response;
}

declare class Request extends globalThis.Request {
  constructor (input: RequestInfo, init?: RequestInit);
  clone (): Request;

  // Body interface
  readonly body: NodeReadableStream | ReadableStream<Uint8Array> | null
}

type RequestInfo = Request | string

type BodyInit =
    | Blob
    | BufferSource
    | FormData
    | URLSearchParams
    | ReadableStream<Uint8Array>
    | string
    | Buffer
    | NodeReadableStream

interface RequestInit extends globalThis.RequestInit {
  body?: BodyInit | null
}

export default fetch
export {
  Headers,
  Request,
  Response,
  Body,
  BodyInit
}
