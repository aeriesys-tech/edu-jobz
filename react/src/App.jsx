import { useState } from 'react'
import axios from 'axios';
import { HashRouter, Route, Routes } from 'react-router-dom'
// import './App.css'

import Login from './components/login/login'
import Register from './components/login/register'
import Dashboard from './components/candidate/dashboard'
import Profile from './components/candidate/profile/candidateprofile'
import ProfileNotification from './components/candidate/profile/profilesocial'
import ProfileActivity from './components/candidate/profile/profileAcademic'
import ProfileSettings from './components/candidate/profile/setting'
import Message from './components/candidate/message'

import Details from './components/candidate/profileDetails'
import Skills from './components/candidate/profile/skill'
import Resume from './components/candidate/profile/documents'
import ResetPassword from './components/login/resetpassword'
import Success from './components/login/success'
import Page404 from './components/login/404'
import Page504 from './components/login/504'
import Subscription from './components/candidate/dashboardsubscription'
import Experience from './components/candidate/profile/experience'
import Interview from './components/candidate/dashboardinterview'
import EmployeeDashboard from './components/employer/employeedashboard'
import EmployeeProfile from './components/employer/profile/employeeprofile'
import EmployeeSettings from './components/employer/profile/employeesettings'
import EmployeeSocial from './components/employer/profile/employeesocialmedia'
import List from './components/candidate/jobslist'
import JobsDetails from './components/candidate/jobsprofiledetails'
import Notification from './components/candidate/dashboardnotifications'
import EmployeeNotification from './components/employer/employeenotification'
import EmployeeLogin from './components/employer/login/employeelogin'
import EmployeeSignUp from './components/employer/login/employeeregister'
import EmployeeMessage from './components/employer/employeemessage'
import Events from './components/candidate/dashboardevent'
import Terms from './components/login/terms-condition'
import ResetOTP from './components/login/otpverify';
import ChangePassword from './components/login/changepassword';
import AdminLogin from './components/admin/admin';
import AdminDashboard from './components/admin/admindashboard';
import AdminSettings from './components/admin/adminsettings';
import Adminprofile from './components/admin/adminprofile';
import AdminCountry from './components/admin/configurations/adminconfigurations';
import AdminState from './components/admin/configurations/adminconfigurationsstate';
import AdminDesignations from './components/admin/configurations/adminconfigurationdesignations';
import AdminCity from './components/admin/configurations/adminconfigurationcity';
import AdminSubjectApp from './components/admin/configurations/adminconfigurationssubjects';
import AdminDesignationsApp from './components/admin/configurations/adminconfigurationdesignations';
import AdminInstituteApp from './components/admin/configurations/adminconfig_typeofinstitute';

function App() {

        return (
                <>
                        <HashRouter>
                                <Routes>
                                        <Route path='/admin/login' element={<AdminLogin />} />
                                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                                        <Route path='/admin/configurations' element={<AdminCountry />} />
                                        <Route path='/admin/settings' element={<AdminSettings />} />
                                        <Route path='/admin/profile' element={<Adminprofile />} />
                                        <Route path='/admin/configurations/state' element={<AdminState />} />
                                        <Route path='/admin/configurations/city' element={<AdminCity />} />
                                        <Route path='/admin/configurations/subject' element={<AdminSubjectApp />} />
                                        <Route path='/admin/configurations/typeofinstitute' element={<AdminInstituteApp/>} />

                                        <Route path='/admin/configurations/designations' element={<AdminDesignationsApp/>} />

                                        <Route path='/' element={<Login />} />
                                        <Route path='/signup' element={<Register />} />
                                        <Route path='/reset' element={<ResetPassword />} />
                                        <Route path='/otpverify' element={<ResetOTP />} />

                                        <Route path='/success' element={<Success />} />
                                        <Route path='/404' element={<Page404 />} />
                                        <Route path='/504' element={<Page504 />} />
                                        <Route path='/terms' element={<Terms />} />
                                        <Route path='/changepassword' element={<ChangePassword />} />


                                        <Route path='/employee/login' element={<EmployeeLogin />} />
                                        <Route path='/employee/signup' element={<EmployeeSignUp />} />


                                        {/* Candidate pages*/}
                                        <Route path='/candidate/dashboard' element={<Dashboard />} />
                                        <Route path='/candidate/dashboard/subscription' element={<Subscription />} />

                                        <Route path='/candidate/profile' element={<Profile />} />
                                        <Route path='/candidate/profile/experience' element={<Experience />} />
                                        <Route path='/candidate/notification' element={<Notification />} />
                                        <Route path='/candidate/events' element={<Events />} />

                                        <Route path='/candidate/profile/socialmedia' element={<ProfileNotification />} />
                                        <Route path='/candidate/profile/academic' element={<ProfileActivity />} />
                                        <Route path='/candidate/profile/setting' element={<ProfileSettings />} />
                                        <Route path='/candidate/message' element={<Message />} />
                                        <Route path='/candidate/jobs' element={<List />} />
                                        <Route path='/candidate/Interview' element={<Interview />} />
                                        <Route path='/candidate/jobs/details' element={<JobsDetails />} />
                                        <Route path='/candidate/Interview/details' element={<Details />} />
                                        <Route path='/candidate/profile/skill' element={<Skills />} />
                                        <Route path='/candidate/profile/resume' element={<Resume />} />

                                        {/* Employee Pages */}
                                        <Route path='/employee/dashboard' element={<EmployeeDashboard />} />
                                        <Route path='/employee/profile' element={<EmployeeProfile />} />
                                        <Route path='/employee/profile/setting' element={<EmployeeSettings />} />
                                        <Route path='/employee/profile/socialmedia' element={<EmployeeSocial />} />
                                        <Route path='/employee/notification' element={<EmployeeNotification />} />
                                        <Route path='/employee/message' element={<EmployeeMessage />} />


                                </Routes>
                        </HashRouter>
                </>
        )
}

export default App
