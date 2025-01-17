import { Link, useLocation } from "react-router-dom"


function DashMenuBar() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;
    
    return (
        <>
            <div class="card-aside card-aside-left user-aside toggle-slide toggle-slide-left toggle-break-lg"
                data-content="" data-toggle-screen="lg"
                data-toggle-overlay="true" >
                <div class="card-inner-group" data-simplebar>
                   

                    <div class="card-inner p-0">
                        <ul class="link-list-menu">
                            <li class={isActive('/admin/configurations') ? 'active' : ''}><Link class="" to="/admin/configurations"><em
                                class="icon ni ni-user-fill-c"></em><span>Country</span></Link></li>
                                    <li class={isActive('/admin/Configurations/state') ? 'active' : ''}><Link to="/admin/Configurations/state"><em
                                class="icon ni ni-lock-alt-fill"></em><span>State</span></Link></li>
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
        </>
    )
}
export default DashMenuBar