import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {UserContext} from '../../../../context/UserProvider';

import './public.css';

import PublicIssueList from './publicComponents/publicIssueList/PublicIssueList';
import IssueList from './publicComponents/publicIssueList/PublicIssueList';


export default function Public() {
    const [issue, setIssues] = useState([])

    const getAllIssues = () => {
        axios.get(`/issue`)
            .then(res =>{
                setIssues(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getAllIssues();
        console.log(`These are Issues`, issue)
    }, [])


    return (
        <div className='home'>
            <PublicIssueList issues={issue} />
        </div>
    );
}

