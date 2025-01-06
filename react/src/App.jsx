import { useState } from 'react'
import {HashRouter, Route, Routes} from 'react-router-dom'
// import './App.css'

import Login from './components/login/login'
import Register from './components/login/register'
import Dashboard from './components/candidate/dashboard'
import Profile from './components/candidate/profile/profile'
import ProfileNotification from './components/candidate/profile/profilesocial'
import ProfileActivity from './components/candidate/profile/profileAcademic'
import ProfileSettings from './components/candidate/profile/setting'
import Message from './components/candidate/message'
import List from './components/candidate/List'
import Details from './components/candidate/profileDetails'
import Skills from './components/candidate/profile/skill'
import Resume from './components/candidate/profile/resume'
import ResetPassword from './components/login/resetpassword'
import Success from './components/login/success'
import Page404 from './components/login/404'
import Page504 from './components/login/504'
import Subscription from './components/candidate/dashboardsubscription'
import Experience from './components/candidate/profile/experience'

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
        <Route path='/candidate/dashboard/subscription' element={<Subscription/>}/>

        <Route path='/candidate/profile' element={<Profile/>}/>
        <Route path='/candidate/experience' element={<Experience/>}/>

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
