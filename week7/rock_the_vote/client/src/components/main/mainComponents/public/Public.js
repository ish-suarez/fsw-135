import React, {useEffect, useState} from 'react';
import axios from 'axios';
import PublicIssueList from './publicComponents/publicIssueList/PublicIssueList';

import './public.css';



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
    }, [issue])


    return (
        <div className='home'>
            <PublicIssueList issues={issue} />
        </div>
    );
}

