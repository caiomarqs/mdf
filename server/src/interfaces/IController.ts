import { IHttpResponse } from './IHttpResponse';

interface IController<T = any> {
    handle: (req: T) => Promise<IHttpResponse>;
}

export { IController };