import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGlobeAmericas, faSignInAlt, faSignOutAlt, faUser} from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../context/UserProvider';

import './nav.css';

export default function Nav(props) {
    const {logout} = props;
    const {token} = useContext(UserContext)
    return (
        <nav>
            {token && <Link className='link' to='/Profile'>{<FontAwesomeIcon icon={faUser} />}</Link>}
            <Link pop className='link' to='/Public'><FontAwesomeIcon icon={faGlobeAmericas} /></Link>
            {token ? 
                <>
                    {token && <FontAwesomeIcon onClick={logout} icon={faSignOutAlt} />}
                </>
            :
                <>
                    <Link className='link' to='/'><FontAwesomeIcon icon={faSignInAlt} /> </Link>
                </>
            }
            
        </nav>
    );
}


