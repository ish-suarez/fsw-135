import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGlobeAmericas, faHome} from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../context/UserProvider';

import './nav.css';

export default function Nav(props) {
    const {logout} = props;
    const {token} = useContext(UserContext)
    return (
        <nav>
            {token && <Link className='link' to='/Profile'>{<FontAwesomeIcon icon={faHome} />} Profile</Link>}
            <Link pop className='link' to='/Public'><FontAwesomeIcon icon={faGlobeAmericas} /></Link>
            {token && <button onClick={logout}>Log Out</button>}
        </nav>
    );
}


