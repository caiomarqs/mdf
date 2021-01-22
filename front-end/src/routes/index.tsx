import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Header } from '../components';
import { LoginPage } from '../pages'

const Routes = () => {
    return (
        <>
            <Header />
            <Router>
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                </Switch>
            </Router>
        </>
    )
}

export { Routes }