import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Funds from './pages/Funds';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Funds} />
            </Switch>
        </BrowserRouter>
    );
}