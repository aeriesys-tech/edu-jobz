import { Link } from "react-router-dom"
import SideBar from "./dashboardslidebar"
import DashFooter from "./footer"
import DashHeader from "./header"

function Resume() {
    $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('whatever')
        var modal = $(this)
        modal.find('.modal-title').text('New message to ' + recipient)
        modal.find('.modal-body input').val(recipient)
    })
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
                                                            <div class="card-body ">
                                                                <h4 class='mb-5'>Upload Resume, Cover Letter & Other Documents</h4>

                                                                <input type="file" id="upload" hidden />
                                                                <label for="upload" style={{
                                                                    backgroundColor: '#854fff',
                                                                    color: 'white',
                                                                    padding: '0.5rem',
                                                                    fontFamily: 'sans-serif',
                                                                    borderRadius: '0.3rem',
                                                                    cursor: 'pointer',
                                                                    marginTop: '1rem'
                                                                }}>Upload Documents</label>

                                                            </div>
                                                            <p>Supported File Formats are JPEG, JPG , PNG, PDF & Docx Format</p>
                                                            <button type="button" class="btn btn-primary ms-4" data-target="#change" >Save </button>

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

                                                                <div class="card-inner p-0">
                                                                    <ul class="link-list-menu">
                                                                        <li><Link class="" to="/candidate/profile"><em
                                                                            class="icon ni ni-user-fill-c"></em><span>Personal
                                                                                Infomation</span></Link></li>
                                                                        <li><Link
                                                                            to="/candidate/socialmedia"><em
                                                                                class="icon ni ni-bell-fill"></em><span>Social Media</span></Link>
                                                                        </li>
                                                                        <li><Link to="/candidate/academic"><em class="icon ni ni-medal-fill"></em><span>Education</span></Link></li>
                                                                        <li><Link to="/candidate/skill"><em
                                                                            class="icon ni ni-activity-round-fill"></em><span>Skill</span></Link></li>
                                                                        <li><Link to="/candidate/setting"><em
                                                                            class="icon ni ni-lock-alt-fill"></em><span>Security
                                                                                Settings</span></Link></li>
                                                                        <li><Link to="/candidate/resume"><em class="icon ni ni-briefcase-fill"></em><span>Resume</span></Link></li>
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
export default Resume
