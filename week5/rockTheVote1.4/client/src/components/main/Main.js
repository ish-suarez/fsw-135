import React, {useContext} from 'react';
import {Switch, Route} from 'react-router-dom';
import {UserContext} from '../../context/UserProvider';

import Auth from './mainComponents/auth/Auth';
import Profile from './mainComponents/profile/Profile';
import Public from './mainComponents/public/Public';

export default function Main() {
    const {token} = useContext(UserContext)
    return (
        <main>
            <Switch>
                <Route exact path={['/', '/Public']} component={Public} />
                <Route exact path={['/Profile']} component={token ? Profile : Auth} />
            </Switch>
        </main>
    );
}
