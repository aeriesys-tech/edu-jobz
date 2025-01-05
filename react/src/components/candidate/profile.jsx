import { Link } from "react-router-dom"
import SideBar from "./dashboardslidebar"
import DashFooter from "./footer"
import DashHeader from "./header"

function Profile() {
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
                                                            <div class="nk-block-head">
                                                                <div class="nk-block-between d-flex justify-content-between">
                                                                    <div class="nk-block-head-content">
                                                                        <h4 class="nk-block-title">Personal Information</h4>
                                                                        <div class="nk-block-des">
                                                                            <p>Basic info, like your name and address, that you use
                                                                                on Nio Platform.</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="d-flex align-center">
                                                                        <div class="nk-tab-actions me-n1"><a
                                                                            class="btn btn-icon btn-trigger"
                                                                            data-bs-toggle="modal" href="#profile-edit"><em
                                                                                class="icon ni ni-edit"></em></a>
                                                                            <div class="modal fade" role="dialog" id="profile-edit">
                                                                                <div class="modal-dialog modal-lg" role="document">
                                                                                    <div class="modal-content"><a href="#" class="close" data-bs-dismiss="modal"><em
                                                                                        class="icon ni ni-cross-sm"></em></a>
                                                                                        <div class="modal-body modal-body-md">
                                                                                            <h5 class="title">Update Profile</h5>

                                                                                            <div class="tab-content">
                                                                                                <div class="tab-pane active" id="personal">
                                                                                                    <div class="row gy-4">
                                                                                                        <div class="col-md-6">
                                                                                                            <div class="form-group"><label class="form-label" for="first-name">First
                                                                                                                Name</label><input type="text" class="form-control" id="first-name"
                                                                                                                    value="Abu Bin Ishtiyak" placeholder="Enter First name" /></div>
                                                                                                        </div>
                                                                                                        <div class="col-md-6">
                                                                                                            <div class="form-group"><label class="form-label" for="last-name">Last
                                                                                                                Name</label><input type="text" class="form-control" id="last-name"
                                                                                                                    value="Abu Bin Ishtiyak" placeholder="Enter Last name" /></div>
                                                                                                        </div>
                                                                                                        <div class="col-md-6">
                                                                                                            <div class="form-group"><label class="form-label" for="display-name">Display
                                                                                                                Name</label><input type="text" class="form-control" id="display-name"
                                                                                                                    value="Ishtiyak" placeholder="Enter display name" /></div>
                                                                                                        </div>
                                                                                                        <div class="col-md-6">
                                                                                                            <div class="form-group"><label class="form-label"
                                                                                                                for="personal-email">Email</label><input type="email" class="form-control"
                                                                                                                    id="personal-email" value="info@softnio.com" /></div>
                                                                                                        </div>
                                                                                                        <div class="col-md-6">
                                                                                                            <div class="form-group"><label class="form-label " for="phone-no">Mobile
                                                                                                                Number</label><input type="text" class="form-control" id="phone-no"
                                                                                                                    value="+880" placeholder="Phone Number" /></div>
                                                                                                        </div>
                                                                                                        <div class="col-md-6">
                                                                                                            <div class="form-group"><label class="form-label pe-3" >Gender
                                                                                                            </label>
                                                                                                                <div class="ms-2">
                                                                                                                    <input type="radio" name="gender" />
                                                                                                                    <label class="pe-3">Male</label>
                                                                                                                    <input class="pe-3" type="radio" name="gender" />
                                                                                                                    <label >Female</label></div></div>
                                                                                                        </div>
                                                                                                        <div class="col-md-6">
                                                                                                            <div class="form-group"><label class="form-label" for="birth-day">Date of
                                                                                                                Birth</label><input type="date" class="form-control date-picker"
                                                                                                                    id="birth-day" placeholder="02/24/2021" /></div>
                                                                                                        </div>
                                                                                                        <div class="col-sm-6">
                                                                                                            <div class="mb-3">
                                                                                                                <label class="form-label">Role</label>
                                                                                                                <select class="form-control">
                                                                                                                    <option>Business</option>
                                                                                                                    <option>Academic</option>
                                                                                                                    <option>Clerk</option>
                                                                                                                    <option>Developer</option>
                                                                                                                    <option>Senior</option>
                                                                                                                </select>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div class="col-sm-6">
                                                                                                            <div class="mb-3">
                                                                                                                <label class="form-label">Experience</label>
                                                                                                                <select class="form-control">
                                                                                                                    <option>Fresher</option>
                                                                                                                    <option>1</option>
                                                                                                                    <option>2</option>
                                                                                                                    <option>4</option>
                                                                                                                </select>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div class="col-sm-6">
                                                                                                            <div class="mb-3">
                                                                                                                <label class="form-label">Salary Expectations (per Month) </label>
                                                                                                                <select class="form-control">
                                                                                                                    <option>10000</option>
                                                                                                                    <option>15000</option>
                                                                                                                    <option>20000</option>
                                                                                                                    <option>30000</option>

                                                                                                                </select>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div class="col-sm-6">
                                                                                                            <div class="mb-3">
                                                                                                                <label class="form-label">Notice Period</label>
                                                                                                                <select class="form-control">
                                                                                                                    <option>Immediate Join</option>
                                                                                                                    <option>1 week</option>
                                                                                                                    <option>2 week</option>

                                                                                                                </select>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div class="col-sm-6">
                                                                                                            <div class="mb-3">
                                                                                                                <label class="form-label">How did you hear about us</label>
                                                                                                                <select class="form-control">
                                                                                                                    <option>Website</option>
                                                                                                                    <option>Google</option>
                                                                                                                    <option>Facebook</option>
                                                                                                                    <option>LinkedIn</option>

                                                                                                                </select>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div class="col-sm-6">
                                                                                                            <div class="mb-3">
                                                                                                                <label class="form-label">Subjects</label>
                                                                                                                <select class="form-control">
                                                                                                                    <option>Account</option>
                                                                                                                    <option>Computer Science</option>
                                                                                                                    <option>Acting</option>
                                                                                                                    <option>Biology</option>

                                                                                                                </select>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div class="col-sm-6">
                                                                                                            <div class="mb-3">
                                                                                                                <label class="form-label">Type of Institution</label>
                                                                                                                <select class="form-control">
                                                                                                                    <option>College</option>
                                                                                                                    <option>IB school</option>
                                                                                                                    <option>School</option>
                                                                                                                    <option>University</option>

                                                                                                                </select>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div class="col-md-6">
                                                                                                            <div class="form-group"><label class="form-label" for="address-l2">Address
                                                                                                            </label><input type="text" class="form-control" id="address-l2" value="2337 Kildeer Drive" />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div class="col-md-6">
                                                                                                            <div class="form-group"><label class="form-label"
                                                                                                                for="address-st">State</label><input type="text" class="form-control"
                                                                                                                    id="address-st" value="Belgaum" /></div>
                                                                                                        </div>
                                                                                                        <div class="col-md-6">
                                                                                                            <div class="form-group"><label class="form-label"
                                                                                                                for="address-county">Country</label><select class="form-select js-select2"
                                                                                                                    id="address-county">
                                                                                                                    <option>India</option>

                                                                                                                    <option>Canada</option>
                                                                                                                    <option>United State</option>
                                                                                                                    <option>United Kindom</option>
                                                                                                                    <option>Australia</option>
                                                                                                                    <option>Bangladesh</option>
                                                                                                                </select></div>
                                                                                                        </div>
                                                                                                        <div class="col-md-6">
                                                                                                            <div class="form-group"><label class="form-label" for="address-l2"> Pin Code
                                                                                                            </label><input type="text" class="form-control" id="address-l2" value="411102" />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div class="col-12">
                                                                                                            <div class="custom-control custom-switch"><input type="checkbox"
                                                                                                                class="custom-control-input" id="latest-sale" /><label
                                                                                                                    class="custom-control-label" for="latest-sale">Use full name to display
                                                                                                                </label></div>
                                                                                                        </div>
                                                                                                        <div class="col-12">
                                                                                                            <ul class="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                                                                                                                <li><a href="#" data-bs-dismiss="modal" class="btn btn-primary">Update
                                                                                                                    Profile</a></li>
                                                                                                                <li><a href="#" data-bs-dismiss="modal" class="link link-light">Cancel</a></li>
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

                                                                        <div
                                                                            class="nk-block-head-content align-self-start d-lg-none">
                                                                            <a href="#" class="toggle btn btn-icon btn-trigger"
                                                                                data-target="userAside"><em
                                                                                    class="icon ni ni-menu-alt-r"></em></a></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="nk-block">
                                                                <div class="nk-data data-list">
                                                                    <div class="data-head">
                                                                        <h6 class="overline-title">Basics</h6>
                                                                    </div>
                                                                    <div class="data-item">
                                                                        <div class="data-col"><span class="data-label">Full
                                                                            Name</span><span class="data-value">Abu Bin
                                                                                Ishtiyak</span></div>
                                                                    </div>
                                                                    <div class="data-item">
                                                                        <div class="data-col"><span class="data-label">Display
                                                                            Name</span><span class="data-value">Ishtiyak</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="data-item">
                                                                        <div class="data-col"><span
                                                                            class="data-label">Email</span><span
                                                                                class="data-value">info@softnio.com</span></div>
                                                                    </div>
                                                                    <div class="data-item">
                                                                        <div class="data-col"><span class="data-label">Mobile
                                                                            Number</span><span class="data-value text-soft">Not
                                                                                add yet</span></div>
                                                                    </div>
                                                                    <div class="data-item">
                                                                        <div class="data-col"><span class="data-label">Date of
                                                                            Birth</span><span class="data-value">29 Feb,
                                                                                1986</span></div>
                                                                    </div>
                                                                    <div class="data-item">
                                                                        <div class="data-col"><span class="data-label">Role</span><span class="data-value">Developer</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="data-item">
                                                                        <div class="data-col"><span class="data-label">Experience</span><span class="data-value">2 years</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="data-item">
                                                                        <div class="data-col"><span class="data-label"> Notice Period
                                                                        </span><span class="data-value">Immediate Join</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="data-item">
                                                                        <div class="data-col"><span class="data-label">Subject
                                                                        </span><span class="data-value">Computer Science</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="data-item">
                                                                        <div class="data-col"><span class="data-label">Type of Institution</span><span class="data-value">College</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="data-item">
                                                                        <div class="data-col"><span
                                                                            class="data-label">Nationality</span><span
                                                                                class="data-value">India</span></div>
                                                                    </div>
                                                                    <div class="data-item" data-tab-target="#address">
                                                                        <div class="data-col"><span
                                                                            class="data-label">Address</span><span
                                                                                class="data-value">2337 Kildeer Drive,<br />Belgaum,
                                                                                India</span></div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="card-aside card-aside-left user-aside toggle-slide toggle-slide-left toggle-break-lg"
                                                            data-content="userAside" data-toggle-screen="lg"
                                                            data-toggle-overlay="true">
                                                            <div class="card-inner-group" data-simplebar>
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
export default Profile