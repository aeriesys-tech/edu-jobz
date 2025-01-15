import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import login from '../../assets/img/bg3.jpg'


function Register() {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [mobile_no, setMobile] = useState("");
    // const [errors, setErrors] = useState({});
    // const [loading, setLoading] = useState(false);
    // const navigate = useNavigate();

    // const emailRef = useRef(null);
    // const passwordRef = useRef(null);
    // const mobileRef = useRef(null);

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     setLoading(true);
    //     setErrors({});

    //     const data = { name, email, password ,mobile_no};

    //     try {
    //         const response = await fetch(
    //             `${import.meta.env.VITE_BASE_API_URL1}/api/candidate/register`,
    //             {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //                 body: JSON.stringify(data),
    //             }
    //         );

    //         if (!response.ok) {
    //             const errorData = await response.json();
    //             const errorMessage = errorData.message;

    //             setErrors(errorData.errors || {});
    //             toast.error(errorMessage);
    //             setLoading(false);
    //             return;
    //         }

    //         toast.success("Registration successful! Please log in.");
    //         navigate("/success");
    //     } catch (error) {
    //         console.error("Error occurred:", error);
    //         toast.error("An unexpected error occurred. Please try again.");
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // const handleNameKeyDown = (event) => {
    //     if (event.key === "Enter") {
    //         event.preventDefault();
    //         emailRef.current.focus();
    //     }
    // };

    // const handleEmailKeyDown = (event) => {
    //     if (event.key === "Enter") {
    //         event.preventDefault();
    //         passwordRef.current.focus();
    //     }
    // };

    // const handlePasswordKeyDown = (event) => {
    //     if (event.key === "Enter") {
    //         event.preventDefault();
    //         mobileRef.current.focus();
    //     }
    // };

    // const handleMobileKeyDown = (event) => {
    //     if (event.key === "Enter") {
    //         event.preventDefault();
    //         handleSubmit(event);
    //     }
    // };
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile_no, setMobile] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const mobileRef = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setErrors({});

        const data = { name, email, password, mobile_no };

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_API_URL1}/api/candidate/register`,
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            toast.success("Registration successful! Please log in.");
            navigate("/success");
        } catch (error) {
            if (error.response && error.response.data) {
                const errorData = error.response.data;
                const errorMessage = errorData.message;

                setErrors(errorData.errors || {});
                toast.error(errorMessage);
            } else {
                console.error("Error occurred:", error);
                toast.error("An unexpected error occurred. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    const handleNameKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            emailRef.current.focus();
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
            mobileRef.current.focus();
        }
    };

    const handleMobileKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleSubmit(event);
        }
    };

    return (
        <>
            <body class="nk-body bg-white npc-default pg-auth">
                <div class="nk-app-root">
                    <div class="nk-main ">
                        <div class="nk-wrap nk-wrap-nosidebar">
                            <div class="nk-content ">
                                <div class="nk-split nk-split-page nk-split-md">
                                    <img src={login} alt="" style={{ width: '860px', objectFit: 'cover' }} />

                                    <div
                                        class="nk-split-content nk-block-area nk-block-area-column nk-auth-container bg-white w-lg-45">
                                        <div class="nk-block nk-block-middle nk-auth-body">
                                            <div class="brand-logo justify-center pb-5"><a href="#" class="logo-link"><img
                                                class="logo-light logo-img logo-img-lg" src={logo}
                                                srcset="/demo2/images/logo2x.png 2x" alt="logo" /><img
                                                    class="logo-dark logo-img logo-img-lg" src={logo}
                                                    srcset="/demo2/images/logo-dark2x.png 2x" alt="logo-dark" /></a></div>
                                            <div class="nk-block-head">
                                                <div class="nk-block-head-content">
                                                    <h5 class="nk-block-title">Register</h5>
                                                    <div class="nk-block-des">
                                                        <p>Create New EduJobZ Account</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <form onSubmit={handleSubmit}>
                                                <div class="form-group"><label class="form-label" for="name">Name</label>
                                                    <div class="form-control-wrap">
                                                        <input
                                                            type="text"
                                                            class="form-control form-control-lg"
                                                            placeholder="Enter your name"
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)}
                                                            onKeyDown={handleNameKeyDown}
                                                            required
                                                        />
                                                        {errors.name && <span className="error">{errors.name}</span>}

                                                    </div>
                                                </div>
                                                <div class="form-group"><label class="form-label" for="email">Email or
                                                    Username</label>
                                                    <div class="form-control-wrap">
                                                        <input
                                                            type="email"
                                                            class="form-control form-control-lg"
                                                            placeholder="Enter your email "
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            ref={emailRef}
                                                            onKeyDown={handleEmailKeyDown}
                                                            required
                                                        />
                                                        {errors.email && <span className="error">{errors.email}</span>}

                                                    </div>
                                                </div>
                                                <div class="form-group"><label class="form-label" for="email">Mobile number</label>
                                                    <div class="form-control-wrap">
                                                        <input
                                                             class="form-control form-control-lg"
                                                            type="number"
                                                            placeholder="Enter your mobile"

                                                            value={mobile_no}
                                                            onChange={(e) => setMobile(e.target.value)}
                                                            ref={mobileRef}
                                                            onKeyDown={handleMobileKeyDown}
                                                            required
                                                        />
                                                        {errors.mobile_no && <span className="error">{errors.mobile_no}</span>}

                                                    </div>
                                                </div>
                                                <div class="form-group"><label class="form-label" for="password">Password</label>
                                                    <div class="form-control-wrap"><a tabindex="-1" href="#"
                                                        class="form-icon form-icon-right passcode-switch lg"
                                                        data-target="password"><em
                                                            class="passcode-icon icon-show icon ni ni-eye"></em><em
                                                                class="passcode-icon icon-hide icon ni ni-eye-off"></em></a>
                                                        <input
                                                        id="password"
                                                            class="form-control form-control-lg"
                                                            type="password"
                                                            value={password}
                                                            placeholder="Enter your password"
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            ref={passwordRef}
                                                            onKeyDown={handlePasswordKeyDown}
                                                            required
                                                        />
                                                        {errors.password && <span className="error">{errors.password}</span>}

                                                    </div>
                                                </div>
                                                
                                                <div class="form-group">
                                                    <div class="custom-control custom-control-xs custom-checkbox"><input
                                                        type="checkbox" class="custom-control-input" id="checkbox" /><label
                                                            class="custom-control-label" for="checkbox">I agree to EduJobZ <a
                                                                tabindex="-1" href="../terms-policy.html">Privacy Policy</a> &amp;
                                                            <Link tabindex="-1" to="/terms"> Terms.</Link></label></div>
                                                </div>
                                                <div class="form-group"><Link ><button
                                                    class="btn btn-lg btn-primary btn-block" type="submit" onClick={handleSubmit}>Register</button></Link></div>
                                            </form>
                                            <div class="form-note-s2 pt-4 justify-center"> Already have an account ? <Link
                                                to="/"><strong>Sign in instead</strong></Link></div>


                                        </div>
                                        <div class="nk-block nk-auth-footer">
                                            <div class="nk-block-between justify-center">
                                                <ul class="nav nav-sm">
                                                    <li class="nav-item"><Link class="link  fw-normal py-2 px-3 fs-13px"
                                                        to="/terms" style={{ color: 'blue' }}>Terms & Condition</Link></li>
                                                    <li class="nav-item"><a class="link  fw-normal py-2 px-3 fs-13px"
                                                        href="#" style={{ color: 'blue' }}>Privacy Policy</a></li>

                                                </ul>
                                            </div>
                                            <div class="justify-center mt-3">
                                                <p>&copy; 2025 EduJobZ. All Rights Reserved.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div class="nk-split-content nk-split-stretch bg-abstract"></div> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </body>
        </>
    )
}
export default Register