import React, { useState } from 'react';
import axios from 'axios';
import {filter} from '../../node_modules/lodash'

export const UserContext = React.createContext();

const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
})

export default function UserProvider(props){
  const initState = { 
    user: JSON.parse(localStorage.getItem('user')) || {}, 
    token: localStorage.getItem('token') || '', 
    issues: [] 
  }

  const [userState, setUserState] = useState(initState);

  const signup = (credentials) => {
    axios.post('/auth/signup', credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        setUserState(prevUserState => ({...prevUserState, user, token}))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  const login = (credentials) => {
    axios.post('/auth/login', credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        getUserIssues()
        setUserState(prevUserState => ({...prevUserState, user, token}))
      })
      .catch(err => console.log(err.data))
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUserState({user: {}, token: '', issues: []})
  }

  const getUserIssues = () => {
    userAxios.get('/api/issue/user')
      .then(res => {
        setUserState(prevState => ({...prevState, issues: res.data}))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  const addIssue = (newIssue) => {
    userAxios.post('/api/issue', newIssue)
      .then(res => {
        setUserState(prevState => ({...prevState, issues: [...prevState.issues, res.data]}))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }
  

  const deleteIssue = (issueId) => {
    userAxios.delete(`/api/issue/${issueId}`)
      .then(res => setUserState(prevState => filter(prevState, issue => issue._id !== issueId)))
      .catch(err => console.log(err.response.data.errMsg))
  }

  return (
    <UserContext.Provider value={{...userState, signup, login, logout, addIssue, deleteIssue}}>
      { props.children }
    </UserContext.Provider>
  )
}