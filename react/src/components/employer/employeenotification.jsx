import DashFooter from "../candidate/footer"

import EmployeeSideBar from "./employeesidebar"
import DashHeaderE from "./header"




function EmployeeNotification() {


    return (
        <>
            <body class="nk-body bg-lighter npc-general has-sidebar ">
                <div class="nk-app-root">
                    <div class="nk-main ">
                        <EmployeeSideBar />
                        <div class="nk-wrap ">

                            <DashHeaderE />
                            <div class="nk-content ">
                    <div class="container-fluid">
                        <div class="nk-content-inner">
                            <div class="nk-content-body">
                                <div class="nk-block-head nk-block-head-sm">
                                    <div class="nk-block-between">
                                        <div class="nk-block-head-content">
                                            <h3 class="nk-block-title page-title">Notifications</h3>
                                        </div>
                                        
                                    </div>
                                    <div class="bg-white">
                                    <div class="nk-ibx-head">
                                        <div class="nk-ibx-head-actions">
                                            <div class="nk-ibx-head-check">
                                                <div class="custom-control custom-control-sm custom-checkbox"><input
                                                        type="checkbox" class="custom-control-input nk-dt-item-check"
                                                        id="conversionAll"/><label class="custom-control-label"
                                                        for="conversionAll"></label></div>
                                            </div>
                                            <ul class="nk-ibx-head-tools g-1">
                                                <li><a to="#" class="btn btn-icon btn-trigger"><em
                                                            class="icon ni ni-undo"></em></a></li>
                                                <li class="d-none d-sm-block"><a to="#"
                                                        class="btn btn-icon btn-trigger"><em
                                                            class="icon ni ni-archived"></em></a></li>
                                                <li class="d-none d-sm-block"><a to="#"
                                                        class="btn btn-icon btn-trigger"><em
                                                            class="icon ni ni-trash"></em></a></li>
                                                <li>
                                                    <div class="dropdown"><a to="#"
                                                            class="dropdown-toggle btn btn-icon btn-trigger"
                                                            data-bs-toggle="dropdown"><em
                                                                class="icon ni ni-more-v"></em></a>
                                                        <div class="dropdown-menu">
                                                            <ul class="link-list-opt no-bdr">
                                                                <li><a class="dropdown-item" to="#"><em
                                                                            class="icon ni ni-eye"></em><span>Move
                                                                            to</span></a></li>
                                                                <li><a class="dropdown-item" to="#"><em
                                                                            class="icon ni ni-trash"></em><span>Delete</span></a>
                                                                </li>
                                                                <li><a class="dropdown-item" to="#"><em
                                                                            class="icon ni ni-archived"></em><span>Archive</span></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul class="nk-ibx-head-tools g-1">
                                                <li><a to="#" class="btn btn-trigger btn-icon btn-tooltip"
                                                        title="Prev Page"><em class="icon ni ni-arrow-left"></em></a>
                                                </li>
                                                <li><a to="#" class="btn btn-trigger btn-icon btn-tooltip"
                                                        title="Next Page"><em class="icon ni ni-arrow-right"></em></a>
                                                </li>
                                                <li><a to="#"
                                                        class="btn btn-trigger btn-icon search-toggle toggle-search"
                                                        data-target="search"><em class="icon ni ni-search"></em></a>
                                                </li>
                                                <li class="me-n1 d-lg-none"><a to="#"
                                                        class="btn btn-trigger btn-icon toggle"
                                                        data-target="inbox-aside"><em
                                                            class="icon ni ni-menu-alt-r"></em></a></li>
                                            </ul>
                                        </div>
                                        <div class="search-wrap" data-search="search">
                                            <div class="search-content"><a to="#"
                                                    class="search-back btn btn-icon toggle-search"
                                                    data-target="search"><em
                                                        class="icon ni ni-arrow-left"></em></a><input type="text"
                                                    class="form-control border-transparent form-focus-none"
                                                    placeholder="Search by user or message"/><button
                                                    class="search-submit btn btn-icon"><em
                                                        class="icon ni ni-search"></em></button></div>
                                        </div>
                                    </div>
                                    <div class="nk-ibx-list" data-simplebar>
                                        <div class="nk-ibx-item"><a to="#" class="nk-ibx-link"></a>
                                            <div class="nk-ibx-item-elem nk-ibx-item-check">
                                                <div class="custom-control custom-control-sm custom-checkbox"><input
                                                        type="checkbox" class="custom-control-input nk-dt-item-check"
                                                        id="conversionItem01"/><label class="custom-control-label"
                                                        for="conversionItem01"></label></div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-star">
                                                <div class="asterisk"><a to="#"><em
                                                            class="asterisk-off icon ni ni-star"></em><em
                                                            class="asterisk-on icon ni ni-star-fill"></em></a></div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-user">
                                                <div class="user-card">
                                                    <div class="user-avatar"><span>ABI</span><img src="images/avatar/a-sm.jpg" alt=""/>
                                                    </div>
                                                    <div class="user-name">
                                                        <div class="lead-text">Abu Bin Ishtiyak</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-fluid">
                                                <div class="nk-ibx-context-group">
                                                    <div class="nk-ibx-context"><span class="nk-ibx-context-text"><span
                                                                class="heading">Can we help you set up email
                                                                forwording?</span> We’ve noticed you haven’t set up
                                                            email forward </span></div>
                                                </div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-attach"></div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-time">
                                                <div class="sub-text">10:00 AM</div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-tools">
                                                <div class="ibx-actions">
                                                    <ul class="ibx-actions-hidden gx-1">
                                                        <li><a to="#" class="btn btn-sm btn-icon btn-trigger"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Archive"><em
                                                                    class="icon ni ni-archived"></em></a></li>
                                                        <li><a to="#" class="btn btn-sm btn-icon btn-trigger"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Delete"><em class="icon ni ni-trash"></em></a>
                                                        </li>
                                                    </ul>
                                                    <ul class="ibx-actions-visible gx-2">
                                                        <li>
                                                            <div class="dropdown"><a to="#"
                                                                    class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                                    data-bs-toggle="dropdown"><em
                                                                        class="icon ni ni-more-h"></em></a>
                                                                <div class="dropdown-menu dropdown-menu-end">
                                                                    <ul class="link-list-opt no-bdr">
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-eye"></em><span>View</span></a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-trash"></em><span>Delete</span></a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-archived"></em><span>Archive</span></a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="nk-ibx-item is-unread"><a to="#" class="nk-ibx-link"></a>
                                            <div class="nk-ibx-item-elem nk-ibx-item-check">
                                                <div class="custom-control custom-control-sm custom-checkbox"><input
                                                        type="checkbox" class="custom-control-input nk-dt-item-check"
                                                        id="conversionItem02"/><label class="custom-control-label"
                                                        for="conversionItem02"></label></div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-star">
                                                <div class="asterisk"><a class="active" to="#"><em
                                                            class="asterisk-off icon ni ni-star"></em><em
                                                            class="asterisk-on icon ni ni-star-fill"></em></a></div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-user">
                                                <div class="user-card">
                                                    <div class="user-avatar"><span>RS</span><img src="images/avatar/b-sm.jpg" alt=""/>
                                                    </div>
                                                    <div class="user-name">
                                                        <div class="lead-text">Ricardo Salazar</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-fluid">
                                                <div class="nk-ibx-context-group">
                                                    <div class="nk-ibx-context-badges"><span
                                                            class="badge bg-primary">Feedback</span></div>
                                                    <div class="nk-ibx-context"><span class="nk-ibx-context-text"><span
                                                                class="heading">Can we help you set up email
                                                                forwording?</span> We’ve noticed you haven’t set up
                                                            email forward </span></div>
                                                </div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-attach"><a
                                                    class="link link-light"><em class="icon ni ni-clip-h"></em></a>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-time">
                                                <div class="sub-text">10:00 AM</div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-tools">
                                                <div class="ibx-actions">
                                                    <ul class="ibx-actions-hidden gx-1">
                                                        <li><a to="#" class="btn btn-sm btn-icon btn-trigger"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Archive"><em
                                                                    class="icon ni ni-archived"></em></a></li>
                                                        <li><a to="#" class="btn btn-sm btn-icon btn-trigger"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Delete"><em class="icon ni ni-trash"></em></a>
                                                        </li>
                                                    </ul>
                                                    <ul class="ibx-actions-visible gx-2">
                                                        <li>
                                                            <div class="dropdown"><a to="#"
                                                                    class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                                    data-bs-toggle="dropdown"><em
                                                                        class="icon ni ni-more-h"></em></a>
                                                                <div class="dropdown-menu dropdown-menu-end">
                                                                    <ul class="link-list-opt no-bdr">
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-eye"></em><span>View</span></a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-trash"></em><span>Delete</span></a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-archived"></em><span>Archive</span></a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="nk-ibx-item is-unread"><a to="#" class="nk-ibx-link"></a>
                                            <div class="nk-ibx-item-elem nk-ibx-item-check">
                                                <div class="custom-control custom-control-sm custom-checkbox"><input
                                                        type="checkbox" class="custom-control-input nk-dt-item-check"
                                                        id="conversionItem03"/><label class="custom-control-label"
                                                        for="conversionItem03"></label></div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-star">
                                                <div class="asterisk"><a to="#"><em
                                                            class="asterisk-off icon ni ni-star"></em><em
                                                            class="asterisk-on icon ni ni-star-fill"></em></a></div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-user">
                                                <div class="user-card">
                                                    <div class="user-avatar"><span>LH</span></div>
                                                    <div class="user-name">
                                                        <div class="lead-text">Larry Hughes</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-fluid">
                                                <div class="nk-ibx-context-group">
                                                    <div class="nk-ibx-context"><span class="nk-ibx-context-text"><span
                                                                class="heading">Individual Modal and Alert
                                                                Design.</span> Please use the attached file for modal.
                                                        </span></div>
                                                </div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-attach"></div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-time">
                                                <div class="sub-text">10:30 AM</div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-tools">
                                                <div class="ibx-actions">
                                                    <ul class="ibx-actions-hidden gx-1">
                                                        <li><a to="#" class="btn btn-sm btn-icon btn-trigger"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Archive"><em
                                                                    class="icon ni ni-archived"></em></a></li>
                                                        <li><a to="#" class="btn btn-sm btn-icon btn-trigger"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Delete"><em class="icon ni ni-trash"></em></a>
                                                        </li>
                                                    </ul>
                                                    <ul class="ibx-actions-visible gx-2">
                                                        <li>
                                                            <div class="dropdown"><a to="#"
                                                                    class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                                    data-bs-toggle="dropdown"><em
                                                                        class="icon ni ni-more-h"></em></a>
                                                                <div class="dropdown-menu dropdown-menu-end">
                                                                    <ul class="link-list-opt no-bdr">
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-eye"></em><span>View</span></a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-trash"></em><span>Delete</span></a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-archived"></em><span>Archive</span></a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="nk-ibx-item"><a to="#" class="nk-ibx-link"></a>
                                            <div class="nk-ibx-item-elem nk-ibx-item-check">
                                                <div class="custom-control custom-control-sm custom-checkbox"><input
                                                        type="checkbox" class="custom-control-input nk-dt-item-check"
                                                        id="conversionItem04"/><label class="custom-control-label"
                                                        for="conversionItem04"></label></div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-star">
                                                <div class="asterisk"><a class="active" to="#"><em
                                                            class="asterisk-off icon ni ni-star"></em><em
                                                            class="asterisk-on icon ni ni-star-fill"></em></a></div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-user">
                                                <div class="user-card">
                                                    <div class="user-avatar"><span>LM</span><img src="images/avatar/c-sm.jpg" alt=""/>
                                                    </div>
                                                    <div class="user-name">
                                                        <div class="lead-text">Laura Matthews</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-fluid">
                                                <div class="nk-ibx-context-group">
                                                    <div class="nk-ibx-context-badges"><span
                                                            class="badge bg-success">Social</span></div>
                                                    <div class="nk-ibx-context"><span class="nk-ibx-context-text"><span
                                                                class="heading">Laravel Developer - Interview
                                                                List</span>
                                                            https://docs.google.com/document/d/12oOKEs4qjMlUiHXNVjHJBK
                                                        </span></div>
                                                </div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-attach"></div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-time">
                                                <div class="sub-text">10:30 AM</div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-tools">
                                                <div class="ibx-actions">
                                                    <ul class="ibx-actions-hidden gx-1">
                                                        <li><a to="#" class="btn btn-sm btn-icon btn-trigger"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Archive"><em
                                                                    class="icon ni ni-archived"></em></a></li>
                                                        <li><a to="#" class="btn btn-sm btn-icon btn-trigger"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Delete"><em class="icon ni ni-trash"></em></a>
                                                        </li>
                                                    </ul>
                                                    <ul class="ibx-actions-visible gx-2">
                                                        <li>
                                                            <div class="dropdown"><a to="#"
                                                                    class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                                    data-bs-toggle="dropdown"><em
                                                                        class="icon ni ni-more-h"></em></a>
                                                                <div class="dropdown-menu dropdown-menu-end">
                                                                    <ul class="link-list-opt no-bdr">
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-eye"></em><span>View</span></a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-trash"></em><span>Delete</span></a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-archived"></em><span>Archive</span></a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="nk-ibx-item"><a to="#" class="nk-ibx-link"></a>
                                            <div class="nk-ibx-item-elem nk-ibx-item-check">
                                                <div class="custom-control custom-control-sm custom-checkbox"><input
                                                        type="checkbox" class="custom-control-input nk-dt-item-check"
                                                        id="conversionItem05"/><label class="custom-control-label"
                                                        for="conversionItem05"></label></div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-star">
                                                <div class="asterisk"><a class="active" to="#"><em
                                                            class="asterisk-off icon ni ni-star"></em><em
                                                            class="asterisk-on icon ni ni-star-fill"></em></a></div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-user">
                                                <div class="user-card">
                                                    <div class="user-avatar"><span>TW</span><img src="images/avatar/d-sm.jpg" alt=""/>
                                                    </div>
                                                    <div class="user-name">
                                                        <div class="lead-text">Tammy Wilson</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-fluid">
                                                <div class="nk-ibx-context-group">
                                                    <div class="nk-ibx-context"><span class="nk-ibx-context-text"><span
                                                                class="heading">TokenWiz - New Page</span> here are the
                                                            2 screens I would to implement with TokenWiz </span></div>
                                                </div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-attach"></div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-time">
                                                <div class="sub-text">10:30 AM</div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-tools">
                                                <div class="ibx-actions">
                                                    <ul class="ibx-actions-hidden gx-1">
                                                        <li><a to="#" class="btn btn-sm btn-icon btn-trigger"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Archive"><em
                                                                    class="icon ni ni-archived"></em></a></li>
                                                        <li><a to="#" class="btn btn-sm btn-icon btn-trigger"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Delete"><em class="icon ni ni-trash"></em></a>
                                                        </li>
                                                    </ul>
                                                    <ul class="ibx-actions-visible gx-2">
                                                        <li>
                                                            <div class="dropdown"><a to="#"
                                                                    class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                                    data-bs-toggle="dropdown"><em
                                                                        class="icon ni ni-more-h"></em></a>
                                                                <div class="dropdown-menu dropdown-menu-end">
                                                                    <ul class="link-list-opt no-bdr">
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-eye"></em><span>View</span></a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-trash"></em><span>Delete</span></a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-archived"></em><span>Archive</span></a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                     
                                        <div class="nk-ibx-item"><a to="#" class="nk-ibx-link"></a>
                                            <div class="nk-ibx-item-elem nk-ibx-item-check">
                                                <div class="custom-control custom-control-sm custom-checkbox"><input
                                                        type="checkbox" class="custom-control-input nk-dt-item-check"
                                                        id="conversionItem09"/><label class="custom-control-label"
                                                        for="conversionItem09"></label></div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-star">
                                                <div class="asterisk"><a class="active" to="#"><em
                                                            class="asterisk-off icon ni ni-star"></em><em
                                                            class="asterisk-on icon ni ni-star-fill"></em></a></div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-user">
                                                <div class="user-card">
                                                    <div class="user-avatar"><span>TW</span><img src="images/avatar/d-sm.jpg" alt=""/>
                                                    </div>
                                                    <div class="user-name">
                                                        <div class="lead-text">Tammy Wilson</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-fluid">
                                                <div class="nk-ibx-context-group">
                                                    <div class="nk-ibx-context-badges"><span
                                                            class="badge bg-info">Team</span></div>
                                                    <div class="nk-ibx-context"><span class="nk-ibx-context-text"><span
                                                                class="heading">Thanks for completing our survey</span>
                                                            Since you've already completed our survey we wanted to give
                                                            you the opportunity to win as well </span></div>
                                                </div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-attach"></div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-time">
                                                <div class="sub-text">10:30 AM</div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-tools">
                                                <div class="ibx-actions">
                                                    <ul class="ibx-actions-hidden gx-1">
                                                        <li><a to="#" class="btn btn-sm btn-icon btn-trigger"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Archive"><em
                                                                    class="icon ni ni-archived"></em></a></li>
                                                        <li><a to="#" class="btn btn-sm btn-icon btn-trigger"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Delete"><em class="icon ni ni-trash"></em></a>
                                                        </li>
                                                    </ul>
                                                    <ul class="ibx-actions-visible gx-2">
                                                        <li>
                                                            <div class="dropdown"><a to="#"
                                                                    class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                                    data-bs-toggle="dropdown"><em
                                                                        class="icon ni ni-more-h"></em></a>
                                                                <div class="dropdown-menu dropdown-menu-end">
                                                                    <ul class="link-list-opt no-bdr">
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-eye"></em><span>View</span></a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-trash"></em><span>Delete</span></a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-archived"></em><span>Archive</span></a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                       
                                        <div class="nk-ibx-item"><a to="#" class="nk-ibx-link"></a>
                                            <div class="nk-ibx-item-elem nk-ibx-item-check">
                                                <div class="custom-control custom-control-sm custom-checkbox"><input
                                                        type="checkbox" class="custom-control-input nk-dt-item-check"
                                                        id="conversionItem11"/><label class="custom-control-label"
                                                        for="conversionItem11"></label></div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-star">
                                                <div class="asterisk"><a to="#"><em
                                                            class="asterisk-off icon ni ni-star"></em><em
                                                            class="asterisk-on icon ni ni-star-fill"></em></a></div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-user">
                                                <div class="user-card">
                                                    <div class="user-avatar bg-pink"><span>CL</span></div>
                                                    <div class="user-name">
                                                        <div class="lead-text">Catherine Larson</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-fluid">
                                                <div class="nk-ibx-context-group">
                                                    <div class="nk-ibx-context"><span class="nk-ibx-context-text"><span
                                                                class="heading">Bring personality to your design
                                                                work.</span> As designers, how we tell our stories is
                                                            key. We must be unique, genuine, and use language with
                                                            purpose to get meaningful results in our design work.
                                                        </span></div>
                                                </div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-attach"><a
                                                    class="link link-light"><em class="icon ni ni-clip-h"></em></a>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-time">
                                                <div class="sub-text">10:30 AM</div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-tools">
                                                <div class="ibx-actions">
                                                    <ul class="ibx-actions-hidden gx-1">
                                                        <li><a to="#" class="btn btn-sm btn-icon btn-trigger"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Archive"><em
                                                                    class="icon ni ni-archived"></em></a></li>
                                                        <li><a to="#" class="btn btn-sm btn-icon btn-trigger"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Delete"><em class="icon ni ni-trash"></em></a>
                                                        </li>
                                                    </ul>
                                                    <ul class="ibx-actions-visible gx-2">
                                                        <li>
                                                            <div class="dropdown"><a to="#"
                                                                    class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                                    data-bs-toggle="dropdown"><em
                                                                        class="icon ni ni-more-h"></em></a>
                                                                <div class="dropdown-menu dropdown-menu-end">
                                                                    <ul class="link-list-opt no-bdr">
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-eye"></em><span>View</span></a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-trash"></em><span>Delete</span></a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-archived"></em><span>Archive</span></a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="nk-ibx-item"><a to="#" class="nk-ibx-link"></a>
                                            <div class="nk-ibx-item-elem nk-ibx-item-check">
                                                <div class="custom-control custom-control-sm custom-checkbox"><input
                                                        type="checkbox" class="custom-control-input nk-dt-item-check"
                                                        id="conversionItem12"/><label class="custom-control-label"
                                                        for="conversionItem12"></label></div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-star">
                                                <div class="asterisk"><a to="#"><em
                                                            class="asterisk-off icon ni ni-star"></em><em
                                                            class="asterisk-on icon ni ni-star-fill"></em></a></div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-user">
                                                <div class="user-card">
                                                    <div class="user-avatar bg-azure"><span>SP</span></div>
                                                    <div class="user-name">
                                                        <div class="lead-text">Sara Phillips</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-fluid">
                                                <div class="nk-ibx-context-group">
                                                    <div class="nk-ibx-context"><span class="nk-ibx-context-text"><span
                                                                class="heading">Unique design portfolio examples.</span>
                                                            Prepare to be blown away with our favourite unique design
                                                            portfolio examples built </span></div>
                                                </div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-attach"></div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-time">
                                                <div class="sub-text">10:30 AM</div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-tools">
                                                <div class="ibx-actions">
                                                    <ul class="ibx-actions-hidden gx-1">
                                                        <li><a to="#" class="btn btn-sm btn-icon btn-trigger"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Archive"><em
                                                                    class="icon ni ni-archived"></em></a></li>
                                                        <li><a to="#" class="btn btn-sm btn-icon btn-trigger"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Delete"><em class="icon ni ni-trash"></em></a>
                                                        </li>
                                                    </ul>
                                                    <ul class="ibx-actions-visible gx-2">
                                                        <li>
                                                            <div class="dropdown"><a to="#"
                                                                    class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                                    data-bs-toggle="dropdown"><em
                                                                        class="icon ni ni-more-h"></em></a>
                                                                <div class="dropdown-menu dropdown-menu-end">
                                                                    <ul class="link-list-opt no-bdr">
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-eye"></em><span>View</span></a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-trash"></em><span>Delete</span></a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-archived"></em><span>Archive</span></a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="nk-ibx-item"><a to="#" class="nk-ibx-link"></a>
                                            <div class="nk-ibx-item-elem nk-ibx-item-check">
                                                <div class="custom-control custom-control-sm custom-checkbox"><input
                                                        type="checkbox" class="custom-control-input nk-dt-item-check"
                                                        id="conversionItem13"/><label class="custom-control-label"
                                                        for="conversionItem13"></label></div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-star">
                                                <div class="asterisk"><a to="#"><em
                                                            class="asterisk-off icon ni ni-star"></em><em
                                                            class="asterisk-on icon ni ni-star-fill"></em></a></div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-user">
                                                <div class="user-card">
                                                    <div class="user-avatar"><span>LM</span><img src="images/avatar/c-sm.jpg" alt=""/>
                                                    </div>
                                                    <div class="user-name">
                                                        <div class="lead-text">Laura Matthews</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-fluid">
                                                <div class="nk-ibx-context-group">
                                                    <div class="nk-ibx-context-badges"><span
                                                            class="badge bg-danger">Personal</span></div>
                                                    <div class="nk-ibx-context"><span class="nk-ibx-context-text"><span
                                                                class="heading">Credit Card Verification
                                                                Incomplete.</span> Your recently submitted credit card
                                                            verification has NOT been completed. We found the following
                                                            errors in your submission. </span></div>
                                                </div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-attach"></div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-time">
                                                <div class="sub-text">10:30 AM</div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-tools">
                                                <div class="ibx-actions">
                                                    <ul class="ibx-actions-hidden gx-1">
                                                        <li><a to="#" class="btn btn-sm btn-icon btn-trigger"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Archive"><em
                                                                    class="icon ni ni-archived"></em></a></li>
                                                        <li><a to="#" class="btn btn-sm btn-icon btn-trigger"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Delete"><em class="icon ni ni-trash"></em></a>
                                                        </li>
                                                    </ul>
                                                    <ul class="ibx-actions-visible gx-2">
                                                        <li>
                                                            <div class="dropdown"><a to="#"
                                                                    class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                                    data-bs-toggle="dropdown"><em
                                                                        class="icon ni ni-more-h"></em></a>
                                                                <div class="dropdown-menu dropdown-menu-end">
                                                                    <ul class="link-list-opt no-bdr">
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-eye"></em><span>View</span></a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-trash"></em><span>Delete</span></a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-archived"></em><span>Archive</span></a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="nk-ibx-item"><a to="#" class="nk-ibx-link"></a>
                                            <div class="nk-ibx-item-elem nk-ibx-item-check">
                                                <div class="custom-control custom-control-sm custom-checkbox"><input
                                                        type="checkbox" class="custom-control-input nk-dt-item-check"
                                                        id="conversionItem14"/><label class="custom-control-label"
                                                        for="conversionItem14"></label></div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-star">
                                                <div class="asterisk"><a to="#"><em
                                                            class="asterisk-off icon ni ni-star"></em><em
                                                            class="asterisk-on icon ni ni-star-fill"></em></a></div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-user">
                                                <div class="user-card">
                                                    <div class="user-avatar bg-gray"><span>MG</span></div>
                                                    <div class="user-name">
                                                        <div class="lead-text">Maria Grant</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-fluid">
                                                <div class="nk-ibx-context-group">
                                                    <div class="nk-ibx-context"><span class="nk-ibx-context-text"><span
                                                                class="heading">Introducing npm’s security insights
                                                                API.</span> Something I think is very important to
                                                            supply chain security is to have the right information
                                                            available to make decisions about risk </span></div>
                                                </div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-attach"></div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-time">
                                                <div class="sub-text">10:30 AM</div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-tools">
                                                <div class="ibx-actions">
                                                    <ul class="ibx-actions-hidden gx-1">
                                                        <li><a to="#" class="btn btn-sm btn-icon btn-trigger"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Archive"><em
                                                                    class="icon ni ni-archived"></em></a></li>
                                                        <li><a to="#" class="btn btn-sm btn-icon btn-trigger"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Delete"><em class="icon ni ni-trash"></em></a>
                                                        </li>
                                                    </ul>
                                                    <ul class="ibx-actions-visible gx-2">
                                                        <li>
                                                            <div class="dropdown"><a to="#"
                                                                    class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                                    data-bs-toggle="dropdown"><em
                                                                        class="icon ni ni-more-h"></em></a>
                                                                <div class="dropdown-menu dropdown-menu-end">
                                                                    <ul class="link-list-opt no-bdr">
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-eye"></em><span>View</span></a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-trash"></em><span>Delete</span></a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-archived"></em><span>Archive</span></a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="nk-ibx-item"><a to="#" class="nk-ibx-link"></a>
                                            <div class="nk-ibx-item-elem nk-ibx-item-check">
                                                <div class="custom-control custom-control-sm custom-checkbox"><input
                                                        type="checkbox" class="custom-control-input nk-dt-item-check"
                                                        id="conversionItem15"/><label class="custom-control-label"
                                                        for="conversionItem15"></label></div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-star">
                                                <div class="asterisk"><a to="#"><em
                                                            class="asterisk-off icon ni ni-star"></em><em
                                                            class="asterisk-on icon ni ni-star-fill"></em></a></div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-user">
                                                <div class="user-card">
                                                    <div class="user-avatar bg-dark"><span>TN</span></div>
                                                    <div class="user-name">
                                                        <div class="lead-text">Timothy Nichols</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-fluid">
                                                <div class="nk-ibx-context-group">
                                                    <div class="nk-ibx-context"><span class="nk-ibx-context-text"><span
                                                                class="heading">Do your table designs pass The Lunch
                                                                Test</span> This email goes out to everyone who designs
                                                            data-heavy applications. Lists and tables aren’t exactly the
                                                            sexiest part of design, but in my own personal experience
                                                        </span></div>
                                                </div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-attach"></div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-time">
                                                <div class="sub-text">10:30 AM</div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-tools">
                                                <div class="ibx-actions">
                                                    <ul class="ibx-actions-hidden gx-1">
                                                        <li><a to="#" class="btn btn-sm btn-icon btn-trigger"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Archive"><em
                                                                    class="icon ni ni-archived"></em></a></li>
                                                        <li><a to="#" class="btn btn-sm btn-icon btn-trigger"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Delete"><em class="icon ni ni-trash"></em></a>
                                                        </li>
                                                    </ul>
                                                    <ul class="ibx-actions-visible gx-2">
                                                        <li>
                                                            <div class="dropdown"><a to="#"
                                                                    class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                                    data-bs-toggle="dropdown"><em
                                                                        class="icon ni ni-more-h"></em></a>
                                                                <div class="dropdown-menu dropdown-menu-end">
                                                                    <ul class="link-list-opt no-bdr">
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-eye"></em><span>View</span></a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-trash"></em><span>Delete</span></a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-archived"></em><span>Archive</span></a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="nk-ibx-item"><a to="#" class="nk-ibx-link"></a>
                                            <div class="nk-ibx-item-elem nk-ibx-item-check">
                                                <div class="custom-control custom-control-sm custom-checkbox"><input
                                                        type="checkbox" class="custom-control-input nk-dt-item-check"
                                                        id="conversionItem16"/><label class="custom-control-label"
                                                        for="conversionItem16"></label></div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-star">
                                                <div class="asterisk"><a to="#"><em
                                                            class="asterisk-off icon ni ni-star"></em><em
                                                            class="asterisk-on icon ni ni-star-fill"></em></a></div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-user">
                                                <div class="user-card">
                                                    <div class="user-avatar"><span>JL</span></div>
                                                    <div class="user-name">
                                                        <div class="lead-text">Jenkins Lori</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-fluid">
                                                <div class="nk-ibx-context-group">
                                                    <div class="nk-ibx-context"><span class="nk-ibx-context-text"><span
                                                                class="heading">Can I get email alerts.</span> If you
                                                            subscribe to email notifications, you will receive an email
                                                            alert </span></div>
                                                </div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-attach"></div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-time">
                                                <div class="sub-text">10:30 AM</div>
                                            </div>
                                            <div class="nk-ibx-item-elem nk-ibx-item-tools">
                                                <div class="ibx-actions">
                                                    <ul class="ibx-actions-hidden gx-1">
                                                        <li><a to="#" class="btn btn-sm btn-icon btn-trigger"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Archive"><em
                                                                    class="icon ni ni-archived"></em></a></li>
                                                        <li><a to="#" class="btn btn-sm btn-icon btn-trigger"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Delete"><em class="icon ni ni-trash"></em></a>
                                                        </li>
                                                    </ul>
                                                    <ul class="ibx-actions-visible gx-2">
                                                        <li>
                                                            <div class="dropdown"><a to="#"
                                                                    class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                                    data-bs-toggle="dropdown"><em
                                                                        class="icon ni ni-more-h"></em></a>
                                                                <div class="dropdown-menu dropdown-menu-end">
                                                                    <ul class="link-list-opt no-bdr">
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-eye"></em><span>View</span></a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-trash"></em><span>Delete</span></a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-archived"></em><span>Archive</span></a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="nk-ibx-view">
                                        <div class="nk-ibx-head">
                                            <div class="nk-ibx-head-actions">
                                                <ul class="nk-ibx-head-tools g-1">
                                                    <li class="ms-n2"><a to="#"
                                                            class="btn btn-icon btn-trigger nk-ibx-hide"><em
                                                                class="icon ni ni-arrow-left"></em></a></li>
                                                    <li><a to="#" class="btn btn-icon btn-trigger btn-tooltip"
                                                            title="Archive"><em class="icon ni ni-archived"></em></a>
                                                    </li>
                                                    <li class="d-none d-sm-block"><a to="#"
                                                            class="btn btn-icon btn-trigger btn-tooltip"
                                                            title="Mark as Spam"><em class="icon ni ni-report"></em></a>
                                                    </li>
                                                    <li><a to="#" class="btn btn-icon btn-trigger btn-tooltip"
                                                            title="Delete"><em class="icon ni ni-trash"></em></a></li>
                                                    <li><a to="#" class="btn btn-icon btn-trigger btn-tooltip"
                                                            title="Label"><em class="icon ni ni-label"></em></a></li>
                                                    <li>
                                                        <div class="dropdown"><a to="#"
                                                                class="dropdown-toggle btn btn-icon btn-trigger"
                                                                data-bs-toggle="dropdown"><em
                                                                    class="icon ni ni-more-v"></em></a>
                                                            <div class="dropdown-menu">
                                                                <ul class="link-list-opt no-bdr">
                                                                    <li><a class="dropdown-item" to="#"><span>Mark as
                                                                                unread</span></a></li>
                                                                    <li><a class="dropdown-item" to="#"><span>Mark as
                                                                                not important</span></a></li>
                                                                    <li><a class="dropdown-item" to="#"><span>Archive
                                                                                this message</span></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="nk-ibx-head-actions">
                                                <ul class="nk-ibx-head-tools g-1">
                                                    <li class="d-none d-sm-block"><a to="#"
                                                            class="btn btn-icon btn-trigger btn-tooltip"
                                                            title="Prev"><em class="icon ni ni-chevron-left"></em></a>
                                                    </li>
                                                    <li class="d-none d-sm-block"><a to="#"
                                                            class="btn btn-icon btn-trigger btn-tooltip"
                                                            title="Next"><em class="icon ni ni-chevron-right"></em></a>
                                                    </li>
                                                    <li class="me-n1 me-lg-0"><a to="#"
                                                            class="btn btn-icon btn-trigger search-toggle toggle-search"
                                                            data-target="search"><em class="icon ni ni-search"></em></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="search-wrap" data-search="search">
                                                <div class="search-content"><a to="#"
                                                        class="search-back btn btn-icon toggle-search"
                                                        data-target="search"><em
                                                            class="icon ni ni-arrow-left"></em></a><input type="text"
                                                        class="form-control border-transparent form-focus-none"
                                                        placeholder="Search by user or message"/><button
                                                        class="search-submit btn btn-icon"><em
                                                            class="icon ni ni-search"></em></button></div>
                                            </div>
                                        </div>
                                        <div class="nk-ibx-reply nk-reply" data-simplebar id='notifi'>
                                            <div class="nk-ibx-reply-head">
                                                <div>
                                                    <h4 class="title">Introducing New Dashboard</h4>
                                                    <ul class="nk-ibx-tags g-1">
                                                        <li class="btn-group is-tags"><a
                                                                class="btn btn-xs btn-primary btn-dim"
                                                                to="#">Business</a><a
                                                                class="btn btn-xs btn-icon btn-primary btn-dim"
                                                                to="#"><em class="icon ni ni-cross"></em></a></li>
                                                        <li class="btn-group is-tags"><a
                                                                class="btn btn-xs btn-danger btn-dim"
                                                                to="#">Management</a><a
                                                                class="btn btn-xs btn-icon btn-danger btn-dim"
                                                                to="#"><em class="icon ni ni-cross"></em></a></li>
                                                        <li class="btn-group is-tags"><a
                                                                class="btn btn-xs btn-info btn-dim" to="#">Team</a><a
                                                                class="btn btn-xs btn-icon btn-info btn-dim"
                                                                to="#"><em class="icon ni ni-cross"></em></a></li>
                                                    </ul>
                                                </div>
                                                <ul class="d-flex g-1">
                                                    <li class="d-none d-sm-block"><a to="#"
                                                            class="btn btn-icon btn-trigger btn-tooltip"
                                                            title="Print"><em class="icon ni ni-printer"></em></a></li>
                                                    <li class="me-n1">
                                                        <div class="asterisk"><a
                                                                class="btn btn-trigger btn-icon btn-tooltip"
                                                                to="#"><em
                                                                    class="asterisk-off icon ni ni-star"></em><em
                                                                    class="asterisk-on icon ni ni-star-fill"></em></a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="nk-ibx-reply-group">
                                                <div class="nk-ibx-reply-item nk-reply-item">
                                                    <div class="nk-reply-header nk-ibx-reply-header is-collapsed">
                                                        <div class="nk-reply-desc">
                                                            <div class="nk-reply-avatar user-avatar bg-blue">
                                                                <span>AB</span></div>
                                                            <div class="nk-reply-info">
                                                                <div class="nk-reply-author lead-text">Abu Bin Ishtiyak
                                                                    <span class="date d-sm-none">14 Jan, 2020</span>
                                                                </div>
                                                                <div class="dropdown nk-reply-msg-info"><a to="#"
                                                                        class="dropdown-toggle sub-text dropdown-indicator"
                                                                        data-bs-toggle="dropdown">to Mildred</a>
                                                                    <div class="dropdown-menu dropdown-menu-md">
                                                                        <ul class="nk-reply-msg-meta">
                                                                            <li><span class="label">from:</span> <span
                                                                                    class="info"><a
                                                                                        to="#">info@softnio.com</a></span>
                                                                            </li>
                                                                            <li><span class="label">to:</span> <span
                                                                                    class="info"><a
                                                                                        to="#">team@softnio.com</a></span>
                                                                            </li>
                                                                            <li><span class="label">bcc:</span> <span
                                                                                    class="info"><a
                                                                                        to="#">team@softnio.com</a></span>
                                                                            </li>
                                                                            <li><span class="label">mailed-by:</span>
                                                                                <span class="info"><a
                                                                                        to="#">softnio.com</a></span>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="nk-reply-msg-excerpt">I am facing problem as
                                                                    i can not select currency on buy order page. Can you
                                                                    guys let me know what i am doing doing wrong? Please
                                                                    check attached files.</div>
                                                            </div>
                                                        </div>
                                                        <ul class="nk-reply-tools g-1">
                                                            <li class="attach-msg"><em class="icon ni ni-clip-h"></em>
                                                            </li>
                                                            <li class="date-msg"><span class="date">14 Jan, 2020</span>
                                                            </li>
                                                            <li class="replyto-msg"><a to="#"
                                                                    class="btn btn-trigger btn-icon btn-tooltip"
                                                                    title="Reply"><em
                                                                        class="icon ni ni-curve-up-left"></em></a></li>
                                                            <li class="more-actions">
                                                                <div class="dropdown"><a to="#"
                                                                        class="dropdown-toggle btn btn-trigger btn-icon"
                                                                        data-bs-toggle="dropdown"><em
                                                                            class="icon ni ni-more-v"></em></a>
                                                                    <div class="dropdown-menu dropdown-menu-end">
                                                                        <ul class="link-list-opt no-bdr">
                                                                            <li><a class="dropdown-item" to="#"><em
                                                                                        class="icon ni ni-reply-fill"></em><span>Reply
                                                                                        to</span></a></li>
                                                                            <li><a class="dropdown-item" to="#"><em
                                                                                        class="icon ni ni-forward-arrow-fill"></em><span>Forward</span></a>
                                                                            </li>
                                                                            <li><a class="dropdown-item" to="#"><em
                                                                                        class="icon ni ni-trash-fill"></em><span>Delete
                                                                                        this</span></a></li>
                                                                            <li><a class="dropdown-item" to="#"><em
                                                                                        class="icon ni ni-report-fill"></em><span>Report
                                                                                        Spam</span></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="nk-reply-body nk-ibx-reply-body">
                                                        <div class="nk-reply-entry entry">
                                                            <p>Hello team,</p>
                                                            <p>I am facing problem as i can not select currency on buy
                                                                order page. Can you guys let me know what i am doing
                                                                doing wrong? Please check attached files.</p>
                                                            <p>Thank you <br/> Ishityak</p>
                                                        </div>
                                                        <div class="attach-files">
                                                            <ul class="attach-list">
                                                                <li class="attach-item"><a class="download" to="#"><em
                                                                            class="icon ni ni-img"></em><span>error-show-On-order.jpg</span></a>
                                                                </li>
                                                                <li class="attach-item"><a class="download" to="#"><em
                                                                            class="icon ni ni-img"></em><span>full-page-error.jpg</span></a>
                                                                </li>
                                                            </ul>
                                                            <div class="attach-foot"><span class="attach-info">2 files
                                                                    attached</span><a class="attach-download link"
                                                                    to="#"><em
                                                                        class="icon ni ni-download"></em><span>Download
                                                                        All</span></a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="nk-ibx-reply-item nk-reply-item">
                                                    <div class="nk-reply-header nk-ibx-reply-header">
                                                        <div class="nk-reply-desc">
                                                            <div class="nk-reply-avatar user-avatar bg-blue"><img
                                                                    src="images/avatar/c-sm.jpg" alt=""/></div>
                                                            <div class="nk-reply-info">
                                                                <div class="nk-reply-author lead-text">Mildred Delgado
                                                                    <span class="date d-sm-none">18 Jan, 2020</span>
                                                                </div>
                                                                <div class="dropdown nk-reply-msg-info"><a to="#"
                                                                        class="dropdown-toggle sub-text dropdown-indicator"
                                                                        data-bs-toggle="dropdown">to Me</a>
                                                                    <div class="dropdown-menu dropdown-menu-md">
                                                                        <ul class="nk-reply-msg-meta">
                                                                            <li><span class="label">from:</span> <span
                                                                                    class="info"><a
                                                                                        to="#">info@softnio.com</a></span>
                                                                            </li>
                                                                            <li><span class="label">to:</span> <span
                                                                                    class="info"><a
                                                                                        to="#">team@softnio.com</a></span>
                                                                            </li>
                                                                            <li><span class="label">bcc:</span> <span
                                                                                    class="info"><a
                                                                                        to="#">team@softnio.com</a></span>
                                                                            </li>
                                                                            <li><span class="label">mailed-by:</span>
                                                                                <span class="info"><a
                                                                                        to="#">softnio.com</a></span>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="nk-reply-msg-excerpt">It would be great if
                                                                    you send me itiam ut neque in magna porttitor...
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <ul class="nk-reply-tools g-1">
                                                            <li class="date-msg"><span class="date">14 Jan, 2020</span>
                                                            </li>
                                                            <li class="replyto-msg"><a to="#"
                                                                    class="btn btn-trigger btn-icon btn-tooltip"
                                                                    title="Reply"><em
                                                                        class="icon ni ni-curve-up-left"></em></a></li>
                                                            <li class="more-actions">
                                                                <div class="dropdown"><a to="#"
                                                                        class="dropdown-toggle btn btn-trigger btn-icon"
                                                                        data-bs-toggle="dropdown"><em
                                                                            class="icon ni ni-more-v"></em></a>
                                                                    <div class="dropdown-menu dropdown-menu-end">
                                                                        <ul class="link-list-opt no-bdr">
                                                                            <li><a class="dropdown-item" to="#"><em
                                                                                        class="icon ni ni-reply-fill"></em><span>Reply
                                                                                        to</span></a></li>
                                                                            <li><a class="dropdown-item" to="#"><em
                                                                                        class="icon ni ni-forward-arrow-fill"></em><span>Forward</span></a>
                                                                            </li>
                                                                            <li><a class="dropdown-item" to="#"><em
                                                                                        class="icon ni ni-trash-fill"></em><span>Delete
                                                                                        this</span></a></li>
                                                                            <li><a class="dropdown-item" to="#"><em
                                                                                        class="icon ni ni-report-fill"></em><span>Report
                                                                                        Spam</span></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="nk-reply-body nk-ibx-reply-body">
                                                        <div class="nk-reply-entry entry">
                                                            <p>Hello team,</p>
                                                            <p>I am facing problem as i can not select currency on buy
                                                                order page. Can you guys let me know what i am doing
                                                                doing wrong? Please check attached files.</p>
                                                            <p>Thank you <br/> Ishityak</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="nk-ibx-reply-item nk-reply-item">
                                                    <div class="nk-reply-header nk-ibx-reply-header is-opened">
                                                        <div class="nk-reply-desc">
                                                            <div class="nk-reply-avatar user-avatar bg-blue">
                                                                <span>AB</span></div>
                                                            <div class="nk-reply-info">
                                                                <div class="nk-reply-author lead-text">Abu Bin Ishtiyak
                                                                    <span class="date d-sm-none">20 Jan, 2020</span>
                                                                </div>
                                                                <div class="dropdown nk-reply-msg-info"><a to="#"
                                                                        class="dropdown-toggle sub-text dropdown-indicator"
                                                                        data-bs-toggle="dropdown">to Mildred</a>
                                                                    <div class="dropdown-menu dropdown-menu-md">
                                                                        <ul class="nk-reply-msg-meta">
                                                                            <li><span class="label">from:</span> <span
                                                                                    class="info"><a
                                                                                        to="#">info@softnio.com</a></span>
                                                                            </li>
                                                                            <li><span class="label">to:</span> <span
                                                                                    class="info"><a
                                                                                        to="#">team@softnio.com</a></span>
                                                                            </li>
                                                                            <li><span class="label">bcc:</span> <span
                                                                                    class="info"><a
                                                                                        to="#">team@softnio.com</a></span>
                                                                            </li>
                                                                            <li><span class="label">mailed-by:</span>
                                                                                <span class="info"><a
                                                                                        to="#">softnio.com</a></span>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="nk-reply-msg-excerpt">It would be great if
                                                                    you send me itiam ut neque in magna porttitor...
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <ul class="nk-reply-tools g-1">
                                                            <li class="date-msg"><span class="date">14 Jan, 2020</span>
                                                            </li>
                                                            <li class="replyto-msg"><a to="#"
                                                                    class="btn btn-trigger btn-icon btn-tooltip"
                                                                    title="Reply"><em
                                                                        class="icon ni ni-curve-up-left"></em></a></li>
                                                            <li class="more-actions">
                                                                <div class="dropdown"><a to="#"
                                                                        class="dropdown-toggle btn btn-trigger btn-icon"
                                                                        data-bs-toggle="dropdown"><em
                                                                            class="icon ni ni-more-v"></em></a>
                                                                    <div class="dropdown-menu dropdown-menu-end">
                                                                        <ul class="link-list-opt no-bdr">
                                                                            <li><a class="dropdown-item" to="#"><em
                                                                                        class="icon ni ni-reply-fill"></em><span>Reply
                                                                                        to</span></a></li>
                                                                            <li><a class="dropdown-item" to="#"><em
                                                                                        class="icon ni ni-forward-arrow-fill"></em><span>Forward</span></a>
                                                                            </li>
                                                                            <li><a class="dropdown-item" to="#"><em
                                                                                        class="icon ni ni-trash-fill"></em><span>Delete
                                                                                        this</span></a></li>
                                                                            <li><a class="dropdown-item" to="#"><em
                                                                                        class="icon ni ni-report-fill"></em><span>Report
                                                                                        Spam</span></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="nk-reply-body nk-ibx-reply-body">
                                                        <div class="nk-reply-entry entry">
                                                            <p>Hello team,</p>
                                                            <p>I am facing problem as i can not select currency on buy
                                                                order page. Can you guys let me know what i am doing
                                                                doing wrong? Please check attached files.</p>
                                                            <p>Thank you <br/> Ishityak</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="nk-ibx-reply-form nk-reply-form">
                                                <div class="nk-reply-form-header">
                                                    <div class="nk-reply-form-group">
                                                        <div class="nk-reply-form-dropdown">
                                                            <div class="dropdown"><a
                                                                    class="btn btn-sm btn-trigger btn-icon"
                                                                    data-bs-toggle="dropdown" to="#"><em
                                                                        class="icon ni ni-curve-up-left"></em></a>
                                                                <div class="dropdown-menu dropdown-menu-md">
                                                                    <ul class="link-list-opt no-bdr">
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-reply-fill"></em>
                                                                                <span>Reply to Abu Bin
                                                                                    Ishtiyak</span></a></li>
                                                                        <li><a class="dropdown-item" to="#"><em
                                                                                    class="icon ni ni-forward-arrow-fill"></em>
                                                                                <span>Forword</span></a></li>
                                                                        <li class="divider"></li>
                                                                        <li><a to="#"><em
                                                                                    class="icon ni ni-edit-fill"></em>
                                                                                <span>Edit Subject</span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="nk-reply-form-title d-sm-none">Reply</div>
                                                        <div class="nk-reply-form-input-group">
                                                            <div class="nk-reply-form-input nk-reply-form-input-to">
                                                                <label class="label">To</label><input type="text"
                                                                    value="info@softnio.com" class="input-mail tagify"
                                                                    placeholder=""
                                                                    data-whitelist="team@softnio.com, help@softnio.com, contact@softnio.com"/>
                                                            </div>
                                                            <div class="nk-reply-form-input nk-reply-form-input-cc"
                                                                data-content="base-mail-cc"><label
                                                                    class="label">Cc</label><input type="text"
                                                                    class="input-mail tagify"/><a to="#"
                                                                    class="toggle-opt" data-target="base-mail-cc"><em
                                                                        class="icon ni ni-cross"></em></a></div>
                                                            <div class="nk-reply-form-input nk-reply-form-input-bcc"
                                                                data-content="base-mail-bcc"><label
                                                                    class="label">Bcc</label><input type="text"
                                                                    class="input-mail tagify"/><a to="#"
                                                                    class="toggle-opt" data-target="base-mail-bcc"><em
                                                                        class="icon ni ni-cross"></em></a></div>
                                                        </div>
                                                        <ul class="nk-reply-form-nav">
                                                            <li><a tabindex="-1" class="toggle-opt"
                                                                    data-target="base-mail-cc" to="#">CC</a></li>
                                                            <li><a tabindex="-1" class="toggle-opt"
                                                                    data-target="base-mail-bcc" to="#">BCC</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="nk-reply-form-editor">
                                                    <div class="nk-reply-form-field"><textarea
                                                            class="form-control form-control-simple no-resize"
                                                            placeholder="Hello"></textarea></div>
                                                </div>
                                                <div class="nk-reply-form-tools">
                                                    <ul class="nk-reply-form-actions g-1">
                                                        <li class="me-2"><button class="btn btn-primary"
                                                                type="submit">Send</button></li>
                                                        <li>
                                                            <div class="dropdown"><a class="btn btn-icon btn-sm"
                                                                    data-bs-toggle="dropdown" to="#"><em
                                                                        class="icon ni ni-hash" data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        title="Template"></em></a>
                                                                <div class="dropdown-menu">
                                                                    <ul class="link-list-opt no-bdr link-list-template">
                                                                        <li class="opt-head"><span>Quick Insert</span>
                                                                        </li>
                                                                        <li><a to="#"><span>Thank you
                                                                                    message</span></a></li>
                                                                        <li><a to="#"><span>Your issues
                                                                                    solved</span></a></li>
                                                                        <li><a to="#"><span>Thank you
                                                                                    message</span></a></li>
                                                                        <li class="divider"/>
                                                                        <li><a to="#"><em
                                                                                    class="icon ni ni-file-plus"></em><span>Save
                                                                                    as Template</span></a></li>
                                                                        <li><a to="#"><em
                                                                                    class="icon ni ni-notes-alt"></em><span>Manage
                                                                                    Template</span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li><a class="btn btn-icon btn-sm" data-bs-toggle="tooltip"
                                                                data-bs-placement="top" title="Upload Attachment"
                                                                to="#"><em class="icon ni ni-clip-v"></em></a></li>
                                                        <li><a class="btn btn-icon btn-sm" data-bs-toggle="tooltip"
                                                                data-bs-placement="top" title="Upload Images"
                                                                to="#"><em class="icon ni ni-img"></em></a></li>
                                                    </ul>
                                                    <ul class="nk-reply-form-actions g-1">
                                                        <li>
                                                            <div class="dropdown"><a to="#"
                                                                    class="dropdown-toggle btn-trigger btn btn-icon"
                                                                    data-bs-toggle="dropdown"><em
                                                                        class="icon ni ni-more-v"></em></a>
                                                                <div class="dropdown-menu dropdown-menu-end">
                                                                    <ul class="link-list-opt no-bdr">
                                                                        <li><a to="#"><span>Another Option</span></a>
                                                                        </li>
                                                                        <li><a to="#"><span>More Option</span></a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li><a to="#" class="btn-trigger btn btn-icon me-n2"><em
                                                                    class="icon ni ni-trash"></em></a></li>
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
                                    </div>
                            <DashFooter />
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}

export default EmployeeNotification