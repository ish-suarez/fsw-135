import React, { useContext } from 'react';
import './app.css';
import {UserContext} from './context/UserProvider'

import Main from './components/main/Main';
import Nav from './components/nav/Nav';

export default function App() {
    const {logout} = useContext(UserContext);
    return (
        <div className='main-container'>
            <Nav logout={logout} />
            <Main />
        </div>
    );
}

