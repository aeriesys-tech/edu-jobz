import { Link } from "react-router-dom"
import SideBar from "./dashboardslidebar"
import DashFooter from "./footer"
import DashHeader from "./header"


function ProfileActivity() {
    $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('whatever')
        var modal = $(this)
        modal.find('.modal-title').text('New message to ' + recipient)
        modal.find('.modal-body input').val(recipient)
    })
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
                                                        <div class="nk-block-between d-flex justify-content-between">
                                                                        <div class="nk-block-head-content">
                                                                            <h4 class="nk-block-title">Academics Informations</h4>
                                                                            <div class="nk-block-des">
                                                                                <p>Basic info, like your Academic Performance</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="d-flex align-center">
                                                                        <a
                                                                            class="btn btn-icon btn-trigger"
                                                                            data-bs-toggle="modal" href="#education"><em
                                                                                class="icon ni ni-edit"></em></a>
                                                                            {/* <a
                                                                                class="btn btn-icon btn-trigger"
                                                                                data-bs-toggle="modal" data-target="#education"><em
                                                                                    class="icon ni ni-edit"></em></a> */}
                                                                            <div class="modal fade" id="education" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                                <div class="modal-dialog" role="document">
                                                                                    <div class="modal-content">
                                                                                        <div class="modal-header">
                                                                                            <h5 class="modal-title" id="exampleModalLabel">Education</h5>
                                                                                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                                                                                <span aria-hidden="true">&times;</span>
                                                                                            </button>
                                                                                        </div>
                                                                                        <div class="modal-body">
                                                                                            <form>
                                                                                                <div class="form-group">
                                                                                                    <label for="" class="form-label  fw-bold " >School or Institution Attended</label>
                                                                                                    <input type="text" class="form-control" id="recipient-name" placeholder="School or Institution Name Attended" />
                                                                                                </div>
                                                                                                <div class="col-md-12 d-flex">
                                                                                                    <div class="mb-3 pe-5">
                                                                                                        <label class="form-label">Level of Education</label>
                                                                                                        <select class="form-select">
                                                                                                            <option>Bachelor Degree</option>
                                                                                                            <option>Diploma</option>
                                                                                                            <option>B Tech</option>
                                                                                                        </select>

                                                                                                    </div>
                                                                                                    <div class="form-group ">
                                                                                                        <label for="" class="form-label  fw-bold " >Field of Study</label>
                                                                                                        <input type="text" class="form-control" id="recipient-name" placeholder="Enter Field" />
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div class="col-sm-12">
                                                                                                    <div class="mb-3">
                                                                                                        <label class="form-label">Activities and Societies</label>
                                                                                                        <textarea class="form-control">
                                                                                                        </textarea>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div class="col-md-12 d-flex">
                                                                                                    <div class="col-md-6">
                                                                                                        <div class="mb-3">
                                                                                                            <label class="form-label">From Date</label>
                                                                                                            <input type="date" class="form-control" />
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="col-md-6">
                                                                                                        <div class="mb-3">
                                                                                                            <label class="form-label">To Date</label>
                                                                                                            <input type="date" class="form-control" />
                                                                                                        </div>
                                                                                                    </div></div>

                                                                                            </form>
                                                                                        </div>
                                                                                        <div class="modal-footer">
                                                                                            <button type="button" class="btn btn-primary">Submit</button>

                                                                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Reset</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        </div>
                                                           
                                                            <div class="row">
                                                                <div class="card">
                                                                    <div class="card-inner">
                                                                        <div class="project mt-3">
                                                                            <div class="project-head">
                                                                                <Link to="/" class="project-title">
                                                                                    <div class="user-avatar sq bg-purple"><span>DD</span></div>
                                                                                    <div class="project-info">
                                                                                        <h6 class="title">MIT Manipal</h6>
                                                                                        <span class="sub-text">B Tech College</span>
                                                                                    </div>
                                                                                </Link>                <div class="drodown">
                                                                                    <a href="#" class="dropdown-toggle btn btn-sm btn-icon btn-trigger mt-n1 me-n1" data-bs-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                                                                                    <div class="dropdown-menu dropdown-menu-end">
                                                                                        <ul class="link-list-opt no-bdr">
                                                                                            <li><a href="#"><em class="icon ni ni-edit"></em><span>Update</span></a></li>
                                                                                            <li><a href="#"><em class="icon ni ni-delete"></em><span>Delete</span></a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="project-details">
                                                                                <p></p>
                                                                                <div class="card-body">
                                                                                    <div class='d-flex justify-content-between'>
                                                                                    <p><strong>Field of Study:</strong> <span id="display-field">Computer Science</span></p>
                                                                                    <p><strong>Activities and Societies:</strong> <span id="display-activities">IIt Events Runner Up</span></p>
                                                                                    </div>
                                                                                    <div class='d-flex justify-content-between'>
                                                                                    <p><strong>From Date:</strong> <span id="display-from-date">2018</span></p>
                                                                                    <p><strong>To Date:</strong> <span id="display-to-date">2022</span></p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div class="project-meta">
                                                                                <ul class="project-users g-1">
                                                                                    <li>
                                                                                        <div class="user-avatar sm bg-primary"><span>A</span></div>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div class="user-avatar sm bg-blue"><img src="/demo2/images/avatar/b-sm.jpg" alt="" /></div>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div class="user-avatar bg-light sm"><span>+12</span></div>
                                                                                    </li>
                                                                                </ul>
                                                                                <span class="badge badge-dim bg-warning"><em class="icon ni ni-clock"></em><span>5 Days Left</span></span>
                                                                            </div>
                                                                        </div>
                                                                    </div></div>

                                                            </div>
                                                        </div>
                                                        <div class="card-aside card-aside-left user-aside toggle-slide toggle-slide-left toggle-break-lg"
                                                            data-content="userAside" data-toggle-screen="lg"
                                                            data-toggle-overlay="true">
                                                            <div class="card-inner-group">
                                                                <div class="card-inner">
                                                                    <div class="user-card">
                                                                        <div class="user-avatar bg-primary"><span>AB</span></div>
                                                                        <div class="user-info"><span class="lead-text">Abu Bin
                                                                            Ishtiyak</span><span
                                                                                class="sub-text">info@softnio.com</span></div>
                                                                        <div class="user-action">
                                                                            <div class="dropdown"><a
                                                                                class="btn btn-icon btn-trigger me-n2"
                                                                                data-bs-toggle="dropdown" href="#"><em
                                                                                    class="icon ni ni-more-v"></em></a>
                                                                                <div class="dropdown-menu dropdown-menu-end">
                                                                                    <ul class="link-list-opt no-bdr">
                                                                                        <li><a href="#"><em
                                                                                            class="icon ni ni-camera-fill"></em><span>Change
                                                                                                Photo</span></a></li>
                                                                                        <li><a href="#"><em
                                                                                            class="icon ni ni-edit-fill"></em><span>Update
                                                                                                Profile</span></a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* <div class="card-inner">
                                                        <div class="user-account-info py-0">
                                                            <h6 class="overline-title-alt">Account Balance</h6>
                                                            <div class="user-balance">12.395769 <small
                                                                    class="currency currency-btc">USD</small></div>
                                                            <div class="user-balance-sub">Pending <span>0.344939 <span
                                                                        class="currency currency-btc">USD</span></span>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                                <div class="card-inner p-0">
                                                                    <ul class="link-list-menu">
                                                                        <li><Link class="" to="/candidate/profile"><em
                                                                            class="icon ni ni-user-fill-c"></em><span>Personal
                                                                                Infomation</span></Link></li>
                                                                        <li><Link
                                                                            to="/candidate/socialmedia"><em
                                                                                class="icon ni ni-bell-fill"></em><span>Social Media</span></Link>
                                                                        </li>
                                                                        <li><Link to="/candidate/academic"><em class="icon ni ni-medal-fill"></em><span>Education</span></Link></li>
                                                                        <li><Link to="/candidate/skill"><em
                                                                            class="icon ni ni-activity-round-fill"></em><span>Skill</span></Link></li>
                                                                        <li><Link to="/candidate/setting"><em
                                                                            class="icon ni ni-lock-alt-fill"></em><span>Security
                                                                                Settings</span></Link></li>
                                                                        <li><Link to="/candidate/resume"><em class="icon ni ni-briefcase-fill"></em><span>Resume</span></Link></li>
                                                                    </ul>
                                                                </div>
                                                                <div class="card-inner">
                                                                    <div class="user-account-info py-0">
                                                                        <h6 class="overline-title-alt">Last Login</h6>
                                                                        <p>06-29-2020 02:39pm</p>
                                                                        <h6 class="overline-title-alt">Login IP</h6>
                                                                        <p>192.129.243.28</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
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
export default ProfileActivity