import React, {useContext, useState} from 'react'
import IssueForm from './profileComponents/issueForm/IssueForm';
import IssueList from './profileComponents/issueList/IssueList';
import { UserContext } from '../../../../context/UserProvider';

import Header from '../../../header/Header';

import './profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenFancy, faWindowClose } from '@fortawesome/free-solid-svg-icons';

export default function Profile(){
    const { 
        user: { 
            username 
        }, 
        addIssue,      
        issues
    } = useContext(UserContext);

    const [toggle, setToggle] = useState(false);

    return (
        <div className="profile">
            <Header />
            <div className='prf-head'>
                <h1>@{username}'s Profile</h1>
            </div>
            {toggle ? 
                <div className='form'>
                    <FontAwesomeIcon icon={faWindowClose} onClick={() => setToggle(prevToggle => !prevToggle)} />
                    <IssueForm submit={addIssue} />
                </div>
        
            :
                <div className='toggle-form'>
                    <p>Add Your Own Voice</p>
                    <FontAwesomeIcon className='toggle-btn' icon={faPenFancy} onClick={() => setToggle(prevToggle => !prevToggle)} />
                </div>
            }
            <div className='list'>
                <h4 className='cursive' style={{ paddingTop: '30px', textAlign: 'right', paddingRight: '12px'}}>Your Issues</h4>
                <IssueList issues={issues} />
            </div>
        </div>
    )
}
