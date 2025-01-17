import DashFooter from "../candidate/footer"
import DashHeader from "../candidate/header"

import das1 from '../../assets/img/dash1.svg'
import das2 from '../../assets/img/dash2.svg'
import das3 from '../../assets/img/dash3.svg'
import das4 from '../../assets/img/dash4.svg'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import logo1 from '../../assets/img/logo2.png'

import { useState } from "react"



function AdminMenu() {
    const [isHovered, setIsHovered] = useState(false);

    document.addEventListener('DOMContentLoaded', () => {
        const toggleButton = document.querySelectorAll('.nk-nav-toggle');
    
        toggleButton.forEach((button) => {
            button.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent the default navigation to "#"
                
                const sidebarMenu = document.querySelector('[data-content="sidebarMenu"]');
                if (sidebarMenu) {
                    sidebarMenu.classList.toggle('is-collapsed'); // Toggle the collapsed class
                }
            });
        });
    });
    
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = (event) => {
        event.preventDefault(); // Prevent navigation
        setCollapsed(!collapsed);
    };
    const location = useLocation();

    const isActive = (path) => location.pathname === path;
    const isParentActive = (basePath) => location.pathname.startsWith(basePath);
   
    
    return (
        <>
           <div className={`nk-sidebar nk-sidebar-fixed is-light ${collapsed ? 'is-collapsed' : ''}`} data-content="sidebarMenu"  >
           <div className="nk-sidebar-element nk-sidebar-head">
                <div className="nk-sidebar-brand">
                    <Link to="/admin/login" className="logo-link nk-sidebar-logo">
                        <img className="logo-light logo-img" src={logo} alt="logo" />
                        <img className="logo-dark logo-img" src={logo} alt="" />
                        <img className="logo-small logo-img logo-img-small" src={logo} alt="" />
                    </Link>
                </div>
                <div className="nk-menu-trigger me-n2">
                    <a href="#" className="nk-nav-toggle nk-quick-nav-icon d-xl-none" onClick={toggleSidebar}>
                        <em className="icon ni ni-arrow-left"></em>
                    </a>
                    <a href="#" className="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex" onClick={toggleSidebar}>
                        <em className="icon ni ni-menu"></em>
                    </a>
                </div>
            </div>
                        <div class="nk-sidebar-element">
                            <div class="nk-sidebar-content">
                                <div class="nk-sidebar-menu" data-simplebar>
                                    <ul class="nk-menu">
                                        <li class="nk-menu-heading">
                                            <h4 class="overline-title text-primary-alt">Menu</h4>
                                        </li>
                                        <li class={`nk-menu-item ${isActive('/admin/dashboard') ? 'active' : ''}`}>
                                            <Link to="/admin/dashboard" class="nk-menu-link">
                                                <span class="nk-menu-icon"><em class="icon ni ni-cart-fill"></em></span><span
                                                    class="nk-menu-text">Dashboard</span>
                                            </Link>
                                        </li>
                                        <li class={`nk-menu-item ${isParentActive('/admin/configurations') ? 'active' : ''}`}>
                                            <Link to="/admin/configurations" class="nk-menu-link">
                                                <span class="nk-menu-icon"><em class="icon ni ni-user"></em></span>
        
                                                <span class="nk-menu-text">Configurations</span>
                                            </Link>
                                        </li>
                                       {/* <li class={`nk-menu-item ${isActive('/candidate/dashboard/subscription') ? 'active' : ''}`}>
                                            <Link to="#" class="nk-menu-link">
                                                <span class="nk-menu-icon"><em
                                                        class="icon ni ni-medal"></em></span><span
                                                    class="nk-menu-text">Subscriptions</span>
                                            </Link>
                                        </li>   
                                        <li class={`nk-menu-item ${isActive('/candidate/list') ? 'active' : ''}`}>
                                            <Link to="#" class="nk-menu-link">
                                                <span class="nk-menu-icon">
                                                    <em class="icon ni ni-search"></em>
                                                </span><span class="nk-menu-text">Job Post</span>
                                            </Link>
                                        </li>
                                        <li class={`nk-menu-item ${isActive('/candidate/Interview') ? 'active' : ''}`}>
                                            <Link to="#" class="nk-menu-link">
                                                <span class="nk-menu-icon"><em class="icon ni ni-calendar-booking"></em></span><span
                                                    class="nk-menu-text">Interview Process</span>
                                            </Link>
                                        </li>
                                        <li class={`nk-menu-item ${isActive('#') ? 'active' : ''}`}>
                                            <Link to="#" class="nk-menu-link">
                                                <span class="nk-menu-icon"><em class="icon ni ni-zoom-in"></em></span><span
                                                    class="nk-menu-text">Find Candidates</span>
                                            </Link>
                                        </li>
                                        <li class={`nk-menu-item ${isActive('#') ? 'active' : ''}`}>
                                            <Link to="#" class="nk-menu-link">
                                                <span class="nk-menu-icon"><em
                                                        class="icon ni ni-calender-date-fill"></em></span><span
                                                    class="nk-menu-text">Walk-in Interviews</span>
                                            </Link>
                                        </li>
                                      
                                        <li class={`nk-menu-item ${isActive('/employee/message') ? 'active' : ''}`}>
                                            <Link to="/employee/message" class="nk-menu-link">
                                                <span class="nk-menu-icon"><em class="icon ni ni-notice"></em></span><span
                                                    class="nk-menu-text">Messages</span>
                                            </Link>
                                        </li> 
                                        <li class={`nk-menu-item ${isActive('/employee/notification') ? 'active' : ''}`}>
                                            <Link to="/employee/notification" class="nk-menu-link">
                                                <span class="nk-menu-icon"><em class="icon ni ni-bell"></em></span><span
                                                    class="nk-menu-text">Notifications</span>
                                            </Link>
                                        </li> */}
        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>  
        </>
    )
}
    export default AdminMenu
