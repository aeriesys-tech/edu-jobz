import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import { useState } from 'react';


function ResetOTP() {
    $('.digit-group').find('input').each(function() {
        $(this).attr('maxlength', 1);
        $(this).on('keyup', function(e) {
            var parent = $($(this).parent());
            
            if(e.keyCode === 8 || e.keyCode === 37) {
                var prev = parent.find('input#' + $(this).data('previous'));
                
                if(prev.length) {
                    $(prev).select();
                }
            } else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
                var next = parent.find('input#' + $(this).data('next'));
                
                if(next.length) {
                    $(next).select();
                } else {
                    if(parent.data('autosubmit')) {
                        parent.submit();
                    }
                }
            }
        });
    });
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
                                                    <h5 class="nk-block-title">Reset password</h5>
                                                    <div class="nk-block-des">
                                                        <p>Set a New Password and Reconnect with Opportunities.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <form >
                                                <div class="form-group">
                                                    <div class="nk-block-head-content"><label class="form-label"
                                                        for="default-01">OTP Verification</label><a class="link link-primary link-sm"
                                                            href="#"></a>
                                                        <div class="nk-block-title">
                                                            <p>Enter the OTP sent on your email / phone number</p>
                                                        </div>
                                                        <form method="get" class="digit-group my-3" data-group-name="digits" data-autosubmit="false" autocomplete="off">
                                                            <input type="text" id="digit-1" name="digit-1" data-next="digit-2" />
                                                            <input type="text" id="digit-2" name="digit-2" data-next="digit-3" data-previous="digit-1" />
                                                            <input type="text" id="digit-3" name="digit-3" data-next="digit-4" data-previous="digit-2" />
                                                            <span class="splitter">&ndash;</span>
                                                            <input type="text" id="digit-4" name="digit-4" data-next="digit-5" data-previous="digit-3" />
                                                            <input type="text" id="digit-5" name="digit-5" data-next="digit-6" data-previous="digit-4" />
                                                            <input type="text" id="digit-6" name="digit-6" data-previous="digit-5" />
                                                        </form>
                                                    </div>

                                                    <div class="form-label-group"><label class="form-label"
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
                                                <div class="form-group"><button class="btn btn-lg btn-primary btn-block" type='submit' >Submit
                                                </button></div>
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
export default ResetOTP