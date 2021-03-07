import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons'

export default function PublicIssue(props) {
    const { issue, upVotes, downVotes, _id} = props;

    return (
        <div>
            <div id={_id} className='cont'>
                    <div className='likes-iss'>
                        <p className='delete-iss rmg like'>{upVotes}<FontAwesomeIcon icon={faThumbsUp} /> </p>
                        <p className='delete-iss rmg'>{downVotes}<FontAwesomeIcon icon={faThumbsDown} /></p>
                    </div>
                    <h4></h4>
                    <h1 className='issue'>{ issue }</h1>
                </div>
        </div>
    )
}