import { Link } from "react-router-dom"
import SideBar from "../dashboardslidebar"
import DashFooter from "../footer"
import DashHeader from "../header"
import MenuBar from "./profilemenu"
import React, { useState, useEffect } from "react";
import axios from "axios";
function Profile() {
    const token = sessionStorage.getItem("tokencandidate");
    console.log("Token being used:", token);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile_no: "",
    });

    const [Candidateform, setCandidateForm] = useState({
        designation_id: "",
        gender: "",
        d_o_b: "",
        employer_type: "",
        experience: "",
        salary_expectation: "",
        notice_period: "",
        hear_about_us: "",
        subject_id: "",
        join_time: "",
        type_of_institute_id: "",
        address: "",
        state_id: null,
        city_id: null,
        country_id: null,
        pincode: "",
    });

    const [designations, setDesignations] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [types_of_institutes, setTypesOfInstitutes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch candidate data
    useEffect(() => {
        if (!token) {
            console.error("Token is missing!");
            setError("Token is required to fetch data.");
            setLoading(false);
            return;
        }

        axios
            .post(
                `${import.meta.env.VITE_BASE_API_URL1}/api/candidate/showCandidate`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((response) => {
                console.log("API Response for Candidate:", response.data);

                if (response.data?.data) {
                    setFormData(response.data.data);
                    setCandidateForm(response.data.data.CandidatePersonalInformation);
                } else {
                    console.error("Data is missing in the API response");
                }
            })
            .catch((error) => {
                console.error("Error fetching candidate data:", error);
                setError("Failed to fetch candidate data. Please try again later.");
            })
            .finally(() => {
                setLoading(false); // Ensure loading state is updated
            });
    }, [token]);

    // Fetch designations
    useEffect(() => {
        if (!token) return;

        axios
            .post(
                `${import.meta.env.VITE_BASE_API_URL1}/api/designations/getdesignations`,
                { filter: "all" },
                { headers: { Authorization: `Bearer ${token}` } }
            )
            .then((response) => {
                setDesignations(response.data.data || []);
            })
            .catch((error) => {
                console.error("Error fetching designations:", error);
            });
    }, [token]);

    // Fetch subjects
    useEffect(() => {
        if (!token) return;

        axios
            .post(
                `${import.meta.env.VITE_BASE_API_URL1}/api/subjects/getSubjects`,
                { filter: "all" },
                { headers: { Authorization: `Bearer ${token}` } }
            )
            .then((response) => {
                setSubjects(response.data.data || []);
            })
            .catch((error) => {
                console.error("Error fetching subjects:", error);
            });
    }, [token]);

    // Fetch types of institutes
    useEffect(() => {
        if (!token) return;

        axios
            .post(
                `${import.meta.env.VITE_BASE_API_URL1}/api/types_of_institutes/getTypeOfInstitutes`,
                { filter: "all" },
                { headers: { Authorization: `Bearer ${token}` } }
            )
            .then((response) => {
                setTypesOfInstitutes(response.data.data || []);
            })
            .catch((error) => {
                console.error("Error fetching types of institutes:", error);
            });
    }, [token]);

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
                                                                        class="form-control"  value={formData.name || ""}
                                                                        /></div>
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
                                                                        value={formData.mobile_no || ""}/></div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <div class="form-label-group"><label
                                                                        class="form-label">Email<span
                                                                            class="text-danger">*</span></label></div>
                                                                <div class="form-control-group"><input type="text"
                                                                        class="form-control"
                                                                        value={formData.email || ""}/></div>
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
                                                                    <input type="" class="form-control date-picker-alt"  value={formData.d_o_b}/>
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


                                           <MenuBar/>
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