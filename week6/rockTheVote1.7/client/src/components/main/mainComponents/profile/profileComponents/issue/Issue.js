import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faThumbsUp, faThumbsDown, faTrashAlt} from '@fortawesome/free-solid-svg-icons'

export default function Issue(props){
    const { issue, upVotes, downVotes, deleteIssue, _id } = props;
    return (
        <div id={_id}>
        <h1>{ issue }</h1>
        <span onClick={() => deleteIssue(_id)} ><FontAwesomeIcon icon={faTrashAlt}/></span>
        <div style={{marginLeft: '20px'}}>
            <span style={{marginRight: '5px'}}><FontAwesomeIcon icon={faThumbsUp} /> {upVotes}</span>
            <span><FontAwesomeIcon icon={faThumbsDown} /> {downVotes}</span>
            <span></span>
        </div>
        </div>
    )
}

