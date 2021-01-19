import { Router } from 'express';

import { RegisterControler } from '../controllers';
import { routerAdapter } from '../adapters';

const regiterRoutes = (router: Router) => {

    router.post(
        '/register',
        async (req, res) => routerAdapter(req, res, new RegisterControler())
    );

}

export default regiterRoutes;