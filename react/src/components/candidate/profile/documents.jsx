import { Link } from "react-router-dom"
import SideBar from "../dashboardslidebar"
import DashFooter from "../footer"
import DashHeader from "../header"
import MenuBar from "./profilemenu"
import React, { useRef, useEffect } from "react"


function Resume() {
    $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('whatever')
        var modal = $(this)
        modal.find('.modal-title').text('New message to ' + recipient)
        modal.find('.modal-body input').val(recipient)
    })

    const fileDropContainer = useRef(null);
    const fileInput = useRef(null);

    useEffect(() => {
        const container = fileDropContainer.current;

        const handleDragOver = (event) => {
            event.preventDefault();
            container.classList.add('drag-over');
        };

        const handleDragLeave = () => {
            container.classList.remove('drag-over');
        };

        const handleDrop = (event) => {
            event.preventDefault();
            container.classList.remove('drag-over');
            const files = event.dataTransfer.files;
            handleFileUpload(files);
        };

        container.addEventListener('dragover', handleDragOver);
        container.addEventListener('dragleave', handleDragLeave);
        container.addEventListener('drop', handleDrop);

        return () => {
            container.removeEventListener('dragover', handleDragOver);
            container.removeEventListener('dragleave', handleDragLeave);
            container.removeEventListener('drop', handleDrop);
        };
    }, []);

    const handleFileUpload = (files) => {
        if (files.length > 0) {
            alert(`File uploaded: ${files[0].name}`);
        } else {
            alert('No file selected');
        }
    };

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
                                                                                                                <path
                                                                                                                    d="M49,61H23a5.0147,5.0147,0,0,1-5-5V16a5.0147,5.0147,0,0,1,5-5H40.9091L54,22.1111V56A5.0147,5.0147,0,0,1,49,61Z"
                                                                                                                    style={{ fill: "#e3edfc" }} />
                                                                                                                <path
                                                                                                                    d="M54,22.1111H44.1818a3.3034,3.3034,0,0,1-3.2727-3.3333V11s1.8409.2083,6.9545,4.5833C52.8409,20.0972,54,22.1111,54,22.1111Z"
                                                                                                                    style={{ fill: "#b7d0ea" }} />
                                                                                                                <path
                                                                                                                    d="M19.03,59A4.9835,4.9835,0,0,0,23,61H49a4.9835,4.9835,0,0,0,3.97-2Z"
                                                                                                                    style={{ fill: "#c4dbf2" }} />
                                                                                                                <path
                                                                                                                    d="M42,31H30a3.0033,3.0033,0,0,0-3,3V45a3.0033,3.0033,0,0,0,3,3H42a3.0033,3.0033,0,0,0,3-3V34A3.0033,3.0033,0,0,0,42,31ZM29,38h6v3H29Zm8,0h6v3H37Zm6-4v2H37V33h5A1.001,1.001,0,0,1,43,34ZM30,33h5v3H29V34A1.001,1.001,0,0,1,30,33ZM29,45V43h6v3H30A1.001,1.001,0,0,1,29,45Zm13,1H37V43h6v2A1.001,1.001,0,0,1,42,46Z"
                                                                                                                    style={{ fill: "#36c684" }} />
                                                                                                            </svg></span></div>
                                                                                                        <div class="nk-file-name">
                                                                                                            <div
                                                                                                                class="nk-file-name-text">
                                                                                                                <a to="#"
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
                                                                                                    <div class="dropdown"><a to="#"
                                                                                                        class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                                                                        data-bs-toggle="dropdown"><em
                                                                                                            class="icon ni ni-more-h"></em></a>
                                                                                                        <div
                                                                                                            class="dropdown-menu dropdown-menu-end">
                                                                                                            <ul
                                                                                                                class="link-list-plain no-bdr">

                                                                                                                <li><a to="#"
                                                                                                                    class="file-dl-toast"><em
                                                                                                                        class="icon ni ni-download"></em><span>Download</span></a>
                                                                                                                </li>
                                                                                                                <li><a to="#"><em
                                                                                                                    class="icon ni ni-pen"></em><span>Rename</span></a>
                                                                                                                </li>
                                                                                                                <li><a to="#"><em
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
                                                                                                                        style={{ fill: "#e3edfc" }} />
                                                                                                                    <path
                                                                                                                        d="M19.03,54A4.9835,4.9835,0,0,0,23,56H49a4.9835,4.9835,0,0,0,3.97-2Z"
                                                                                                                        style={{ fill: "#c4dbf2" }} />
                                                                                                                    <rect x="32"
                                                                                                                        y="20"
                                                                                                                        width="8"
                                                                                                                        height="2"
                                                                                                                        rx="1"
                                                                                                                        ry="1"
                                                                                                                        style={{ fill: "#7e95c4" }} />
                                                                                                                    <rect x="32"
                                                                                                                        y="25"
                                                                                                                        width="8"
                                                                                                                        height="2"
                                                                                                                        rx="1"
                                                                                                                        ry="1"
                                                                                                                        style={{ fill: "#7e95c4" }} />
                                                                                                                    <rect x="32"
                                                                                                                        y="30"
                                                                                                                        width="8"
                                                                                                                        height="2"
                                                                                                                        rx="1"
                                                                                                                        ry="1"
                                                                                                                        style={{ fill: "#7e95c4" }} />
                                                                                                                    <rect x="32"
                                                                                                                        y="35"
                                                                                                                        width="8"
                                                                                                                        height="2"
                                                                                                                        rx="1"
                                                                                                                        ry="1"
                                                                                                                        style={{ fill: "#7e95c4" }} />
                                                                                                                    <path
                                                                                                                        d="M35,16.0594h2a0,0,0,0,1,0,0V41a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V16.0594A0,0,0,0,1,35,16.0594Z"
                                                                                                                        style={{ fill: "#7e95c4" }} />
                                                                                                                    <path
                                                                                                                        d="M38.0024,40H33.9976A1.9976,1.9976,0,0,0,32,41.9976v2.0047A1.9976,1.9976,0,0,0,33.9976,46h4.0047A1.9976,1.9976,0,0,0,40,44.0024V41.9976A1.9976,1.9976,0,0,0,38.0024,40Zm-.0053,4H34V42h4Z"
                                                                                                                        style={{ fill: "#7e95c4" }} />
                                                                                                                </g>
                                                                                                            </svg></span></div>
                                                                                                        <div class="nk-file-name">
                                                                                                            <div
                                                                                                                class="nk-file-name-text">
                                                                                                                <a to="#"
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
                                                                                                    <div class="dropdown"><a to="#"
                                                                                                        class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                                                                        data-bs-toggle="dropdown"><em
                                                                                                            class="icon ni ni-more-h"></em></a>
                                                                                                        <div
                                                                                                            class="dropdown-menu dropdown-menu-end">
                                                                                                            <ul
                                                                                                                class="link-list-plain no-bdr">

                                                                                                                <li><a to="#"
                                                                                                                    class="file-dl-toast"><em
                                                                                                                        class="icon ni ni-download"></em><span>Download</span></a>
                                                                                                                </li>
                                                                                                                <li><a to="#"><em
                                                                                                                    class="icon ni ni-pen"></em><span>Rename</span></a>
                                                                                                                </li>
                                                                                                                <li><a to="#"><em
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
                                                                                                                        style={{ fill: "#e3edfc" }} />
                                                                                                                    <path
                                                                                                                        d="M19.03,54A4.9835,4.9835,0,0,0,23,56H49a4.9835,4.9835,0,0,0,3.97-2Z"
                                                                                                                        style={{ fill: "#c4dbf2" }} />
                                                                                                                    <rect x="32"
                                                                                                                        y="20"
                                                                                                                        width="8"
                                                                                                                        height="2"
                                                                                                                        rx="1"
                                                                                                                        ry="1"
                                                                                                                        style={{ fill: "#7e95c4" }} />
                                                                                                                    <rect x="32"
                                                                                                                        y="25"
                                                                                                                        width="8"
                                                                                                                        height="2"
                                                                                                                        rx="1"
                                                                                                                        ry="1"
                                                                                                                        style={{ fill: "#7e95c4" }} />
                                                                                                                    <rect x="32"
                                                                                                                        y="30"
                                                                                                                        width="8"
                                                                                                                        height="2"
                                                                                                                        rx="1"
                                                                                                                        ry="1"
                                                                                                                        style={{ fill: "#7e95c4" }} />
                                                                                                                    <rect x="32"
                                                                                                                        y="35"
                                                                                                                        width="8"
                                                                                                                        height="2"
                                                                                                                        rx="1"
                                                                                                                        ry="1"
                                                                                                                        style={{ fill: "#7e95c4" }} />
                                                                                                                    <path
                                                                                                                        d="M35,16.0594h2a0,0,0,0,1,0,0V41a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V16.0594A0,0,0,0,1,35,16.0594Z"
                                                                                                                        style={{ fill: "#7e95c4" }} />
                                                                                                                    <path
                                                                                                                        d="M38.0024,40H33.9976A1.9976,1.9976,0,0,0,32,41.9976v2.0047A1.9976,1.9976,0,0,0,33.9976,46h4.0047A1.9976,1.9976,0,0,0,40,44.0024V41.9976A1.9976,1.9976,0,0,0,38.0024,40Zm-.0053,4H34V42h4Z"
                                                                                                                        style={{ fill: "#7e95c4" }} />
                                                                                                                </g>
                                                                                                            </svg></span></div>
                                                                                                        <div class="nk-file-name">
                                                                                                            <div
                                                                                                                class="nk-file-name-text">
                                                                                                                <a to="#"
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
                                                                                                    <div class="dropdown"><a to="#"
                                                                                                        class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                                                                        data-bs-toggle="dropdown"><em
                                                                                                            class="icon ni ni-more-h"></em></a>
                                                                                                        <div
                                                                                                            class="dropdown-menu dropdown-menu-end">
                                                                                                            <ul
                                                                                                                class="link-list-plain no-bdr">

                                                                                                                <li><a to="#"
                                                                                                                    class="file-dl-toast"><em
                                                                                                                        class="icon ni ni-download"></em><span>Download</span></a>
                                                                                                                </li>
                                                                                                                <li><a to="#"><em
                                                                                                                    class="icon ni ni-pen"></em><span>Rename</span></a>
                                                                                                                </li>
                                                                                                                <li><a to="#"><em
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
                                                                                                                        style={{ fill: "#e3edfc" }} />
                                                                                                                    <path
                                                                                                                        d="M54,22.1111H44.1818a3.3034,3.3034,0,0,1-3.2727-3.3333V11s1.8409.2083,6.9545,4.5833C52.8409,20.0972,54,22.1111,54,22.1111Z"
                                                                                                                        style={{ fill: "#b7d0ea" }} />
                                                                                                                    <path
                                                                                                                        d="M19.03,59A4.9835,4.9835,0,0,0,23,61H49a4.9835,4.9835,0,0,0,3.97-2Z"
                                                                                                                        style={{ fill: "#c4dbf2" }} />
                                                                                                                    <rect x="27"
                                                                                                                        y="31"
                                                                                                                        width="18"
                                                                                                                        height="2"
                                                                                                                        rx="1"
                                                                                                                        ry="1"
                                                                                                                        style={{ fill: "#599def" }} />
                                                                                                                    <rect x="27"
                                                                                                                        y="36"
                                                                                                                        width="18"
                                                                                                                        height="2"
                                                                                                                        rx="1"
                                                                                                                        ry="1"
                                                                                                                        style={{ fill: "#599def" }} />
                                                                                                                    <rect x="27"
                                                                                                                        y="41"
                                                                                                                        width="18"
                                                                                                                        height="2"
                                                                                                                        rx="1"
                                                                                                                        ry="1"
                                                                                                                        style={{ fill: "#599def" }} />
                                                                                                                    <rect x="27"
                                                                                                                        y="46"
                                                                                                                        width="12"
                                                                                                                        height="2"
                                                                                                                        rx="1"
                                                                                                                        ry="1"
                                                                                                                        style={{ fill: "#599def" }} />
                                                                                                                </g>
                                                                                                            </svg></span></div>
                                                                                                        <div class="nk-file-name">
                                                                                                            <div
                                                                                                                class="nk-file-name-text">
                                                                                                                <a to="#"
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
                                                                                                    <div class="dropdown"><a to="#"
                                                                                                        class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                                                                        data-bs-toggle="dropdown"><em
                                                                                                            class="icon ni ni-more-h"></em></a>
                                                                                                        <div
                                                                                                            class="dropdown-menu dropdown-menu-end">
                                                                                                            <ul
                                                                                                                class="link-list-plain no-bdr">

                                                                                                                <li><a to="#"
                                                                                                                    class="file-dl-toast"><em
                                                                                                                        class="icon ni ni-download"></em><span>Download</span></a>
                                                                                                                </li>
                                                                                                                <li><a to="#"><em
                                                                                                                    class="icon ni ni-pen"></em><span>Rename</span></a>
                                                                                                                </li>
                                                                                                                <li><a to="#"><em
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
                                                                    <div class="modal-content"><a to="#" class="close" data-bs-dismiss="modal"><em
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

                                                                                <div
                                                                                    className="file-drop-container"
                                                                                    ref={fileDropContainer}
                                                                                    onClick={() => fileInput.current.click()}
                                                                                >
                                                                                    <p>Drag and drop a file here, or click to select a file</p>
                                                                                    <input
                                                                                        type="file"
                                                                                        ref={fileInput}
                                                                                        style={{ display: 'none' }}
                                                                                        onChange={() => handleFileUpload(fileInput.current.files)}
                                                                                    />
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
                                                        <MenuBar />
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
