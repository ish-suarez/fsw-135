import React, { useContext } from 'react';
import './app.css';
import {UserContext} from './context/UserProvider'


import Header from './components/header/Header';
import Main from './components/main/Main';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';

export default function App() {
    const {logout} = useContext(UserContext);
    return (
        <div className='main-container'>
            <Header />
            <Nav logout={logout} />
            <Main />
            <Footer />
        </div>
    );
}

