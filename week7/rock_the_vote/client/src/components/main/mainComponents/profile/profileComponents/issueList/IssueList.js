import React, { useContext } from 'react'
import { UserContext } from '../../../../../../context/UserProvider';
import Issue from '../issue/Issue';

import './issueList.css';

export default function IssueList(props){
    const {issues} = props;

    const {editIssue} = useContext(UserContext);
    
    return (
        <div className="issue-list">
            {issues.map(issue => <Issue {...issue} submit={editIssue} key={issue._id} />)}
        </div>
    );
}

