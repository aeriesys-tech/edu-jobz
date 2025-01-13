import { Link } from "react-router-dom"
import SideBar from "./dashboardslidebar"
import DashFooter from "./footer"
import DashHeader from "./header"


function List() {
    return (
        <>
            <body class="nk-body bg-lighter npc-general has-sidebar ">
                <div class="nk-app-root">
                    <div class="nk-main ">
                        <SideBar />
                        <div class="nk-wrap ">

                            <DashHeader />
                            <div class="nk-content ">
                    <div class="container-fluid">
                        <div class="nk-content-inner">
                            <div class="nk-content-body">
                                <div class="nk-block-head nk-block-head-sm">
                                    <div class="nk-block-between">
                                        <div class="nk-block-head-content">
                                            <h3 class="nk-block-title page-title">Search Jobs</h3>
                                        </div>
                                        
                                    </div>
                                    <div class="nk-block-head-content">
                                            <div class="toggle-wrap nk-block-tools-toggle"><a href="#"
                                                    class="btn btn-icon btn-trigger toggle-expand me-n1"
                                                    data-target="more-options"><em class="icon ni ni-more-v"></em></a>
                                                <div class="toggle-expand-content" data-content="more-options">
                                                    <ul class="nk-block-tools flex-wrap g-2 mt-1 ">
                                                        <li class="col-md-3">
                                                            <div class="form-control-wrap w-100">
                                                                <div class="form-icon "><em
                                                                        class="icon ni ni-search"></em></div><input
                                                                    type="text" class="form-control " id="default-04"
                                                                    placeholder="Search Job Title / Subject / Role"/>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="drodown"><a href="#"
                                                                    class="dropdown-toggle dropdown-indicator btn btn-block btn-dim btn-primary"
                                                                    data-bs-toggle="dropdown">Choose one or more Industries</a>
                                                                <div class="dropdown-menu dropdown-menu-end">
                                                                    <ul class="link-list-opt no-bdr">
                                                                        <li><a href="#"><span>College</span></a></li>
                                                                        <li><a href="#"><span>Coaching Center</span></a></li>
                                                                        <li><a href="#"><span>Other Than Education</span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                        <div class="drodown"><a href="#"
                                                                    class="dropdown-toggle dropdown-indicator btn btn-block btn-dim btn-primary"
                                                                    data-bs-toggle="dropdown">Choose one or more Roles</a>
                                                                <div class="dropdown-menu dropdown-menu-end">
                                                                    <ul class="link-list-opt no-bdr">
                                                                        <li><a href="#"><span>Accounting</span></a></li>
                                                                        <li><a href="#"><span>Branch Head</span></a></li>
                                                                        <li><a href="#"><span>Center Head</span></a></li>
                                                                        <li><a href="#"><span>Deputy Education Head</span></a></li>

                                                                        <li><a href="#"><span>Chief Education Head</span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                        <div class="drodown"><a href="#"
                                                                    class="dropdown-toggle dropdown-indicator btn btn-block btn-dim btn-primary"
                                                                    data-bs-toggle="dropdown">Work From Home</a>
                                                                <div class="dropdown-menu dropdown-menu-end">
                                                                    <ul class="link-list-opt no-bdr">
                                                                        <li><a href="#"><span>Yes</span></a></li>
                                                                        <li><a href="#"><span>No</span></a></li>
                                                                        <li><a href="#"><span>Hybrid</span></a></li>
                                                                         </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                       
                                                        <li>
                                                        <div class="drodown"><a href="#"
                                                                    class="dropdown-toggle dropdown-indicator btn btn-block btn-dim btn-primary"
                                                                    data-bs-toggle="dropdown">Country</a>
                                                                <div class="dropdown-menu dropdown-menu-end">
                                                                    <ul class="link-list-opt no-bdr">
                                                                        <li><a href="#"><span>India</span></a></li>
                                                                        <li><a href="#"><span>Sri Lanka</span></a></li>
                                                                        <li><a href="#"><span>Nepal</span></a></li>
                                                                        <li><a href="#"><span>Bangladesh</span></a></li>

                                                                        <li><a href="#"><span>Afganisthan</span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                      
                                                        <li>
                                                        <div class="drodown"><a href="#"
                                                                    class="dropdown-toggle dropdown-indicator btn btn-block btn-dim btn-primary"
                                                                    data-bs-toggle="dropdown">City</a>
                                                                <div class="dropdown-menu dropdown-menu-start">
                                                                    <ul class="link-list-opt no-bdr">
                                                                        <li><a href="#"><span>Athani</span></a></li>
                                                                        <li><a href="#"><span>Belgavi</span></a></li>
                                                                        <li><a href="#"><span>Banglore</span></a></li>
                                                                        <li><a href="#"><span>Mysore</span></a></li>

                                                                        <li><a href="#"><span>Hampi</span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                        <div class="drodown"><a href="#"
                                                                    class="dropdown-toggle dropdown-indicator btn btn-block btn-dim btn-primary"
                                                                    data-bs-toggle="dropdown">Salary Range</a>
                                                                <div class="dropdown-menu dropdown-menu-end">
                                                                    <ul class="link-list-opt no-bdr">
                                                                        <li><a href="#"><span>&#8377;1 to &#8377;5000 </span></a></li>
                                                                        <li><a href="#"><span>&#8377;1000 to &#8377;10000 </span></a></li>
                                                                        <li><a href="#"><span>&#8377;10000 to &#8377;20000 </span></a></li>
                                                                        <li><a href="#"><span>&#8377;20000 to &#8377;30000 </span></a></li>

                                                                        <li><a href="#"><span>&#8377;30000 to &#8377;50000 </span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="nk-block-tools-opt"><a
                                                                class="btn btn-primary d-none d-md-inline-flex"
                                                                data-bs-toggle="modal" href="#student-add"><em
                                                                    class="icon ni ni-search"></em><span>Search</span></a>
                                                        </li>
                                                        
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                               
                                <div class="nk-block">
                                <div class="card-inner px-0 mt-3">
                                        <div class="row">
                                            <div class="col-md-4 col-lg-4">
                                                <div class="card">
                                                    <div class="card-inner">
                                                        <div class="team">
                                                            <div class="team-options">
                                                                <div class="drodown"><a href="#"
                                                                        class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                                        data-bs-toggle="dropdown"><em
                                                                            class="icon ni ni-more-h"></em></a>
                                                                    <div class="dropdown-menu dropdown-menu-end">
                                                                        <ul class="link-list-opt no-bdr">
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-focus"></em><span>Quick
                                                                                        View</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-eye"></em><span>View
                                                                                        Details</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-mail"></em><span>Send
                                                                                        Email</span></a>
                                                                            </li>
                                                                            <li class="divider"></li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-shield-star"></em><span>Reset
                                                                                        Pass</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-shield-off"></em><span>Reset
                                                                                        2FA</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-na"></em><span>Suspend
                                                                                        User</span></a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="user-card user-card-s2">
                                                                <div class="user-avatar lg ">
                                                                    <span>AB</span>
                                                                    
                                                                </div>
                                                                <div class="user-info">
                                                                    <h6>Admission Counselor</h6><span
                                                                        class="sub-text">Birla Bopen school</span>
                                                                </div>
                                                            </div>
                                                            <ul class="team-info">
                                                                <li><span>Year of Experience</span><span>1-2
                                                                        Years</span></li>
                                                                <li><span>Contact</span><span>+88
                                                                        01713-123656</span></li>
                                                                <li><span>Email</span><span>info@softnio.com</span>
                                                                </li>
                                                            </ul>
                                                            <div class="team-view"><Link
                                                                    to="/candidate/jobs/details"
                                                                    class="btn btn-block btn-dim btn-primary me-1"><span>View
                                                                    </span></Link>
                                                                <a href="../../user-details-regular.html"
                                                                    class="btn btn-block  btn-primary ms-1"><span>Apply</span></a>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-lg-4">
                                                <div class="card">
                                                    <div class="card-inner">
                                                        <div class="team">
                                                            <div class="team-options">
                                                                <div class="drodown"><a href="#"
                                                                        class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                                        data-bs-toggle="dropdown"><em
                                                                            class="icon ni ni-more-h"></em></a>
                                                                    <div class="dropdown-menu dropdown-menu-end">
                                                                        <ul class="link-list-opt no-bdr">
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-focus"></em><span>Quick
                                                                                        View</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-eye"></em><span>View
                                                                                        Details</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-mail"></em><span>Send
                                                                                        Email</span></a>
                                                                            </li>
                                                                            <li class="divider"></li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-shield-star"></em><span>Reset
                                                                                        Pass</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-shield-off"></em><span>Reset
                                                                                        2FA</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-na"></em><span>Suspend
                                                                                        User</span></a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="user-card user-card-s2">
                                                                <div class="user-avatar lg">
                                                                    <span>AB</span>
                                                                    
                                                                </div>
                                                                <div class="user-info">
                                                                    <h6>Chemistry Faculty</h6><span
                                                                        class="sub-text">Mahesh Tutorials</span>
                                                                </div>
                                                            </div>
                                                            <ul class="team-info">
                                                                <li><span>Year of Experience</span><span>1-2
                                                                        Years</span></li>
                                                                <li><span>Contact</span><span>+88
                                                                        01713-123656</span></li>
                                                                <li><span>Email</span><span>info@softnio.com</span>
                                                                </li>
                                                            </ul>
                                                            <div class="team-view"><Link
                                                                    to="/candidate/jobs/details"
                                                                    class="btn btn-block btn-dim btn-primary me-1"><span>View
                                                                    </span></Link>
                                                                <a href="../../user-details-regular.html"
                                                                    class="btn btn-block  btn-primary ms-1"><span>Apply</span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-lg-4">
                                                <div class="card">
                                                    <div class="card-inner">
                                                        <div class="team">
                                                            <div class="team-options">
                                                                <div class="drodown"><a href="#"
                                                                        class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                                        data-bs-toggle="dropdown"><em
                                                                            class="icon ni ni-more-h"></em></a>
                                                                    <div class="dropdown-menu dropdown-menu-end">
                                                                        <ul class="link-list-opt no-bdr">
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-focus"></em><span>Quick
                                                                                        View</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-eye"></em><span>View
                                                                                        Details</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-mail"></em><span>Send
                                                                                        Email</span></a>
                                                                            </li>
                                                                            <li class="divider"></li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-shield-star"></em><span>Reset
                                                                                        Pass</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-shield-off"></em><span>Reset
                                                                                        2FA</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-na"></em><span>Suspend
                                                                                        User</span></a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="user-card user-card-s2">
                                                                <div class="user-avatar lg">
                                                                    <span>AB</span>
                                                                   
                                                                </div>
                                                                <div class="user-info">
                                                                    <h6>Tgt Math</h6><span class="sub-text">Elpro
                                                                        International School</span>
                                                                </div>
                                                            </div>
                                                            <ul class="team-info">
                                                                <li><span>Year of Experience</span><span>1-2
                                                                        Years</span></li>
                                                                <li><span>Contact</span><span>+88
                                                                        01713-123656</span></li>
                                                                <li><span>Email</span><span>info@softnio.com</span>
                                                                </li>
                                                            </ul>
                                                            <div class="team-view"><Link
                                                                    to="/candidate/jobs/details"
                                                                    class="btn btn-block btn-dim btn-primary me-1"><span>View
                                                                    </span></Link>
                                                                <a href="../../user-details-regular.html"
                                                                    class="btn btn-block btn-primary ms-1"><span>Apply</span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <DashFooter/>
                            </div>
                            </div>
                            </div>
                            </body>
                            </>
    )}
    export default List