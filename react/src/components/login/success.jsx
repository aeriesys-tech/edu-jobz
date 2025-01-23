import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'


function Success(){
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
                                <div class="brand-logo  pb-5"><Link to="/" class="logo-link"><img
                                            class="logo-light logo-img logo-img-lg" src={logo}
                                            srcset="/demo2/images/logo2x.png 2x" alt="logo"/><img
                                            class="logo-dark logo-img logo-img-lg" src={logo}
                                            srcset="/demo2/images/logo-dark2x.png 2x" alt="logo-dark"/></Link></div>
                                <div class="nk-block-head ">
                                    <div class="nk-block-head-content">
                                        <h5 class="nk-block-title">Thank you for registering with us...</h5>
                                        <div class="nk-block-des text-success ">
                                            <p>Please verify your email ID by clicking the link sent to your registered email address.</p>
                                        </div>
                                    </div>
                                </div>
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
export default Success
