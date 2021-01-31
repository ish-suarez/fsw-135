import React from 'react';
import './app.css';
import Footer from './components/footer/Footer';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Nav from './components/nav/Nav';

export default function App() {
    return (
        <div className='main-container'>
            <Header />
            <Nav />
            <Main />
            <Footer />
        </div>
    );
}

