import React, { useContext } from 'react';
import PublicIssue from '../publicIssue/PublicIssue';

export default function IssueList(props){
    const {issues} = props;
    
    return (
        <div className='issue-list'>
            <h4 className='cursive' style={{ paddingTop: '8px', textAlign: 'right', paddingRight: '12px'}}>Public Feed</h4>
            {issues.map(issue => <PublicIssue {...issue}  key={issue._id} />)}
        </div>
    );
}