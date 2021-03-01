import React, { useState, useContext } from 'react';
import AuthForm from './authForm/AuthForm';
import { UserContext } from '../../../../context/UserProvider';
import './auth.css';

const initInputs = { username: '', password: '' };

export default function Auth(){
    const [inputs, setInputs] = useState(initInputs);
    const [toggle, setToggle] = useState(false);

    const { signup, login, errMsg, resetAuthErr } = useContext(UserContext);

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    const handleSignup = (e) => {
        e.preventDefault()
        signup(inputs)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        login(inputs)
    }

    const toggleForm = () => {
        setToggle(prev => !prev)
        resetAuthErr()
    }

    return (
        <div className='auth-container'>
            { !toggle ?
                <div className='auth-form'>
                    <div>
                        <h5>You may be wondering... does my vote really count?</h5>
                        <h1>Sign up for Rock the Vote</h1>
                        <h3>Where all of our voices matter</h3>
                    </div>
                    <AuthForm 
                        handleChange={handleChange}
                        handleSubmit={handleSignup}
                        inputs={inputs}
                        btnText='Sign up'
                        errMsg={errMsg}
                    />
                <p onClick={() => toggleForm()}>Already a member?</p>
                </div>
            :
                <div className='auth-form'>
                    <div>
                        <h1>Welcome back</h1>
                        <h2>Together we keep the conversation going.</h2>
                    </div>
                    <AuthForm 
                        handleChange={handleChange}
                        handleSubmit={handleLogin}
                        inputs={inputs}
                        btnText='Login'
                        errMsg={errMsg}
                    />
                    <p onClick={() => toggleForm()}>Not a member?</p>
                </div>
            }
        </div>
    )
}