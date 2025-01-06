import { Link } from "react-router-dom"
import SideBar from "../dashboardslidebar"
import DashFooter from "../footer"
import DashHeader from "../header"
import MenuBar from "./profilemenu"

function Profile() {
 
    return (
        <>
            <body class="nk-body bg-lighter npc-general has-sidebar ">
                <div class="nk-app-root">
                    <div class="nk-main ">
                        <SideBar />
                        <div class="nk-wrap ">

                            <DashHeader />
                           
                             <div class="nk-content">
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
                                                        <div class="col-md-6">
                                                            <label class="form-label"
                                                                for="address-gender" >Gender</label><select
                                                                class="form-select js-select2" id="address-gender">
                                                                <option>Male</option>
                                                                <option>Female</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <div class="form-label-group">
                                                                    <label class="form-label">Date of Birth 
                                                                        <span class="text-danger">*</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-control-group">
                                                                    <input type="" class="form-control date-picker-alt" placeholder="01/01/2000"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="form-label">Employee Type</label>
                                                                <select class="form-select js-select2">
                                                                    <option>Full time</option>
                                                                    <option>Part time</option>
                                                                    <option>Intern</option>
                                                                    <option>Developer</option>

                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="form-label">Role</label>
                                                                <select class="form-select js-select2">
                                                                    <option>Business</option>
                                                                    <option>Academic</option>
                                                                    <option>Clerk</option>
                                                                    <option>Developer</option>
                                                                    <option>Senior</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="form-label">Experience</label>
                                                                <select class="form-select js-select2">
                                                                    <option>Fresher</option>
                                                                    <option>1</option>
                                                                    <option>2</option>
                                                                    <option>4</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label class="form-label">Salary Expectations (per Month)
                                                            </label>
                                                            <select class="form-select js-select2">
                                                                <option>10000</option>
                                                                <option>15000</option>
                                                                <option>20000</option>
                                                                <option>30000</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label class="form-label">Notice Period</label>
                                                            <select class="form-select js-select2">
                                                                <option>Immediate Join</option>
                                                                <option>1 week</option>
                                                                <option>2 week</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label class="form-label">How did you hear about us</label>
                                                            <select class="form-select js-select2">
                                                                <option>Website</option>
                                                                <option>Google</option>
                                                                <option>Facebook</option>
                                                                <option>LinkedIn</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label class="form-label">Subjects</label>
                                                            <select class="form-select js-select2">
                                                                <option>Account</option>
                                                                <option>Computer Science</option>
                                                                <option>Acting</option>
                                                                <option>Biology</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label class="form-label">Notice Period</label>
                                                            <select class="form-select js-select2">
                                                                <option>Immediate Join</option>
                                                                <option>1 week</option>
                                                                <option>2 week</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label class="form-label">Type of Institution</label>
                                                            <select class="form-select js-select2">
                                                                <option>College</option>
                                                                <option>IB school</option>
                                                                <option>School</option>
                                                                <option>University</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <label class="form-label" for="address-l2">Address
                                                            </label><input type="text" class="form-control"
                                                                id="address-l2" placeholder="2337 Kildeer Drive" />
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label class="form-label"
                                                                for="address-state">State</label><select
                                                                class="form-select js-select2" id="address-state">
                                                                <option>Karnataka</option>
                                                                <option>Tamilnaadu</option>
                                                                <option>Keral</option>
                                                                <option>Maharastra</option>
                                                                <option>Delhi</option>
                                                                <option>Rajastan</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label class="form-label"
                                                                for="address-city">City</label><select
                                                                class="form-select js-select2" id="address-city">
                                                                <option>Banglore</option>
                                                                <option>Mysore</option>
                                                                <option>Belgavi</option>
                                                                <option>Hubli</option>
                                                                <option>Manglore</option>
                                                                <option>Bidar</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label class="form-label"
                                                                for="address-county">Country</label><select
                                                                class="form-select js-select2" id="address-county">
                                                                <option>India</option>
                                                                <option>Canada</option>
                                                                <option>United State</option>
                                                                <option>United Kindom</option>
                                                                <option>Australia</option>
                                                                <option>Bangladesh</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <div class="form-label-group"><label
                                                                        class="form-label">Pincode <span
                                                                            class="text-danger">*</span></label></div>
                                                                <div class="form-control-group"><input type="number"
                                                                        class="form-control" placeholder="500001"/></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="nk-kycfm-action pt-5 justify-end"><button type="submit"
                                                        class="btn btn-lg btn-primary">Update profile</button>
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
                                                                            <li>
                                                                                <a href="#"><em
                                                                                        class="icon ni ni-edit-fill"></em><span>Update
                                                                                        Profile</span></a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                  <MenuBar/>
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