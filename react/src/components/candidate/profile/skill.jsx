import { Link } from "react-router-dom"
import SideBar from "../dashboardslidebar"
import DashFooter from "../footer"
import DashHeader from "../header"
import MenuBar from "./profilemenu"

function Skills() {
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
                                                                    <h4 class="nk-block-title">Skills</h4>
                                                                    <div class="nk-block-des">
                                                                        <p>Rate Yourself</p>
                                                                    </div>
                                                                </div>
                                                                <div class="d-flex align-center">
                                                                    <a
                                                                        class="btn btn-icon btn-trigger"
                                                                        data-bs-toggle="modal" href="#skill"><em
                                                                            class="icon ni ni-edit"></em></a>
                                                                    {/* <a
                                                                                class="btn btn-icon btn-trigger"
                                                                                data-toggle="modal" data-target="#skill"><em
                                                                                    class="icon ni ni-edit"></em></a> */}
                                                                    <div class="modal fade" id="skill" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                        <div class="modal-dialog" role="document">
                                                                            <div class="modal-content">
                                                                                <div class="modal-header">
                                                                                    <h5 class="modal-title" id="exampleModalLabel">SKILL</h5>
                                                                                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                                                                        <span aria-hidden="true">&times;</span>
                                                                                    </button>
                                                                                </div>
                                                                                <div class="modal-body">
                                                                                    <form>
                                                                                        <div class="text-center">
                                                                                            <input class="me-2" type="radio" name="skill" />
                                                                                            <label class="me-5" >Top Skills</label>
                                                                                            <input class="me-2" type="radio" name="skill" />
                                                                                            <label class="me-4">Other Skills</label>
                                                                                        </div>
                                                                                        <div class="form-group">
                                                                                            <label for="" class="form-label  fw-bold " >Skill Name</label>
                                                                                            <select class="form-select">
                                                                                                <option>Others</option>
                                                                                                <option>Algorithm and Data Structure</option>
                                                                                                <option>Computer Science</option>
                                                                                                <option>information Technology</option>
                                                                                            </select>
                                                                                        </div>
                                                                                        <label class="form-label">Proficiency Level</label>

                                                                                        <div class="form-control-wrap mb-3">    <div class="form-control-slider" data-tooltip="true" data-step="10" data-start="20" id="Range-Step">

                                                                                           
                                                                                        </div></div>
                                                                                        <label class="form-label">Skill Description</label>


                                                                                        <div class="col-sm-12">
                                                                                            <div class="mb-3">
                                                                                                <label class="form-label"></label>
                                                                                                <textarea class="form-control">
                                                                                                </textarea>
                                                                                            </div>
                                                                                        </div>


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

                                                            <div class="d-flex">
                                                    <div class="col-lg-6 ">
                                                        <div class="card mt-4 w-100">
                                                            <div class="card-inner">
                                                                <div class="project">
                                                                    <div class="project-head">
                                                                        <a href="#" class="project-title">
                                                                            <div class="user-avatar sq bg-purple">
                                                                                <span>DD</span>
                                                                            </div>
                                                                            <div class="project-info">
                                                                                <h6 class="title">Java</h6>
                                                                                    <span
                                                                                        class="sub-text mt-1">Udemy</span>
                                                                            </div>
                                                                        </a>
                                                                        <div class="drodown">
                                                                            <a href="#"
                                                                                class="dropdown-toggle btn btn-sm btn-icon btn-trigger mt-n1 me-n1"
                                                                                data-bs-toggle="dropdown">
                                                                                <em class="icon ni ni-more-h"></em>
                                                                            </a>
                                                                            <div
                                                                                class="dropdown-menu dropdown-menu-end">
                                                                                <ul class="link-list-opt no-bdr">
                                                                                    <li><a href="#"><em
                                                                                                class="icon ni ni-edit"></em><span>Update</span></a>
                                                                                    </li>
                                                                                    <li><a href="#"><em
                                                                                                class="icon ni ni-trash"></em><span>Delete</span></a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="project-details">
                                                                        <div class="project-info mt-3">
                                                                            <h6 class="title">Top Skills</h6>
                                                                            <span class="sub-text"> Html CSS JS
                                                                                Java</span>
                                                                        </div>
                                                                        <div class="project-info mt-3">
                                                                            <h6 class="title me-1">Skills Descriptions
                                                                            </h6>
                                                                            <span class="sub-text">Security Perpose</span>
                                                                        </div>
                                                                        <div class="project-info mt-3">
                                                                            <h6 class="title">Levels</h6>
                                                                            <span class="sub-text">9.0</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6 ps-2">
                                                        <div class="card mt-4 w-100">
                                                            <div class="card-inner">
                                                                <div class="project">
                                                                    <div class="project-head">
                                                                        <a href="#" class="project-title">
                                                                            <div class="user-avatar sq bg-purple">
                                                                                <span>DD</span>
                                                                            </div>
                                                                            <div class="project-info">
                                                                                <h6 class="title">React Js</h6>
                                                                                    <span
                                                                                        class="sub-text mt-1">Udemy</span>
                                                                            </div>
                                                                        </a>
                                                                        <div class="drodown">
                                                                            <a href="#"
                                                                                class="dropdown-toggle btn btn-sm btn-icon btn-trigger mt-n1 me-n1"
                                                                                data-bs-toggle="dropdown">
                                                                                <em class="icon ni ni-more-h"></em>
                                                                            </a>
                                                                            <div
                                                                                class="dropdown-menu dropdown-menu-end">
                                                                                <ul class="link-list-opt no-bdr">
                                                                                    <li><a href="#"><em
                                                                                                class="icon ni ni-edit"></em><span>Update</span></a>
                                                                                    </li>
                                                                                    <li><a href="#"><em
                                                                                                class="icon ni ni-trash"></em><span>Delete</span></a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="project-details">
                                                                        <div class="project-info mt-3">
                                                                            <h6 class="title">Top Skills</h6>
                                                                            <span class="sub-text"> Html CSS JS
                                                                                Java</span>
                                                                        </div>
                                                                        <div class="project-info mt-3">
                                                                            <h6 class="title me-1">Skills Descriptions
                                                                            </h6>
                                                                            <span class="sub-text">Security Perpose</span>
                                                                        </div>
                                                                        <div class="project-info mt-3">
                                                                            <h6 class="title">Levels</h6>
                                                                            <span class="sub-text">9.0</span>
                                                                        </div>
                                                                     </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
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

                                                                <MenuBar/>
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
export default Skills
