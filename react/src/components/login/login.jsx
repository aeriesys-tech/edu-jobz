import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/img/logo.png'

import facebook from '../../assets/img/facebook.svg'
import google from '../../assets/img/google.svg'
import linkedin from '../../assets/img/linkedin.svg'
import login from '../../assets/img/bg3.jpg'
import { useRef, useState } from 'react'


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginError, setLoginError] = useState("");

    const [errors, setErrors] = useState({});

    const [loading, setLoading] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const navigate = useNavigate();
    const passwordRef = useRef(null);


    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setErrors({});
    
        // Store the full email in session storage
        sessionStorage.setItem("email", email);
    
        const data = { email, password };
    
        try {
            const response = await fetch(
                `${import.meta.env.VITE_BASE_API_URL1}/api/candidate/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );
    
            if (!response.ok) {
                const errorData = await response.json();
                const errorMessage = errorData.message;
    
                setErrors(errorData.errors || {});
                toast.error(errorMessage);
                setLoading(false);
                return;
            }
    
            setLoading(false);
            navigate("/candidate/dashboard");
        } catch (error) {
            console.error("Error occurred:", error);
            toast.error("An unexpected error occurred. Please try again.");
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

            <body class="nk-body bg-white npc-default pg-auth">
                <div class="nk-app-root">
                    <div class="nk-main">
                        <div class="nk-wrap nk-wrap-nosidebar">
                            <div class="nk-content">
                                <div class="nk-split nk-split-page nk-split-md">
                                    <img src={login} alt="" style={{ width: '860px', objectFit: 'cover' }} />

                                    <div class="nk-split-content nk-block-area nk-block-area-column nk-auth-container bg-white">
                                        <div class="nk-block nk-block-middle nk-auth-body">
                                            <div class="brand-logo justify-center pb-5">
                                                <Link to="/" class="logo-link">
                                                    <img class="logo-light logo-img logo-img-lg" src={logo} alt="logo" />
                                                    <img class="logo-dark logo-img logo-img-lg" src={logo} alt="logo-dark" />
                                                </Link>
                                            </div>
                                            <div class="nk-block-head">
                                                <div class="nk-block-head-content">
                                                    <h5 class="nk-block-title">Sign-In</h5>
                                                    <div class="nk-block-des">
                                                        <p>Access the EduJobZ panel using your email and Password.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <form onSubmit={handleSubmit}>
                                                <div class="form-group">
                                                    <div class="form-label-group"><label class="form-label" for="default-01">Email or Username</label><a class="link link-primary link-sm" tabindex="-1" href="#"></a></div>
                                                    <div class="form-control-wrap"><input type="text" className={`form-control form-control-lg  ${errors.email ? "is-invalid" : ""
                                                        }`} id="email" name='email' onChange={(e) => setEmail(e.target.value)} onKeyDown={handleEmailKeyDown} autoComplete='off' placeholder="Enter your email address or username" /></div>
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
                                                        <a tabindex="-1" href="#" class="form-icon form-icon-right passcode-switch lg" data-target="password">
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
                                                {/* <div class="form-group"><Link to="/candidate/dashboard" ><button class="btn btn-lg btn-primary btn-block" type='submit' onClick={handleSubmit} >Sign in</button></Link></div> */}
                                                <div class="form-group"><Link to="/candidate/dashboard" ><button class="btn btn-lg btn-primary btn-block" type='submit'  >Sign in</button></Link></div>
                                           
                                            </form>
                                            <div class="text-center pt-4 pb-3">
                                                <h6 class="overline-title overline-title-sap"><span>OR</span></h6>
                                            </div>
                                            <ul class="nav justify-center gx-4">
                                                <li class="nav-item"><Link class="link link-primary" to="#"><img src={facebook} alt="" style={{ width: '36px' }} /></Link></li>
                                                <li class="nav-item"><Link class="link link-primary " to="#"><img src={google} alt="" style={{ width: '36px' }} /></Link></li>
                                                <li class="nav-item"><Link class="link link-primary  " to="#"><img src={linkedin} alt="" style={{ width: '36px' }} /></Link></li>

                                            </ul>

                                          
                                            <div class="text-center mt-4">
                                                <span class="fw-500">New on our platform? <Link to="/signup">Create an account</Link></span><br />
                                                <Link to="/employee/login">Employee Sign in</Link>
                                            </div>

                                        </div>
                                        <div class="nk-block nk-auth-footer">
                                            <div class="nk-block-between justify-center">
                                                <ul class="nav nav-sm">
                                                    <li class="nav-item"><Link class="link  fw-normal py-2 px-3 fs-13px" to="/terms" style={{ color: 'blue' }}>Terms & Condition</Link></li>
                                                    <li class="nav-item"><a class="link  fw-normal py-2 px-3 fs-13px" href="#" style={{ color: 'blue' }}>Privacy Policy</a></li>

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
export default Login