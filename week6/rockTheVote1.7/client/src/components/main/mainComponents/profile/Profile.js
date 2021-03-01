import React, { useContext } from 'react'
import IssueForm from './profileComponents/issueForm/IssueForm';
import IssueList from './profileComponents/issueList/IssueList';
import { UserContext } from '../../../../context/UserProvider';

export default function Profile(){
    const { 
        user: { 
            username 
        }, 
        addIssue,
        deleteIssue, 
        issues 
    } = useContext(UserContext);

    return (
        <div className="profile">
        <h1>Welcome @{username}!</h1>
        <h3>Add A Issue</h3>
        <IssueForm addIssue={addIssue} />
        <h3>Your Issues</h3>
        <IssueList issues={issues} deleteIssue={deleteIssue}/>
        </div>
    )
}
