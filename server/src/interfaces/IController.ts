import { IHttpResponse } from './IHttpResponse';

interface IController<T = any> {
    handle: (req: T, headers: T) => Promise<IHttpResponse>;
}

export { IController };