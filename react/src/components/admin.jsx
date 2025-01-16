import React, { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import logo from "../assets/img/logo.png";

function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate(); // Correctly import useNavigate

    const passwordRef = useRef(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});

        sessionStorage.setItem("email", email);
        const data = { email, password };

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_API_URL1}/api/admin/login`,
                data,
                {
                    headers: { "Content-Type": "application/json" },
                }
            );




            toast.success("Login successful!");
            setLoading(false);
            navigate("/admin/dashboard"); // Navigate after successful login

        } catch (error) {
            if (error.response) {   // Server responded with an error status
                const errorMessage = error.response.data.message || "An error occurred";
                const errorDetails = error.response.data.errors || {};

                setErrors(errorDetails);
                toast.error(errorMessage);
            } else {
                console.error("Error occurred:", error);
                toast.error("An unexpected error occurred. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    const handleEmailKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            passwordRef.current.focus();
        }
    };

    const handlePasswordKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleSubmit(event);
        }
    };
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className="nk-body bg-white npc-default pg-auth">
                <div className="nk-app-root">
                    <div className="nk-main">
                        <div className="nk-wrap nk-wrap-nosidebar">
                            <div className="nk-content">
                                <div className="bg-white">
                                    <div className="nk-block-middle nk-auth-body">
                                        <div className="brand-logo justify-center pb-5">
                                            <Link to="/" className="logo-link">
                                                <img className="logo-light logo-img logo-img-lg" src={logo} alt="logo" />
                                                <img className="logo-dark logo-img logo-img-lg" src={logo} alt="logo-dark" />
                                            </Link>
                                        </div>
                                        <div className="nk-block-head pt-5 pb-5">
                                            <div className="nk-block-head-content">
                                                <h5 className="nk-block-title">Sign in</h5>
                                            </div>
                                        </div>
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <label className="form-label" htmlFor="email">Email or Username</label>
                                                <input
                                                    type="email"
                                                    class={`form-control form-control-lg  ${errors.email ? "is-invalid" : ""
                                                        }`} id="email" name='email' onChange={(e) => setEmail(e.target.value)} onKeyDown={handleEmailKeyDown}

                                                    value={email}

                                                    placeholder="Enter your email address"
                                                    autoComplete="off"
                                                />
                                                {errors.email && (
                                                    <div className="invalid-feedback">{errors.email}</div>
                                                )}
                                            </div>
                                            <div class="form-group">
                                                <div class="form-label-group"><label class="form-label" for="password">Password</label>
                                                    <Link class="link  link-sm" tabindex="-1" to="/reset" style={{ color: 'blue' }}>Forgot Password?</Link>
                                                    {loginError && (
                                                        <p className="error-message text-danger">{loginError}</p>
                                                    )}
                                                </div>
                                                <div class="form-control-wrap">
                                                    <a tabindex="-1" href="#" class="form-icon form-icon-left passcode-switch lg" data-target="password">
                                                        <em class="passcode-icon icon-show icon ni ni-eye"></em><em class="passcode-icon icon-hide icon ni ni-eye-off"></em>
                                                    </a>
                                                    <input
                                                        id="password"
                                                        name="password"
                                                        placeholder="Enter your password"
                                                        className={`form-control form-control-lg ${errors.password ? "is-invalid" : ""
                                                            }`}
                                                        type={passwordVisible ? "text" : "password"}
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        onKeyDown={handlePasswordKeyDown}
                                                        ref={passwordRef}
                                                    />
                                                    {errors.password && (
                                                        <div className="invalid-feedback">{errors.password}</div>
                                                    )}
                                                    {/* <input id='password' name='password' type="password" class="form-control form-control-lg"  placeholder="Enter your Password" /> */}
                                                </div>
                                            </div>
          
                                            <div className="form-group pt-1 pb-5">
                                                <button
                                                    type="submit" onClick={handleSubmit}
                                                    className="btn btn-lg btn-primary btn-block"
                                                    disabled={loading}
                                                >
                                                    {loading ? "Signing in..." : "Sign in"}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="nk-block nk-auth-footer">
                                        <div className="nk-block-between justify-center">
                                            <ul className="nav nav-sm">
                                                <li className="nav-item">
                                                    <Link className="link fw-normal py-2 px-3 fs-13px" to="/terms" style={{ color: "blue" }}>
                                                        Terms & Conditions
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="link fw-normal py-2 px-3 fs-13px" to="/privacy" style={{ color: "blue" }}>
                                                        Privacy Policy
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="justify-center mt-3">
                                            <p>&copy; 2025 EduJobZ. All Rights Reserved.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminLogin;
