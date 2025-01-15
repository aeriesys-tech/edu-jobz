import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function ResetPassword() {
    // const [loading, setLoading] = useState(false);
    // const [email, setEmail] = useState("");
    // const [errors, setErrors] = useState({});
    // const navigate = useNavigate();

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     setLoading(true);
    //     setErrors({});

    //     try {

    //         const response = await fetch(
    //             `${import.meta.env.VITE_BASE_API_URL1}/api/candidate/forgotPassword`,
    //             {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //                 body: JSON.stringify({ email: email }),
    //             }
    //         );

    //         if (!response.ok) {
    //             const errorData = await response.json();


    //             const errorMessaged = errorData.message

    //             setErrors(errorData.errors || {});
    //             toast.error(errorMessaged);
    //             setLoading(false);
    //             return
    //         }

    //         navigate("/otpverify");

    //     } catch (error) {
    //         console.error("Error occurred:", error);
    //         // toast.error("Error occurred");
    //     }

    //     setLoading(false);
    // };

    // const currentYear = new Date().getFullYear();

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setErrors({});

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_API_URL1}/api/candidate/forgotPassword`,
                { email: email },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            toast.success("Password reset email sent successfully!");
            navigate("/otpverify");
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

    const currentYear = new Date().getFullYear();


    return (
        <>
            <body class="nk-body bg-white npc-default pg-auth">
                <div class="nk-app-root">
                    <div class="nk-main ">
                        <div class="nk-wrap nk-wrap-nosidebar">
                            <div class="nk-content ">
                                <div class="nk-split nk-split-page nk-split-lg">
                                    <div
                                        class="nk-split-content nk-block-area nk-block-area-column nk-auth-container bg-white w-lg-45">
                                        <div class="absolute-top-right d-lg-none p-3 p-sm-5"><a href="#"
                                            class="toggle btn btn-white btn-icon btn-light" data-target="athPromo"><em
                                                class="icon ni ni-info"></em></a></div>
                                        <div class="nk-block nk-block-middle nk-auth-body mt-4">
                                            <div class="brand-logo justify-center pb-5"><Link to="/" class="logo-link"><img
                                                class="logo-light logo-img logo-img-lg" src={logo}
                                                srcset="/demo2/images/logo2x.png 2x" alt="logo" /><img
                                                    class="logo-dark logo-img logo-img-lg" src={logo}
                                                    srcset="/demo2/images/logo-dark2x.png 2x" alt="logo-dark" /></Link></div>
                                            <div class="nk-block-head">
                                                <div class="nk-block-head-content">
                                                    <h5 class="nk-block-title">Forgot password</h5>
                                                    <div class="nk-block-des">
                                                        <p>If you forgot your password, well, then we’ll email you instructions to
                                                            reset your password.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <form onSubmit={handleSubmit}>
                                                <div class="form-group">
                                                    <div class="form-label-group"><label class="form-label"
                                                        for="default-01">Email</label><a class="link link-primary link-sm"
                                                            href="#">Need Help?</a></div>
                                                    <div class="form-control-wrap"><input
                                                        id="email"
                                                        name="email"
                                                        placeholder="Enter your email"
                                                        className={`form-control form-control-lg ${errors.email ? "is-invalid" : ""
                                                            }`}
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        autoComplete="off"
                                                    />
                                                        </div>
                                                </div>
                                                <div class="form-group"><Link ><button class="btn btn-lg btn-primary btn-block" type='submit' onClick={handleSubmit}>Send Reset
                                                    Link</button></Link></div>
                                            </form>
                                            <div class="form-note-s2 pt-5"><Link to="/"><strong>Return to
                                                login</strong></Link></div>
                                        </div>
                                        <div class="nk-block nk-auth-footer">
                                            <div class="nk-block-between justify-center">
                                                <ul class="nav nav-sm">
                                                    <li class="nav-item"><a class="link link-primary fw-normal py-2 px-3 fs-13px" href="#">Terms & Condition</a></li>
                                                    <li class="nav-item"><a class="link link-primary fw-normal py-2 px-3 fs-13px" href="#">Privacy Policy</a></li>
                                                    <li class="nav-item"><a class="link link-primary fw-normal py-2 px-3 fs-13px" href="#">Privacy Policy</a></li>
                                                </ul>
                                            </div>
                                            <div class="justify-center mt-3">
                                                <p>&copy; 2025 EduJobZ. All Rights Reserved.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="nk-split-content nk-split-stretch bg-abstract"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </body>
        </>
    )
}
export default ResetPassword