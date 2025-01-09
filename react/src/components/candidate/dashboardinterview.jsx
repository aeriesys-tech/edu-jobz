import SideBar from "./dashboardslidebar"
import DashFooter from "./footer"
import DashHeader from "./header"
import { Link } from "react-router-dom"

function Interview() {
    return (
        <>
            <body class="nk-body bg-lighter npc-default has-sidebar">
                <div class="nk-app-root">
                    <div class="nk-main">
                        <SideBar />
                        <div class="nk-wrap">
                            <DashHeader />
                            <div class="nk-content pb-0">
                                <div class="container-fluid">
                                    <div class="nk-content-inner">
                                        <div class="nk-content-body">
                                            <div class="nk-block-head nk-block-head-sm">
                                                <div class="nk-block-between">
                                                    <div class="nk-block-head-content">
                                                        <h3 class="nk-block-title page-title">Interviews </h3>
                                                        <div class="nk-block-des text-soft">
                                                            <p></p>
                                                        </div>
                                                    </div>
                                                    <div class="nk-block-head-content">
                                                        <div class="toggle-wrap nk-block-tools-toggle">
                                                            <a href="#" class="btn btn-icon btn-trigger toggle-expand me-n1"
                                                                data-target="pageMenu"><em class="icon ni ni-more-v"></em></a>
                                                            <div class="toggle-expand-content" data-content="pageMenu">
                                                                <ul class="nk-block-tools g-4">
                                                                    <li>
                                                                        <div class="drodown ">
                                                                            <a href="#"
                                                                                class="dropdown-toggle btn btn-white btn-dim btn-outline-light "
                                                                                data-bs-toggle="dropdown">
                                                                                <em
                                                                                    class="d-none d-sm-inline icon ni ni-search "></em><span><span
                                                                                        class="d-none d-md-inline ">Apply Status</span> </span>
                                                                                <em class="dd-indc icon ni ni-chevron-right"></em>
                                                                            </a>
                                                                            <div class="dropdown-menu dropdown-menu-end">
                                                                                <ul class="link-list-opt no-bdr">
                                                                                    <li>
                                                                                        <a href="#"><span>Pending</span></a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="#"><span>Declined</span></a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="#"><span>Awaiting Interview</span></a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="#"><span>Interview Submitted</span></a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="#"><span>Hired</span></a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="nk-block-tools-opt">

                                                                        <a
                                                                            class="btn btn-primary d-none d-md-inline-flex"
                                                                            data-bs-toggle="modal" to="#student-add"><em
                                                                                class="icon ni ni-search"></em><span>SEARCH</span></a>
                                                                    </li>
                                                                    <li>
                                                                        <a to="#" class="btn btn-primary"><em
                                                                            class="icon ni ni-cross"></em><span>Reset</span></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <ul class="nav nav-tabs col-lg-4">
                                                    <li class="nav-item">
                                                        <button class="nav-link active" data-bs-toggle="tab" href="#tabItem1">Interview Invitations</button>
                                                    </li>   
                                                     <li class="nav-item">
                                                        <a class="nav-link" data-bs-toggle="tab" href="#tabItem2">Accepted Applications</a>
                                                    </li>   
                                                     {/* <li class="nav-item">
                                                        <a class="nav-link" data-bs-toggle="tab" href="#tabItem3">nav</a>
                                                    </li>   
                                                     <li class="nav-item">
                                                        <a class="nav-link" data-bs-toggle="tab" href="#tabItem4">nav</a>
                                                    </li> */}
                                                    </ul>
                                                    <div class="tab-content">
                                                    <div class="tab-pane active" id="tabItem1">
                                                    <div class="card-inner p-0">
                                                <div class="nk-tb-list nk-tb-ulist">
                                                    
                                                    <div class="nk-tb-item">
                                                        <div class="nk-tb-col nk-tb-col-check">
                                                            <div
                                                                class="custom-control custom-control-sm custom-checkbox notext">
                                                                <input type="checkbox" class="custom-control-input"
                                                                    id="uid1"/><label class="custom-control-label"
                                                                    for="uid1"></label></div>
                                                        </div>
                                                        <div class="nk-tb-col"><Link to="/candidate/details">
                                                                <div class="user-card">
                                                                    <div class="user-avatar "><span>AB</span>
                                                                    </div>
                                                                    <div class="user-info"><span class="tb-lead">Abu Bin
                                                                            Ishtiyak <span
                                                                                class="dot dot-success d-md-none ms-1"></span></span><span>info@softnio.com</span>
                                                                    </div>
                                                                </div>
                                                            </Link></div>
                                                        <div class="nk-tb-col tb-col-mb"><span
                                                                class="tb-lead d-lg-flex d-none">Fornt-end
                                                                Development</span>
                                                            <div class="d-lg-flex d-none">
                                                                <div class="drodown"><a href="#"
                                                                        class="dropdown-toggle pt-1 text-info"
                                                                        data-bs-toggle="dropdown"> <span>View
                                                                            More</span> </a>
                                                                    <div class="dropdown-menu dropdown-menu-start">
                                                                        <ul class="link-list-opt no-bdr p-3">
                                                                            <li class="tb-lead p-1">Application
                                                                                Management</li>
                                                                            <li class="tb-lead p-1">Learn Android
                                                                                Development with project</li>
                                                                            <li class="tb-lead p-1">UI/UX Design with
                                                                                Adobe XD</li>
                                                                            <li class="tb-lead p-1">Learn Android
                                                                                Development with project</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="nk-tb-col tb-col-md"><span>+811 847-4958</span>
                                                        </div>
                                                        <div class="nk-tb-col tb-col-lg"><span>United State</span></div>
                                                        <div class="nk-tb-col tb-col-lg"><span
                                                                class="badge badge-dot badge-dot bg-warning">Due</span>
                                                        </div>
                                                        <div class="nk-tb-col tb-col-md"><span
                                                                class="tb-status text-success">Active</span></div>
                                                        <div class="nk-tb-col nk-tb-col-tools">
                                                            <ul class="nk-tb-actions gx-1">
                                                                <li class="nk-tb-action-hidden"><a href="#"
                                                                        class="btn btn-trigger btn-icon"
                                                                        data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Send Email"><em
                                                                            class="icon ni ni-mail-fill"></em></a></li>
                                                                <li class="nk-tb-action-hidden"><a href="#"
                                                                        class="btn btn-trigger btn-icon"
                                                                        data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Suspend"><em
                                                                            class="icon ni ni-user-cross-fill"></em></a>
                                                                </li>
                                                                <li>
                                                                    <div class="drodown"><a href="#"
                                                                            class="dropdown-toggle btn btn-icon btn-trigger"
                                                                            data-bs-toggle="dropdown"><em
                                                                                class="icon ni ni-more-h"></em></a>
                                                                        <div class="dropdown-menu dropdown-menu-end">
                                                                            <ul class="link-list-opt no-bdr">
                                                                                <li><Link to="/candidate/details"><em
                                                                                            class="icon ni ni-eye"></em><span>View
                                                                                            Details</span></Link></li>
                                                                                <li><a href="#"><em
                                                                                            class="icon ni ni-activity-round"></em><span>Activities</span></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="nk-tb-item">
                                                        <div class="nk-tb-col nk-tb-col-check">
                                                            <div
                                                                class="custom-control custom-control-sm custom-checkbox notext">
                                                                <input type="checkbox" class="custom-control-input"
                                                                    id="uid2"/><label class="custom-control-label"
                                                                    for="uid2"></label></div>
                                                        </div>
                                                        <div class="nk-tb-col"><Link to="/candidate/details">
                                                                <div class="user-card">
                                                                    <div class="user-avatar"><img
                                                                            src="../images/avatar/a-sm.jpg" alt=""/>
                                                                    </div>
                                                                    <div class="user-info"><span class="tb-lead">Ashley
                                                                            Lawson <span
                                                                                class="dot dot-warning d-md-none ms-1"></span></span><span>ashley@softnio.com</span>
                                                                    </div>
                                                                </div>
                                                            </Link></div>
                                                        <div class="nk-tb-col tb-col-mb"><span
                                                                class="tb-lead d-lg-flex d-none">Responsive
                                                                Design</span>
                                                            <div class="d-lg-flex d-none">
                                                                <div class="drodown"><a href="#"
                                                                        class="dropdown-toggle pt-1 text-info"
                                                                        data-bs-toggle="dropdown"> <span>View
                                                                            More</span> </a>
                                                                    <div class="dropdown-menu dropdown-menu-start">
                                                                        <ul class="link-list-opt no-bdr p-3">
                                                                            <li class="tb-lead p-1">Application
                                                                                Management</li>
                                                                            <li class="tb-lead p-1">Learn Android
                                                                                Development with project</li>
                                                                            <li class="tb-lead p-1">UI/UX Design with
                                                                                Adobe XD</li>
                                                                            <li class="tb-lead p-1">Learn Android
                                                                                Development with project</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="nk-tb-col tb-col-md"><span>+124 394-1787</span>
                                                        </div>
                                                        <div class="nk-tb-col tb-col-lg"><span>United Kindom</span>
                                                        </div>
                                                        <div class="nk-tb-col tb-col-lg"><span
                                                                class="tb-status badge-dot bg-success">Paid</span></div>
                                                        <div class="nk-tb-col tb-col-md"><span
                                                                class="tb-status text-warning">Inactive</span></div>
                                                        <div class="nk-tb-col nk-tb-col-tools">
                                                            <ul class="nk-tb-actions gx-1">
                                                                <li class="nk-tb-action-hidden"><a href="#"
                                                                        class="btn btn-trigger btn-icon"
                                                                        data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Send Email"><em
                                                                            class="icon ni ni-mail-fill"></em></a></li>
                                                                <li class="nk-tb-action-hidden"><a href="#"
                                                                        class="btn btn-trigger btn-icon"
                                                                        data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Suspend"><em
                                                                            class="icon ni ni-user-cross-fill"></em></a>
                                                                </li>
                                                                <li>
                                                                    <div class="drodown"><a href="#"
                                                                            class="dropdown-toggle btn btn-icon btn-trigger"
                                                                            data-bs-toggle="dropdown"><em
                                                                                class="icon ni ni-more-h"></em></a>
                                                                        <div class="dropdown-menu dropdown-menu-end">
                                                                            <ul class="link-list-opt no-bdr">
                                                                                <li><a href="students-details.html"><em
                                                                                            class="icon ni ni-eye"></em><span>View
                                                                                            Details</span></a></li>
                                                                                <li><a href="#"><em
                                                                                            class="icon ni ni-activity-round"></em><span>Activities</span></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="nk-tb-item">
                                                        <div class="nk-tb-col nk-tb-col-check">
                                                            <div
                                                                class="custom-control custom-control-sm custom-checkbox notext">
                                                                <input type="checkbox" class="custom-control-input"
                                                                    id="uid3"/><label class="custom-control-label"
                                                                    for="uid3"></label></div>
                                                        </div>
                                                        <div class="nk-tb-col"><a href="students-details.html">
                                                                <div class="user-card">
                                                                    <div class="user-avatar bg-info"><span>JL</span>
                                                                    </div>
                                                                    <div class="user-info"><span class="tb-lead">Joe
                                                                            Larson <span
                                                                                class="dot dot-success d-md-none ms-1"></span></span><span>larson@example.com</span>
                                                                    </div>
                                                                </div>
                                                            </a></div>
                                                        <div class="nk-tb-col tb-col-mb"><span
                                                                class="tb-lead d-lg-flex d-none">Mobile
                                                                Applicationn</span>
                                                            <div class="d-lg-flex d-none">
                                                                <div class="drodown"><a href="#"
                                                                        class="dropdown-toggle pt-1 text-info"
                                                                        data-bs-toggle="dropdown"> <span>View
                                                                            More</span> </a>
                                                                    <div class="dropdown-menu dropdown-menu-start">
                                                                        <ul class="link-list-opt no-bdr p-3">
                                                                            <li class="tb-lead p-1">Application
                                                                                Management</li>
                                                                            <li class="tb-lead p-1">Learn Android
                                                                                Development with project</li>
                                                                            <li class="tb-lead p-1">UI/UX Design with
                                                                                Adobe XD</li>
                                                                            <li class="tb-lead p-1">Learn Android
                                                                                Development with project</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="nk-tb-col tb-col-md"><span>+168 603-2320</span>
                                                        </div>
                                                        <div class="nk-tb-col tb-col-lg"><span>India</span></div>
                                                        <div class="nk-tb-col tb-col-lg"><span
                                                                class="tb-status badge-dot bg-success">Paid</span></div>
                                                        <div class="nk-tb-col tb-col-md"><span
                                                                class="tb-status text-success">Active</span></div>
                                                        <div class="nk-tb-col nk-tb-col-tools">
                                                            <ul class="nk-tb-actions gx-1">
                                                                <li class="nk-tb-action-hidden"><a href="#"
                                                                        class="btn btn-trigger btn-icon"
                                                                        data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Send Email"><em
                                                                            class="icon ni ni-mail-fill"></em></a></li>
                                                                <li class="nk-tb-action-hidden"><a href="#"
                                                                        class="btn btn-trigger btn-icon"
                                                                        data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Suspend"><em
                                                                            class="icon ni ni-user-cross-fill"></em></a>
                                                                </li>
                                                                <li>
                                                                    <div class="drodown"><a href="#"
                                                                            class="dropdown-toggle btn btn-icon btn-trigger"
                                                                            data-bs-toggle="dropdown"><em
                                                                                class="icon ni ni-more-h"></em></a>
                                                                        <div class="dropdown-menu dropdown-menu-end">
                                                                            <ul class="link-list-opt no-bdr">
                                                                                <li><a href="students-details.html"><em
                                                                                            class="icon ni ni-eye"></em><span>View
                                                                                            Details</span></a></li>
                                                                                <li><a href="#"><em
                                                                                            class="icon ni ni-activity-round"></em><span>Activities</span></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="nk-tb-item">
                                                        <div class="nk-tb-col nk-tb-col-check">
                                                            <div
                                                                class="custom-control custom-control-sm custom-checkbox notext">
                                                                <input type="checkbox" class="custom-control-input"
                                                                    id="uid4"/><label class="custom-control-label"
                                                                    for="uid4"></label></div>
                                                        </div>
                                                        <div class="nk-tb-col"><a href="students-details.html">
                                                                <div class="user-card">
                                                                    <div class="user-avatar bg-danger"><span>JM</span>
                                                                    </div>
                                                                    <div class="user-info"><span class="tb-lead">Jane
                                                                            Montgomery <span
                                                                                class="dot dot-danger d-md-none ms-1"></span></span><span>jane84@example.com</span>
                                                                    </div>
                                                                </div>
                                                            </a></div>
                                                        <div class="nk-tb-col tb-col-mb"><span
                                                                class="tb-lead d-lg-flex d-none">UI/UX Design with Adobe
                                                                XD</span>
                                                            <div class="d-lg-flex d-none">
                                                                <div class="drodown"><a href="#"
                                                                        class="dropdown-toggle pt-1 text-info"
                                                                        data-bs-toggle="dropdown"> <span>View
                                                                            More</span> </a>
                                                                    <div class="dropdown-menu dropdown-menu-start">
                                                                        <ul class="link-list-opt no-bdr p-3">
                                                                            <li class="tb-lead p-1">SEO Optimize</li>
                                                                            <li class="tb-lead p-1">Learn Android
                                                                                Development with project</li>
                                                                            <li class="tb-lead p-1">UI/UX Design with
                                                                                Adobe XD</li>
                                                                            <li class="tb-lead p-1">Learn Android
                                                                                Development with project</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="nk-tb-col tb-col-md"><span>+439 271-5360</span>
                                                        </div>
                                                        <div class="nk-tb-col tb-col-lg"><span>Canada</span></div>
                                                        <div class="nk-tb-col tb-col-lg"><span
                                                                class="tb-status badge-dot bg-danger">Cancelled</span>
                                                        </div>
                                                        <div class="nk-tb-col tb-col-md"><span
                                                                class="tb-status text-danger">Suspend</span></div>
                                                        <div class="nk-tb-col nk-tb-col-tools">
                                                            <ul class="nk-tb-actions gx-1">
                                                                <li class="nk-tb-action-hidden"><a href="#"
                                                                        class="btn btn-trigger btn-icon"
                                                                        data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Send Email"><em
                                                                            class="icon ni ni-mail-fill"></em></a></li>
                                                                <li class="nk-tb-action-hidden"><a href="#"
                                                                        class="btn btn-trigger btn-icon"
                                                                        data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Suspend"><em
                                                                            class="icon ni ni-user-cross-fill"></em></a>
                                                                </li>
                                                                <li>
                                                                    <div class="drodown"><a href="#"
                                                                            class="dropdown-toggle btn btn-icon btn-trigger"
                                                                            data-bs-toggle="dropdown"><em
                                                                                class="icon ni ni-more-h"></em></a>
                                                                        <div class="dropdown-menu dropdown-menu-end">
                                                                            <ul class="link-list-opt no-bdr">
                                                                                <li><a href="students-details.html"><em
                                                                                            class="icon ni ni-eye"></em><span>View
                                                                                            Details</span></a></li>
                                                                                <li><a href="#"><em
                                                                                            class="icon ni ni-activity-round"></em><span>Activities</span></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="nk-tb-item">
                                                        <div class="nk-tb-col nk-tb-col-check">
                                                            <div
                                                                class="custom-control custom-control-sm custom-checkbox notext">
                                                                <input type="checkbox" class="custom-control-input"
                                                                    id="uid5"/><label class="custom-control-label"
                                                                    for="uid5"></label></div>
                                                        </div>
                                                        <div class="nk-tb-col"><a href="students-details.html">
                                                                <div class="user-card">
                                                                    <div class="user-avatar"><img
                                                                            src="../images/avatar/b-sm.jpg" alt=""/>
                                                                    </div>
                                                                    <div class="user-info"><span class="tb-lead">Frances
                                                                            Burns <span
                                                                                class="dot dot-success d-md-none ms-1"></span></span><span>frances@example.com</span>
                                                                    </div>
                                                                </div>
                                                            </a></div>
                                                        <div class="nk-tb-col tb-col-mb"><span
                                                                class="tb-lead d-lg-flex d-none">Application
                                                                Management</span>
                                                            <div class="d-lg-flex d-none">
                                                                <div class="drodown"><a href="#"
                                                                        class="dropdown-toggle pt-1 text-info"
                                                                        data-bs-toggle="dropdown"> <span>View
                                                                            More</span> </a>
                                                                    <div class="dropdown-menu dropdown-menu-start">
                                                                        <ul class="link-list-opt no-bdr p-3">
                                                                            <li class="tb-lead p-1">UI/UX Design with
                                                                                Adobe XD</li>
                                                                            <li class="tb-lead p-1">Learn Android
                                                                                Development with project</li>
                                                                            <li class="tb-lead p-1">Application
                                                                                Management</li>
                                                                            <li class="tb-lead p-1">Learn Android
                                                                                Development with project</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="nk-tb-col tb-col-md"><span>+639 130-3150</span>
                                                        </div>
                                                        <div class="nk-tb-col tb-col-lg"><span>Australia</span></div>
                                                        <div class="nk-tb-col tb-col-lg"><span
                                                                class="tb-status badge-dot bg-success">Paid</span></div>
                                                        <div class="nk-tb-col tb-col-md"><span
                                                                class="tb-status text-success">Active</span></div>
                                                        <div class="nk-tb-col nk-tb-col-tools">
                                                            <ul class="nk-tb-actions gx-1">
                                                                <li class="nk-tb-action-hidden"><a href="#"
                                                                        class="btn btn-trigger btn-icon"
                                                                        data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Send Email"><em
                                                                            class="icon ni ni-mail-fill"></em></a></li>
                                                                <li class="nk-tb-action-hidden"><a href="#"
                                                                        class="btn btn-trigger btn-icon"
                                                                        data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Suspend"><em
                                                                            class="icon ni ni-user-cross-fill"></em></a>
                                                                </li>
                                                                <li>
                                                                    <div class="drodown"><a href="#"
                                                                            class="dropdown-toggle btn btn-icon btn-trigger"
                                                                            data-bs-toggle="dropdown"><em
                                                                                class="icon ni ni-more-h"></em></a>
                                                                        <div class="dropdown-menu dropdown-menu-end">
                                                                            <ul class="link-list-opt no-bdr">
                                                                                <li><a href="students-details.html"><em
                                                                                            class="icon ni ni-eye"></em><span>View
                                                                                            Details</span></a></li>
                                                                                <li><a href="#"><em
                                                                                            class="icon ni ni-activity-round"></em><span>Activities</span></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                 
                                                </div>
                                            </div>
                                                    </div>
                                                    <div class="tab-pane" id="tabItem2">
                                                    <div class="card-inner p-0">
                                                    <div class="nk-tb-list nk-tb-ulist">
                                                           <div class="nk-tb-item">
                                                        <div class="nk-tb-col nk-tb-col-check">
                                                            <div
                                                                class="custom-control custom-control-sm custom-checkbox notext">
                                                                <input type="checkbox" class="custom-control-input"
                                                                    id="uid9"/><label class="custom-control-label"
                                                                    for="uid9"></label></div>
                                                        </div>
                                                        <div class="nk-tb-col"><a href="students-details.html">
                                                                <div class="user-card">
                                                                    <div class="user-avatar bg-danger"><span>JM</span>
                                                                    </div>
                                                                    <div class="user-info"><span class="tb-lead">Jane
                                                                            Montgomery <span
                                                                                class="dot dot-danger d-md-none ms-1"></span></span><span>jane84@example.com</span>
                                                                    </div>
                                                                </div>
                                                            </a></div>
                                                        <div class="nk-tb-col tb-col-mb"><span
                                                                class="tb-lead d-lg-flex d-none">Responsive Design
                                                            </span>
                                                            <div class="d-lg-flex d-none">
                                                                <div class="drodown"><a href="#"
                                                                        class="dropdown-toggle pt-1 text-info"
                                                                        data-bs-toggle="dropdown"> <span>View
                                                                            More</span> </a>
                                                                    <div class="dropdown-menu dropdown-menu-start">
                                                                        <ul class="link-list-opt no-bdr p-3">
                                                                            <li class="tb-lead p-1">Application
                                                                                Management</li>
                                                                            <li class="tb-lead p-1">Learn Android
                                                                                Development with project</li>
                                                                            <li class="tb-lead p-1">UI/UX Design with
                                                                                Adobe XD</li>
                                                                            <li class="tb-lead p-1">Learn Android
                                                                                Development with project</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="nk-tb-col tb-col-md"><span>+439 271-5360</span>
                                                        </div>
                                                        <div class="nk-tb-col tb-col-lg"><span>Canada</span></div>
                                                        <div class="nk-tb-col tb-col-lg"><span
                                                                class="tb-status badge-dot bg-danger">Cancelled</span>
                                                        </div>
                                                        <div class="nk-tb-col tb-col-md"><span
                                                                class="tb-status text-danger">Suspend</span></div>
                                                        <div class="nk-tb-col nk-tb-col-tools">
                                                            <ul class="nk-tb-actions gx-1">
                                                                <li class="nk-tb-action-hidden"><a href="#"
                                                                        class="btn btn-trigger btn-icon"
                                                                        data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Send Email"><em
                                                                            class="icon ni ni-mail-fill"></em></a></li>
                                                                <li class="nk-tb-action-hidden"><a href="#"
                                                                        class="btn btn-trigger btn-icon"
                                                                        data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Suspend"><em
                                                                            class="icon ni ni-user-cross-fill"></em></a>
                                                                </li>
                                                                <li>
                                                                    <div class="drodown"><a href="#"
                                                                            class="dropdown-toggle btn btn-icon btn-trigger"
                                                                            data-bs-toggle="dropdown"><em
                                                                                class="icon ni ni-more-h"></em></a>
                                                                        <div class="dropdown-menu dropdown-menu-end">
                                                                            <ul class="link-list-opt no-bdr">
                                                                                <li><a href="students-details.html"><em
                                                                                            class="icon ni ni-eye"></em><span>View
                                                                                            Details</span></a></li>
                                                                                <li><a href="#"><em
                                                                                            class="icon ni ni-activity-round"></em><span>Activities</span></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="nk-tb-item">
                                                        <div class="nk-tb-col nk-tb-col-check">
                                                            <div
                                                                class="custom-control custom-control-sm custom-checkbox notext">
                                                                <input type="checkbox" class="custom-control-input"
                                                                    id="uid10"/><label class="custom-control-label"
                                                                    for="uid10"></label></div>
                                                        </div>
                                                        <div class="nk-tb-col"><a href="students-details.html">
                                                                <div class="user-card">
                                                                    <div class="user-avatar"><img
                                                                            src="../images/avatar/b-sm.jpg" alt=""/>
                                                                    </div>
                                                                    <div class="user-info"><span class="tb-lead">Frances
                                                                            Burns <span
                                                                                class="dot dot-success d-md-none ms-1"></span></span><span>frances@example.com</span>
                                                                    </div>
                                                                </div>
                                                            </a></div>
                                                        <div class="nk-tb-col tb-col-mb"><span
                                                                class="tb-lead d-lg-flex d-none">Android
                                                                Development</span>
                                                            <div class="d-lg-flex d-none">
                                                                <div class="drodown"><a href="#"
                                                                        class="dropdown-toggle pt-1 text-info"
                                                                        data-bs-toggle="dropdown"> <span>View
                                                                            More</span> </a>
                                                                    <div class="dropdown-menu dropdown-menu-start">
                                                                        <ul class="link-list-opt no-bdr p-3">
                                                                            <li class="tb-lead p-1">Application
                                                                                Management</li>
                                                                            <li class="tb-lead p-1">Learn Android
                                                                                Development with project</li>
                                                                            <li class="tb-lead p-1">UI/UX Design with
                                                                                Adobe XD</li>
                                                                            <li class="tb-lead p-1">Learn Android
                                                                                Development with project</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="nk-tb-col tb-col-md"><span>+639 130-3150</span>
                                                        </div>
                                                        <div class="nk-tb-col tb-col-lg"><span>Australia</span></div>
                                                        <div class="nk-tb-col tb-col-lg"><span
                                                                class="tb-status badge-dot bg-success">Paid</span></div>
                                                        <div class="nk-tb-col tb-col-md"><span
                                                                class="tb-status text-success">Active</span></div>
                                                        <div class="nk-tb-col nk-tb-col-tools">
                                                            <ul class="nk-tb-actions gx-1">
                                                                <li class="nk-tb-action-hidden"><a href="#"
                                                                        class="btn btn-trigger btn-icon"
                                                                        data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Send Email"><em
                                                                            class="icon ni ni-mail-fill"></em></a></li>
                                                                <li class="nk-tb-action-hidden"><a href="#"
                                                                        class="btn btn-trigger btn-icon"
                                                                        data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Suspend"><em
                                                                            class="icon ni ni-user-cross-fill"></em></a>
                                                                </li>
                                                                <li>
                                                                    <div class="drodown"><a href="#"
                                                                            class="dropdown-toggle btn btn-icon btn-trigger"
                                                                            data-bs-toggle="dropdown"><em
                                                                                class="icon ni ni-more-h"></em></a>
                                                                        <div class="dropdown-menu dropdown-menu-end">
                                                                            <ul class="link-list-opt no-bdr">
                                                                                <li><a href="students-details.html"><em
                                                                                            class="icon ni ni-eye"></em><span>View
                                                                                            Details</span></a></li>
                                                                                <li><a href="#"><em
                                                                                            class="icon ni ni-activity-round"></em><span>Activities</span></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div> 
                                                    <div class="nk-tb-item">
                                                        <div class="nk-tb-col nk-tb-col-check">
                                                            <div
                                                                class="custom-control custom-control-sm custom-checkbox notext">
                                                                <input type="checkbox" class="custom-control-input"
                                                                    id="uid6"/><label class="custom-control-label"
                                                                    for="uid6"></label></div>
                                                        </div>
                                                        <div class="nk-tb-col"><a href="students-details.html">
                                                                <div class="user-card">
                                                                    <div class="user-avatar "><span>AB</span>
                                                                    </div>
                                                                    <div class="user-info"><span class="tb-lead">Abu Bin
                                                                            Ishtiyak <span
                                                                                class="dot dot-success d-md-none ms-1"></span></span><span>info@softnio.com</span>
                                                                    </div>
                                                                </div>
                                                            </a></div>
                                                        <div class="nk-tb-col tb-col-mb"><span
                                                                class="tb-lead d-lg-flex d-none">Fornt-end
                                                                Development</span>
                                                            <div class="d-lg-flex d-none">
                                                                <div class="drodown"><a href="#"
                                                                        class="dropdown-toggle pt-1 text-info"
                                                                        data-bs-toggle="dropdown"> <span>View
                                                                            More</span> </a>
                                                                    <div class="dropdown-menu dropdown-menu-start">
                                                                        <ul class="link-list-opt no-bdr p-3">
                                                                            <li class="tb-lead p-1">Application
                                                                                Management</li>
                                                                            <li class="tb-lead p-1">Learn Android
                                                                                Development with project</li>
                                                                            <li class="tb-lead p-1">UI/UX Design with
                                                                                Adobe XD</li>
                                                                            <li class="tb-lead p-1">Learn Android
                                                                                Development with project</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="nk-tb-col tb-col-md"><span>+811 847-4958</span>
                                                        </div>
                                                        <div class="nk-tb-col tb-col-lg"><span>United State</span></div>
                                                        <div class="nk-tb-col tb-col-lg"><span
                                                                class="badge badge-dot badge-dot bg-warning">Due</span>
                                                        </div>
                                                        <div class="nk-tb-col tb-col-md"><span
                                                                class="tb-status text-success">Active</span></div>
                                                        <div class="nk-tb-col nk-tb-col-tools">
                                                            <ul class="nk-tb-actions gx-1">
                                                                <li class="nk-tb-action-hidden"><a href="#"
                                                                        class="btn btn-trigger btn-icon"
                                                                        data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Send Email"><em
                                                                            class="icon ni ni-mail-fill"></em></a></li>
                                                                <li class="nk-tb-action-hidden"><a href="#"
                                                                        class="btn btn-trigger btn-icon"
                                                                        data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Suspend"><em
                                                                            class="icon ni ni-user-cross-fill"></em></a>
                                                                </li>
                                                                <li>
                                                                    <div class="drodown"><a href="#"
                                                                            class="dropdown-toggle btn btn-icon btn-trigger"
                                                                            data-bs-toggle="dropdown"><em
                                                                                class="icon ni ni-more-h"></em></a>
                                                                        <div class="dropdown-menu dropdown-menu-end">
                                                                            <ul class="link-list-opt no-bdr">
                                                                                <li><a href="students-details.html"><em
                                                                                            class="icon ni ni-eye"></em><span>View
                                                                                            Details</span></a></li>
                                                                                <li><a href="#"><em
                                                                                            class="icon ni ni-activity-round"></em><span>Activities</span></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="nk-tb-item">
                                                        <div class="nk-tb-col nk-tb-col-check">
                                                            <div
                                                                class="custom-control custom-control-sm custom-checkbox notext">
                                                                <input type="checkbox" class="custom-control-input"
                                                                    id="uid7"/><label class="custom-control-label"
                                                                    for="uid7"></label></div>
                                                        </div>
                                                        <div class="nk-tb-col"><a href="students-details.html">
                                                                <div class="user-card">
                                                                    <div class="user-avatar"><img
                                                                            src="../images/avatar/a-sm.jpg" alt=""/>
                                                                    </div>
                                                                    <div class="user-info"><span class="tb-lead">Ashley
                                                                            Lawson <span
                                                                                class="dot dot-warning d-md-none ms-1"></span></span><span>ashley@softnio.com</span>
                                                                    </div>
                                                                </div>
                                                            </a></div>
                                                        <div class="nk-tb-col tb-col-mb"><span
                                                                class="tb-lead d-lg-flex d-none">Learn Android
                                                                Development with project </span>
                                                            <div class="d-lg-flex d-none">
                                                                <div class="drodown"><a href="#"
                                                                        class="dropdown-toggle pt-1 text-info"
                                                                        data-bs-toggle="dropdown"> <span>View
                                                                            More</span> </a>
                                                                    <div class="dropdown-menu dropdown-menu-start">
                                                                        <ul class="link-list-opt no-bdr p-3">
                                                                            <li class="tb-lead p-1">Application
                                                                                Management</li>
                                                                            <li class="tb-lead p-1">Learn Android
                                                                                Development with project</li>
                                                                            <li class="tb-lead p-1">UI/UX Design with
                                                                                Adobe XD</li>
                                                                            <li class="tb-lead p-1">Learn Android
                                                                                Development with project</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="nk-tb-col tb-col-md"><span>+124 394-1787</span>
                                                        </div>
                                                        <div class="nk-tb-col tb-col-lg"><span>United Kindom</span>
                                                        </div>
                                                        <div class="nk-tb-col tb-col-lg"><span
                                                                class="tb-status badge-dot bg-success">Paid</span></div>
                                                        <div class="nk-tb-col tb-col-md"><span
                                                                class="tb-status text-warning">Inactive</span></div>
                                                        <div class="nk-tb-col nk-tb-col-tools">
                                                            <ul class="nk-tb-actions gx-1">
                                                                <li class="nk-tb-action-hidden"><a href="#"
                                                                        class="btn btn-trigger btn-icon"
                                                                        data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Send Email"><em
                                                                            class="icon ni ni-mail-fill"></em></a></li>
                                                                <li class="nk-tb-action-hidden"><a href="#"
                                                                        class="btn btn-trigger btn-icon"
                                                                        data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Suspend"><em
                                                                            class="icon ni ni-user-cross-fill"></em></a>
                                                                </li>
                                                                <li>
                                                                    <div class="drodown"><a href="#"
                                                                            class="dropdown-toggle btn btn-icon btn-trigger"
                                                                            data-bs-toggle="dropdown"><em
                                                                                class="icon ni ni-more-h"></em></a>
                                                                        <div class="dropdown-menu dropdown-menu-end">
                                                                            <ul class="link-list-opt no-bdr">
                                                                                <li><a href="students-details.html"><em
                                                                                            class="icon ni ni-eye"></em><span>View
                                                                                            Details</span></a></li>
                                                                                <li><a href="#"><em
                                                                                            class="icon ni ni-activity-round"></em><span>Activities</span></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="nk-tb-item">
                                                        <div class="nk-tb-col nk-tb-col-check">
                                                            <div
                                                                class="custom-control custom-control-sm custom-checkbox notext">
                                                                <input type="checkbox" class="custom-control-input"
                                                                    id="uid8"/><label class="custom-control-label"
                                                                    for="uid8"></label></div>
                                                        </div>
                                                        <div class="nk-tb-col"><a href="students-details.html">
                                                                <div class="user-card">
                                                                    <div class="user-avatar bg-info"><span>JL</span>
                                                                    </div>
                                                                    <div class="user-info"><span class="tb-lead">Joe
                                                                            Larson <span
                                                                                class="dot dot-success d-md-none ms-1"></span></span><span>larson@example.com</span>
                                                                    </div>
                                                                </div>
                                                            </a></div>
                                                        <div class="nk-tb-col tb-col-mb"><span
                                                                class="tb-lead d-lg-flex d-none">SEO Optimization</span>
                                                            <div class="d-lg-flex d-none">
                                                                <div class="drodown"><a href="#"
                                                                        class="dropdown-toggle pt-1 text-info"
                                                                        data-bs-toggle="dropdown"> <span>View
                                                                            More</span> </a>
                                                                    <div class="dropdown-menu dropdown-menu-start">
                                                                        <ul class="link-list-opt no-bdr p-3">
                                                                            <li class="tb-lead p-1">Application
                                                                                Management</li>
                                                                            <li class="tb-lead p-1">Learn Android
                                                                                Development with project</li>
                                                                            <li class="tb-lead p-1">UI/UX Design with
                                                                                Adobe XD</li>
                                                                            <li class="tb-lead p-1">Learn Android
                                                                                Development with project</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="nk-tb-col tb-col-md"><span>+168 603-2320</span>
                                                        </div>
                                                        <div class="nk-tb-col tb-col-lg"><span>India</span></div>
                                                        <div class="nk-tb-col tb-col-lg"><span
                                                                class="tb-status badge-dot bg-success">Paid</span></div>
                                                        <div class="nk-tb-col tb-col-md"><span
                                                                class="tb-status text-success">Active</span></div>
                                                        <div class="nk-tb-col nk-tb-col-tools">
                                                            <ul class="nk-tb-actions gx-1">
                                                                <li class="nk-tb-action-hidden"><a href="#"
                                                                        class="btn btn-trigger btn-icon"
                                                                        data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Send Email"><em
                                                                            class="icon ni ni-mail-fill"></em></a></li>
                                                                <li class="nk-tb-action-hidden"><a href="#"
                                                                        class="btn btn-trigger btn-icon"
                                                                        data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Suspend"><em
                                                                            class="icon ni ni-user-cross-fill"></em></a>
                                                                </li>
                                                                <li>
                                                                    <div class="drodown"><a href="#"
                                                                            class="dropdown-toggle btn btn-icon btn-trigger"
                                                                            data-bs-toggle="dropdown"><em
                                                                                class="icon ni ni-more-h"></em></a>
                                                                        <div class="dropdown-menu dropdown-menu-end">
                                                                            <ul class="link-list-opt no-bdr">
                                                                                <li><a href="students-details.html"><em
                                                                                            class="icon ni ni-eye"></em><span>View
                                                                                            Details</span></a></li>
                                                                                <li><a href="#"><em
                                                                                            class="icon ni ni-activity-round"></em><span>Activities</span></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                   </div>
                                                    </div>
                                                    </div>
                                                    {/* <div class="tab-pane" id="tabItem3">
                                                        <p>contnet</p>
                                                    </div>
                                                    <div class="tab-pane" id="tabItem4">
                                                        <p>contnet</p>
                                                    </div> */}
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
} export default Interview