import { Router } from 'express'

const loginRoute = (router: Router) => {
    router.get('/login', (req, res) => {
        res.send('oi');
    })
}

export default loginRoute;