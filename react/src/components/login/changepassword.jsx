  
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import { useRef, useState } from 'react';
import { useDispatch } from "react-redux";


function ChangePassword() {
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
                                                    <h5 class="nk-block-title">Change Password</h5>
                                                    <div class="nk-block-des">
                                                        <p>Enter the New Unique Password.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <form >
                                                <div class="form-group ">
                                                    <div class="nk-block-head-content">
                                                       
                                                        {/* <form onSubmit={handleSubmit} data-autosubmit={autoSubmit}>
                                                            <div className="digit-group">
                                                                {[...Array(6)].map((_, index) => (
                                                                    <input
                                                                        key={index}
                                                                        type="text"
                                                                        maxLength={1}
                                                                        data-previous={index - 1}
                                                                        data-next={index + 1}
                                                                        ref={(el) => (inputRefs.current[index] = el)}
                                                                        onKeyUp={(e) => handleKeyUp(e, index)}
                                                                        onChange={(e) => handleChange(e, index)}
                                                                    />
                                                                ))}
                                                              {/* <div class="form-group"><button class="btn btn-lg btn-primary btn-block" type='submit' >Submit
                                                              </button></div> */}
                                                            {/* </div>
                                                        </form> */} 
                                                    </div>

                                                    <div class="form-label-group mt-2"><label class="form-label"
                                                        for="default-01">Email</label><a class="link link-primary link-sm"
                                                            href="#"></a></div>

                                                    <div class="form-control-wrap"><input
                                                        id="email"
                                                        name="email"
                                                        placeholder="Enter your email"
                                                        className="form-control form-control-lg"

                                                        autoComplete="off"
                                                    />
                                                    </div>
                                                    <div class="form-group my-2"><label class="form-label" for="password">New Password</label>
                                                        <div class="form-control-wrap"><a tabindex="-1" href="#"
                                                            class="form-icon form-icon-right passcode-switch lg"
                                                            data-target="newpassword"><em
                                                                class="passcode-icon icon-show icon ni ni-eye"></em><em
                                                                    class="passcode-icon icon-hide icon ni ni-eye-off"></em></a>
                                                            <input
                                                                id="newpassword"
                                                                class="form-control form-control-lg"
                                                                type="password"
                                                                placeholder="Enter your password"


                                                                required
                                                            />

                                                        </div>
                                                    </div>
                                                    <div class="form-group"><label class="form-label" for="password"> Confirm Password</label>
                                                        <div class="form-control-wrap"><a tabindex="-1" href="#"
                                                            class="form-icon form-icon-right passcode-switch lg"
                                                            data-target="confirmpassword"><em
                                                                class="passcode-icon icon-show icon ni ni-eye"></em><em
                                                                    class="passcode-icon icon-hide icon ni ni-eye-off"></em></a>
                                                            <input
                                                                id="confirmpassword"
                                                                class="form-control form-control-lg"
                                                                type="password"

                                                                placeholder="Enter your password"

                                                            />

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group"><button class="btn btn-lg btn-primary btn-block" type='submit' >Confirm
                                                </button></div>
                                                <div class="form-note-s2 pt-1"><span>Didn't receive the OTP ?</span><Link ><strong> Resend</strong></Link></div>
                                       
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
export default ChangePassword