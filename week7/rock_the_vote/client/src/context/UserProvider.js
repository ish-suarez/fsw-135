import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {filter, map} from 'lodash'

export const UserContext = React.createContext();

const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
})

export default function UserProvider(props){
  // Setting State and Hook
  const initState = { 
    user: JSON.parse(localStorage.getItem('user')) || {}, 
    token: localStorage.getItem('token') || '', 
    issues: [],
    errMsg: ''
  }

  const [userState, setUserState] = useState(initState);

  // Error Message
  const handleAuthErr = (errMsg) => {
    setUserState(prevState => ({...prevState, errMsg}));
  }
  
  // Auth Reset
  const resetAuthErr = () => {
    setUserState(prevState => ({...prevState, errMsg: ''}));
  }

  // Sign up
  const signup = (credentials) => {
    axios.post('/auth/signup', credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        setUserState(prevUserState => ({...prevUserState, user, token}))
      })
      .catch(err => handleAuthErr(err.response.data.errMsg))
  }

  // Login 
  const login = (credentials) => {
    axios.post('/auth/login', credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('issues', JSON.stringify(getUserIssues()));
        setUserState(prevUserState => ({...prevUserState, user, token}))
      })
      .catch(err => handleAuthErr(err.response.data.errMsg))
  }

  // Log Out
  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUserState({user: {}, token: '', issues: []})
  }

  
  // Get User Issues
  const getUserIssues = () => {
    userAxios.get('/api/issue/user')
    .then(res => {
      setUserState(prevState => ({...prevState, issues: res.data}))
    })
    .catch(err => console.log(err.response.data.errMsg))
  }
  // Use Effect for Users Issues
  useEffect(() => {
    getUserIssues();
  }, [])

  // Add Issue
  const addIssue = (newIssue) => {
    userAxios.post('/api/issue', newIssue)
      .then(res => {
        setUserState(prevState => ({...prevState, issues: [...prevState.issues, res.data]}))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }
  
  // Delete Issue
  const deleteIssue = (issueId) => {
    userAxios.delete(`/api/issue/${issueId}`)
      .then(res => setUserState(prevState => ({...prevState, issues: filter(prevState.issues, issue => issue._id !== issueId)})))
      .catch(err => console.log(err.response.data.errMsg))
  }

  // Edit Issue
  const editIssue = (updates, issueId ) => {
    userAxios.put(`/api/issue/${issueId}`, updates) 
        .then(res => {
          setUserState(prevState => ({...prevState, issues: [ map(prevState.issues, issue => issue._id !== issueId ? issue : res.data) ]}))
          window.location.reload();
        })
        .catch(err => console.log(err.response.data.errMsg));
  }

  const addLike = (issueId) => {
    userAxios.put(`/issue/like/${issueId}`)
      .then(res => {
        setUserState(prevState => ({...prevState}))
        window.location.reload();
      })
      .then(err => console.log(err))
  }



  return (
    <UserContext.Provider value={{...userState, signup, login, logout, addLike, resetAuthErr, getUserIssues, editIssue, addIssue, deleteIssue}}>
      { props.children }
    </UserContext.Provider>
  )
}