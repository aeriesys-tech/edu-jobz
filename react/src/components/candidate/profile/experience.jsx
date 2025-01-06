import { Link } from "react-router-dom"
import SideBar from "../dashboardslidebar"
import DashFooter from "../footer"
import DashHeader from "../header"
import MenuBar from "./profilemenu"

function Experience() {
 
    return (
        <>
            <body class="nk-body bg-lighter npc-general has-sidebar ">
                <div class="nk-app-root">
                    <div class="nk-main ">
                        <SideBar />
                        <div class="nk-wrap ">

                            <DashHeader />
                            <div class="nk-content">
                    <div class="container-fluid">
                        <div class="nk-content-inner">
                            <div class="nk-content-body">
                                <div class="nk-block">
                                    <div class="card">
                                        <div class="card-aside-wrap">
                                            <div class="card-inner card-inner-lg">
                                                <div class="nk-block-between d-flex justify-content-between">
                                                    <div class="nk-block-head-content">
                                                        <h4 class="nk-block-title">Experience</h4>
                                                        <div class="nk-block-des">
                                                            <p>Basic info, like your Work Performance</p>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex align-center">
                                                        <a class="btn btn-icon btn-trigger" data-bs-toggle="modal"
                                                            href="#education"><em class="icon plus-icon ni ni-plus-alt"></em>
                                                        </a>

                                                        <div class="modal fade" id="education" tabindex="-1"
                                                            role="dialog" aria-labelledby="exampleModalLabel"
                                                            aria-hidden="true">
                                                            <div class="modal-dialog" role="document">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <h5 class="modal-title" id="exampleModalLabel">
                                                                            Experience</h5>
                                                                        <button type="button" class="close"
                                                                            data-bs-dismiss="modal" aria-label="Close">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        <form>
                                                                           
                                                                            <div class="col-md-12 d-flex">
                                                                            <div class="form-group mb-3 pe-5">
                                                                                    <label for=""
                                                                                        class="form-label  fw-bold ">Title</label>
                                                                                    <input type="text"
                                                                                        class="form-control"
                                                                                        id="recipient-name"
                                                                                        placeholder="Job one" />
                                                                                </div>
                                                                                <div class="pl-4">
                                                                                    <label class="form-label fw-bold">Select your Current Industry</label>
                                                                                    <select class="form-select">
                                                                                        <option>College</option>
                                                                                        <option>Schools</option>
                                                                                        <option>B Tech Institutes</option>
                                                                                    </select>
                                                                                </div>
                                                                              
                                                                            </div>
                                                                            <div class="form-group">
                                                                                <label for=""
                                                                                    class="form-label  fw-bold ">Company Name</label>
                                                                                <input type="text" class="form-control"
                                                                                    id="recipient-name"
                                                                                    placeholder="Current company" />
                                                                            </div>
                                                                            <div class="col-sm-12">
                                                                                <div class="mb-3">
                                                                                    <label class="form-label">Descriptions</label>
                                                                                    <textarea class="form-control">
                                                                                    </textarea>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-sm-12">
                                                                                <div class="mb-1">
                                                                                    <label class="form-label fw-bold">Duration</label>
                                                                                   
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-12 d-flex">
                                                                                <div class="col-md-6">
                                                                                    <div class="mb-3">
                                                                                        <label class="form-label">From
                                                                                            Date</label>
                                                                                        <input type="date"
                                                                                            class="form-control" />
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-md-6">
                                                                                    <div class="mb-3">
                                                                                        <label class="form-label">To
                                                                                            Date</label>
                                                                                        <input type="date"
                                                                                            class="form-control" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        
                                                                        <button type="button" class="btn btn-secondary"
                                                                            data-dismiss="modal">Reset</button>
                                                                            <button type="button"
                                                                            class="btn btn-primary">Submit</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card mt-4">
                                                    <div class="card-inner">
                                                        <div class="project">
                                                            <div class="project-head">
                                                                <a to="#" class="project-title">
                                                                    <div class="user-avatar sq bg-purple">
                                                                        <span>DD</span>
                                                                    </div>
                                                                    <div class="project-info">
                                                                        <h6 class="title">Web Development</h6>
                                                                            <span class="sub-text mt-1">UI/UX</span>
                                                                    </div>
                                                                </a>
                                                                <div class="drodown">
                                                                    <a to="#"
                                                                        class="dropdown-toggle btn btn-sm btn-icon btn-trigger mt-n1 me-n1"
                                                                        data-bs-toggle="dropdown">
                                                                        <em class="icon ni ni-more-h"></em>
                                                                    </a>
                                                                    <div class="dropdown-menu dropdown-menu-end">
                                                                        <ul class="link-list-opt no-bdr">                                                                          
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-edit"></em><span>Update</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em class="icon ni ni-trash"></em><span>Delete</span></a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="project-details d-flex justify-content-between">
                                                                <div class="project-info mt-3">
                                                                    <h6 class="title">Company Name</h6>
                                                                    <span class="sub-text">HCL</span>
                                                                </div>                                                                
                                                                <div class="project-info mt-3">
                                                                    <h6 class="title me-1">Description</h6>
                                                                    <span class="sub-text">UI/UX Designer</span>
                                                                </div>
                                                                <div class="mt-3">
                                                                    <div class="project-info">
                                                                        <h6 class="title me-1">From: </h6>
                                                                        <span class="sub-text">01/01/2020</span>
                                                                    </div>
                                                                </div>
                                                                <div class="mt-3">
                                                                    <div class="project-info">
                                                                        <h6 class="title me-1">To: </h6>
                                                                        <span class="sub-text">01/01/2023</span>
                                                                    </div>
                                                                </div>
                                                            </div>                                                 
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card mt-4">
                                                    <div class="card-inner">
                                                        <div class="project">
                                                            <div class="project-head">
                                                                <a href="#" class="project-title">
                                                                    <div class="user-avatar sq bg-purple">
                                                                        <span>DD</span>
                                                                    </div>
                                                                    <div class="project-info">
                                                                        <h6 class="title">Graphics Design</h6>
                                                                            <span class="sub-text mt-1">Job 2</span>
                                                                    </div>
                                                                </a>
                                                                <div class="drodown">
                                                                    <a href="#"
                                                                        class="dropdown-toggle btn btn-sm btn-icon btn-trigger mt-n1 me-n1"
                                                                        data-bs-toggle="dropdown">
                                                                        <em class="icon ni ni-more-h"></em>
                                                                    </a>
                                                                    <div class="dropdown-menu dropdown-menu-end">
                                                                        <ul class="link-list-opt no-bdr">                                                                          
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-edit"></em><span>Update</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em class="icon ni ni-trash"></em><span>Delete</span></a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="project-details d-flex justify-content-between">
                                                                <div class="project-info mt-3">
                                                                    <h6 class="title">Company Name</h6>
                                                                    <span class="sub-text">Infosys</span>
                                                                </div>                                                                
                                                                <div class="project-info mt-3">
                                                                    <h6 class="title me-1">Description</h6>
                                                                    <span class="sub-text">UI/UX Designer</span>
                                                                </div>
                                                                <div class="mt-3">
                                                                    <div class="project-info">
                                                                        <h6 class="title me-1">From: </h6>
                                                                        <span class="sub-text">10/10/2018</span>
                                                                    </div>
                                                                </div>
                                                                <div class="mt-3">
                                                                    <div class="project-info">
                                                                        <h6 class="title me-1">To: </h6>
                                                                        <span class="sub-text">10/10/2020</span>
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
                                                <div class="card-inner-group" data-simplebar>
                                                    <div class="card-inner">
                                                        <div class="user-card">
                                                            <div class="user-avatar bg-primary"><span>AB</span></div>
                                                            <div class="user-info"><span class="lead-text">Abu Bin
                                                                    Ishtiyak</span><span
                                                                    class="sub-text">info@softnio.com</span></div>
                                                            <div class="user-action">
                                                                <div class="dropdown">
                                                                    <a class="btn btn-icon btn-trigger me-n2"
                                                                        data-bs-toggle="dropdown" href="#"><em
                                                                            class="icon ni ni-more-v"></em></a>
                                                                    <div class="dropdown-menu dropdown-menu-end">
                                                                        <ul class="link-list-opt no-bdr">
                                                                            <li>
                                                                                <a href="#"><em
                                                                                        class="icon ni ni-camera-fill"></em><span>Change
                                                                                        Photo</span></a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#"><em
                                                                                        class="icon ni ni-edit-fill"></em><span>Update
                                                                                        Profile</span></a>
                                                                            </li>
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
                <DashFooter/>
                            </div>
                            </div>
                            </div>
                            </body>
                            </>
            )
}
export default Experience
