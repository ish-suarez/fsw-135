import React from 'react';
import './authForm.css';

export default function AuthForm(props){
    const {
        handleChange, 
        handleSubmit, 
        btnText,
        errMsg, 
        inputs: {
            username, 
            password
        } 
    } = props;

    return (
        <form className='login' onSubmit={handleSubmit}>
            <input className='login-inputs'
                type='text' 
                value={username} 
                name='username' 
                onChange={handleChange} 
                placeholder='Username'
                required
            />
            <input className='login-inputs'
                type='password' 
                value={password} 
                name='password' 
                minLength='8'
                onChange={handleChange} 
                placeholder='Password'
                required
            />
            <button className='btn'>{ btnText }</button>
            <p style={{backgroundColor: '#c00000', color: '#ffffff', textAlign: 'center'}}>{errMsg}</p>
        </form>
    );
}