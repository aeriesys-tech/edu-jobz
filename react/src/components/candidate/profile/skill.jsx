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

                                                    <div class="nk-fmg-body nk-fmg-filebody ">
                                                <div class="nk-fmg-body-head d-none d-lg-flex">
                                                    <div class="nk-block-head-content">
                                                        <h3 class="nk-block-title page-title">Skills</h3>
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
                                                    <div class="d-flex">
                                                        <div class="col-lg-6">
                                                            <div class="card w-100">
                                                                <div class="card-inner">
                                                                    <div class="project">
                                                                        <div class="project-head">
                                                                            <a href="#" class="project-title">
                                                                                <div class="user-avatar sq ">
                                                                                    <span>Java</span>
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
                                                            <div class="card w-100">
                                                                <div class="card-inner">
                                                                    <div class="project">
                                                                        <div class="project-head">
                                                                            <a href="#" class="project-title">
                                                                                <div class="user-avatar sq ">
                                                                                    <span>JS</span>
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
                                            </div>
                                            <div class="modal fade" tabindex="-1" role="dialog" id="file-upload">
                                            <div class="modal-dialog" role="document">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <h5 class="modal-title" id="exampleModalLabel">
                                                                            Skill</h5>
                                                                        <button type="button" class="close"
                                                                            data-bs-dismiss="modal" aria-label="Close">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        <form>
                                                                            <div class="form-group">
                                                                                <label for=""
                                                                                    class="form-label  fw-bold ">Skill Name</label>
                                                                                <input type="text" class="form-control"
                                                                                    id="recipient-name"
                                                                                    placeholder="Enter Skill" />
                                                                            </div>
                                                                            <div class="col-md-12 d-flex">
                                                                                <div class="col-md-6 mb-3 pe-5">
                                                                                    <label class="form-label">Proficiency Level 
                                                                                </label>
                                                                                    <select class="form-select">
                                                                                        <option>5</option>
                                                                                        <option>6</option>
                                                                                        <option>7</option>

                                                                                        <option>8</option>
                                                                                        <option>9</option>

                                                                                        <option>10</option>
                                                                                    </select>
                                                                                </div>
                                                                                <div class="col-md-6 mb-3 ">
                                                                                    <label class="form-label">Skill Type 
                                                                                </label>
                                                                                    <select class="form-select">
                                                                                        <option>Top Skill</option>
                                                                                        <option>Other Skills</option>
                                                                                        
                                                                                    </select>
                                                                                </div>
                                                                                
                                                                            </div>
                                                                            <div class="col-sm-12">
                                                                                <div class="mb-3">
                                                                                    <label class="form-label">Skill Decription</label>
                                                                                    <textarea class="form-control">
                                                                                    </textarea>
                                                                                </div>
                                                                            </div>
                                                                           
                                                                        </form>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <button type="button"
                                                                            class="btn btn-primary">Submit</button>
                                                                        
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
                            <DashFooter />
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}
export default Skills
