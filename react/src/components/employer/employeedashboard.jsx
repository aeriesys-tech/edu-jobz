
import DashFooter from "../candidate/footer"

import EmployeeSideBar from "./employeesidebar"
import das1 from '../../assets/img/dash1.svg'
import das2 from '../../assets/img/dash2.svg'
import das3 from '../../assets/img/dash3.svg'
import das4 from '../../assets/img/dash4.svg'
import DashHeaderE from "./header"



function EmployeeDashboard() {
    return (
        <>
            <body class="nk-body bg-lighter npc-default has-sidebar">
                <div class="nk-app-root">
                    <div class="nk-main">
                        <EmployeeSideBar />
                        <div class="nk-wrap">
                            <DashHeaderE/>
                            <div class="nk-content pb-0">
                                <div class="container-fluid">
                                    <div class="nk-content-inner">
                                        <div class="nk-content-body">
                                            <div class="nk-block-head nk-block-head-sm">
                                                <div class="nk-block-between">
                                                    <div class="nk-block-head-content">
                                                        <h3 class="nk-block-title page-title">Dashboard</h3>
                                                        <div class="nk-block-des text-soft">
                                                            <p>Welcome to Learning Management Dashboard.</p>
                                                        </div>
                                                    </div>
                                                    <div class="nk-block-head-content">
                                                        <div class="toggle-wrap nk-block-tools-toggle">
                                                            <a href="#" class="btn btn-icon btn-trigger toggle-expand me-n1"
                                                                data-target="pageMenu"><em class="icon ni ni-more-v"></em></a>
                                                            <div class="toggle-expand-content" data-content="pageMenu">
                                                                <ul class="nk-block-tools g-3">
                                                                    <li>
                                                                        <div class="drodown">
                                                                            <a href="#"
                                                                                class="dropdown-toggle btn btn-white btn-dim btn-outline-light"
                                                                                data-bs-toggle="dropdown">
                                                                                <em
                                                                                    class="d-none d-sm-inline icon ni ni-calender-date"></em><span><span
                                                                                        class="d-none d-md-inline">Last</span> 30
                                                                                    Days</span>
                                                                                <em class="dd-indc icon ni ni-chevron-right"></em>
                                                                            </a>
                                                                            <div class="dropdown-menu dropdown-menu-end">
                                                                                <ul class="link-list-opt no-bdr">
                                                                                    <li>
                                                                                        <a href="#"><span>Last 30 Days</span></a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="#"><span>Last 6 Months</span></a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="#"><span>Last 1 Years</span></a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="nk-block-tools-opt">
                                                                        <a href="#" class="btn btn-primary"><em
                                                                            class="icon ni ni-reports"></em><span>Reports</span></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="nk-content pt-0">
                                <div class="nk-block">
                                    <div class="row g-gs">
                                        <div class="col-sm-3">
                                            <div class="card card-full bg-primary">
                                                <div class="card-inner">
                                                    <div>
                                                        <img class="w-20" src={das1} />
                                                    </div>
                                                    <div class="fs-6 text-white text-opacity-75 my-1">My Staffs</div>
                                                    
                                                    <div class="d-flex align-items-center justify-content-between mb-1">
                                                        <h5 class="fs-1 text-white">52</h5>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-3">
                                            <div class="card card-full bg-warning is-dark">
                                                <div class="card-inner">
                                                <div>
                                                        <img class="w-20" src={das2} />
                                                    </div>
                                                <div class="fs-6 text-white text-opacity-75 mb-0">Accepted Researchers</div>

                                                    <div class="d-flex align-items-center justify-content-between mb-1">
                                                        <h5 class="fs-1 text-white">3</h5>

                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-3">
                                            <div class="card card-full bg-info is-dark">
                                                <div class="card-inner">
                                                <div>
                                                        <img class="w-20" src={das3} />
                                                    </div>
                                                <div class="fs-6 text-white text-opacity-75 mb-0">Interview Invitations</div>

                                                    <div class="d-flex align-items-center justify-content-between mb-1">
                                                        <h5 class="fs-1 text-white">6</h5>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-3">
                                            <div class="card card-full bg-danger is-dark">
                                                <div class="card-inner">
                                                <div>
                                                        <img class="w-20" src={das4} />
                                                    </div>
                                                <div class="fs-6 text-white text-opacity-75 mb-0">My Subscription

                                                    <div class="d-flex align-items-center justify-content-between mb-1">
                                                        <h5 class="fs-1 text-white">12</h5>

                                                    </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card mt-4">
                                        <div class="card-inner">
                                            <div class="card-title-group align-start mb-3">
                                                <div class="card-title">
                                                    <h6 class="title">Staff Overview</h6>
                                                    <p>In last 15 days overview. <a to="#" class="link link-sm">Detailed Stats</a></p>
                                                </div>

                                            </div>
                                            <div class="nk-order-ovwg">
                                                <div class="row g-4 align-end">

                                                    <div class="col-xxl-4">
                                                        <div class="row g-4">
                                                            <div class="col-sm-6 col-xxl-12">
                                                                <div class="nk-order-ovwg-data buy">
                                                                    <div class="amount">954 <small class="currenct currency-usd"></small></div>
                                                                    <div class="info">Last month <strong>985 <span class="currenct currency-usd"></span></strong></div>
                                                                    <div class="title"><em class="icon ni ni-arrow-down-left"></em> Applied Candidates</div>
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-6 col-xxl-12">
                                                                <div class="nk-order-ovwg-data sell">
                                                                    <div class="amount">12 <small class="currenct currency-usd"></small></div>
                                                                    <div class="info">Last month <strong>4 <span class="currenct currency-usd"></span></strong></div>
                                                                    <div class="title"><em class="icon ni ni-arrow-up-left"></em> Candidates Hired</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>           </div>        </div>
                                        </div></div>
                                  

                                </div>
                            </div>
                            <DashFooter />
                        </div>
                    </div>
                </div>


            </body>

        </>

    )
} export default EmployeeDashboard