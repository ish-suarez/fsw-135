import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './mainComponents/home/Home';
import Inventory from './mainComponents/inventory/Inventory';

export default function Main() {
    return (
        <main>
            <Switch>
                <Route exact path={['/', '/Home']} component={Home} />
                <Route exact path={'/Inventory'} component={Inventory} />
            </Switch>
        </main>
    );
}
