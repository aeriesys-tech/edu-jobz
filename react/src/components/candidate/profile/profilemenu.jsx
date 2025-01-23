import { Link, useLocation } from "react-router-dom"


function MenuBar() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;
    
    return (
        <>
            <div class="card-aside card-aside-left user-aside toggle-slide toggle-slide-left toggle-break-lg"
                data-content="" data-toggle-screen="lg"
                data-toggle-overlay="true" >
                <div class="card-inner-group" data-simplebar>
                    <div class="card-inner">
                        <div class="user-card">
                            <div class="user-avatar"><span>AB</span></div>
                            <div class="user-info"><span class="lead-text">Abu Bin
                                Ishtiyak</span><span
                                    class="sub-text">info@softnio.com</span></div>
                            <div class="user-action">
                                <div class="dropdown">
                                    <a class="btn btn-icon btn-trigger me-n2"
                                        data-bs-toggle="dropdown" href="#"><em
                                            class="icon ni ni-more-v"></em></a>
                                    <div class="dropdown-menu dropdown-menu-end">
                                        <ul class="link-list-opt no-bdr">
                                            <li>
                                                <a href="#"><em
                                                    class="icon ni ni-camera-fill"></em><span>Change
                                                        Photo</span></a>
                                            </li>
                                           
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card-inner p-0">
                        <ul class="link-list-menu">
                            <li class={isActive('/candidate/profile') ? 'active' : ''}><Link class="" to="/candidate/profile"><em
                                class="icon ni ni-user-fill-c"></em><span>Personal
                                    Infomation</span></Link></li>
                                    <li class={isActive('/candidate/profile/setting') ? 'active' : ''}><Link to="/candidate/profile/setting"><em
                                class="icon ni ni-lock-alt-fill"></em><span>Security
                                    Settings</span></Link></li>
                            <li class={isActive('/candidate/profile/socialmedia') ? 'active' : ''}><Link
                                to="/candidate/profile/socialmedia"><em
                                    class="icon ni ni-bell-fill"></em><span>Social Media</span></Link>
                            </li>
                            <li class={isActive('/candidate/profile/experience') ? 'active' : ''}><Link to="/candidate/profile/experience"><em class="icon ni ni-briefcase-fill"></em><span>Experience</span></Link></li>

                            <li class={isActive('/candidate/profile/academic') ? 'active' : ''}><Link to="/candidate/profile/academic"><em class="icon ni ni-medal-fill"></em><span>Education</span></Link></li>
                            <li class={isActive('/candidate/profile/skill') ? 'active' : ''}><Link to="/candidate/profile/skill"><em
                                class="icon ni ni-activity-round-fill"></em><span>Skill</span></Link></li>
                            
                            <li class={isActive('/candidate/profile/resume') ? 'active' : ''}><Link to="/candidate/profile/resume"><em class="icon ni ni-briefcase-fill"></em><span>Documents</span></Link></li>
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
        </>
    )
}
export default MenuBar