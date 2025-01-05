import { Link } from 'react-router-dom'
import logo from '../assets/img/Edujobs.svg'
function Login(){
    return(
        <>

<body class="nk-body bg-white npc-default pg-auth">
    <div class="nk-app-root">
        <div class="nk-main ">
            <div class="nk-wrap nk-wrap-nosidebar">
                <div class="nk-content ">
                    <div class="nk-split nk-split-page nk-split-md">
                        <div class="nk-split-content nk-block-area nk-block-area-column nk-auth-container bg-white">
                            <div class="nk-block nk-block-middle nk-auth-body">
                                <div class="brand-logo pb-2"><Link to="/" class=""><img
                                            class="logo-dark  " src={logo} style={{width:'200px'}}
                                             alt="logo-dark"/></Link></div>
                                <div class="nk-block-head">
                                    <div class="nk-block-head-content">
                                        <h5 class="nk-block-title">Sign-In</h5>
                                        <div class="nk-block-des">
                                            <p>Access the DashLite panel using your email and passcode.</p>
                                        </div>
                                    </div>
                                </div>
                                <form action="#">
                                    <div class="form-group">
                                        <div class="form-label-group"><label class="form-label" for="default-01">Email
                                                or Username</label><a class="link link-primary link-sm" tabindex="-1"
                                                href="#">Need Help?</a></div>
                                        <div class="form-control-wrap"><input type="text"
                                                class="form-control form-control-lg" id="default-01"
                                                placeholder="Enter your email address or username"/></div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-label-group"><label class="form-label"
                                                for="password">Passcode</label><a class="link link-primary link-sm"
                                                tabindex="-1" href="auth-reset-v3.html">Forgot Code?</a></div>
                                        <div class="form-control-wrap"><a tabindex="-1" href="#"
                                                class="form-icon form-icon-right passcode-switch lg"
                                                data-target="password"><em
                                                    class="passcode-icon icon-show icon ni ni-eye"></em><em
                                                    class="passcode-icon icon-hide icon ni ni-eye-off"></em></a><input
                                                type="password" class="form-control form-control-lg" id="password"
                                                placeholder="Enter your passcode"/></div>
                                    </div>
                                    <div class="form-group"><button class="btn btn-lg btn-primary btn-block">Sign
                                            in</button></div>
                                </form>
                                <div class="form-note-s2 pt-4"> New on our platform? <Link
                                        to="/sign">Create an account</Link></div>
                                <div class="text-center pt-4 pb-3">
                                    <h6 class="overline-title overline-title-sap"><span>OR</span></h6>
                                </div>
                                <ul class="nav justify-center gx-4">
                                    <li class="nav-item"><Link class="link link-primary fw-normal py-2 px-3 fs-13px"
                                            to="/dashboard">Facebook</Link></li>
                                    <li class="nav-item"><a class="link link-primary fw-normal py-2 px-3 fs-13px"
                                            href="#">Google</a></li>
                                </ul>
                                <div class="text-center mt-5"><span class="fw-500">I don't have an account? <a
                                            href="#">Try 15 days free</a></span></div>
                            </div>
                            <div class="nk-block nk-auth-footer">
                                <div class="nk-block-between">
                                    <ul class="nav nav-sm">
                                        <li class="nav-item"><a class="link link-primary fw-normal py-2 px-3 fs-13px"
                                                href="#">Terms & Condition</a></li>
                                        <li class="nav-item"><a class="link link-primary fw-normal py-2 px-3 fs-13px"
                                                href="#">Privacy Policy</a></li>
                                        <li class="nav-item"><a class="link link-primary fw-normal py-2 px-3 fs-13px"
                                                href="#">Help</a></li>
                                        <li class="nav-item dropup"><a
                                                class="dropdown-toggle dropdown-indicator has-indicator link link-primary fw-normal py-2 px-3 fs-13px"
                                                data-bs-toggle="dropdown" data-offset="0,10"><small>English</small></a>
                                            <div class="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                                <ul class="language-list">
                                                    <li><a href="#" class="language-item"><img
                                                                src="../../images/flags/english.png" alt=""
                                                                class="language-flag"/><span
                                                                class="language-name">English</span></a></li>
                                                    <li><a href="#" class="language-item"><img
                                                                src="../../images/flags/spanish.png" alt=""
                                                                class="language-flag"/><span
                                                                class="language-name">Español</span></a></li>
                                                    <li><a href="#" class="language-item"><img
                                                                src="../../images/flags/french.png" alt=""
                                                                class="language-flag"/><span
                                                                class="language-name">Français</span></a></li>
                                                    <li><a href="#" class="language-item"><img
                                                                src="../../images/flags/turkey.png" alt=""
                                                                class="language-flag"/><span
                                                                class="language-name">Türkçe</span></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="mt-3">
                                    <p>&copy; 2024 DashLite. All Rights Reserved.</p>
                                </div>
                            </div>
                        </div>
                        <div class="nk-split-content nk-split-stretch bg-abstract"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div class="nk-demo-panel nk-demo-panel-2x toggle-slide toggle-slide-right" data-content="demoML"
        data-toggle-overlay="true" data-toggle-body="true" data-toggle-screen="any">
        <div class="nk-demo-head">
            <h6 class="mb-0">Switch Demo Layout</h6><a
                class="nk-demo-close toggle btn btn-icon btn-trigger revarse mr-n2" data-target="demoML" href="#"><em
                    class="icon ni ni-cross"></em></a>
        </div>
        <div class="nk-demo-list" data-simplebar>
            <div class="nk-demo-item"><a href="../../../demo1/index.html">
                    <div class="nk-demo-image bg-blue"><img class="bg-purple"
                            src="../../../images/landing/layout-1d.jpg"
                            srcset="https://dashlite.net/images/landing/layout-1d2x.jpg 2x" alt="Demo Layout 1"/></div>
                    <span class="nk-demo-title"><strong>Demo Layout 1</strong></span>
                </a></div>
            <div class="nk-demo-item"><a href="../../index.html">
                    <div class="nk-demo-image bg-purple"><img src="../../../images/landing/layout-2d.jpg"
                            srcset="https://dashlite.net/images/landing/layout-2d2x.jpg 2x" alt="Demo Layout 2"/></div>
                    <span class="nk-demo-title"><strong>Demo Layout 2</strong></span>
                </a></div>
            <div class="nk-demo-item"><a href="../../../demo3/index.html">
                    <div class="nk-demo-image bg-success"><img src="../../../images/landing/layout-3d.jpg"
                            srcset="https://dashlite.net/images/landing/layout-3d2x.jpg 2x" alt="Demo Layout 3"/></div>
                    <span class="nk-demo-title"><strong>Demo Layout 3</strong></span>
                </a></div>
            <div class="nk-demo-item"><a href="../../../demo4/index.html">
                    <div class="nk-demo-image bg-indigo"><img src="../../../images/landing/layout-4d.jpg"
                            srcset="https://dashlite.net/images/landing/layout-4d2x.jpg 2x" alt="Demo Layout 4"/></div>
                    <span class="nk-demo-title"><strong>Demo Layout 4</strong></span>
                </a></div>
            <div class="nk-demo-item"><a href="../../../demo5/index.html">
                    <div class="nk-demo-image bg-orange"><img src="../../../images/landing/layout-5d.jpg"
                            srcset="https://dashlite.net/images/landing/layout-5d2x.jpg 2x" alt="Demo Layout 5"/></div>
                    <span class="nk-demo-title"><strong>Demo Layout 5</strong></span>
                </a></div>
            <div class="nk-demo-item"><a href="../../../demo6/index.html">
                    <div class="nk-demo-image bg-purple"><img src="../../../images/landing/layout-6d.jpg"
                            srcset="https://dashlite.net/images/landing/layout-6d2x.jpg 2x" alt="Demo Layout 6"/></div>
                    <span class="nk-demo-title"><strong>Demo Layout 6</strong></span>
                </a></div>
            <div class="nk-demo-item"><a href="../../../demo7/index.html">
                    <div class="nk-demo-image bg-teal"><img src="../../../images/landing/layout-7d.jpg"
                            srcset="https://dashlite.net/images/landing/layout-7d2x.jpg 2x" alt="Demo Layout 7"/></div>
                    <span class="nk-demo-title"><strong>Demo Layout 7</strong></span>
                </a></div>
            <div class="nk-demo-item"><a href="../../../demo8/index.html">
                    <div class="nk-demo-image bg-azure"><img src="../../../images/landing/layout-8d.jpg"
                            srcset="https://dashlite.net/images/landing/layout-8d2x.jpg 2x" alt="Demo Layout 8"/></div>
                    <span class="nk-demo-title"><strong>Demo Layout 8</strong></span>
                </a></div>
            <div class="nk-demo-item"><a href="../../../demo9/index.html">
                    <div class="nk-demo-image bg-pink"><img src="../../../images/landing/layout-9d.jpg"
                            srcset="https://dashlite.net/images/landing/layout-9d2x.jpg 2x" alt="Demo Layout 9"/></div>
                    <span class="nk-demo-title"><strong>Demo Layout 9</strong></span>
                </a></div>
            <div class="nk-demo-item"><a href="../../../landing/index.html">
                    <div class="nk-demo-image bg-red"><img src="../../../images/landing/main-landing.jpg"
                            srcset="https://dashlite.net/images/landing/main-landing2x.jpg 2x" alt="Landing Page"/></div>
                    <span class="nk-demo-title"><strong>Landing Page</strong> <span
                            class="badge badge-danger ml-1">Free</span></span>
                </a></div>
        </div>
    </div>
    <div class="nk-demo-panel nk-demo-panel-2x toggle-slide toggle-slide-right" data-content="demoUC"
        data-toggle-overlay="true" data-toggle-body="true" data-toggle-screen="any">
        <div class="nk-demo-head">
            <h6 class="mb-0">Use Case Concept</h6><a class="nk-demo-close toggle btn btn-icon btn-trigger revarse mr-n2"
                data-target="demoUC" href="#"><em class="icon ni ni-cross"></em></a>
        </div>
        <div class="nk-demo-list" data-simplebar>
            <div class="nk-demo-item"><a href="../../../demo9/copywriter/index.html">
                    <div class="nk-demo-image bg-indigo"><img src="../../../images/landing/demo-ai-copywriter.jpg"
                            srcset="https://dashlite.net/images/landing/demo-ai-copywriter2x.jpg 2x"
                            alt="ai-copywriter"/></div><span class="nk-demo-title"><em
                            class="text-primary">Demo9</em><br/><strong>Ai Copywriter Panel</strong></span>
                </a></div>
            <div class="nk-demo-item"><a href="../../../demo7/pharmacy/index.html">
                    <div class="nk-demo-image bg-warning"><img src="../../../images/landing/demo-pharmacy.jpg"
                            srcset="https://dashlite.net/images/landing/demo-pharmacy2x.jpg 2x" alt="pharmacy"/></div>
                    <span class="nk-demo-title"><em class="text-primary">Demo7</em><br/><strong>Pharmacy Management
                            Panel</strong></span>
                </a></div>
            <div class="nk-demo-item"><a href="../../../demo5/loan/index.html">
                    <div class="nk-demo-image bg-purple"><img src="../../../images/landing/demo-loan.jpg"
                            srcset="https://dashlite.net/images/landing/demo-loan2x.jpg 2x" alt="loan"/></div><span
                        class="nk-demo-title"><em class="text-primary">Demo5</em><br/><strong>Loan Management
                            Panel</strong></span>
                </a></div>
            <div class="nk-demo-item"><a href="../../ecommerce/index.html">
                    <div class="nk-demo-image bg-dark"><img src="../../../images/landing/demo-ecommerce.jpg"
                            srcset="https://dashlite.net/images/landing/demo-ecommerce2x.jpg 2x" alt="Ecommerce"/></div>
                    <span class="nk-demo-title"><em class="text-primary">Demo2</em><br/><strong>E-Commerce
                            Panel</strong></span>
                </a></div>
            <div class="nk-demo-item"><a href="../../lms/index.html">
                    <div class="nk-demo-image bg-danger"><img src="../../../images/landing/demo-lms.jpg"
                            srcset="https://dashlite.net/images/landing/demo-lms2x.jpg 2x" alt="LMS"/></div><span
                        class="nk-demo-title"><em class="text-primary">Demo2</em><br/><strong>LMS / Learning Management
                            System</strong></span>
                </a></div>
            <div class="nk-demo-item"><a href="../../../demo1/crm/index.html">
                    <div class="nk-demo-image bg-info"><img src="../../../images/landing/demo-crm.jpg"
                            srcset="https://dashlite.net/images/landing/demo-crm2x.jpg 2x"
                            alt="CRM / Customer Relationship"/></div><span class="nk-demo-title"><em
                            class="text-primary">Demo1</em><br/><strong>CRM / Customer Relationship
                            Management</strong></span>
                </a></div>
            <div class="nk-demo-item"><a href="../../../demo7/hospital/index.html">
                    <div class="nk-demo-image bg-indigo"><img src="../../../images/landing/demo-hospital.jpg"
                            srcset="https://dashlite.net/images/landing/demo-hospital2x.jpg 2x"
                            alt="Hospital Managemen"/></div><span class="nk-demo-title"><em
                            class="text-primary">Demo7</em><br/><strong>Hospital Management</strong></span>
                </a></div>
            <div class="nk-demo-item"><a href="../../../demo1/hotel/index.html">
                    <div class="nk-demo-image bg-pink"><img src="../../../images/landing/demo-hotel.jpg"
                            srcset="https://dashlite.net/images/landing/demo-hotel2x.jpg 2x" alt="Hotel Managemen"/>
                    </div><span class="nk-demo-title"><em class="text-primary">Demo1</em><br/><strong>Hotel
                            Management</strong></span>
                </a></div>
            <div class="nk-demo-item"><a href="../../../demo3/cms/index.html">
                    <div class="nk-demo-image bg-dark"><img src="../../../images/landing/demo-cms.jpg"
                            srcset="https://dashlite.net/images/landing/demo-cms2x.jpg 2x" alt="cms"/></div><span
                        class="nk-demo-title"><em class="text-primary">Demo3</em><br/><strong>CMS Panel</strong></span>
                </a></div>
            <div class="nk-demo-item"><a href="../../../demo5/crypto/index.html">
                    <div class="nk-demo-image bg-warning"><img src="../../../images/landing/demo-buysell.jpg"
                            srcset="https://dashlite.net/images/landing/demo-buysell2x.jpg 2x"
                            alt="Crypto BuySell / Wallet"/></div><span class="nk-demo-title"><em
                            class="text-primary">Demo5</em><br/><strong>Crypto BuySell Panel</strong></span>
                </a></div>
            <div class="nk-demo-item"><a href="../../../demo6/invest/index.html">
                    <div class="nk-demo-image bg-indigo"><img src="../../../images/landing/demo-invest.jpg"
                            srcset="https://dashlite.net/images/landing/demo-invest2x.jpg 2x" alt="HYIP / Investment"/>
                    </div><span class="nk-demo-title"><em class="text-primary">Demo6</em><br/><strong>HYIP / Investment
                            Panel</strong></span>
                </a></div>
            <div class="nk-demo-item"><a href="../../../demo3/apps/file-manager.html">
                    <div class="nk-demo-image bg-purple"><img src="../../../images/landing/demo-file-manager.jpg"
                            srcset="https://dashlite.net/images/landing/demo-file-manager2x.jpg 2x" alt="File Manager"/>
                    </div><span class="nk-demo-title"><em class="text-primary">Demo3</em><br/><strong>Apps - File
                            Manager</strong></span>
                </a></div>
            <div class="nk-demo-item"><a href="../../../demo4/subscription/index.html">
                    <div class="nk-demo-image bg-primary"><img src="../../../images/landing/demo-subscription.jpg"
                            srcset="https://dashlite.net/images/landing/demo-subscription2x.jpg 2x"
                            alt="SAAS / Subscription"/></div><span class="nk-demo-title"><em
                            class="text-primary">Demo4</em><br/><strong>SAAS / Subscription Panel</strong></span>
                </a></div>
            <div class="nk-demo-item"><a href="../../../covid/index.html">
                    <div class="nk-demo-image bg-danger"><img src="../../../images/landing/demo-covid19.jpg"
                            srcset="https://dashlite.net/images/landing/demo-covid192x.jpg 2x" alt="Covid Situation"/>
                    </div><span class="nk-demo-title"><em class="text-primary">Covid</em><br/><strong>Coronavirus
                            Situation</strong></span>
                </a></div>
            <div class="nk-demo-item"><a href="../../../demo3/apps/messages.html">
                    <div class="nk-demo-image bg-success"><img src="../../../images/landing/demo-messages.jpg"
                            srcset="https://dashlite.net/images/landing/demo-messages2x.jpg 2x" alt="Messages"/></div>
                    <span class="nk-demo-title"><em class="text-primary">Demo3</em><br/><strong>Apps -
                            Messages</strong></span>
                </a></div>
            <div class="nk-demo-item"><a href="../../../demo3/apps/mailbox.html">
                    <div class="nk-demo-image bg-purple"><img src="../../../images/landing/demo-inbox.jpg"
                            srcset="https://dashlite.net/images/landing/demo-inbox2x.jpg 2x" alt="Inbox"/></div><span
                        class="nk-demo-title"><em class="text-primary">Demo3</em><br/><strong>Apps -
                            Mailbox</strong></span>
                </a></div>
            <div class="nk-demo-item"><a href="../../../demo3/apps/chats.html">
                    <div class="nk-demo-image bg-purple"><img src="../../../images/landing/demo-chats.jpg"
                            srcset="https://dashlite.net/images/landing/demo-chats2x.jpg 2x" alt="Chats / Messenger"/>
                    </div><span class="nk-demo-title"><em class="text-primary">Demo3</em><br/><strong>Apps -
                            Chats</strong></span>
                </a></div>
        </div>
    </div>
    <div class="nk-demo-panel toggle-slide toggle-slide-right" data-content="settingPanel" data-toggle-overlay="true"
        data-toggle-body="true" data-toggle-screen="any">
        <div class="nk-demo-head">
            <h6 class="mb-0">Preview Settings</h6><a class="nk-demo-close toggle btn btn-icon btn-trigger revarse mr-n2"
                data-target="settingPanel" href="#"><em class="icon ni ni-cross"></em></a>
        </div>
        <div class="nk-opt-panel" data-simplebar>
            <div class="nk-opt-set">
                <div class="nk-opt-set-title">Direction Change</div>
                <div class="nk-opt-list col-2x">
                    <div class="nk-opt-item only-text active" data-key="dir" data-update="ltr"><span
                            class="nk-opt-item-bg"><span class="nk-opt-item-name">LTR Mode</span></span></div>
                    <div class="nk-opt-item only-text" data-key="dir" data-update="rtl"><span
                            class="nk-opt-item-bg"><span class="nk-opt-item-name">RTL Mode</span></span></div>
                </div>
            </div>
            <div class="nk-opt-set">
                <div class="nk-opt-set-title">Main UI Style</div>
                <div class="nk-opt-list col-2x">
                    <div class="nk-opt-item only-text active" data-key="style" data-update="ui-default"><span
                            class="nk-opt-item-bg"><span class="nk-opt-item-name">Default</span></span></div>
                    <div class="nk-opt-item only-text" data-key="style" data-update="ui-bordered"><span
                            class="nk-opt-item-bg"><span class="nk-opt-item-name">Bordered</span></span></div>
                </div>
            </div>
            <div class="nk-opt-set nk-opt-set-aside">
                <div class="nk-opt-set-title">Sidebar Style</div>
                <div class="nk-opt-list col-4x">
                    <div class="nk-opt-item" data-key="aside" data-update="is-light"><span
                            class="nk-opt-item-bg is-light"><span class="bg-lighter"></span></span><span
                            class="nk-opt-item-name">White</span></div>
                    <div class="nk-opt-item" data-key="aside" data-update="is-default"><span
                            class="nk-opt-item-bg is-light"><span class="bg-light"></span></span><span
                            class="nk-opt-item-name">Light</span></div>
                    <div class="nk-opt-item active" data-key="aside" data-update="is-dark"><span
                            class="nk-opt-item-bg"><span class="bg-dark"></span></span><span
                            class="nk-opt-item-name">Dark</span></div>
                    <div class="nk-opt-item" data-key="aside" data-update="is-theme"><span class="nk-opt-item-bg"><span
                                class="bg-theme"></span></span><span class="nk-opt-item-name">Theme</span></div>
                </div>
            </div>
            <div class="nk-opt-set nk-opt-set-header">
                <div class="nk-opt-set-title">Header Style</div>
                <div class="nk-opt-list col-4x">
                    <div class="nk-opt-item active" data-key="header" data-update="is-light"><span
                            class="nk-opt-item-bg is-light"><span class="bg-lighter"></span></span><span
                            class="nk-opt-item-name">White</span></div>
                    <div class="nk-opt-item" data-key="header" data-update="is-default"><span
                            class="nk-opt-item-bg is-light"><span class="bg-light"></span></span><span
                            class="nk-opt-item-name">Light</span></div>
                    <div class="nk-opt-item" data-key="header" data-update="is-dark"><span class="nk-opt-item-bg"><span
                                class="bg-dark"></span></span><span class="nk-opt-item-name">Dark</span></div>
                    <div class="nk-opt-item" data-key="header" data-update="is-theme"><span class="nk-opt-item-bg"><span
                                class="bg-theme"></span></span><span class="nk-opt-item-name">Theme</span></div>
                </div>
            </div>
            <div class="nk-opt-set nk-opt-set-skin">
                <div class="nk-opt-set-title">Primary Skin</div>
                <div class="nk-opt-list">
                    <div class="nk-opt-item active" data-key="skin" data-update="default"><span
                            class="nk-opt-item-bg"><span class="skin-default"></span></span><span
                            class="nk-opt-item-name">Default</span></div>
                    <div class="nk-opt-item" data-key="skin" data-update="blue"><span class="nk-opt-item-bg"><span
                                class="skin-blue"></span></span><span class="nk-opt-item-name">Blue</span></div>
                    <div class="nk-opt-item" data-key="skin" data-update="egyptian"><span class="nk-opt-item-bg"><span
                                class="skin-egyptian"></span></span><span class="nk-opt-item-name">Egyptian</span></div>
                    <div class="nk-opt-item" data-key="skin" data-update="bluelite"><span class="nk-opt-item-bg"><span
                                class="skin-bluelite"></span></span><span class="nk-opt-item-name">Blue Light</span>
                    </div>
                    <div class="nk-opt-item" data-key="skin" data-update="green"><span class="nk-opt-item-bg"><span
                                class="skin-green"></span></span><span class="nk-opt-item-name">Green</span></div>
                    <div class="nk-opt-item" data-key="skin" data-update="red"><span class="nk-opt-item-bg"><span
                                class="skin-red"></span></span><span class="nk-opt-item-name">Red</span></div>
                </div>
            </div>
            <div class="nk-opt-set">
                <div class="nk-opt-set-title">Skin Mode</div>
                <div class="nk-opt-list col-2x">
                    <div class="nk-opt-item active" data-key="mode" data-update="light-mode"><span
                            class="nk-opt-item-bg is-light"><span class="theme-light"></span></span><span
                            class="nk-opt-item-name">Light Skin</span></div>
                    <div class="nk-opt-item" data-key="mode" data-update="dark-mode"><span class="nk-opt-item-bg"><span
                                class="theme-dark"></span></span><span class="nk-opt-item-name">Dark Skin</span></div>
                </div>
            </div>
            <div class="nk-opt-reset"><a href="#" class="reset-opt-setting">Reset Setting</a></div>
        </div>
    </div>
    </body>
        </>
    )
}
export default Login