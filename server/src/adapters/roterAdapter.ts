import { Request, Response } from "express";

import { IController } from "../interfaces";
import { HTTP_CODE } from "../helpers";

const routerAdapter = async (req: Request, res: Response, controller: IController) => {
    const request = {
        ...(req.body || {}),
        ...(req.params || {})
    }

    const httpResponse = await controller.handle(request);

    const isSucessStatusCode =
        httpResponse.statusCode >= HTTP_CODE.OK
        &&
        httpResponse.statusCode <= HTTP_CODE.NO_CONTENT

    if (isSucessStatusCode) {
        res
            .status(httpResponse.statusCode)
            .json(httpResponse.body);
    }
    else {
        res
            .status(httpResponse.statusCode)
            .json({
                error: { ...httpResponse.body }
            })
    }
}

export { routerAdapter }