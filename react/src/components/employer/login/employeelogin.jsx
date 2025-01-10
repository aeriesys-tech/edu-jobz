import { Link } from 'react-router-dom'
import logo from '../../../assets/img/logo.png'
import facebook from '../../../assets/img/facebook.svg'
import google from '../../../assets/img/google.svg'
import linkedin from '../../../assets/img/linkedin.svg'
import login from '../../../assets/img/backgroundimg1.jpg'


function EmployeeLogin() {
    return (
        <>

            <body class="nk-body bg-white npc-default pg-auth">
                <div class="nk-app-root">
                    <div class="nk-main">
                        <div class="nk-wrap nk-wrap-nosidebar">
                            <div class="nk-content">
                                <div class="nk-split nk-split-page nk-split-md">
                                <img src={login} alt="" style={{width:'860px'}}/>

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
                                                <h6 class="nk-block-title">Employer</h6>

                                                    <h5 class="nk-block-title">Sign-In</h5>
                                                    <div class="nk-block-des">
                                                        <p>Access the EduJobZ panel using your email and Password.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <form action="#">
                                                <div class="form-group">
                                                    <div class="form-label-group"><label class="form-label" for="default-01">Email or Username</label><a class="link link-primary link-sm" tabindex="-1" href="#"></a></div>
                                                    <div class="form-control-wrap"><input type="text" class="form-control form-control-lg" id="default-01" placeholder="Enter your email address or username" /></div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="form-label-group"><label class="form-label" for="password">Password</label><Link class="link  link-sm" tabindex="-1" to="/reset" style={{ color: 'blue' }}>Forgot Password?</Link></div>
                                                    <div class="form-control-wrap">
                                                        <a tabindex="-1" href="#" class="form-icon form-icon-right passcode-switch lg" data-target="password">
                                                            <em class="passcode-icon icon-show icon ni ni-eye"></em><em class="passcode-icon icon-hide icon ni ni-eye-off"></em>
                                                        </a>
                                                        <input type="password" class="form-control form-control-lg" id="password" placeholder="Enter your Password" />
                                                    </div>
                                                </div>
                                                <div class="form-group"><Link to="/employee/dashboard"><button class="btn btn-lg btn-primary btn-block" >Sign in</button></Link></div>
                                            </form>
                                            <div class="text-center pt-4 pb-3">
                                                <h6 class="overline-title overline-title-sap"><span>OR</span></h6>
                                            </div>
                                            <ul class="nav justify-center gx-4">
                                                <li class="nav-item"><Link class="link link-primary    " to="#"><img src={facebook} alt="" style={{ width: '36px' }} /></Link></li>
                                                <li class="nav-item"><Link class="link link-primary  " to="#"><img src={google} alt="" style={{ width: '36px' }} /></Link></li>
                                                <li class="nav-item"><Link class="link link-primary  " to="#"><img src={linkedin} alt="" style={{ width: '36px' }} /></Link></li>

                                            </ul>
                                            <div class="text-center mt-4">
                                                <span class="fw-500">New on our platform? <Link to="/employee/signup">Create an account</Link></span>
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

                <script src="js/bundlee1e3.js?ver=3.2.4"></script>
                <script src="js/scriptse1e3.js?ver=3.2.4"></script>
                <script src="js/demo-settingse1e3.js?ver=3.2.4"></script>
            </body>
        </>
    )
}
export default EmployeeLogin