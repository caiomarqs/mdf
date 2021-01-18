import { Router } from 'express';

import { LoginController } from '../controllers';
import { routerAdapter } from '../adapters';

const loginRoutes = (router: Router) => {

    router.get(
        '/login',
        async (req, res) => routerAdapter(req, res, new LoginController())
    );

}

export default loginRoutes;