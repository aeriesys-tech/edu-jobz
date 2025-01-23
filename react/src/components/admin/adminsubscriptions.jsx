
import DashFooter from "../candidate/footer"

import das1 from '../../assets/img/dash1.svg'
import das2 from '../../assets/img/dash2.svg'
import das3 from '../../assets/img/dash3.svg'
import das4 from '../../assets/img/dash4.svg'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import AdminMenu from "./adminmenus"
import AdminHeader from "./header"



function AdminSubscriptions() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;
    const isParentActive = (basePath) => location.pathname.startsWith(basePath);

    return (
        <>
            <body class="nk-body bg-lighter npc-default has-sidebar">
                <div class="nk-app-root">
                    <div class="nk-main">
                        <AdminMenu />

                        <div class="nk-wrap">
                            <AdminHeader />

                            <div class="nk-content pb-0">
                                <div class="container-fluid">
                                    <div class="nk-content-inner">
                                        <div class="nk-content-body">
                                            <div class="nk-block-head nk-block-head-sm">
                                                <div class="nk-block-between">
                                                    <div class="nk-block-head-content">
                                                        <h3 class="nk-block-title page-title">Subscription </h3>
                                                        <div class="nk-block-des text-soft">
                                                            <p></p>
                                                        </div>
                                                    </div>
                                                    <div class="nk-block-head-content">
                                                        <div class="toggle-wrap nk-block-tools-toggle">
                                                            <a href="#" class="btn btn-icon btn-trigger toggle-expand me-n1"
                                                                data-target="pageMenu"><em class="icon ni ni-more-v"></em></a>
                                                            <div class="toggle-expand-content" data-content="pageMenu">
                                                                <ul class="nk-block-tools g-4">
                                                                    <li>
                                                                        <div class="drodown ">
                                                                            <a href="#"
                                                                                class="dropdown-toggle btn btn-white btn-dim btn-outline-light "
                                                                                data-bs-toggle="dropdown">
                                                                                <em
                                                                                    class="d-none d-sm-inline icon ni ni-search "></em><span><span
                                                                                        class="d-none d-md-inline ">Added Status</span> </span>
                                                                                <em class="dd-indc icon ni ni-chevron-right"></em>
                                                                            </a>
                                                                            <div class="dropdown-menu dropdown-menu-end">
                                                                                <ul class="link-list-opt no-bdr">
                                                                                    <li>
                                                                                        <a href="#"><span>Pending</span></a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="#"><span>Declined</span></a>
                                                                                    </li>

                                                                                    <li>
                                                                                        <a href="#"><span> Submitted</span></a>
                                                                                    </li>

                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="nk-block-tools-opt">

                                                                        <a
                                                                            class="btn btn-primary d-none d-md-inline-flex"
                                                                            data-bs-toggle="modal" to="#student-add"><em
                                                                                class="icon ni ni-search"></em><span>SEARCH</span></a>
                                                                    </li>

                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="card">
                                                    <ul class="nav nav-tabs col-lg-12">
                                                        <li class="nav-item">
                                                            <button class="nav-link active ps-2" data-bs-toggle="tab" href="#tabItem1">Employer Features</button>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link" data-bs-toggle="tab" href="#tabItem2">Candidate Features</a>
                                                        </li>
                                                        {/* <li class="nav-item">
                                                        <a class="nav-link" data-bs-toggle="tab" href="#tabItem3">nav</a>
                                                    </li>   
                                                     <li class="nav-item">
                                                        <a class="nav-link" data-bs-toggle="tab" href="#tabItem4">nav</a>
                                                    </li> */}
                                                    </ul>
                                                    <div class="tab-content m-0">
                                                        <div class="tab-pane active" id="tabItem1">
                                                            <div class="card-inner p-0">
                                                                <table class=" nowrap nk-tb-list nk-tb-ulist" data-auto-responsive="false">
                                                                    <thead>
                                                                        <tr class="nk-tb-item nk-tb-head">
                                                                            <th class="nk-tb-col ">Sr</th>

                                                                            <th class="nk-tb-col ps-5">Plans</th>
                                                                            <th class=" nk-tb-col">Price</th>
                                                                            <th class="nk-tb-col ">Institutes</th>
                                                                            <th class="nk-tb-col ">Status</th>

                                                                            {/* <th class="nk-tb-col tb-col-mb" >Added date</th> */}
                                                                            <th class="nk-tb-col nk-tb-col-tools pl-3">
                                                                                <ul class="nk-tb-actions gx-1 my-n1 ">
                                                                                    <li class="me-n1">
                                                                                        <td class=" tb-col-mb">
                                                                                            <a class="btn" ><em
                                                                                                class="icon ni "></em><span>Actions</span></a></td>

                                                                                    </li>
                                                                                </ul>
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>

                                                                        <tr className="nk-tb-item">
                                                                            <td className="nk-tb-col">1</td>

                                                                            <td className="nk-tb-col">Standard Plans</td>
                                                                            <td className="nk-tb-col">+811 </td>
                                                                            <td className="nk-tb-col">United State</td>
                                                                            <td className="nk-tb-col"><span
                                                                                class="tb-status text-success">Active</span></td>

                                                                            <td className="nk-tb-col nk-tb-col-tools">
                                                                                <ul className="nk-tb-actions gx-1 my-n1">
                                                                                    <li className="me-n1">
                                                                                        <a href="#update" className="btn" data-bs-toggle="modal">
                                                                                            <em className="icon ni ni-edit"></em>
                                                                                        </a>
                                                                                        <a className="btn" data-bs-toggle="modal">
                                                                                            <em className="icon ni ni-trash"></em>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </td>
                                                                        </tr>

                                                                        <tr className="nk-tb-item">
                                                                            <td className="nk-tb-col">2</td>

                                                                            <td className="nk-tb-col">Pro Plan</td>
                                                                            <td className="nk-tb-col">+1124</td>
                                                                            <td className="nk-tb-col">United Kingdom</td>
                                                                            <td className="nk-tb-col"><span
                                                                                class="tb-status text-warning">Inactive</span></td>

                                                                            <td className="nk-tb-col nk-tb-col-tools">
                                                                                <ul className="nk-tb-actions gx-1 my-n1">
                                                                                    <li className="me-n1">
                                                                                        <a href="#update" className="btn" data-bs-toggle="modal">
                                                                                            <em className="icon ni ni-edit"></em>
                                                                                        </a>
                                                                                        <a className="btn" data-bs-toggle="modal">
                                                                                            <em className="icon ni ni-trash"></em>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </td>
                                                                        </tr>
                                                                        <tr className="nk-tb-item">
                                                                            <td className="nk-tb-col">3</td>

                                                                            <td className="nk-tb-col">Standard Plans</td>
                                                                            <td className="nk-tb-col">+811 </td>
                                                                            <td className="nk-tb-col">United State</td>
                                                                            <td className="nk-tb-col"><span
                                                                                class="tb-status text-success">Active</span></td>

                                                                            <td className="nk-tb-col nk-tb-col-tools">
                                                                                <ul className="nk-tb-actions gx-1 my-n1">
                                                                                    <li className="me-n1">
                                                                                        <a href="#update" className="btn" data-bs-toggle="modal">
                                                                                            <em className="icon ni ni-edit"></em>
                                                                                        </a>
                                                                                        <a className="btn" data-bs-toggle="modal">
                                                                                            <em className="icon ni ni-trash"></em>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>

                                                                </table>
                                                            </div>
                                                        </div>
                                                        <div class="tab-pane" id="tabItem2">
                                                            <div class="card-inner p-0">
                                                                <div class="nk-tb-list nk-tb-ulist">
                                                                <table class=" nowrap nk-tb-list nk-tb-ulist" data-auto-responsive="false">
                                                                    <thead>
                                                                        <tr class="nk-tb-item nk-tb-head">
                                                                            <th class="nk-tb-col ">Sr</th>

                                                                            <th class="nk-tb-col ps-5">Plans</th>
                                                                            <th class=" nk-tb-col">Price</th>
                                                                            <th class="nk-tb-col ">Institutes</th>
                                                                            <th class="nk-tb-col ">Status</th>

                                                                            {/* <th class="nk-tb-col tb-col-mb" >Added date</th> */}
                                                                            <th class="nk-tb-col nk-tb-col-tools pl-3">
                                                                                <ul class="nk-tb-actions gx-1 my-n1 ">
                                                                                    <li class="me-n1">
                                                                                        <td class=" tb-col-mb">
                                                                                            <a class="btn" ><em
                                                                                                class="icon ni "></em><span>Actions</span></a></td>

                                                                                    </li>
                                                                                </ul>
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>

                                                                        <tr className="nk-tb-item">
                                                                            <td className="nk-tb-col">1</td>

                                                                            <td className="nk-tb-col">Standard Plans</td>
                                                                            <td className="nk-tb-col">+811 </td>
                                                                            <td className="nk-tb-col">United State</td>
                                                                            <td className="nk-tb-col"><span
                                                                                class="tb-status text-success">Active</span></td>

                                                                            <td className="nk-tb-col nk-tb-col-tools">
                                                                                <ul className="nk-tb-actions gx-1 my-n1">
                                                                                    <li className="me-n1">
                                                                                        <a href="#update" className="btn" data-bs-toggle="modal">
                                                                                            <em className="icon ni ni-edit"></em>
                                                                                        </a>
                                                                                        <a className="btn" data-bs-toggle="modal">
                                                                                            <em className="icon ni ni-trash"></em>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </td>
                                                                        </tr>

                                                                        <tr className="nk-tb-item">
                                                                            <td className="nk-tb-col">2</td>

                                                                            <td className="nk-tb-col">Pro Plan</td>
                                                                            <td className="nk-tb-col">+1124</td>
                                                                            <td className="nk-tb-col">United Kingdom</td>
                                                                            <td className="nk-tb-col"><span
                                                                                class="tb-status text-warning">Inactive</span></td>

                                                                            <td className="nk-tb-col nk-tb-col-tools">
                                                                                <ul className="nk-tb-actions gx-1 my-n1">
                                                                                    <li className="me-n1">
                                                                                        <a href="#update" className="btn" data-bs-toggle="modal">
                                                                                            <em className="icon ni ni-edit"></em>
                                                                                        </a>
                                                                                        <a className="btn" data-bs-toggle="modal">
                                                                                            <em className="icon ni ni-trash"></em>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </td>
                                                                        </tr>
                                                                        <tr className="nk-tb-item">
                                                                            <td className="nk-tb-col">3</td>

                                                                            <td className="nk-tb-col">Standard Plans</td>
                                                                            <td className="nk-tb-col">+811 </td>
                                                                            <td className="nk-tb-col">United State</td>
                                                                            <td className="nk-tb-col"><span
                                                                                class="tb-status text-success">Active</span></td>

                                                                            <td className="nk-tb-col nk-tb-col-tools">
                                                                                <ul className="nk-tb-actions gx-1 my-n1">
                                                                                    <li className="me-n1">
                                                                                        <a href="#update" className="btn" data-bs-toggle="modal">
                                                                                            <em className="icon ni ni-edit"></em>
                                                                                        </a>
                                                                                        <a className="btn" data-bs-toggle="modal">
                                                                                            <em className="icon ni ni-trash"></em>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </td>
                                                                        </tr>
                                                                        <tr className="nk-tb-item">
                                                                            <td className="nk-tb-col">4</td>

                                                                            <td className="nk-tb-col">Pro Plan</td>
                                                                            <td className="nk-tb-col">+1124</td>
                                                                            <td className="nk-tb-col">United Kingdom</td>
                                                                            <td className="nk-tb-col"><span
                                                                                class="tb-status text-warning">Inactive</span></td>

                                                                            <td className="nk-tb-col nk-tb-col-tools">
                                                                                <ul className="nk-tb-actions gx-1 my-n1">
                                                                                    <li className="me-n1">
                                                                                        <a href="#update" className="btn" data-bs-toggle="modal">
                                                                                            <em className="icon ni ni-edit"></em>
                                                                                        </a>
                                                                                        <a className="btn" data-bs-toggle="modal">
                                                                                            <em className="icon ni ni-trash"></em>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </td>
                                                                        </tr>
                                                                        <tr className="nk-tb-item">
                                                                            <td className="nk-tb-col">5</td>

                                                                            <td className="nk-tb-col">Standard Plans</td>
                                                                            <td className="nk-tb-col">+811 </td>
                                                                            <td className="nk-tb-col">United State</td>
                                                                            <td className="nk-tb-col"><span
                                                                                class="tb-status text-success">Active</span></td>

                                                                            <td className="nk-tb-col nk-tb-col-tools">
                                                                                <ul className="nk-tb-actions gx-1 my-n1">
                                                                                    <li className="me-n1">
                                                                                        <a href="#update" className="btn" data-bs-toggle="modal">
                                                                                            <em className="icon ni ni-edit"></em>
                                                                                        </a>
                                                                                        <a className="btn" data-bs-toggle="modal">
                                                                                            <em className="icon ni ni-trash"></em>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>

                                                                </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <div class="tab-pane" id="tabItem3">
                                                        <p>contnet</p>
                                                    </div>
                                                    <div class="tab-pane" id="tabItem4">
                                                        <p>contnet</p>
                                                    </div> */}
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
} export default AdminSubscriptions