import { Link } from "react-router-dom"
import SideBar from "./dashboardslidebar"
import DashFooter from "./footer"
import DashHeader from "./header"


function ProfileNotification() {
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
                                <div class="nk-block">
                                    <div class="card">
                                        <div class="card-aside-wrap">
                                            <div class="card-inner card-inner-lg">
                                            <div class="">
                                            <div class="">
                                                                <div class="">
                                            <div class="tab-content">
                                                <div class="tab-pane active" id="tabItem5">
                                                    <h4 class="title nk-block-title">Social Media Account Links</h4>
                                                    <p class='mb-5'>Here is your basic informations.</p>
                                                    <form action="#" class="gy-3 form-settings">
                                                        <div class="row g-3 align-center">
                                                            <div class="col-lg-5">
                                                                <div class="form-group"><label class="form-label"
                                                                        for="site-name">Facebook</label><span
                                                                        class="form-note">Specify the Id of your facebook Account
                                                                       </span></div>
                                                            </div>
                                                            <div class="col-lg-7">
                                                                <div class="form-group">
                                                                    <div class="form-control-wrap"><input type="text"
                                                                            class="form-control" id="site-name"
                                                                            value="http://www.abc.com"/></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row g-3 align-center">
                                                            <div class="col-lg-5">
                                                                <div class="form-group"><label class="form-label"
                                                                        for="site-email">LinkedIn</label><span
                                                                        class="form-note">Specify the Id of
                                                                        your LinkedIn Account.</span></div>
                                                            </div>
                                                            <div class="col-lg-7">
                                                                <div class="form-group">
                                                                    <div class="form-control-wrap"><input type="text"
                                                                            class="form-control" id="site-email"
                                                                            value="info@softnio.com"/></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row g-3 align-center">
                                                            <div class="col-lg-5">
                                                                <div class="form-group"><label class="form-label"
                                                                        for="site-name">Twitter </label><span
                                                                        class="form-note">Specify the id of your
                                                                        Twitter Account.</span></div>
                                                            </div>
                                                            <div class="col-lg-7">
                                                                <div class="form-group">
                                                                    <div class="form-control-wrap"><input type="text"
                                                                            class="form-control" id="site-name"
                                                                            value="info.twitter"/></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row g-3 align-center">
                                                            <div class="col-lg-5">
                                                                <div class="form-group"><label class="form-label"
                                                                        for="site-email">Youtube Channel</label><span
                                                                        class="form-note">Specify the channel name of
                                                                        your Youtube Account.</span></div>
                                                            </div>
                                                            <div class="col-lg-7">
                                                                <div class="form-group">
                                                                    <div class="form-control-wrap"><input type="text"
                                                                            class="form-control" id="site-email"
                                                                            value="info@softnio.com"/></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                     
                                                       
                                                       
                                                       
                                                        <div class="row g-3">
                                                            <div class="col-lg-7">
                                                                <div class="form-group mt-2"><button type="submit"
                                                                        class="btn btn-lg btn-primary"
                                                                        data-bs-target="#modalAlert"
                                                                        data-bs-toggle="modal">Update</button></div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                
                                               
                                            </div>
                                        </div>
                                        </div>
                                                                    
                                                                </div>
                                            </div>
                                            <div class="card-aside card-aside-left user-aside toggle-slide toggle-slide-left toggle-break-lg"
                                                data-content="userAside" data-toggle-screen="lg"
                                                data-toggle-overlay="true">
                                                <div class="card-inner-group">
                                                    <div class="card-inner">
                                                        <div class="user-card">
                                                            <div class="user-avatar bg-primary"><span>AB</span></div>
                                                            <div class="user-info"><span class="lead-text">Abu Bin
                                                                    Ishtiyak</span><span
                                                                    class="sub-text">info@softnio.com</span></div>
                                                            <div class="user-action">
                                                                <div class="dropdown"><a
                                                                        class="btn btn-icon btn-trigger me-n2"
                                                                        data-bs-toggle="dropdown" href="#"><em
                                                                            class="icon ni ni-more-v"></em></a>
                                                                    <div class="dropdown-menu dropdown-menu-end">
                                                                        <ul class="link-list-opt no-bdr">
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-camera-fill"></em><span>Change
                                                                                        Photo</span></a></li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-edit-fill"></em><span>Update
                                                                                        Profile</span></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <div class="card-inner">
                                                        <div class="user-account-info py-0">
                                                            <h6 class="overline-title-alt">Account Balance</h6>
                                                            <div class="user-balance">12.395769 <small
                                                                    class="currency currency-btc">USD</small></div>
                                                            <div class="user-balance-sub">Pending <span>0.344939 <span
                                                                        class="currency currency-btc">USD</span></span>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                    <div class="card-inner p-0">
                                                    <ul class="link-list-menu">
                                                                        <li><Link class="" to="/profile"><em
                                                                            class="icon ni ni-user-fill-c"></em><span>Personal
                                                                                Infomation</span></Link></li>
                                                                        <li><Link
                                                                            to="/notification"><em
                                                                                class="icon ni ni-bell-fill"></em><span>Social Media</span></Link>
                                                                        </li>
                                                                        <li><Link to="/activity"><em
                                                                            class="icon ni ni-activity-round-fill"></em><span>Education</span></Link></li>
                                                                        <li><Link to="/skill"><em
                                                                            class="icon ni ni-activity-round-fill"></em><span>Skill</span></Link></li>
                                                                        <li><Link to="/setting"><em
                                                                            class="icon ni ni-lock-alt-fill"></em><span>Security
                                                                                Settings</span></Link></li>
                                                                        <li><Link to="/resume"><em
                                                                            class="icon ni ni-lock-alt-fill"></em><span>Resume</span></Link></li>
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
                <DashFooter/>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}

export default ProfileNotification
