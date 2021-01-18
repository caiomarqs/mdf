import { Router } from 'express';

import { LoginController } from '../controllers';
import { routerAdapter } from '../adapters';

const loginRoutes = (router: Router) => {

    router.get('/login', routerAdapter);

}

export default loginRoutes;