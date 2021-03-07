import React, { useContext } from 'react';
import PublicIssue from '../publicIssue/PublicIssue';

export default function IssueList(props){
    const {issues} = props;
    
    return (
        <div className='issue-list'>
            {issues.map(issue => <PublicIssue {...issue}  key={issue._id} />)}
        </div>
    );
}