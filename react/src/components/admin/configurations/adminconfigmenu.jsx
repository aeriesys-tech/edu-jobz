import { Link, useLocation } from "react-router-dom"


function DashMenuBar() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;
    const isParentActive = (basePath) => location.pathname.startsWith(basePath);
    
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
                                    <li class={isActive('/admin/configurations/state') ? 'active' : ''}><Link to="/admin/configurations/state"><em
                                class="icon ni ni-lock-alt-fill"></em><span>State</span></Link></li>
                          <li class={isActive('/admin/configurations/city') ? 'active' : ''}><Link to="/admin/configurations/city"><em class="icon ni ni-briefcase-fill"></em><span>City</span></Link></li>

                            <li class={isActive('/admin/configurations/designations') ? 'active' : ''}><Link
                                to="/admin/configurations/designations"><em
                                    class="icon ni ni-bell-fill"></em><span>Designations</span></Link>
                            </li>

                            <li class={isActive('/admin/configurations/subject') ? 'active' : ''}><Link to="/admin/configurations/subject"><em class="icon ni ni-medal-fill"></em><span>Subjects</span></Link></li>
                        <li class={isActive('/admin/configurations/typeofinstitute') ? 'active' : ''}><Link to="/admin/configurations/typeofinstitute"><em
                                class="icon ni ni-activity-round-fill"></em><span>Type Of Institutes</span></Link></li>
                            
                            {/* <li class={isActive('/candidate/profile/resume') ? 'active' : ''}><Link to="/candidate/profile/resume"><em class="icon ni ni-briefcase-fill"></em><span>Documents</span></Link></li> */}
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