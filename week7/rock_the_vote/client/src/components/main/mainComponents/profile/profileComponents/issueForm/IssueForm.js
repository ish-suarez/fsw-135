import React, { useState } from 'react'
import { faPenFancy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import './issueForm.css';

export default function IssueForm(props){

    const initInputs = { issue: '' || props.issue}

    const [inputs, setInputs] = useState(initInputs)
    const { _id, submit } = props;
    

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInputs => ({
        ...prevInputs,
        [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        submit(inputs, _id)
        setInputs(initInputs)
    }

    const { issue } = inputs;

    return (
        <form className='issue-form' >
            <textarea className='issue-input'
                type="text" 
                name="issue" 
                value={issue} 
                onChange={handleChange} 
                placeholder="Your Issue"
            />
            <p onClick={handleSubmit} className='toggle-btn no-out'><FontAwesomeIcon icon={faPenFancy} /></p>
        </form>
    );
}