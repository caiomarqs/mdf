import { IHttpResponse } from './IHttpResponse';

interface IController<T = any> {
    handle: (request: T) => Promise<IHttpResponse>;
}

export { IController };