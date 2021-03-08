import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../../../../../context/UserProvider';

export default function PublicIssue(props) {
    const { issue, upVotes, downVotes, _id } = props;

    const {addLike} = useContext(UserContext);

    return (
        <div>
            <div id={_id} className='cont'>
                    <div className='likes-iss'>
                        <p className='delete-iss rmg like' onClick={() => addLike(_id)} >{upVotes}<FontAwesomeIcon icon={faThumbsUp} /> </p>
                        <p className='delete-iss rmg'>{downVotes}<FontAwesomeIcon icon={faThumbsDown} /></p>
                    </div>
                    <h1 className='issue'>{ issue }</h1>
                </div>
        </div>
    )
}