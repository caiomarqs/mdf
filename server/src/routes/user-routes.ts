import { Router } from 'express';

import { routerAdapter } from '../adapters';
import { GetUserController } from '../controllers';

const userRoutes = (router: Router) => {
    router.all(/\/user\/+/,)


    router.get(
        '/user/:id',
        async (req, res) => routerAdapter(req, res, new GetUserController(req.params.id))
    );
}

export default userRoutes;