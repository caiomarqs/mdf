import { Request, Response } from "express";

import { IController } from "../interfaces";
import { HTTP_CODE } from "../helpers";

const routerAdapter = async (req: Request, res: Response) => {

    res.send(req.body);

    // if (typeof req.body === undefined) {
    //     res
    //         .status(HTTP_CODE.INTERNAL_SERVER_ERROR)
    //         .json({ error: 'Internal Sever Error' });
    // }

    // const request = {
    //     ...(req.body || {}),
    //     ...(req.params || {})
    // }

    // const httpResponse = await controller.handle(request);

    // const isSucessStatusCode =
    //     httpResponse.statusCode >= HTTP_CODE.OK
    //     &&
    //     httpResponse.statusCode <= HTTP_CODE.NO_CONTENT

    // if (isSucessStatusCode) {
    //     res
    //         .status(httpResponse.statusCode)
    //         .json(httpResponse.body);
    // }
    // else {
    //     res
    //         .status(httpResponse.statusCode)
    //         .json({
    //             error: httpResponse.body.message
    //         })
    // }
}

export { routerAdapter }