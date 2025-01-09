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
                                            
                                        <div class="nk-fmg-body nk-fmg-filebody ">
                                                <div class="nk-fmg-body-head d-none d-lg-flex">
                                                    <div class="nk-block-head-content">
                                                        <h3 class="nk-block-title page-title">Experience</h3>
                                                    </div>
                                                    <div class="nk-fmg-actions">
                                                        <ul class="nk-block-tools g-3">

                                                            <li><a href="#file-upload" class="btn btn-primary"
                                                                    data-bs-toggle="modal"><em class="icon ni ni-plus"></em>
                                                                    <span>Add</span></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="nk-fmg-body-content">
                                                    <div class="card">
                                                        <div class="card-inner">
                                                            <div class="project">
                                                                <div class="project-head">
                                                                    <a href="#" class="project-title">
                                                                        <div class="user-avatar sq ">
                                                                            <span>DD</span>
                                                                        </div>
                                                                        <div class="project-info">
                                                                            <h6 class="title">Web Development</h6>
                                                                                <span class="sub-text mt-1">UI/UX</span>
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
                                                                                <li><a href="#"><em
                                                                                            class="icon ni ni-trash"></em><span>Delete</span></a>
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
                                                    <div class="card mt-3">
                                                        <div class="card-inner">
                                                            <div class="project">
                                                                <div class="project-head">
                                                                    <a href="#" class="project-title">
                                                                        <div class="user-avatar sq ">
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
                                                                                <li><a href="#"><em
                                                                                            class="icon ni ni-trash"></em><span>Delete</span></a>
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
                                            </div>
                                            <div class="modal fade" tabindex="-1" role="dialog" id="file-upload">
                                                <div class="modal-dialog modal-md" role="document">
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
                                                                                <div class="col-md-6 mb-3 pe-5">
                                                                                    <label class="form-label">Title </label>
                                                                                    <select class="form-select">
                                                                                        <option>Job 1</option>
                                                                                        <option>Job 2</option>
                                                                                        <option>Job 3</option>
                                                                                    </select>
                                                                                </div>
                                                                                <div class="col-md-6 form-group  ">
                                                                                    <label for=""
                                                                                        class="form-label  fw-bold ">Company Name</label>
                                                                                    <input type="text"
                                                                                        class="form-control"
                                                                                        id="recipient-name"
                                                                                        placeholder="Enter Field" />
                                                                                </div>
                                                                            </div>
                                                                            <div class="form-group">
                                                                                <label for=""
                                                                                    class="form-label  fw-bold ">Select your Current Industry</label>
                                                                                <input type="text" class="form-control"
                                                                                    id="recipient-name"
                                                                                    placeholder="Current working " />
                                                                            </div>
                                                                           
                                                                            <div class="col-sm-12">
                                                                                <div class="mb-3">
                                                                                    <label class="form-label">Description</label>
                                                                                    <textarea class="form-control">
                                                                                    </textarea>
                                                                                </div>
                                                                            </div>
                                                                            <label class="form-label fs-18">Duration</label>

                                                                            <div class="col-md-12 d-flex">
                                                                                
                                                                                <div class="col-md-6 pe-1">
                                                                                    <div class="mb-3">
                                                                                        <label class="form-label">From
                                                                                            Date</label>
                                                                                        <input type="date"
                                                                                            class="form-control" />
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-md-6 ps-1">
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
                                                                        <button type="button"
                                                                            class="btn btn-primary">Submit</button>
                                                                        <button type="button" class="btn btn-secondary"
                                                                            data-dismiss="modal">Reset</button>
                                                                    </div>
                                                                </div>
                                                </div>
                                            </div>

                                          <MenuBar/>
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
