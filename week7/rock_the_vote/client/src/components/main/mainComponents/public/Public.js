import React, {useEffect, useState} from 'react';
import axios from 'axios';

import './public.css';

import PublicIssueList from './publicComponents/publicIssueList/PublicIssueList';


export default function Public() {
    const [issues, setIssues] = useState([])

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
        console.log(`These are Issues`, issues)
    }, [])


    return (
        <div className='home'>
            <PublicIssueList issues={issues} />
        </div>
    );
}

