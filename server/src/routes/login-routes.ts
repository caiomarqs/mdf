import { Router } from 'express';

import { routerAdapter } from '../adapters';
import {
    LoginController,
    VerifyUserControler
} from '../controllers';

const loginRoutes = (router: Router) => {

    router.get(
        '/login',
        async (req, res) => routerAdapter(req, res, new LoginController())
    );

    router.get(
        '/verifyUser',
        async (req, res) => routerAdapter(req, res, new VerifyUserControler())
    );
}

export default loginRoutes;