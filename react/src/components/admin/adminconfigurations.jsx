

import DashFooter from "../candidate/footer"

import das1 from '../../assets/img/dash1.svg'
import das2 from '../../assets/img/dash2.svg'
import das3 from '../../assets/img/dash3.svg'
import das4 from '../../assets/img/dash4.svg'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import AdminMenu from "./adminmenus"
import DashMenuBar from "./adminconfigmenu"
import AdminHeader from "./header"



function AdminConfiguration() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;
    const isParentActive = (basePath) => location.pathname.startsWith(basePath);

    return (
        <>
            <body class="nk-body bg-lighter npc-default has-sidebar">
                <div class="nk-app-root">
                    <div class="nk-main">
                        <AdminMenu />
                        <div class="nk-wrap ">

                            <AdminHeader />
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
                                                                    <h3 class="nk-block-title page-title">Country</h3>
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
                                                            <div class="">
                                                                <div class="card-inner">
                                                                    <table class=" nowrap nk-tb-list nk-tb-ulist" data-auto-responsive="false">
                                                                        <thead>
                                                                            <tr class="nk-tb-item nk-tb-head">

                                                                                <th class="nk-tb-col ">Name</th>

                                                                                <th class="nk-tb-col tb-col-mb" >Added date</th>

                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr class="nk-tb-item">

                                                                                <td class="nk-tb-col ">England</td>

                                                                                <td class="nk-tb-col tb-col-mb">2011/04/25</td>
                                                                                <td class="nk-tb-col nk-tb-col-tools">
                                                                                    <ul class="nk-tb-actions gx-1 my-n1">
                                                                                        <li class="me-n1">
                                                                                            <div class="dropdown"><a href="#"
                                                                                                class="dropdown-toggle btn btn-icon btn-trigger"
                                                                                                data-bs-toggle="dropdown"><em
                                                                                                    class="icon ni ni-more-h"></em></a>
                                                                                                <div class="dropdown-menu dropdown-menu-end">
                                                                                                    <ul class="link-list-opt no-bdr">
                                                                                                        <li><a href="#"><em
                                                                                                            class="icon ni ni-edit"></em><span>Edit
                                                                                                                Product</span></a></li>

                                                                                                        <li><a href="#"><em
                                                                                                            class="icon ni ni-trash"></em><span>Remove
                                                                                                                Product</span></a></li>
                                                                                                    </ul>
                                                                                                </div>
                                                                                            </div>
                                                                                        </li>
                                                                                    </ul>
                                                                                </td>
                                                                            </tr>
                                                                            <tr class="nk-tb-item">

                                                                                <td class="nk-tb-col " >USA</td>

                                                                                <td class="nk-tb-col tb-col-mb">2011/07/25</td>
                                                                                <td class="nk-tb-col nk-tb-col-tools">
                                                                                    <ul class="nk-tb-actions gx-1 my-n1">
                                                                                        <li class="me-n1">
                                                                                            <div class="dropdown"><a href="#"
                                                                                                class="dropdown-toggle btn btn-icon btn-trigger"
                                                                                                data-bs-toggle="dropdown"><em
                                                                                                    class="icon ni ni-more-h"></em></a>
                                                                                                <div class="dropdown-menu dropdown-menu-end">
                                                                                                    <ul class="link-list-opt no-bdr">
                                                                                                        <li><a href="#"><em
                                                                                                            class="icon ni ni-edit"></em><span>Edit
                                                                                                                Product</span></a></li>

                                                                                                        <li><a href="#"><em
                                                                                                            class="icon ni ni-trash"></em><span>Remove
                                                                                                                Product</span></a></li>
                                                                                                    </ul>
                                                                                                </div>
                                                                                            </div>
                                                                                        </li>
                                                                                    </ul>
                                                                                </td>
                                                                            </tr>
                                                                            <tr class="nk-tb-item">

                                                                                <td class="nk-tb-col ">Japan</td>

                                                                                <td class="nk-tb-col tb-col-mb">2009/01/12</td>
                                                                                <td class="nk-tb-col nk-tb-col-tools">
                                                                                    <ul class="nk-tb-actions gx-1 my-n1">
                                                                                        <li class="me-n1">
                                                                                            <div class="dropdown"><a href="#"
                                                                                                class="dropdown-toggle btn btn-icon btn-trigger"
                                                                                                data-bs-toggle="dropdown"><em
                                                                                                    class="icon ni ni-more-h"></em></a>
                                                                                                <div class="dropdown-menu dropdown-menu-end">
                                                                                                    <ul class="link-list-opt no-bdr">
                                                                                                        <li><a href="#"><em
                                                                                                            class="icon ni ni-edit"></em><span>Edit
                                                                                                                Product</span></a></li>

                                                                                                        <li><a href="#"><em
                                                                                                            class="icon ni ni-trash"></em><span>Remove
                                                                                                                Product</span></a></li>
                                                                                                    </ul>
                                                                                                </div>
                                                                                            </div>
                                                                                        </li>
                                                                                    </ul>
                                                                                </td>
                                                                            </tr>
                                                                            <tr class="nk-tb-item">

                                                                                <td class="nk-tb-col">Nepal</td>

                                                                                <td class="nk-tb-col tb-col-mb">2012/03/29</td>
                                                                                <td class="nk-tb-col nk-tb-col-tools">
                                                                                    <ul class="nk-tb-actions gx-1 my-n1">
                                                                                        <li class="me-n1">
                                                                                            <div class="dropdown"><a href="#"
                                                                                                class="dropdown-toggle btn btn-icon btn-trigger"
                                                                                                data-bs-toggle="dropdown"><em
                                                                                                    class="icon ni ni-more-h"></em></a>
                                                                                                <div class="dropdown-menu dropdown-menu-end">
                                                                                                    <ul class="link-list-opt no-bdr">
                                                                                                        <li><a href="#"><em
                                                                                                            class="icon ni ni-edit"></em><span>Edit
                                                                                                                Product</span></a></li>

                                                                                                        <li><a href="#"><em
                                                                                                            class="icon ni ni-trash"></em><span>Remove
                                                                                                                Product</span></a></li>
                                                                                                    </ul>
                                                                                                </div>
                                                                                            </div>
                                                                                        </li>
                                                                                    </ul>
                                                                                </td>
                                                                            </tr >



                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="modal fade" tabindex="-1" role="dialog" id="file-upload">
                                                            <div class="modal-dialog" role="document">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <h5 class="modal-title" id="exampleModalLabel">
                                                                            Add Country</h5>
                                                                        <button type="button" class="close"
                                                                            data-bs-dismiss="modal" aria-label="Close">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        <form>
                                                                            <div class="form-group">
                                                                                <label for=""
                                                                                    class="form-label  fw-bold ">Country Name</label>
                                                                                <input type="text" class="form-control"
                                                                                    id="recipient-name"
                                                                                    placeholder="Enter Skill" />
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

                                                        <DashMenuBar />
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
} export default AdminConfiguration