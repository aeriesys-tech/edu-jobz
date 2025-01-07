import { Link } from "react-router-dom"
import SideBar from "../dashboardslidebar"
import DashFooter from "../footer"
import DashHeader from "../header"
import MenuBar from "./profilemenu"


function ProfileSettings() {
    return (
        <>
            <body class="nk-body bg-lighter npc-general has-sidebar ">
                <div class="nk-app-root">
                    <div class="nk-main ">
                        <SideBar />
                        <div class="nk-wrap ">

                            <DashHeader />
                            <div class="nk-content ">
                                <div class="container-fluid">
                                    <div class="nk-content-inner">
                                        <div class="nk-content-body">
                                            <div class="nk-block">
                                                <div class="card">
                                                    <div class="card-aside-wrap">
                                                        <div class="card-inner card-inner-lg">
                                                            <div class="nk-block-head">
                                                                <div class="nk-block-between">
                                                                    <div class="nk-block-head-content">
                                                                        <h4 class="nk-block-title">Security Settings</h4>
                                                                        <div class="nk-block-des">
                                                                            <p>These settings are helps you keep your account
                                                                                secure.</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="nk-block-head-content align-self-start d-lg-none"><a
                                                                        href="#" class="toggle btn btn-icon btn-trigger mt-n1"
                                                                        data-target="userAside"><em
                                                                            class="icon ni ni-menu-alt-r"></em></a></div>
                                                                </div>
                                                            </div>
                                                            <div class="card-inner-group ">
                                                                <div>
                                                                    <div class="card-inner">
                                                                        <div class="between-center flex-wrap g-3">
                                                                            <div class="nk-block-text">
                                                                                <h6>Verify Mobile Number</h6>
                                                                                <p>Verify to protect your
                                                                                    account.</p>
                                                                            </div>
                                                                            <div class="nk-block-actions flex-shrink-sm-0">
                                                                                <ul
                                                                                    class="align-center flex-wrap flex-sm-nowrap gx-3 gy-2">
                                                                                    <li class="order-md-last">
                                                                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#verify" >Verify... </button>
                                                                                        <div class="modal fade" id="verify" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                                            <div class="modal-dialog" role="document">
                                                                                                <div class="modal-content">
                                                                                                    <div class="modal-header">
                                                                                                        <h5 class="modal-title" id="exampleModalLabel">Verification Code</h5>
                                                                                                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                                                                                            <span aria-hidden="true">&times;</span>
                                                                                                        </button>
                                                                                                    </div>
                                                                                                    <div class="card-body">
                                                                                                        <div class="row">
                                                                                                            <div class="col-sm-12">
                                                                                                                <div class="mb-3">
                                                                                                                    <label class="form-label">Enter OTP  </label>
                                                                                                                    <input type="password" class="form-control" />
                                                                                                                    <label class="form-label " >Resend OTP ? </label>
                                                                                                                </div>


                                                                                                            </div>

                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="modal-footer">
                                                                                                        <button type="button" class="btn btn-primary">Verify</button>

                                                                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </li>

                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-inner">
                                                                        <div
                                                                            class="between-center flex-wrap flex-md-nowrap g-3">
                                                                            <div class="nk-block-text">
                                                                                <h6>Verify Email Id</h6>
                                                                                <p>Activate logs </p>
                                                                            </div>
                                                                            <div class="nk-block-actions flex-shrink-sm-0">
                                                                                <ul
                                                                                    class="align-center flex-wrap flex-sm-nowrap gx-3 gy-2">
                                                                                    <li class="order-md-last">
                                                                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#verify" >Verify... </button>
                                                                                        <div class="modal fade" id="verify" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                                            <div class="modal-dialog" role="document">
                                                                                                <div class="modal-content">
                                                                                                    <div class="modal-header">
                                                                                                        <h5 class="modal-title" id="exampleModalLabel">Verification Code</h5>
                                                                                                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                                                                                            <span aria-hidden="true">&times;</span>
                                                                                                        </button>
                                                                                                    </div>
                                                                                                    <div class="card-body">
                                                                                                        <div class="row">
                                                                                                            <div class="col-sm-12">
                                                                                                                <div class="mb-3">
                                                                                                                    <label class="form-label">Enter OTP  </label>
                                                                                                                    <input type="password" class="form-control" />
                                                                                                                    <label class="form-label " >Resend OTP ? </label>
                                                                                                                </div>


                                                                                                            </div>

                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="modal-footer">
                                                                                                        <button type="button" class="btn btn-primary">Verify</button>

                                                                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </li>

                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-inner">
                                                                        <div class="between-center flex-wrap g-3">
                                                                            <div class="nk-block-text">
                                                                                <h6>Change Password</h6>
                                                                                <p>Set a unique password to protect your
                                                                                    account.</p>
                                                                            </div>
                                                                            <div class="nk-block-actions flex-shrink-sm-0">
                                                                                <ul
                                                                                    class="align-center flex-wrap flex-sm-nowrap gx-3 gy-2">
                                                                                    <li class="order-md-last">
                                                                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#change" >Change</button>
                                                                                        <div class="modal fade" id="change" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                                            <div class="modal-dialog" role="document">
                                                                                                <div class="modal-content">
                                                                                                    <div class="modal-header">
                                                                                                        <h5 class="modal-title" id="exampleModalLabel">Change Password </h5>
                                                                                                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                                                                                            <span aria-hidden="true">&times;</span>
                                                                                                        </button>
                                                                                                    </div>
                                                                                                    <div class="card-body">
                                                                                                        <div class="row">
                                                                                                            <div class="col-sm-12">
                                                                                                                <div class="mb-3">
                                                                                                                    <label class="form-label">Old Password</label>
                                                                                                                    <input type="password" class="form-control" />
                                                                                                                </div>
                                                                                                                <div class="mb-3">
                                                                                                                    <label class="form-label">New Password</label>
                                                                                                                    <input type="password" class="form-control" />
                                                                                                                </div>
                                                                                                                <div class="mb-3">
                                                                                                                    <label class="form-label">Confirm Password</label>
                                                                                                                    <input type="password" class="form-control" />
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div class="col-sm-12">
                                                                                                                <h5>New password must contain:</h5>
                                                                                                                <ul class="list-group list-group-flush">
                                                                                                                    <li class="list-group-item"><i class="ti ti-circle-check text-success f-8 me-2"></i> At least 8 characters</li>

                                                                                                                    <li class="list-group-item"
                                                                                                                    ><i class="ti ti-circle-check text-success f-8 me-2"></i> At least 1 uppercase letter(A-Z)</li
                                                                                                                    >

                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="modal-footer">
                                                                                                        <button type="button" class="btn btn-primary">Change</button>

                                                                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li><em class="text-soft text-date fs-12px">Last
                                                                                        changed: <span>Oct 2,
                                                                                            2019</span></em></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-inner">
                                                                        <div
                                                                            class="between-center flex-wrap flex-md-nowrap g-3">
                                                                            <div class="nk-block-text">
                                                                                <h6>2 Factor Auth &nbsp; <span
                                                                                    class="badge bg-success ms-0">Enabled</span>
                                                                                </h6>
                                                                                <p>Secure your account with 2FA security. When
                                                                                    it is activated you will need to enter not
                                                                                    only your password, but also a special code
                                                                                    using app. You can receive this code by in
                                                                                    mobile app. </p>
                                                                            </div>
                                                                            <div class="nk-block-actions"><a href="#"
                                                                                class="btn btn-primary">Disable</a></div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <MenuBar />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <DashFooter />
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}
export default ProfileSettings
