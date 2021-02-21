import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faWarehouse} from '@fortawesome/free-solid-svg-icons';

import './nav.css';

export default function Nav(props) {
    const {logout} = props;
    return (
        <nav>
            <Link className='link' to='/Profile'>{<FontAwesomeIcon icon={faHome} />} Profile</Link>
            <Link className='link' to='/Public'><FontAwesomeIcon icon={faWarehouse} /> Public</Link>
            <button onClick={logout}>Log Out</button>
        </nav>
    );
}


