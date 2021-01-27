import { Router } from 'express';

import { routerAdapter } from '../adapters';
import {
    LoginController,
    VerifyUserControler
} from '../controllers';

const loginRoutes = (router: Router) => {

    router.post(
        '/login',
        async (req, res) => routerAdapter(req, res, new LoginController())
    );

    router.post(
        '/verifyUser',
        async (req, res) => routerAdapter(req, res, new VerifyUserControler())
    );
}

export default loginRoutes;