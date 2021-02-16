import React, { useContext } from 'react'
import { Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import Public from './components/Public.js'
import { UserContext } from './context/UserProvider.js'

export default function App(){
  const { token, logout } = useContext(UserContext);
  return (
    <div className='app'>
      <Navbar logout={logout}/>
      <Switch>
        <Route path='/' component={token ? Profile : Auth} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/public' component={Public} />
      </Switch>
    </div>
  )
}