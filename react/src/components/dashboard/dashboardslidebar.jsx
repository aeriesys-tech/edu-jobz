import { Link } from 'react-router-dom'
import logo from '../../assets/img/Edujobs.svg'

function SideBar(){
    return(
        <> 


            <div class="nk-sidebar nk-sidebar-fixed " data-content="sidebarMenu">
                <div class="nk-sidebar-element nk-sidebar-head ps-0">
                    <div class="nk-sidebar-brand pl-3"><a href="../index.html" class="logo-link nk-sidebar-logo">
                    <img class="logo-dark  "
                                src={logo} style={{width:'220px'}}
                                alt="logo-dark"/></a></div>
                    <div class="nk-menu-trigger me-n2"><a href="#" class="nk-nav-toggle nk-quick-nav-icon d-xl-none"
                            data-target="sidebarMenu"><em class="icon ni ni-arrow-left"></em></a><a href="#"
                            class="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex"
                            data-target="sidebarMenu"><em class="icon ni ni-menu"></em></a></div>
                </div>
                <div class="nk-sidebar-element">
                    <div class="nk-sidebar-content">
                        <div class="nk-sidebar-menu" data-simplebar>
                            <ul class="nk-menu">
                                <li class="nk-menu-item"><Link to="/dashboard" class="nk-menu-link"><span
                                            class="nk-menu-icon"><em class="icon ni ni-dashboard-fill"></em></span><span
                                            class="nk-menu-text">Dashboard</span></Link></li>
                                             <li class="nk-menu-item"><Link to="/profile" class="nk-menu-link"><span
                                            class="nk-menu-icon"><em
                                                class="icon ni ni-account-setting-fill"></em></span><span
                                            class="nk-menu-text">Edit Profile</span></Link></li>
                                            <li class="nk-menu-item"><Link to="/resume " class="nk-menu-link"><span
                                            class="nk-menu-icon"><em class="icon ni ni-upload"></em></span><span
                                            class="nk-menu-text">Resume & Documents</span></Link></li>
                                            <li class="nk-menu-item"><Link to="/list" class="nk-menu-link"><span
                                            class="nk-menu-icon"><em class="icon ni ni-users-fill"></em></span><span
                                            class="nk-menu-text">Jobs Search</span></Link></li>
                                <li class="nk-menu-item has-sub"><a href="#" class="nk-menu-link "><span
                                            class="nk-menu-icon"><em class="icon ni ni-book-fill"></em></span><span
                                            class="nk-menu-text">Profile Views</span></a>
                                    
                                </li><li class="nk-menu-item"><Link to="/message" class="nk-menu-link"><span
                                            class="nk-menu-icon"><em class="icon ni ni-chat-fill"></em></span><span
                                            class="nk-menu-text">Blogs</span></Link></li>
                               
                                
                              
                                
                               
                                <li class="nk-menu-item has-sub"><a href="#" class="nk-menu-link "><span
                                            class="nk-menu-icon"><em class="icon ni ni-file-docs"></em></span><span
                                            class="nk-menu-text">Interview Invitations</span></a>
                                </li>
                                <li class="nk-menu-item"><a href="settings.html" class="nk-menu-link"><span
                                            class="nk-menu-icon"><em class="icon ni ni-video-fill"></em></span><span
                                            class="nk-menu-text">Profile Video Views</span></a></li>
                             
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
    
  
        </>
    )
}
export default SideBar