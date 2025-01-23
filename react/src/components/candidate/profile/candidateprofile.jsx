import { Link } from "react-router-dom"
import SideBar from "../dashboardslidebar"
import DashFooter from "../footer"
import DashHeader from "../header"
import MenuBar from "./profilemenu"
import React, { useState, useEffect } from "react";
import axios from "axios";
function Profile() {
    const token = sessionStorage.getItem("tokencandidate");
    console.log(">>>>>>>>>>>>>>>>>token", token)
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
    const [types_of_institutes, setTypesOfInstitutes]=useState([]);
    // State to hold designation options
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .post(
                `${import.meta.env.VITE_BASE_API_URL1}/api/candidate/showCandidate`,
                {
                    name: "",
                    email: "",
                    mobile_no: "",
                    designation_id: "",
                    experience: "",
                    salary_expectation: "",
                    notice_period: "",
                    hear_about_us: "",
                    subject_id: "",
                    type_of_institute_id: "",
                    address: "",
                    state_id: null,
                    city_id: null,
                    country_id: null,
                    pincode: "",
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((response) => {
                setFormData(response.data.data);
                console.log("m,?????????????????????????", response.data.data)
                setCandidateForm(response.data.data.CandidatePersonalInformation);
                console.log("m,>>>>>>>>>>>>>>>>>>>>>>>>>", response.data.data) // Populate formData with the response data
            })
            .catch((error) => {
                console.error("Error fetching candidate data:", error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false); // Ensure loading state is updated
            });
    }, []);

    useEffect(() => {
        axios
            .post(
                `${import.meta.env.VITE_BASE_API_URL1}/api/designations/getdesignations`,
                { designations: designations, filter: 'all' },
                { headers: { Authorization: `Bearer ${token}` } }
            )
            .then((response) => {
                setDesignations(response.data.data);
            })
            .catch((error) => {
                console.error('Error fetching designations:', error);
            });
    }, []);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

    };
    useEffect(() => {
        axios
            .post(
                `${import.meta.env.VITE_BASE_API_URL1}/api/subjects/getSubjects`,
                { subjects: subjects, filter: 'all' },
                { headers: { Authorization: `Bearer ${token}` } }
            )
            .then((response) => {
                setSubjects(response.data.data);
            })
            .catch((error) => {
                console.error('Error fetching subjects:', error);
            });
    }, []);
    useEffect(() => {
        axios
            .post(
                `${import.meta.env.VITE_BASE_API_URL1}/api/types_of_institutes/getTypeOfInstitutes`,
                { filter: 'all' },
                { headers: { Authorization: `Bearer ${token}` } }
            )
            .then((response) => {
                setTypesOfInstitutes(response.data.data);
            })
            .catch((error) => {
                console.error('Error fetching type of institutes:', error);
            });
    }, [token]);

   // Handle changes in formData
   const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
        ...prevState,
        [name]: value,
    }));
};

// Handle changes in Candidateform
const handleCandidateFormChange = (e) => {
    const { name, value } = e.target;
    setCandidateForm((prevState) => ({
        ...prevState,
        [name]: value,
    }));
};

// Handle form submission
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const requestData = { ...formData, ...Candidateform };
        await axios.post(
            `${import.meta.env.VITE_BASE_API_URL1}/api/candidate/updateCandidatePersonalInformation`,
            requestData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        alert("Profile updated successfully!");
    } catch (err) {
        alert("Error updating profile: " + err.message);
    }
};

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
                                                        <form onSubmit={handleSubmit}>
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
                                                                                    class="form-control" value={formData.name || ""}
                                                                                    onChange={(e) => handleFormDataChange(e.target.value)}/></div>
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
                                                                                    value={formData.mobile_no}
                                                                                    onChange={handleInputChange} /></div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-6">
                                                                            <div class="form-group">
                                                                                <div class="form-label-group"><label
                                                                                    class="form-label">Email<span
                                                                                        class="text-danger">*</span></label></div>
                                                                                <div class="form-control-group"><input type="text"
                                                                                    class="form-control"
                                                                                    value={formData.email}
                                                                                    onChange={handleInputChange} /></div>
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
                                                                                    <input type="" class="form-control date-picker-alt" value=""
                                                                                        onChange={handleInputChange} />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-6">
                                                                            <div class="form-group">
                                                                                <label class="form-label">Employee Type</label>
                                                                                <div class="form-control-group"><input type="text"
                                                                                    class="form-control"
                                                                            
                                                                                     /></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <label className="form-label">Designation</label>
                                                                            <select
                                                                                name="designation_id"
                                                                                value={formData.designation_id || ""}
                                                                                onChange={handleInputChange}
                                                                                className="form-select js-select2"
                                                                            >
                                                                                <option value="">Select Designation</option>
                                                                                {designations.map((designation) => (
                                                                                    <option
                                                                                        key={designation.id}
                                                                                        value={designation.id}
                                                                                    >
                                                                                        {designation.designation}
                                                                                    </option>
                                                                                ))}
                                                                            </select>
                                                                        </div>
                                                                        <div class="col-md-6">
                                                                            <div class="form-group">
                                                                                <label class="form-label">Experience</label>
                                                                                <div class="form-control-group"><input type="text"
                                                                                    class="form-control"
                                                                                    value={formData.experience}
                                                                                    onChange={handleInputChange} /></div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-6">
                                                                            <label class="form-label">Salary Expectations (per Month)
                                                                            </label>
                                                                            <div class="form-control-group"><input type="text"
                                                                                class="form-control"
                                                                                value={formData.salary_expectation}
                                                                                onChange={handleInputChange} /></div>

                                                                        </div>
                                                                        <div class="col-md-6">
                                                                            <label class="form-label">Notice Period</label>
                                                                            <div class="form-control-group"><input type="text"
                                                                                class="form-control"
                                                                                value={Candidateform.notice_period}
                                                                                onChange={handleInputChange} /></div>

                                                                        </div>
                                                                        <div class="col-md-6">
                                                                            <label class="form-label">How did you hear about us</label>
                                                                            <div class="form-control-group"><input type="text"
                                                                                class="form-control"
                                                                                value={Candidateform.hear_about_us}
                                                                                onChange={handleInputChange} /></div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <label className="form-label">Subjects</label>
                                                                            <select
                                                                                className="form-select js-select2"
                                                                                name="subject_id"
                                                                                value={Candidateform.subject_id || ""}
                                                                                onChange={handleInputChange}
                                                                            >
                                                                                <option value="">Select Subjects</option>
                                                                                {subjects.map((subject) => (
                                                                                    <option key={subject.id} value={subject.id}>
                                                                                        {subject.subject}
                                                                                    </option>
                                                                                ))}
                                                                            </select>
                                                                        </div>
                                                                        <div class="col-md-6">
                                                                            <label class="form-label">Join Time</label>
                                                                            <select class="form-select js-select2">
                                                                                <option>Immediate Join</option>
                                                                                <option>1 week</option>
                                                                                <option>2 week</option>
                                                                            </select>
                                                                        </div>
                                                                        <div class="col-md-6">
                                                                            <label class="form-label">Type of Institution</label>
                                                                            {/* <div class="form-control-group"><input type="text"
                                                                                class="form-control"
                                                                                value={Candidateform.type_of_institute_id}
                                                                                onChange={handleInputChange} /></div> */}
                                                                                 <select
                                                                                className="form-select js-select2"
                                                                                name="subject_id"
                                                                                value={Candidateform.type_of_institute_id || ""}
                                                                                onChange={handleInputChange}
                                                                            >
                                                                                <option value="">Select Subjects</option>
                                                                                {types_of_institutes.map((type_of_institute) => (
                                                                                    <option key={type_of_institute.id} value={type_of_institute.id}>
                                                                                        {type_of_institute.type_of_institute}
                                                                                    </option>
                                                                                ))}
                                                                            </select>
                                                                        </div>
                                                                        <div class="col-md-12">
                                                                            <label class="form-label" for="address-l2">Address
                                                                            </label><input type="text" class="form-control"
                                                                                id="address-l2" value={Candidateform.address}
                                                                                onChange={handleInputChange} />
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
                                                                                    class="form-control"  value={Candidateform.pincode}
                                                                                    onChange={handleInputChange} /></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="nk-kycfm-action pt-5 justify-end"><button type="submit"
                                                                    class="btn btn-lg btn-primary">Update profile</button>
                                                                </div>
                                                            </div>
                                                        </form>

                                                        <MenuBar />
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