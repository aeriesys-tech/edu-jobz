
import DashFooter from "./candidate/footer"
import DashHeader from "./candidate/header"

import das1 from '../assets/img/dash1.svg'
import das2 from '../assets/img/dash2.svg'
import das3 from '../assets/img/dash3.svg'
import das4 from '../assets/img/dash4.svg'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/img/logo.png'



function AdminDashboard() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;
    const isParentActive = (basePath) => location.pathname.startsWith(basePath);
   
    return (
        <>
            <body class="nk-body bg-lighter npc-default has-sidebar">
                <div class="nk-app-root">
                    <div class="nk-main">
                    <div class="nk-sidebar nk-sidebar-fixed is-light" data-content="sidebarMenu">
                <div class="nk-sidebar-element nk-sidebar-head">
                    <div class="nk-sidebar-brand">
                        <Link to="/employee/login" class="logo-link nk-sidebar-logo">
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
                                    <h6 class="overline-title text-primary-alt">Configurations</h6>
                                </li>
                                <li class={`nk-menu-item ${isActive('/admin/dashboard') ? 'active' : ''}`}>
                                    <Link to="/employee/dashboard" class="nk-menu-link">
                                        <span class="nk-menu-icon"><em class="icon ni ni-cart-fill"></em></span><span
                                            class="nk-menu-text">Dashboard</span>
                                    </Link>
                                </li>
                                <li class={`nk-menu-item ${isParentActive('/employee/profile') ? 'active' : ''}`}>
                                    <Link to="/employee/profile" class="nk-menu-link">
                                        <span class="nk-menu-icon"><em class="icon ni ni-user"></em></span>

                                        <span class="nk-menu-text">Country</span>
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

                        <div class="nk-wrap">
                            <DashHeader />
                            <div class="nk-content pb-0">
                                <div class="container-fluid">
                                    <div class="nk-content-inner">
                                        <div class="nk-content-body">
                                            <div class="nk-block-head nk-block-head-sm">
                                                <div class="nk-block-between">
                                                    <div class="nk-block-head-content">
                                                        <h3 class="nk-block-title page-title">Dashboard</h3>
                                                        <div class="nk-block-des text-soft">
                                                            <p>Welcome to Learning Management Dashboard.</p>
                                                        </div>
                                                    </div>
                                                    <div class="nk-block-head-content">
                                                        <div class="toggle-wrap nk-block-tools-toggle">
                                                            <a href="#" class="btn btn-icon btn-trigger toggle-expand me-n1"
                                                                data-target="pageMenu"><em class="icon ni ni-more-v"></em></a>
                                                            <div class="toggle-expand-content" data-content="pageMenu">
                                                                <ul class="nk-block-tools g-3">
                                                                    <li>
                                                                        <div class="drodown">
                                                                            <a href="#"
                                                                                class="dropdown-toggle btn btn-white btn-dim btn-outline-light"
                                                                                data-bs-toggle="dropdown">
                                                                                <em
                                                                                    class="d-none d-sm-inline icon ni ni-calender-date"></em><span><span
                                                                                        class="d-none d-md-inline">Last</span> 30
                                                                                    Days</span>
                                                                                <em class="dd-indc icon ni ni-chevron-right"></em>
                                                                            </a>
                                                                            <div class="dropdown-menu dropdown-menu-end">
                                                                                <ul class="link-list-opt no-bdr">
                                                                                    <li>
                                                                                        <a href="#"><span>Last 30 Days</span></a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="#"><span>Last 6 Months</span></a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="#"><span>Last 1 Years</span></a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="nk-block-tools-opt">
                                                                        <a href="#" class="btn btn-primary"><em
                                                                            class="icon ni ni-reports"></em><span>Reports</span></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <DashFooter />
                        </div>
                    </div>
                </div>


            </body>

        </>

    )
} export default AdminDashboard