import { useState } from 'react'
import {HashRouter, Route, Routes} from 'react-router-dom'
// import './App.css'

import Login from './components/login'
import Register from './components/register'
import Dashboard from './components/dashboard/dashboard'
import Profile from './components/dashboard/profile'
import ProfileNotification from './components/dashboard/profilenotification'
import ProfileActivity from './components/dashboard/profileActivity'
import ProfileSettings from './components/dashboard/setting'
import Message from './components/dashboard/message'
import List from './components/dashboard/List'
import Details from './components/dashboard/profileDetails'
import Skills from './components/dashboard/skill'
import Resume from './components/dashboard/resume'

function App() {

  return (
    <>
     <HashRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/sign' element={<Register/>}/>

        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/notification' element={<ProfileNotification/>}/>
        <Route path='/activity' element={<ProfileActivity/>}/>
        <Route path='/setting' element={<ProfileSettings/>}/>
        <Route path='/message' element={<Message/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/skill' element={<Skills/>}/>
        <Route path='/resume' element={<Resume/>}/>




      </Routes>
     </HashRouter>
    </>
  )
}

export default App
