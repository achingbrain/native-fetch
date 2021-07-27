declare const _exports: {
    default: typeof fetch;
    Headers: {
        new (init?: HeadersInit): Headers;
        prototype: Headers;
    };
    Request: {
        new (input: RequestInfo, init?: RequestInit): Request;
        prototype: Request;
    };
    Response: {
        new (body?: BodyInit, init?: ResponseInit): Response;
        prototype: Response;
        error(): Response;
        redirect(url: string, status?: number): Response;
    };
} | {
    default: typeof import("node-fetch/index").default;
    Headers: typeof import("node-fetch/index").Headers;
    Request: typeof import("node-fetch/index").Request;
    Response: typeof import("node-fetch/index").Response;
};
export = _exports;
