import React from 'react'
import Issue from '../issue/Issue';

export default function IssueList(props){
    const {issues, deleteIssue} = props;
    
    return (
        <div className="comment-list">
        {issues.map(issue => <Issue {...issue} deleteIssue={deleteIssue} key={issue._id} />)}
        </div>
    );
}

