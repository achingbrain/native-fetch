const globalFetch = globalThis.fetch
const globalHeaders = globalThis.Headers
const globalRequest = globalThis.Request
const globalResponse = globalThis.Response

export { globalFetch as fetch }
export { globalHeaders as Headers }
export { globalRequest as Request }
export { globalResponse as Response }
