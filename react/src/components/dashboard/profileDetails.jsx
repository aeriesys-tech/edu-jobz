import { Link } from "react-router-dom"
import SideBar from "./dashboardslidebar"
import DashFooter from "./footer"
import DashHeader from "./header"


function Details() {
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
                                            <div class="nk-block-head nk-block-head-sm">
                                                <div class="nk-block-between g-3">
                                                    <div class="nk-block-head-content">
                                                        <h3 class="nk-block-title page-title">Students / <strong
                                                            class="text-primary small">Abu Bin Ishtiyak</strong></h3>
                                                    </div>
                                                    <div class="nk-block-head-content"><a href="students.html"
                                                        class="btn btn-outline-light bg-white d-none d-sm-inline-flex"><em
                                                            class="icon ni ni-arrow-left"></em><span>Back</span></a><a
                                                                href="students.html"
                                                                class="btn btn-icon btn-outline-light bg-white d-inline-flex d-sm-none"><em
                                                                    class="icon ni ni-arrow-left"></em></a></div>
                                                </div>
                                            </div>
                                            <div class="nk-block">
                                                <div class="card">
                                                    <div class="card-aside-wrap">
                                                        <div class="card-inner card-inner-lg">
                                                            <div class="tab-content">
                                                                <div class="tab-pan active" id="personal">
                                                                    <div class="nk-block-head">
                                                                        <div
                                                                            class="nk-block-between d-flex justify-content-between">
                                                                            <div class="nk-block-head-content">
                                                                                <h4 class="nk-block-title">Students Information</h4>
                                                                                <div class="nk-block-des">
                                                                                    <p>Basic info, like students name and address,
                                                                                        that you use on Nio Platform.</p>
                                                                                </div>
                                                                            </div>
                                                                            <div class="nk-tab-actions me-n1"><a
                                                                                class="btn btn-icon btn-trigger"
                                                                                data-bs-toggle="modal" href="#profile-edit"><em
                                                                                    class="icon ni ni-edit"></em></a></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="nk-block">
                                                                        <div class="nk-data data-list">
                                                                            <div class="data-head">
                                                                                <h6 class="overline-title">Basics</h6>
                                                                            </div>
                                                                            <div class="data-item">
                                                                                <div class="data-col"><span class="data-label">Full
                                                                                    Name</span><span class="data-value">Abu Bin
                                                                                        Ishtiyak</span></div>
                                                                            </div>
                                                                            <div class="data-item">
                                                                                <div class="data-col"><span
                                                                                    class="data-label">Display Name</span><span
                                                                                        class="data-value">Ishtiyak</span></div>
                                                                            </div>
                                                                            <div class="data-item">
                                                                                <div class="data-col"><span
                                                                                    class="data-label">Email</span><span
                                                                                        class="data-value">info@softnio.com</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="data-item">
                                                                                <div class="data-col"><span class="data-label">Phone
                                                                                    Number</span><span
                                                                                        class="data-value text-soft">Not add
                                                                                        yet</span></div>
                                                                            </div>
                                                                            <div class="data-item">
                                                                                <div class="data-col"><span class="data-label">Date
                                                                                    of Birth</span><span class="data-value">29
                                                                                        Feb, 1986</span></div>
                                                                            </div>
                                                                            <div class="data-item">
                                                                                <div class="data-col"><span
                                                                                    class="data-label">Nationality</span><span
                                                                                        class="data-value">Canadian</span></div>
                                                                            </div>
                                                                            <div class="data-item" data-tab-target="#address">
                                                                                <div class="data-col"><span
                                                                                    class="data-label">Address</span><span
                                                                                        class="data-value">2337 Kildeer
                                                                                        Drive,<br />Kentucky, Canada</span></div>
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
                                                                    </div>
                                                                </div>
                                                                <div class="card-inner">
                                                                    <div class="user-account-info py-0">
                                                                        <h6 class="overline-title-alt">Total Bill</h6>
                                                                        <div class=" h5 text-primary"> Paid <span>19</span> <small
                                                                            class="currency currency-btc">USD</small></div>
                                                                        <div class="text-danger">Due <span>10 <span
                                                                            class="currency currency-btc">USD</span></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="card-inner p-0">
                                                                    <ul class="link-list-menu">
                                                                        <li><a class="active" href="students-details.html"><em
                                                                            class="icon ni ni-user-fill-c"></em><span>Personal
                                                                                Infomation</span></a></li>
                                                                        <li><a href="students-details-courses.html"><em
                                                                            class="icon ni ni-book-fill"></em><span>Courses</span></a>
                                                                        </li>
                                                                        <li><a href="students-details-activity.html"><em
                                                                            class="icon ni ni-activity-round-fill"></em><span>Account
                                                                                Activity</span></a></li>
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
export default Details
