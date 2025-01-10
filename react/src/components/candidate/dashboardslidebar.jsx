import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/img/logo.png'

function SideBar(){
    const location = useLocation();

    const isActive = (path) => location.pathname === path;
    const isParentActive = (basePath) => location.pathname.startsWith(basePath);
    return(
        <> 


<div class="nk-sidebar nk-sidebar-fixed is-light" data-content="sidebarMenu">
                <div class="nk-sidebar-element nk-sidebar-head">
                    <div class="nk-sidebar-brand">
                        <Link to="/" class="logo-link nk-sidebar-logo">
                            <img class="logo-light logo-img" src={logo} 
                                alt="logo" /><img class="logo-dark logo-img" src={logo}
                                 alt="" />
                            <img class="logo-small logo-img logo-img-small" src={logo}
                                 alt="" />
                        </Link>
                    </div>
                    <div class="nk-menu-trigger me-n2">
                        <a href="#" class="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu"><em
                                class="icon ni ni-arrow-left"></em></a>
                        <a href="#" class="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex"
                            data-target="sidebarMenu"><em class="icon ni ni-menu"></em></a>
                    </div>
                </div>
                <div class="nk-sidebar-element">
                    <div class="nk-sidebar-content">
                        <div class="nk-sidebar-menu" data-simplebar>
                            <ul class="nk-menu">
                                <li class="nk-menu-heading">
                                    <h6 class="overline-title text-primary-alt">MENU</h6>
                                </li>
                                <li class={`nk-menu-item ${isActive('/candidate/dashboard') ? 'active' : ''}`}>
                                    <Link to="/candidate/dashboard" class="nk-menu-link">
                                        <span class="nk-menu-icon"><em class="icon ni ni-cart-fill"></em></span><span
                                            class="nk-menu-text">Dashboard</span>
                                    </Link>
                                </li>
                                <li class={`nk-menu-item ${isParentActive('/candidate/profile') ? 'active' : ''}`}>
                                    <Link to="/candidate/profile" class="nk-menu-link">
                                        <span class="nk-menu-icon"><em class="icon ni ni-user"></em></span>

                                        <span class="nk-menu-text">Update Profile</span>
                                    </Link>
                                </li>
                                <li class={`nk-menu-item ${isActive('/candidate/dashboard/subscription') ? 'active' : ''}`}>
                                    <Link to="/candidate/dashboard/subscription" class="nk-menu-link">
                                        <span class="nk-menu-icon"><em
                                                class="icon ni ni-calendar-booking"></em></span><span
                                            class="nk-menu-text">Subscriptions</span>
                                    </Link>
                                </li>   
                                <li class={`nk-menu-item ${isParentActive('/candidate/jobs') ? 'active' : ''}`}>
                                    <Link to="/candidate/jobs" class="nk-menu-link">
                                        <span class="nk-menu-icon">
                                            <em class="icon ni ni-search"></em>
                                        </span><span class="nk-menu-text">Job Search</span>
                                    </Link>
                                </li>
                                <li class={`nk-menu-item ${isParentActive('/candidate/Interview') ? 'active' : ''}`}>
                                    <Link to="/candidate/Interview" class="nk-menu-link">
                                        <span class="nk-menu-icon"><em class="icon ni ni-zoom-in"></em></span><span
                                            class="nk-menu-text">Interview Process</span>
                                    </Link>
                                </li>
                                <li class={`nk-menu-item ${isActive('/candidate/events') ? 'active' : ''}`}>
                                    <Link to="/candidate/events" class="nk-menu-link">
                                        <span class="nk-menu-icon"><em
                                                class="icon ni ni-calender-date-fill"></em></span><span
                                            class="nk-menu-text">Events</span>
                                    </Link>
                                </li>
                                <li class={`nk-menu-item ${isActive('#') ? 'active' : ''}`}>
                                    <Link to="#" class="nk-menu-link">
                                        <span class="nk-menu-icon"><em class="icon ni ni-medal"></em></span><span
                                            class="nk-menu-text">Training & certifications</span>
                                    </Link>
                                </li>
                              
                                <li class={`nk-menu-item ${isActive('#') ? 'active' : ''}`}>
                                    <Link to="#" class="nk-menu-link">
                                        <span class="nk-menu-icon"><em
                                                class="icon ni ni-setting-question"></em></span><span
                                            class="nk-menu-text">Workshop</span>
                                    </Link>
                                </li>
                                <li class={`nk-menu-item ${isActive('#') ? 'active' : ''}`}>
                                    <Link to="#" class="nk-menu-link">
                                        <span class="nk-menu-icon"><em
                                                class="icon ni ni-user-group-fill"></em></span><span
                                            class="nk-menu-text">Job Fair</span>
                                    </Link>
                                </li>
                                <li class={`nk-menu-item ${isActive('/candidate/message') ? 'active' : ''}`}>
                                    <Link to="/candidate/message" class="nk-menu-link">
                                        <span class="nk-menu-icon"><em class="icon ni ni-notice"></em></span><span
                                            class="nk-menu-text">Messages</span>
                                    </Link>
                                </li>
                                <li class={`nk-menu-item ${isActive('/candidate/notification') ? 'active' : ''}`}>
                                    <Link to="/candidate/notification" class="nk-menu-link">
                                        <span class="nk-menu-icon"><em class="icon ni ni-bell"></em></span><span
                                            class="nk-menu-text">Notifications</span>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
    
  
        </>
    )
}
export default SideBar