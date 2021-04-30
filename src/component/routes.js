import React from 'react'
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import Login from './login';
import Navigation from './navigation';
import Registration from './registration';
function Routes() {
    return (
        <div>
            <BrowserRouter>
            <Navigation/>
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/reg' component={Registration}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes
