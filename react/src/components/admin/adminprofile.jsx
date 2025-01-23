import { Link, useLocation } from "react-router-dom"
import AdminMenu from "./adminmenus"
import AdminHeader from "./header"
import DashFooter from "../candidate/footer"


function Adminprofile() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;
   
    return (
        <>
            <body class="nk-body bg-lighter npc-general has-sidebar ">
                <div class="nk-app-root">
                    <div class="nk-main ">
                        <AdminMenu />
                        <div class="nk-wrap ">

                            <AdminHeader />
                            <div class="nk-content">
                    <div class="container-fluid" >
                        <div class="nk-content-inner" >
                            <div class="nk-content-body" >
                                <div class="nk-block" >
                                    <div class="card" >
                                        <div class="card-aside-wrap" >
                                            <div class="card-inner card-inner-lg" >
                                                <div class="nk-block-head" >
                                                    <div class="nk-block-between d-flex justify-content-between">
                                                        <div class="nk-block-head-content">
                                                            <h4 class="nk-block-title">Personal Information</h4>
                                                            <div class="nk-block-des">
                                                                <p>Basic info, like your name and address, that you use
                                                                    on Nio Platform.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="nk-block">
                                                    <div class="row g-4">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <div class="form-label-group"><label
                                                                        class="form-label">Name <span
                                                                            class="text-danger">*</span></label></div>
                                                                <div class="form-control-group"><input type="text"
                                                                        class="form-control" placeholder="Adu"/></div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <div class="form-label-group"><label
                                                                        class="form-label">Mobile Number
                                                                        <span class="text-danger">*</span></label>
                                                                </div>
                                                                <div class="form-control-group"><input type="text"
                                                                        class="form-control"
                                                                        placeholder="+91 12345-67890"/></div>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <div class="form-label-group"><label
                                                                        class="form-label">Email<span
                                                                            class="text-danger">*</span></label></div>
                                                                <div class="form-control-group"><input type="text"
                                                                        class="form-control"
                                                                        placeholder="adu@gmail.com"/></div>
                                                            </div>
                                                        </div>
                                                       </div>
                                                       </div>
                                                <div class="nk-kycfm-action pt-5 justify-end"><button type="submit"
                                                        class="btn btn-lg btn-primary">Update profile</button>
                                                </div>
                                            </div>

                                            <div class="card-aside card-aside-left user-aside toggle-slide toggle-slide-left toggle-break-lg"
                data-content="" data-toggle-screen="lg"
                data-toggle-overlay="true" >
                <div class="card-inner-group" data-simplebar>
                   

                    <div class="card-inner p-0">
                        <ul class="link-list-menu">
                            <li class={isActive('/admin/profile') ? 'active' : ''}><Link class="" to="/admin/profile"><em
                                class="icon ni ni-user-fill-c"></em><span>Update Profile</span></Link></li>
                                    <li class={isActive('/admin/settings') ? 'active' : ''}><Link to="/admin/settings"><em
                                class="icon ni ni-lock-alt-fill"></em><span>Security Settings</span></Link></li>
                            {/*<li class={isActive('/candidate/profile/socialmedia') ? 'active' : ''}><Link
                                to="/candidate/profile/socialmedia"><em
                                    class="icon ni ni-bell-fill"></em><span>Social Media</span></Link>
                            </li>
                            <li class={isActive('/candidate/profile/experience') ? 'active' : ''}><Link to="/candidate/profile/experience"><em class="icon ni ni-briefcase-fill"></em><span>Experience</span></Link></li>

                            <li class={isActive('/candidate/profile/academic') ? 'active' : ''}><Link to="/candidate/profile/academic"><em class="icon ni ni-medal-fill"></em><span>Education</span></Link></li>
                            <li class={isActive('/candidate/profile/skill') ? 'active' : ''}><Link to="/candidate/profile/skill"><em
                                class="icon ni ni-activity-round-fill"></em><span>Skill</span></Link></li>
                            
                            <li class={isActive('/candidate/profile/resume') ? 'active' : ''}><Link to="/candidate/profile/resume"><em class="icon ni ni-briefcase-fill"></em><span>Documents</span></Link></li> */}
                        </ul>
                    </div>
                    <div class="card-inner">
                        <div class="user-account-info py-0">
                            <h6 class="overline-title-alt">Last Login</h6>
                            <p>06-29-2020 02:39pm</p>
                            <h6 class="overline-title-alt">Login IP</h6>
                            <p>192.129.243.28</p>
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
                            <DashFooter />
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}
export default Adminprofile
