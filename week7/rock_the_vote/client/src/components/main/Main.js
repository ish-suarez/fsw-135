import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {UserContext} from '../../context/UserProvider';
import ProtectedRoute from './protectedRoute/ProtectedRoute';

import Auth from './mainComponents/auth/Auth';
import Profile from './mainComponents/profile/Profile';
import Public from './mainComponents/public/Public';

import './main.css';

export default function Main() {
    const {token} = useContext(UserContext)
    return (
        <main>
            <Switch>
                <Route exact path='/' render={() => token ? <Redirect to='Profile' /> : <Auth />} />
                <ProtectedRoute path='/Profile' component={Profile} redirectTo='/' token={token} />
                <Route path='/Public' component={Public} />
            </Switch>
        </main>
    );
}
