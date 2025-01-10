
import DashFooter from "../candidate/footer"
import DashHeader from "../candidate/header"
import EmployeeSideBar from "./employeesidebar"




function EmployeeDashboard() {
    return (
        <>
            <body class="nk-body bg-lighter npc-default has-sidebar">
                <div class="nk-app-root">
                    <div class="nk-main">
                        <EmployeeSideBar />
                        <div class="nk-wrap">
                            <DashHeader />
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
                                                    <div class="d-flex align-items-center justify-content-between mb-1">
                                                        <h5 class="fs-1 text-white">52</h5>

                                                    </div>
                                                    <div class="fs-6 text-white text-opacity-75 mb-0">My Staffs</div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-3">
                                            <div class="card card-full bg-warning is-dark">
                                                <div class="card-inner">
                                                    <div class="d-flex align-items-center justify-content-between mb-1">
                                                        <h5 class="fs-1 text-white">3</h5>

                                                    </div>
                                                    <div class="fs-6 text-white text-opacity-75 mb-0">Accepted Researchers</div>


                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-3">
                                            <div class="card card-full bg-info is-dark">
                                                <div class="card-inner">
                                                    <div class="d-flex align-items-center justify-content-between mb-1">
                                                        <h5 class="fs-1 text-white">6</h5>

                                                    </div>
                                                    <div class="fs-6 text-white text-opacity-75 mb-0">Interview Invitations</div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-3">
                                            <div class="card card-full bg-danger is-dark">
                                                <div class="card-inner">
                                                    <div class="d-flex align-items-center justify-content-between mb-1">
                                                        <h5 class="fs-1 text-white">12</h5>

                                                    </div>
                                                    <div class="fs-6 text-white text-opacity-75 mb-0">My Subscription
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
                                    <div class="card mt-4">
                                        <div class="card-inner mb-n2">
                                            <div class="card-title-group">
                                                <div class="card-title">
                                                    <h6 class="title">Subscriptions Overview</h6>
                                                    <p>Top Subscriptions </p>
                                                </div>
                                                <div class="card-tools">
                                                    <div class="drodown">
                                                        <a to="#" class="dropdown-toggle dropdown-indicator btn btn-sm btn-outline-light btn-white" data-bs-toggle="dropdown">30 Days</a>
                                                        <div class="dropdown-menu dropdown-menu-end dropdown-menu-xs">
                                                            <ul class="link-list-opt no-bdr">
                                                                <li><a href="#"><span>7 Days</span></a></li>
                                                                <li><a href="#"><span>15 Days</span></a></li>
                                                                <li><a href="#"><span>30 Days</span></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="nk-tb-list is-loose traffic-channel-table ">
                                            <div class="nk-tb-item nk-tb-head">
                                                <div class="nk-tb-col nk-tb-channel"><span>Plans</span></div>
                                                <div class="nk-tb-col nk-tb-sessions"><span>Sessions</span></div>
                                                <div class="nk-tb-col nk-tb-prev-sessions"><span>Prev Sessions</span></div>
                                                <div class="nk-tb-col nk-tb-change"><span>Change</span></div>
                                               
                                            </div>
                                            <div class="nk-tb-item">
                                                <div class="nk-tb-col nk-tb-channel">
                                                    <span class="tb-lead">Standard</span>
                                                </div>
                                                <div class="nk-tb-col nk-tb-sessions">
                                                    <span class="tb-sub tb-amount"><span>305</span></span>
                                                </div>
                                                <div class="nk-tb-col nk-tb-prev-sessions">
                                                    <span class="tb-sub tb-amount"><span>129</span></span>
                                                </div>
                                                <div class="nk-tb-col nk-tb-change">
                                                    <span class="tb-sub"><span>4.29%</span> <span class="change up"><em class="icon ni ni-arrow-long-up"></em></span></span>
                                                </div>
                                               
                                            </div>
                                            <div class="nk-tb-item">
                                                <div class="nk-tb-col nk-tb-channel">
                                                    <span class="tb-lead">Pro</span>
                                                </div>
                                                <div class="nk-tb-col nk-tb-sessions">
                                                    <span class="tb-sub tb-amount"><span>859</span></span>
                                                </div>
                                                <div class="nk-tb-col nk-tb-prev-sessions">
                                                    <span class="tb-sub tb-amount"><span>936</span></span>
                                                </div>
                                                <div class="nk-tb-col nk-tb-change">
                                                    <span class="tb-sub"><span>15.8%</span>
                                                        <span class="change down"><em class="icon ni ni-arrow-long-down"></em></span></span>
                                                </div>
                                              
                                            </div>
                                            <div class="nk-tb-item">
                                                <div class="nk-tb-col nk-tb-channel">
                                                    <span class="tb-lead">Utra Pros</span>
                                                </div>
                                                <div class="nk-tb-col nk-tb-sessions">
                                                    <span class="tb-sub tb-amount"><span>482</span></span>
                                                </div>
                                                <div class="nk-tb-col nk-tb-prev-sessions">
                                                    <span class="tb-sub tb-amount"><span>793</span></span>
                                                </div>
                                                <div class="nk-tb-col nk-tb-change">
                                                    <span class="tb-sub"><span>41.3%</span> <span class="change down"><em class="icon ni ni-arrow-long-down"></em></span></span>
                                                </div>
                                               
                                            </div>       <div class="nk-tb-item">
                                                <div class="nk-tb-col nk-tb-channel">
                                                    <span class="tb-lead">Others</span>
                                                </div>
                                                <div class="nk-tb-col nk-tb-sessions">
                                                    <span class="tb-sub tb-amount"><span>138</span></span>
                                                </div>
                                                <div class="nk-tb-col nk-tb-prev-sessions">
                                                    <span class="tb-sub tb-amount"><span>97</span></span>
                                                </div>
                                                <div class="nk-tb-col nk-tb-change">
                                                    <span class="tb-sub"><span>12.6%</span> <span class="change up"><em class="icon ni ni-arrow-long-up"></em></span></span>
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
} export default EmployeeDashboard