import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons'

export default function Issue(props){
  const { issue, upVotes, downVotes, _id } = props;
  return (
    <div style={{display: 'flex', }} id={_id}>
      <h1>{ issue }</h1>
      <div style={{marginLeft: '20px'}}>
        <span style={{marginRight: '5px'}}><FontAwesomeIcon icon={faThumbsUp} /> {upVotes}</span>
        <span><FontAwesomeIcon icon={faThumbsDown} /> {downVotes}</span>
      </div>
    </div>
  )
}