import { Link, useLocation, useNavigate } from "react-router-dom"
import AdminMenu from "./adminmenus"
import AdminHeader from "./header"
import DashFooter from "../candidate/footer"
import { useState } from "react";
import axios from "axios"
import { toast } from "react-toastify"

function AdminSettings() {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    
    const bearerToken = sessionStorage.getItem("tokenadmin"); // Replace with actual token retrieval logic
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});  // Reset errors
    
        // Validation
        if (!oldPassword.trim() || !newPassword.trim() || !confirmPassword.trim()) {
            toast.error("All fields are required!");
            setLoading(false);
            return;
        }
    
        if (newPassword !== confirmPassword) {
            toast.error("Passwords do not match!");
            setLoading(false);
            return;
        }
    
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_API_URL1}/api/admin/updatePassword`, // Replace with the actual endpoint
                {
                    oldPassword,
                    newPassword,
                    confirmPassword,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${bearerToken}`,
                    },
                }
            );
    
            const data = response.data;
    
            // Save token and user data to sessionStorage
            sessionStorage.setItem("jwt_token", data.token);
            sessionStorage.setItem("user", JSON.stringify(data.user));
            sessionStorage.setItem("role", JSON.stringify(data.role));
    
            toast.success("Password updated successfully!");
            // navigate("/"); // Redirect to success page
        } catch (error) {
            // Handle API error
            if (error.response && error.response.data) {
                const errorMessage = error.response.data.message || "Failed to update password.";
                setErrors(error.response.data.errors || {});
                toast.error(errorMessage);
            } else {
                console.error("Error occurred:", error);
                toast.error("An unexpected error occurred. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };
    const location = useLocation();

    const isActive = (path) => location.pathname === path;
   
    return (
        <>
            <body class="nk-body bg-lighter npc-general has-sidebar ">
                <div class="nk-app-root">
                    <div class="nk-main ">
                        <AdminMenu />
                        <div class="nk-wrap ">

                            <AdminHeader />
                            <div class="nk-content ">
                                <div class="container-fluid">
                                    <div class="nk-content-inner">
                                        <div class="nk-content-body">
                                            <div class="nk-block">
                                                <div class="card">
                                                    <div class="card-aside-wrap">
                                                        <div class="card-inner card-inner-lg">
                                                            <div class="nk-block-head">
                                                                <div class="nk-block-between">
                                                                    <div class="nk-block-head-content">
                                                                        <h4 class="nk-block-title">Security Settings</h4>
                                                                        <div class="nk-block-des">
                                                                            <p>These settings are helps you keep your account
                                                                                secure.</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="nk-block-head-content align-self-start d-lg-none"><a
                                                                        href="#" class="toggle btn btn-icon btn-trigger mt-n1"
                                                                        data-target="userAside"><em
                                                                            class="icon ni ni-menu-alt-r"></em></a></div>
                                                                </div>
                                                            </div>
                                                            <div class="card-inner-group ">
                                                                <div>
                                                                    {/* <div class="card-inner">
                                                                        <div class="between-center flex-wrap g-3">
                                                                            <div class="nk-block-text">
                                                                                <h6>Verify Mobile Number</h6>
                                                                                <p>Verify to protect your
                                                                                    account.</p>
                                                                            </div>
                                                                            <div class="nk-block-actions flex-shrink-sm-0">
                                                                                <ul
                                                                                    class="align-center flex-wrap flex-sm-nowrap gx-3 gy-2">
                                                                                    <li class="order-md-last">
                                                                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#verify" >Verify... </button>
                                                                                        <div class="modal fade" id="verify" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                                            <div class="modal-dialog" role="document">
                                                                                                <div class="modal-content">
                                                                                                    <div class="modal-header">
                                                                                                        <h5 class="modal-title" id="exampleModalLabel">Verification Code</h5>
                                                                                                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                                                                                            <span aria-hidden="true">&times;</span>
                                                                                                        </button>
                                                                                                    </div>
                                                                                                    <div class="card-body">
                                                                                                        <div class="row">
                                                                                                            <div class="col-sm-12">
                                                                                                                <div class="mb-3">
                                                                                                                    <label class="form-label">Enter OTP  </label>
                                                                                                                    <input type="password" class="form-control" />
                                                                                                                    <label class="form-label " >Resend OTP ? </label>
                                                                                                                </div>


                                                                                                            </div>

                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="modal-footer">
                                                                                                        <button type="button" class="btn btn-primary">Verify</button>

                                                                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </li>

                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-inner">
                                                                        <div
                                                                            class="between-center flex-wrap flex-md-nowrap g-3">
                                                                            <div class="nk-block-text">
                                                                                <h6>Verify Email Id</h6>
                                                                                <p>Activate logs </p>
                                                                            </div>
                                                                            <div class="nk-block-actions flex-shrink-sm-0">
                                                                                <ul
                                                                                    class="align-center flex-wrap flex-sm-nowrap gx-3 gy-2">
                                                                                    <li class="order-md-last">
                                                                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#verify" >Verify...</button>
                                                                                        <div class="modal fade" id="verify" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                                            <div class="modal-dialog" role="document">
                                                                                                <div class="modal-content">
                                                                                                    <div class="modal-header">
                                                                                                        <h5 class="modal-title" id="exampleModalLabel">Verification Code</h5>
                                                                                                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                                                                                            <span aria-hidden="true">&times;</span>
                                                                                                        </button>
                                                                                                    </div>
                                                                                                    <div class="card-body">
                                                                                                        <div class="row">
                                                                                                            <div class="col-sm-12">
                                                                                                                <div class="mb-3">
                                                                                                                    <label class="form-label">Enter OTP  </label>
                                                                                                                    <input type="password" class="form-control " />
                                                                                                                </div>
                                                                                                                <label class="form-label pt-5 " >Resend OTP ? </label>


                                                                                                            </div>

                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="modal-footer">
                                                                                                        <button type="button" class="btn btn-primary">Verify</button>

                                                                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </li>

                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div> */}
                                                                    <div class="card-inner">
                                                                        <div class="between-center flex-wrap g-3">
                                                                            <div class="nk-block-text">
                                                                                <h6>Change Password</h6>
                                                                                <p>Set a unique password to protect your
                                                                                    account.</p>
                                                                            </div>
                                                                            <div class="nk-block-actions flex-shrink-sm-0">
                                                                                <ul
                                                                                    class="align-center flex-wrap flex-sm-nowrap gx-3 gy-2">
                                                                                    <li class="order-md-last">
                                                                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#change" >Change</button>
                                                                                        <div class="modal fade" id="change" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                                            <div class="modal-dialog" role="document">
                                                                                            <div class="modal-content">
                                                                                                    <div class="modal-header">
                                                                                                        <h5 class="modal-title" id="exampleModalLabel">Change Password </h5>
                                                                                                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                                                                                            <span aria-hidden="true">&times;</span>
                                                                                                        </button>
                                                                                                    </div>
                                                                                                    <div class="card-body">
                                                                                                        <div class="row">
                                                                                                            <div class="col-sm-12">
                                                                                                                <form onSubmit={handleSubmit}>
                                                                                                                    <div class="mb-3 form-group">
                                                                                                                        <label class="form-label">Old Password</label>
                                                                                                                        <input
                                                                                                                            type="password"
                                                                                                                            class="form-control"
                                                                                                                            value={oldPassword}
                                                                                                                            onChange={(e) => setOldPassword(e.target.value)}
                                                                                                                            placeholder="Enter old password"
                                                                                                                            required
                                                                                                                        />
                                                                                                                    </div>
                                                                                                                    <div class="mb-3">
                                                                                                                        <label class="form-label">New Password</label>
                                                                                                                        <input
                                                                                                                            type="password"
                                                                                                                            class="form-control"
                                                                                                                            value={newPassword}
                                                                                                                            onChange={(e) => setNewPassword(e.target.value)}
                                                                                                                            placeholder="Enter new password"
                                                                                                                            required
                                                                                                                        />
                                                                                                                    </div>
                                                                                                                    <div class="mb-3">
                                                                                                                        <label class="form-label">Confirm Password</label>
                                                                                                                        <input
                                                                                                                            type="password"
                                                                                                                            class="form-control"
                                                                                                                            value={confirmPassword}
                                                                                                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                                                                                                            placeholder="Confirm new password"
                                                                                                                            required
                                                                                                                        />
                                                                                                                    </div>
                                                                                                                    <div class="modal-footer">
                                                                                                                        <button type="submit" class="btn btn-primary">
                                                                                                                            Change
                                                                                                                        </button>
                                                                                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                                                                                                            Close
                                                                                                                        </button>
                                                                                                                    </div>
                                                                                                                </form>
                                                                                                            </div>
                                                                                                            <div class="col-sm-12">
                                                                                                                <h5>New password must contain:</h5>
                                                                                                                <ul class="list-group list-group-flush">
                                                                                                                    <li class="list-group-item">
                                                                                                                        <em class="icon ni ni-check-thick "></em> At least 8 characters
                                                                                                                    </li>
                                                                                                                    <li class="list-group-item">
                                                                                                                        <em class="icon ni ni-check-thick "></em> At least 1 uppercase letter (A-Z)
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li><em class="text-soft text-date fs-12px">Last
                                                                                        changed: <span>Oct 2,
                                                                                            2019</span></em></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* <div class="card-inner">
                                                                        <div
                                                                            class="between-center flex-wrap flex-md-nowrap g-3">
                                                                            <div class="nk-block-text">
                                                                                <h6>2 Factor Auth &nbsp; <span
                                                                                    class="badge bg-success ms-0">Enabled</span>
                                                                                </h6>
                                                                                <p>Secure your account with 2FA security. When
                                                                                    it is activated you will need to enter not
                                                                                    only your password, but also a special code
                                                                                    using app. You can receive this code by in
                                                                                    mobile app. </p>
                                                                            </div>
                                                                            <div class="nk-block-actions"><a to="#"
                                                                                class="btn btn-primary">Disable</a></div>
                                                                        </div>
                                                                    </div> */}
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="card-aside card-aside-left user-aside toggle-slide toggle-slide-left toggle-break-lg"
                data-content="" data-toggle-screen="lg"
                data-toggle-overlay="true" >
                <div class="card-inner-group" data-simplebar>
                   

                    <div class="card-inner p-0">
                        <ul class="link-list-menu">
                            <li class={isActive('/admin/profile') ? 'active' : ''}><Link class="" to="/admin/profile"><em
                                class="icon ni ni-user-fill-c"></em><span>Update Profile</span></Link></li>
                                    <li class={isActive('/admin/settings') ? 'active' : ''}><Link to="/admin/settings"><em
                                class="icon ni ni-lock-alt-fill"></em><span>Security Settings</span></Link></li>
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
export default AdminSettings
