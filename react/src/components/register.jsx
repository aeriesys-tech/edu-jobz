import { Link } from 'react-router-dom'
import logo from '../assets/img/Edujobs.svg'


function Register(){
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
                                <div class="brand-logo pb-2"><a href="../../index.html" class=""><img
                                            class="logo-dark " src={logo} style={{width:'200px'}}
                                            srcset="/demo2/images/logo-dark2x.png 2x" alt="logo-dark"/></a></div>
                                <div class="nk-block-head">
                                    <div class="nk-block-head-content">
                                        <h5 class="nk-block-title">Register</h5>
                                        <div class="nk-block-des">
                                            <p>Create New Dashlite Account</p>
                                        </div>
                                    </div>
                                </div>
                                <form action="https://dashlite.net/demo2/pages/auths/auth-success-v3.html">
                                    <div class="form-group"><label class="form-label" for="name">Name</label>
                                        <div class="form-control-wrap"><input type="text"
                                                class="form-control form-control-lg" id="name"
                                                placeholder="Enter your name"/></div>
                                    </div>
                                    <div class="form-group"><label class="form-label" for="email">Email or
                                            Username</label>
                                        <div class="form-control-wrap"><input type="text"
                                                class="form-control form-control-lg" id="email"
                                                placeholder="Enter your email address or username"/></div>
                                    </div>
                                    <div class="form-group"><label class="form-label" for="password">Passcode</label>
                                        <div class="form-control-wrap"><a tabindex="-1" href="#"
                                                class="form-icon form-icon-right passcode-switch lg"
                                                data-target="password"><em
                                                    class="passcode-icon icon-show icon ni ni-eye"></em><em
                                                    class="passcode-icon icon-hide icon ni ni-eye-off"></em></a><input
                                                type="password" class="form-control form-control-lg" id="password"
                                                placeholder="Enter your passcode"/></div>
                                    </div>
                                    <div class="form-group">
                                        <div class="custom-control custom-control-xs custom-checkbox"><input
                                                type="checkbox" class="custom-control-input" id="checkbox"/><label
                                                class="custom-control-label" for="checkbox">I agree to Dashlite <a
                                                    tabindex="-1" href="../terms-policy.html">Privacy Policy</a> &amp;
                                                <a tabindex="-1" href="../terms-policy.html"> Terms.</a></label></div>
                                    </div>
                                    <div class="form-group"><button
                                            class="btn btn-lg btn-primary btn-block">Register</button></div>
                                </form>
                                <div class="form-note-s2 pt-4"> Already have an account ? <Link
                                        to="/"><strong>Sign in instead</strong></Link></div>
                                <div class="text-center pt-4 pb-3">
                                    <h6 class="overline-title overline-title-sap"><span>OR</span></h6>
                                </div>
                                <ul class="nav justify-center gx-8">
                                    <li class="nav-item"><a class="link link-primary fw-normal py-2 px-3 fs-13px"
                                            href="#">Facebook</a></li>
                                    <li class="nav-item"><a class="link link-primary fw-normal py-2 px-3 fs-13px"
                                            href="#">Google</a></li>
                                </ul>
                            </div>
                            <div class="nk-block nk-auth-footer">
                                <div class="nk-block-between">
                                    <ul class="nav nav-sm">
                                        <li class="nav-item"><a class="link link-primary fw-normal py-2 px-3 fs-13px"
                                                href="#">Terms & Condition</a></li>
                                        <li class="nav-item"><a class="link link-primary fw-normal py-2 px-3 fs-13px"
                                                href="#">Privacy Policy</a></li>
                                        <li class="nav-item"><a class="link link-primary fw-normal py-2 px-3 fs-13px"
                                                href="#">Help</a></li>
                                        <li class="nav-item dropup"><a
                                                class="dropdown-toggle dropdown-indicator has-indicator link link-primary fw-normal py-2 px-3 fs-13px"
                                                data-bs-toggle="dropdown" data-offset="0,10"><small>English</small></a>
                                            <div class="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                                <ul class="language-list">
                                                    <li><a href="#" class="language-item"><img
                                                                src="../../images/flags/english.png" alt=""
                                                                class="language-flag"/><span
                                                                class="language-name">English</span></a></li>
                                                    <li><a href="#" class="language-item"><img
                                                                src="../../images/flags/spanish.png" alt=""
                                                                class="language-flag"/><span
                                                                class="language-name">Español</span></a></li>
                                                    <li><a href="#" class="language-item"><img
                                                                src="../../images/flags/french.png" alt=""
                                                                class="language-flag"/><span
                                                                class="language-name">Français</span></a></li>
                                                    <li><a href="#" class="language-item"><img
                                                                src="../../images/flags/turkey.png" alt=""
                                                                class="language-flag"/><span
                                                                class="language-name">Türkçe</span></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="mt-3">
                                    <p>&copy; 2024 DashLite. All Rights Reserved.</p>
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
export default Register