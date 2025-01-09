import { Link } from 'react-router-dom'
import logo from '../../../assets/img/logo.png'


function EmployeeSignUp(){
    return(
        <>
        <body class="nk-body bg-white npc-default pg-auth">
        <div class="nk-app-root">
        <div class="nk-main ">
            <div class="nk-wrap nk-wrap-nosidebar">
                <div class="nk-content ">
                    <div class="nk-split nk-split-page nk-split-md">
                        <div
                            class="nk-split-content nk-block-area nk-block-area-column nk-auth-container bg-white w-lg-45">
                            <div class="nk-block nk-block-middle nk-auth-body">
                                <div class="brand-logo justify-center pb-5"><a href="#" class="logo-link"><img
                                            class="logo-light logo-img logo-img-lg" src={logo}
                                            srcset="/demo2/images/logo2x.png 2x" alt="logo"/><img
                                            class="logo-dark logo-img logo-img-lg" src={logo}
                                            srcset="/demo2/images/logo-dark2x.png 2x" alt="logo-dark"/></a></div>
                                <div class="nk-block-head">
                                    <div class="nk-block-head-content">
                                        <h5 class="nk-block-title">Employee Register</h5>
                                        <div class="nk-block-des">
                                            <p>Create New EduJobZ Account</p>
                                        </div>
                                    </div>
                                </div>
                                <form action="#">
                                    <div class="form-group"><label class="form-label" for="name">Name</label>
                                        <div class="form-control-wrap"><input type="text"
                                                class="form-control form-control-lg" id="name"
                                                placeholder="Enter your name"/></div>
                                    </div>
                                    <div class="form-group"><label class="form-label" for="email">Email or
                                            Username</label>
                                        <div class="form-control-wrap"><input type="text"
                                                class="form-control form-control-lg" id="email"
                                                placeholder="Enter your email "/></div>
                                    </div>
                                    <div class="form-group"><label class="form-label" for="password">Password</label>
                                        <div class="form-control-wrap"><a tabindex="-1" href="#"
                                                class="form-icon form-icon-right passcode-switch lg"
                                                data-target="password"><em
                                                    class="passcode-icon icon-show icon ni ni-eye"></em><em
                                                    class="passcode-icon icon-hide icon ni ni-eye-off"></em></a><input
                                                type="password" class="form-control form-control-lg" id="password"
                                                placeholder="Enter your password"/></div>
                                    </div>
                                    <div class="form-group">
                                        <div class="custom-control custom-control-xs custom-checkbox"><input
                                                type="checkbox" class="custom-control-input" id="checkbox"/><label
                                                class="custom-control-label" for="checkbox">I agree to EduJobZ <a
                                                    tabindex="-1" href="../terms-policy.html">Privacy Policy</a> &amp;
                                                <a tabindex="-1" href="../terms-policy.html"> Terms.</a></label></div>
                                    </div>
                                    <div class="form-group"><Link to='/success'><button
                                            class="btn btn-lg btn-primary btn-block">Register</button></Link></div>
                                </form>
                                <div class="form-note-s2 pt-4 justify-center"> Already have an account ? <Link
                                        to="/employee/login"><strong>Sign in instead</strong></Link></div>


                            </div>
                            <div class="nk-block nk-auth-footer">
                                <div class="nk-block-between justify-center">
                                    <ul class="nav nav-sm">
                                        <li class="nav-item"><a class="link link-primary fw-normal py-2 px-3 fs-13px"
                                                href="#">Terms & Condition</a></li>
                                        <li class="nav-item"><a class="link link-primary fw-normal py-2 px-3 fs-13px"
                                                href="#">Privacy Policy</a></li>
                                        <li class="nav-item"><a class="link link-primary fw-normal py-2 px-3 fs-13px"
                                                href="#">Privacy Policy</a></li>
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
export default EmployeeSignUp