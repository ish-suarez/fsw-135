import React from 'react';
import './authForm.css';

export default function AuthForm(props){
    const {
        handleChange, 
        handleSubmit, 
        btnText, 
        inputs: {
            username, 
            password
        } 
    } = props;

    return (
        <form className='login' onSubmit={handleSubmit}>
            <input 
                type='text' 
                value={username} 
                name='username' 
                onChange={handleChange} 
                placeholder='Username'/>
            <input 
                type='password' 
                value={password} 
                name='password' 
                minLength='8'
                onChange={handleChange} 
                placeholder='Password'/>
            <button className='btn btn-primary btn-block btn-large'>{ btnText }</button>
        </form>
    );
}