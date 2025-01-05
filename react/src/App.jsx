import { useState } from 'react'
import {HashRouter, Route, Routes} from 'react-router-dom'
// import './App.css'

import Login from './components/login/login'
import Register from './components/login/register'
import Dashboard from './components/candidate/dashboard'
import Profile from './components/candidate/profile'
import ProfileNotification from './components/candidate/profilesocial'
import ProfileActivity from './components/candidate/profileAcademic'
import ProfileSettings from './components/candidate/setting'
import Message from './components/candidate/message'
import List from './components/candidate/List'
import Details from './components/candidate/profileDetails'
import Skills from './components/candidate/skill'
import Resume from './components/candidate/resume'
import ResetPassword from './components/login/resetpassword'
import Success from './components/login/success'
import Page404 from './components/login/404'
import Page504 from './components/login/504'

function App() {

  return (
    <>
     <HashRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Register/>}/>
        <Route path='/reset' element={<ResetPassword/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/404' element={<Page404/>}/>
        <Route path='/504' element={<Page504/>}/>


        <Route path='/candidate/dashboard' element={<Dashboard/>}/>
        <Route path='/candidate/profile' element={<Profile/>}/>
        <Route path='/candidate/socialmedia' element={<ProfileNotification/>}/>
        <Route path='/candidate/academic' element={<ProfileActivity/>}/>
        <Route path='/candidate/setting' element={<ProfileSettings/>}/>
        <Route path='/candidate/message' element={<Message/>}/>
        <Route path='/candidate/list' element={<List/>}/>
        <Route path='/candidate/details' element={<Details/>}/>
        <Route path='/candidate/skill' element={<Skills/>}/>
        <Route path='/candidate/resume' element={<Resume/>}/>




      </Routes>
     </HashRouter>
    </>
  )
}

export default App
