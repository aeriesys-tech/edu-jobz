import { Link } from "react-router-dom"
import SideBar from "../dashboardslidebar"
import DashFooter from "../footer"
import DashHeader from "../header"
import MenuBar from "./profilemenu"

function Resume() {
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
                                                        
                                                        <div class="docbackground ">
                                                    <div class="nk-fmg-body nk-fmg-filebody">
                                                <div class="nk-fmg-body-head d-none d-lg-flex">
                                                    <div class="nk-block-head-content">
                                                        <h3 class="nk-block-title page-title">Documents</h3>
                                                    </div>
                                                    <div class="nk-fmg-actions">
                                                        <ul class="nk-block-tools g-3">

                                                            <li><a href="#file-upload" class="btn btn-primary"
                                                                    data-bs-toggle="modal"><em
                                                                        class="icon ni ni-upload-cloud"></em>
                                                                    <span>Upload</span></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="nk-fmg-body-content "
                                                    >


                                                    <div class="nk-fmg-listing nk-block-lg">
                                                        <div class="tab-content">
                                                            <div class="tab-pane active" id="file-group-view">
                                                                <div class="nk-files nk-files-view-group">
                                                                    <div class="nk-files-group">
                                                                       
                                                                        <div class="nk-files-list">
                                                                            <div class="nk-file-item nk-file">
                                                                                <div class="nk-file-info">
                                                                                    <div class="nk-file-title">
                                                                                        <div class="nk-file-icon"><span
                                                                                                class="nk-file-icon-type"><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    viewBox="0 0 72 72">
                                                                                                    <g>
                                                                                                        <rect x="32"
                                                                                                            y="16"
                                                                                                            width="28"
                                                                                                            height="15"
                                                                                                            rx="2.5"
                                                                                                            ry="2.5"
                                                                                                            style={{fill:"#f29611"}} />
                                                                                                        <path
                                                                                                            d="M59.7778,61H12.2222A6.4215,6.4215,0,0,1,6,54.3962V17.6038A6.4215,6.4215,0,0,1,12.2222,11H30.6977a4.6714,4.6714,0,0,1,4.1128,2.5644L38,24H59.7778A5.91,5.91,0,0,1,66,30V54.3962A6.4215,6.4215,0,0,1,59.7778,61Z"
                                                                                                            style={{fill:"#ffb32c"}} />
                                                                                                        <path
                                                                                                            d="M8.015,59c2.169,2.3827,4.6976,2.0161,6.195,2H58.7806a6.2768,6.2768,0,0,0,5.2061-2Z"
                                                                                                            style={{fill:"#f2a222"}} />
                                                                                                    </g>
                                                                                                </svg></span>
                                                                                        </div>
                                                                                        <div class="nk-file-name">
                                                                                            <div
                                                                                                class="nk-file-name-text">
                                                                                                <a href="#"
                                                                                                    class="title">UI
                                                                                                    Design</a>
                                                                                               
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <ul class="nk-file-desc">
                                                                                        <li class="date">Today</li>
                                                                                        <li class="size">4.5 MB</li>
                                                                                        <li class="members">3 Members
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="nk-file-actions">
                                                                                    <div class="dropdown"><a href="#"
                                                                                            class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                                                            data-bs-toggle="dropdown"><em
                                                                                                class="icon ni ni-more-h"></em></a>
                                                                                        <div
                                                                                            class="dropdown-menu dropdown-menu-end">
                                                                                            <ul
                                                                                                class="link-list-plain no-bdr">

                                                                                                <li><a href="#"
                                                                                                        class="file-dl-toast"><em
                                                                                                            class="icon ni ni-download"></em><span>Download</span></a>
                                                                                                </li>
                                                                                                <li><a href="#"><em
                                                                                                            class="icon ni ni-pen"></em><span>Rename</span></a>
                                                                                                </li>
                                                                                                <li><a href="#"><em
                                                                                                            class="icon ni ni-trash"></em><span>Delete</span></a>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="nk-file-item nk-file">
                                                                                <div class="nk-file-info">
                                                                                    <div class="nk-file-title">
                                                                                        <div class="nk-file-icon"><span
                                                                                                class="nk-file-icon-type"><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    viewBox="0 0 72 72">
                                                                                                    <g>
                                                                                                        <rect x="32"
                                                                                                            y="16"
                                                                                                            width="28"
                                                                                                            height="15"
                                                                                                            rx="2.5"
                                                                                                            ry="2.5"
                                                                                                            style={{fill:"#f29611"}} />
                                                                                                        <path
                                                                                                            d="M59.7778,61H12.2222A6.4215,6.4215,0,0,1,6,54.3962V17.6038A6.4215,6.4215,0,0,1,12.2222,11H30.6977a4.6714,4.6714,0,0,1,4.1128,2.5644L38,24H59.7778A5.91,5.91,0,0,1,66,30V54.3962A6.4215,6.4215,0,0,1,59.7778,61Z"
                                                                                                            style={{fill:"#ffb32c"}} />
                                                                                                        <path
                                                                                                            d="M8.015,59c2.169,2.3827,4.6976,2.0161,6.195,2H58.7806a6.2768,6.2768,0,0,0,5.2061-2Z"
                                                                                                            style={{fill:"#f2a222"}} />
                                                                                                    </g>
                                                                                                </svg></span></div>
                                                                                        <div class="nk-file-name">
                                                                                            <div
                                                                                                class="nk-file-name-text">
                                                                                                <a href="#"
                                                                                                    class="title">Proposal</a>
                                                                                             
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <ul class="nk-file-desc">
                                                                                        <li class="date">Today</li>
                                                                                        <li class="size">4.5 MB</li>
                                                                                        <li class="members">3 Members
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="nk-file-actions">
                                                                                    <div class="dropdown"><a href="#"
                                                                                            class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                                                            data-bs-toggle="dropdown"><em
                                                                                                class="icon ni ni-more-h"></em></a>
                                                                                        <div
                                                                                            class="dropdown-menu dropdown-menu-end">
                                                                                            <ul
                                                                                                class="link-list-plain no-bdr">

                                                                                                <li><a href="#"
                                                                                                        class="file-dl-toast"><em
                                                                                                            class="icon ni ni-download"></em><span>Download</span></a>
                                                                                                </li>
                                                                                                <li><a href="#"><em
                                                                                                            class="icon ni ni-pen"></em><span>Rename</span></a>
                                                                                                </li>
                                                                                                <li><a href="#"><em
                                                                                                            class="icon ni ni-trash"></em><span>Delete</span></a>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="nk-file-item nk-file">
                                                                                <div class="nk-file-info">
                                                                                    <div class="nk-file-title">
                                                                                        <div class="nk-file-icon"><span
                                                                                                class="nk-file-icon-type"><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    viewBox="0 0 72 72">
                                                                                                    <g>
                                                                                                        <rect x="32"
                                                                                                            y="16"
                                                                                                            width="28"
                                                                                                            height="15"
                                                                                                            rx="2.5"
                                                                                                            ry="2.5"
                                                                                                            style={{fill:"#f29611"}} />
                                                                                                        <path
                                                                                                            d="M59.7778,61H12.2222A6.4215,6.4215,0,0,1,6,54.3962V17.6038A6.4215,6.4215,0,0,1,12.2222,11H30.6977a4.6714,4.6714,0,0,1,4.1128,2.5644L38,24H59.7778A5.91,5.91,0,0,1,66,30V54.3962A6.4215,6.4215,0,0,1,59.7778,61Z"
                                                                                                            style={{fill:"#ffb32c"}} />
                                                                                                        <path
                                                                                                            d="M8.015,59c2.169,2.3827,4.6976,2.0161,6.195,2H58.7806a6.2768,6.2768,0,0,0,5.2061-2Z"
                                                                                                            style={{fill:"#f2a222"}} />
                                                                                                        <path
                                                                                                            d="M29.6309,37.36a3.0236,3.0236,0,0,1-.86-2.39A4.3748,4.3748,0,0,1,32.9961,31h.0078a4.36,4.36,0,0,1,4.22,3.9121,3.0532,3.0532,0,0,1-.8545,2.4482A4.4158,4.4158,0,0,1,33.23,38.53c-.0771,0-.1533-.002-.23-.0049A4.519,4.519,0,0,1,29.6309,37.36ZM43.4668,40.1a1,1,0,1,0-.9336,1.77c.7207.38,1.4658,2.126,1.4668,4.39v1.7256a1,1,0,0,0,2,0V46.26C45.999,43.33,45.0049,40.9119,43.4668,40.1ZM40.165,37.3816c-.1445.084-.29.168-.4316.2549a1,1,0,0,0,.5215,1.8535.9887.9887,0,0,0,.52-.1465c.1289-.0781.2607-.1543.3916-.23a4.2311,4.2311,0,0,0,2.1465-2.124.9839.9839,0,0,0,.0313-.1045A3.8411,3.8411,0,0,0,40.5,32.52a1,1,0,1,0-.4922,1.9395,1.8773,1.8773,0,0,1,1.4,1.9092A2.835,2.835,0,0,1,40.165,37.3816ZM36.5,41h-7c-2.5234,0-4.5,2.7822-4.5,6.333V48.5a.8355.8355,0,0,0,.0588.2914.9731.9731,0,0,0,.3508.4946C26.4646,50.2812,29.4614,51,33,51s6.5353-.7187,7.59-1.7139a.9726.9726,0,0,0,.3509-.4949A.8361.8361,0,0,0,41,48.5V47.333C41,43.7822,39.0234,41,36.5,41Z"
                                                                                                            style={{fill:"#c67424"}} />
                                                                                                    </g>
                                                                                                </svg></span></div>
                                                                                        <div class="nk-file-name">
                                                                                            <div
                                                                                                class="nk-file-name-text">
                                                                                                <a href="#"
                                                                                                    class="title">Projects</a>
                                                                                              
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <ul class="nk-file-desc">
                                                                                        <li class="date">Today</li>
                                                                                        <li class="size">235 KB</li>
                                                                                        <li class="members">3 Members
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="nk-file-actions">
                                                                                    <div class="dropdown"><a href="#"
                                                                                            class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                                                            data-bs-toggle="dropdown"><em
                                                                                                class="icon ni ni-more-h"></em></a>
                                                                                        <div
                                                                                            class="dropdown-menu dropdown-menu-end">
                                                                                            <ul
                                                                                                class="link-list-plain no-bdr">

                                                                                                <li><a href="#"
                                                                                                        class="file-dl-toast"><em
                                                                                                            class="icon ni ni-download"></em><span>Download</span></a>
                                                                                                </li>
                                                                                                <li><a href="#"><em
                                                                                                            class="icon ni ni-pen"></em><span>Rename</span></a>
                                                                                                </li>
                                                                                                <li><a href="#"><em
                                                                                                            class="icon ni ni-trash"></em><span>Delete</span></a>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="nk-file-item nk-file">
                                                                                <div class="nk-file-info">
                                                                                    <div class="nk-file-title">
                                                                                        <div class="nk-file-icon"><span
                                                                                                class="nk-file-icon-type"><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    viewBox="0 0 72 72">
                                                                                                    <g>
                                                                                                        <rect x="32"
                                                                                                            y="16"
                                                                                                            width="28"
                                                                                                            height="15"
                                                                                                            rx="2.5"
                                                                                                            ry="2.5"
                                                                                                            style={{fill:"#f29611"}} />
                                                                                                        <path
                                                                                                            d="M59.7778,61H12.2222A6.4215,6.4215,0,0,1,6,54.3962V17.6038A6.4215,6.4215,0,0,1,12.2222,11H30.6977a4.6714,4.6714,0,0,1,4.1128,2.5644L38,24H59.7778A5.91,5.91,0,0,1,66,30V54.3962A6.4215,6.4215,0,0,1,59.7778,61Z"
                                                                                                            style={{fill:"#ffb32c"}} />
                                                                                                        <path
                                                                                                            d="M8.015,59c2.169,2.3827,4.6976,2.0161,6.195,2H58.7806a6.2768,6.2768,0,0,0,5.2061-2Z"
                                                                                                            style={{fill:"#f2a222"}} />
                                                                                                    </g>
                                                                                                </svg></span></div>
                                                                                        <div class="nk-file-name">
                                                                                            <div
                                                                                                class="nk-file-name-text">
                                                                                                <a href="#"
                                                                                                    class="title">2019
                                                                                                    Projects</a>
                                                                                              
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <ul class="nk-file-desc">
                                                                                        <li class="date">03 May</li>
                                                                                        <li class="size">235 KB</li>
                                                                                        <li class="members">3 Members
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="nk-file-actions">
                                                                                    <div class="dropdown"><a href="#"
                                                                                            class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                                                            data-bs-toggle="dropdown"><em
                                                                                                class="icon ni ni-more-h"></em></a>
                                                                                        <div
                                                                                            class="dropdown-menu dropdown-menu-end">
                                                                                            <ul
                                                                                                class="link-list-plain no-bdr">

                                                                                                <li><a href="#"
                                                                                                        class="file-dl-toast"><em
                                                                                                            class="icon ni ni-download"></em><span>Download</span></a>
                                                                                                </li>
                                                                                                <li><a href="#"><em
                                                                                                            class="icon ni ni-pen"></em><span>Rename</span></a>
                                                                                                </li>
                                                                                                <li><a href="#"><em
                                                                                                            class="icon ni ni-trash"></em><span>Delete</span></a>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="nk-file-item nk-file">
                                                                                <div class="nk-file-info">
                                                                                    <div class="nk-file-title">
                                                                                        <div class="nk-file-icon"><span
                                                                                                class="nk-file-icon-type"><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    viewBox="0 0 72 72">
                                                                                                    <path
                                                                                                        d="M49,61H23a5.0147,5.0147,0,0,1-5-5V16a5.0147,5.0147,0,0,1,5-5H40.9091L54,22.1111V56A5.0147,5.0147,0,0,1,49,61Z"
                                                                                                        style={{fill:"#e3edfc"}} />
                                                                                                    <path
                                                                                                        d="M54,22.1111H44.1818a3.3034,3.3034,0,0,1-3.2727-3.3333V11s1.8409.2083,6.9545,4.5833C52.8409,20.0972,54,22.1111,54,22.1111Z"
                                                                                                        style={{fill:"#b7d0ea"}} />
                                                                                                    <path
                                                                                                        d="M19.03,59A4.9835,4.9835,0,0,0,23,61H49a4.9835,4.9835,0,0,0,3.97-2Z"
                                                                                                        style={{fill:"#c4dbf2"}} />
                                                                                                    <path
                                                                                                        d="M42,31H30a3.0033,3.0033,0,0,0-3,3V45a3.0033,3.0033,0,0,0,3,3H42a3.0033,3.0033,0,0,0,3-3V34A3.0033,3.0033,0,0,0,42,31ZM29,38h6v3H29Zm8,0h6v3H37Zm6-4v2H37V33h5A1.001,1.001,0,0,1,43,34ZM30,33h5v3H29V34A1.001,1.001,0,0,1,30,33ZM29,45V43h6v3H30A1.001,1.001,0,0,1,29,45Zm13,1H37V43h6v2A1.001,1.001,0,0,1,42,46Z"
                                                                                                        style={{fill:"#36c684"}} />
                                                                                                </svg></span></div>
                                                                                        <div class="nk-file-name">
                                                                                            <div
                                                                                                class="nk-file-name-text">
                                                                                                <a href="#"
                                                                                                    class="title">Database.xlsx</a>
                                                                                             
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <ul class="nk-file-desc">
                                                                                        <li class="date">Today</li>
                                                                                        <li class="size">235 KB</li>
                                                                                        <li class="members">3 Members
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="nk-file-actions">
                                                                                    <div class="dropdown"><a href="#"
                                                                                            class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                                                            data-bs-toggle="dropdown"><em
                                                                                                class="icon ni ni-more-h"></em></a>
                                                                                        <div
                                                                                            class="dropdown-menu dropdown-menu-end">
                                                                                            <ul
                                                                                                class="link-list-plain no-bdr">

                                                                                                <li><a href="#"
                                                                                                        class="file-dl-toast"><em
                                                                                                            class="icon ni ni-download"></em><span>Download</span></a>
                                                                                                </li>
                                                                                                <li><a href="#"><em
                                                                                                            class="icon ni ni-pen"></em><span>Rename</span></a>
                                                                                                </li>
                                                                                                <li><a href="#"><em
                                                                                                            class="icon ni ni-trash"></em><span>Delete</span></a>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="nk-file-item nk-file">
                                                                                <div class="nk-file-info">
                                                                                    <div class="nk-file-title">
                                                                                        <div class="nk-file-icon"><span
                                                                                                class="nk-file-icon-type"><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    viewBox="0 0 72 72">
                                                                                                    <g>
                                                                                                        <rect x="18"
                                                                                                            y="16"
                                                                                                            width="36"
                                                                                                            height="40"
                                                                                                            rx="5"
                                                                                                            ry="5"
                                                                                                            style={{fill:"#e3edfc"}} />
                                                                                                        <path
                                                                                                            d="M19.03,54A4.9835,4.9835,0,0,0,23,56H49a4.9835,4.9835,0,0,0,3.97-2Z"
                                                                                                            style={{fill:"#c4dbf2"}} />
                                                                                                        <rect x="32"
                                                                                                            y="20"
                                                                                                            width="8"
                                                                                                            height="2"
                                                                                                            rx="1"
                                                                                                            ry="1"
                                                                                                            style={{fill:"#7e95c4"}} />
                                                                                                        <rect x="32"
                                                                                                            y="25"
                                                                                                            width="8"
                                                                                                            height="2"
                                                                                                            rx="1"
                                                                                                            ry="1"
                                                                                                            style={{fill:"#7e95c4"}} />
                                                                                                        <rect x="32"
                                                                                                            y="30"
                                                                                                            width="8"
                                                                                                            height="2"
                                                                                                            rx="1"
                                                                                                            ry="1"
                                                                                                            style={{fill:"#7e95c4"}} />
                                                                                                        <rect x="32"
                                                                                                            y="35"
                                                                                                            width="8"
                                                                                                            height="2"
                                                                                                            rx="1"
                                                                                                            ry="1"
                                                                                                            style={{fill:"#7e95c4"}} />
                                                                                                        <path
                                                                                                            d="M35,16.0594h2a0,0,0,0,1,0,0V41a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V16.0594A0,0,0,0,1,35,16.0594Z"
                                                                                                            style={{fill:"#7e95c4"}} />
                                                                                                        <path
                                                                                                            d="M38.0024,40H33.9976A1.9976,1.9976,0,0,0,32,41.9976v2.0047A1.9976,1.9976,0,0,0,33.9976,46h4.0047A1.9976,1.9976,0,0,0,40,44.0024V41.9976A1.9976,1.9976,0,0,0,38.0024,40Zm-.0053,4H34V42h4Z"
                                                                                                            style={{fill:"#7e95c4"}} />
                                                                                                    </g>
                                                                                                </svg></span></div>
                                                                                        <div class="nk-file-name">
                                                                                            <div
                                                                                                class="nk-file-name-text">
                                                                                                <a href="#"
                                                                                                    class="title">dashlite...1.2.zip</a>
                                                                                              
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <ul class="nk-file-desc">
                                                                                        <li class="date">03 May</li>
                                                                                        <li class="size">235 KB</li>
                                                                                        <li class="members">3 Members
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="nk-file-actions">
                                                                                    <div class="dropdown"><a href="#"
                                                                                            class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                                                            data-bs-toggle="dropdown"><em
                                                                                                class="icon ni ni-more-h"></em></a>
                                                                                        <div
                                                                                            class="dropdown-menu dropdown-menu-end">
                                                                                            <ul
                                                                                                class="link-list-plain no-bdr">

                                                                                                <li><a href="#"
                                                                                                        class="file-dl-toast"><em
                                                                                                            class="icon ni ni-download"></em><span>Download</span></a>
                                                                                                </li>
                                                                                                <li><a href="#"><em
                                                                                                            class="icon ni ni-pen"></em><span>Rename</span></a>
                                                                                                </li>
                                                                                                <li><a href="#"><em
                                                                                                            class="icon ni ni-trash"></em><span>Delete</span></a>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="nk-file-item nk-file">
                                                                                <div class="nk-file-info">
                                                                                    <div class="nk-file-title">
                                                                                        <div class="nk-file-icon"><span
                                                                                                class="nk-file-icon-type"><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    viewBox="0 0 72 72">
                                                                                                    <g>
                                                                                                        <rect x="18"
                                                                                                            y="16"
                                                                                                            width="36"
                                                                                                            height="40"
                                                                                                            rx="5"
                                                                                                            ry="5"
                                                                                                            style={{fill:"#e3edfc"}} />
                                                                                                        <path
                                                                                                            d="M19.03,54A4.9835,4.9835,0,0,0,23,56H49a4.9835,4.9835,0,0,0,3.97-2Z"
                                                                                                            style={{fill:"#c4dbf2"}} />
                                                                                                        <rect x="32"
                                                                                                            y="20"
                                                                                                            width="8"
                                                                                                            height="2"
                                                                                                            rx="1"
                                                                                                            ry="1"
                                                                                                            style={{fill:"#7e95c4"}} />
                                                                                                        <rect x="32"
                                                                                                            y="25"
                                                                                                            width="8"
                                                                                                            height="2"
                                                                                                            rx="1"
                                                                                                            ry="1"
                                                                                                            style={{fill:"#7e95c4"}} />
                                                                                                        <rect x="32"
                                                                                                            y="30"
                                                                                                            width="8"
                                                                                                            height="2"
                                                                                                            rx="1"
                                                                                                            ry="1"
                                                                                                            style={{fill:"#7e95c4"}} />
                                                                                                        <rect x="32"
                                                                                                            y="35"
                                                                                                            width="8"
                                                                                                            height="2"
                                                                                                            rx="1"
                                                                                                            ry="1"
                                                                                                            style={{fill:"#7e95c4"}} />
                                                                                                        <path
                                                                                                            d="M35,16.0594h2a0,0,0,0,1,0,0V41a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V16.0594A0,0,0,0,1,35,16.0594Z"
                                                                                                            style={{fill:"#7e95c4"}} />
                                                                                                        <path
                                                                                                            d="M38.0024,40H33.9976A1.9976,1.9976,0,0,0,32,41.9976v2.0047A1.9976,1.9976,0,0,0,33.9976,46h4.0047A1.9976,1.9976,0,0,0,40,44.0024V41.9976A1.9976,1.9976,0,0,0,38.0024,40Zm-.0053,4H34V42h4Z"
                                                                                                            style={{fill:"#7e95c4"}} />
                                                                                                    </g>
                                                                                                </svg></span></div>
                                                                                        <div class="nk-file-name">
                                                                                            <div
                                                                                                class="nk-file-name-text">
                                                                                                <a href="#"
                                                                                                    class="title">covstats.zip</a>
                                                                                              
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <ul class="nk-file-desc">
                                                                                        <li class="date">01 May</li>
                                                                                        <li class="size">235 KB</li>
                                                                                        <li class="members">3 Members
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="nk-file-actions">
                                                                                    <div class="dropdown"><a href="#"
                                                                                            class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                                                            data-bs-toggle="dropdown"><em
                                                                                                class="icon ni ni-more-h"></em></a>
                                                                                        <div
                                                                                            class="dropdown-menu dropdown-menu-end">
                                                                                            <ul
                                                                                                class="link-list-plain no-bdr">

                                                                                                <li><a href="#"
                                                                                                        class="file-dl-toast"><em
                                                                                                            class="icon ni ni-download"></em><span>Download</span></a>
                                                                                                </li>
                                                                                                <li><a href="#"><em
                                                                                                            class="icon ni ni-pen"></em><span>Rename</span></a>
                                                                                                </li>
                                                                                                <li><a href="#"><em
                                                                                                            class="icon ni ni-trash"></em><span>Delete</span></a>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="nk-file-item nk-file">
                                                                                <div class="nk-file-info">
                                                                                    <div class="nk-file-title">
                                                                                        <div class="nk-file-icon"><span
                                                                                                class="nk-file-icon-type"><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    viewBox="0 0 72 72">
                                                                                                    <g>
                                                                                                        <path
                                                                                                            d="M49,61H23a5.0147,5.0147,0,0,1-5-5V16a5.0147,5.0147,0,0,1,5-5H40.9091L54,22.1111V56A5.0147,5.0147,0,0,1,49,61Z"
                                                                                                            style={{fill:"#e3edfc"}} />
                                                                                                        <path
                                                                                                            d="M54,22.1111H44.1818a3.3034,3.3034,0,0,1-3.2727-3.3333V11s1.8409.2083,6.9545,4.5833C52.8409,20.0972,54,22.1111,54,22.1111Z"
                                                                                                            style={{fill:"#b7d0ea"}} />
                                                                                                        <path
                                                                                                            d="M19.03,59A4.9835,4.9835,0,0,0,23,61H49a4.9835,4.9835,0,0,0,3.97-2Z"
                                                                                                            style={{fill:"#c4dbf2"}} />
                                                                                                        <rect x="27"
                                                                                                            y="31"
                                                                                                            width="18"
                                                                                                            height="2"
                                                                                                            rx="1"
                                                                                                            ry="1"
                                                                                                            style={{fill:"#599def"}} />
                                                                                                        <rect x="27"
                                                                                                            y="36"
                                                                                                            width="18"
                                                                                                            height="2"
                                                                                                            rx="1"
                                                                                                            ry="1"
                                                                                                            style={{fill:"#599def"}} />
                                                                                                        <rect x="27"
                                                                                                            y="41"
                                                                                                            width="18"
                                                                                                            height="2"
                                                                                                            rx="1"
                                                                                                            ry="1"
                                                                                                            style={{fill:"#599def"}} />
                                                                                                        <rect x="27"
                                                                                                            y="46"
                                                                                                            width="12"
                                                                                                            height="2"
                                                                                                            rx="1"
                                                                                                            ry="1"
                                                                                                            style={{fill:"#599def"}} />
                                                                                                    </g>
                                                                                                </svg></span></div>
                                                                                        <div class="nk-file-name">
                                                                                            <div
                                                                                                class="nk-file-name-text">
                                                                                                <a href="#"
                                                                                                    class="title">Price
                                                                                                    List.doc</a>
                                                                                             
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <ul class="nk-file-desc">
                                                                                        <li class="date">25 Apr</li>
                                                                                        <li class="size">23 MB</li>
                                                                                        <li class="members">3 Members
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="nk-file-actions">
                                                                                    <div class="dropdown"><a href="#"
                                                                                            class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                                                            data-bs-toggle="dropdown"><em
                                                                                                class="icon ni ni-more-h"></em></a>
                                                                                        <div
                                                                                            class="dropdown-menu dropdown-menu-end">
                                                                                            <ul
                                                                                                class="link-list-plain no-bdr">

                                                                                                <li><a href="#"
                                                                                                        class="file-dl-toast"><em
                                                                                                            class="icon ni ni-download"></em><span>Download</span></a>
                                                                                                </li>
                                                                                                <li><a href="#"><em
                                                                                                            class="icon ni ni-pen"></em><span>Rename</span></a>
                                                                                                </li>
                                                                                                <li><a href="#"><em
                                                                                                            class="icon ni ni-trash"></em><span>Delete</span></a>
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
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal fade" tabindex="-1" role="dialog" id="file-upload">
                                                <div class="modal-dialog modal-md" role="document">
                                                    <div class="modal-content"><a href="#" class="close" data-bs-dismiss="modal"><em
                                                                class="icon ni ni-cross-sm"></em></a>
                                                                
                                                        <div class="modal-body modal-body-md">
                                                            <div class="nk-upload-form">
                                                                <h5 class="title mb-3">Upload File</h5>                                                                
                                                                    <div class="form-group">  
                                                                        <label class="form-label">Document</label>                                                                      
                                                                        <select class="form-select js-select2">                                                                            
                                                                            <option>Resume</option>
                                                                            <option>Cover Letter</option>
                                                                            <option>Other Documents</option>
        
                                                                        </select>
                                                                    </div>
                                                                
                                                                <div class="upload-zone small bg-lighter">
                                                                    <div class="dz-message" data-dz-message><span class="dz-message-text"><span>Drag and
                                                                                drop</span> file here or <span>browse</span></span></div>
                                                                </div>
                                                            </div>                                                           
                                                            <div class="nk-modal-action justify-end">
                                                                <ul class="btn-toolbar g-4 align-center">
                                                                    <li><a href="#" class="link link-primary">Cancel</a></li>
                                                                    <li><button class="btn btn-primary">Add Files</button></li>
                                                                </ul>
                                                            </div>
                                                        </div>
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
export default Resume
