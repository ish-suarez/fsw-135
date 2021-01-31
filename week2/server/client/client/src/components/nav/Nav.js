import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faWarehouse} from '@fortawesome/free-solid-svg-icons';

import './nav.css';

export default function Nav() {
    return (
        <nav>
            <Link className='link' to='/Home'>{<FontAwesomeIcon icon={faHome} />} Home</Link>
            <Link className='link' to='/Inventory'><FontAwesomeIcon icon={faWarehouse} /> View Inventory</Link>
        </nav>
    );
}


