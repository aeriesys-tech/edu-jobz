import { Link } from "react-router-dom"
import EmployeeSideBar from "../employeesidebar"

import DashFooter from "../../candidate/footer"
import EmployeeMenuBar from "./employeeprofilemenu"
import DashHeaderE from "../header"

function EmployeeProfile() {
 
    return (
        <>
            <body class="nk-body bg-lighter npc-general has-sidebar ">
                <div class="nk-app-root">
                    <div class="nk-main ">
                        <EmployeeSideBar />
                        <div class="nk-wrap ">

                            <DashHeaderE/>
                           
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
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <div class="form-label-group"><label
                                                                        class="form-label">Preferable WhatsApp Number
                                                                        <span class="text-danger">*</span></label>
                                                                </div>
                                                                <div class="form-control-group"><input type="text"
                                                                        class="form-control"
                                                                        placeholder="+91 12345-67890"/></div>
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
                                                        {/* <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="form-label">Type of Institution</label>
                                                                <select class="form-select js-select2">
                                                                    <option>Coaching Center</option>
                                                                    <option>College</option>
                                                                    <option>International School</option>
                                                                    <option>Edtech Company</option>

                                                                </select>
                                                            </div>
                                                        </div> */}
                                                        {/* <div class="col-md-6">
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
                                                        </div> */}
                                                        <div class="col-md-6">
                                                            <label class="form-label">Type of Institution</label>
                                                            <select class="form-select js-select2">
                                                                <option>College</option>
                                                                <option>IB school</option>
                                                                <option>School</option>
                                                                <option>University</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <div class="form-label-group"><label
                                                                        class="form-label">Institution Name<span
                                                                            class="text-danger">*</span></label></div>
                                                                <div class="form-control-group"><input type="text"
                                                                        class="form-control" placeholder="Institution Name"/></div>
                                                            </div>
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
                                                              
                                                            </select>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label class="form-label"
                                                                for="address-city">City</label><select
                                                                class="form-select js-select2" id="address-city">
                                                                <option>Banglore</option>
                                                          
                                                            </select>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label class="form-label"
                                                                for="address-county">Country</label><select
                                                                class="form-select js-select2" id="address-county">
                                                                <option>India</option>
                                                          
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


                                           <EmployeeMenuBar/>
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
export default EmployeeProfile