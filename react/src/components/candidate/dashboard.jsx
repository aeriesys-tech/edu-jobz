import SideBar from "./dashboardslidebar"
import DashFooter from "./footer"
import DashHeader from "./header"
import das1 from '../../assets/img/dash1.svg'
import das2 from '../../assets/img/dash2.svg'
import das3 from '../../assets/img/dash3.svg'
import das4 from '../../assets/img/dash4.svg'
function Dashboard() {
    return (
        <>
<body class="nk-body bg-lighter npc-default has-sidebar">
    <div class="nk-app-root">
        <div class="nk-main">
           <SideBar/>
            <div class="nk-wrap">
               <DashHeader/>
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
              
             <DashFooter/>
            </div>
        </div>
    </div>

   
</body>
            
        </>

    )
} export default Dashboard