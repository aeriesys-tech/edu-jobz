

import DashFooter from "../../candidate/footer"


import { Link, useLocation } from 'react-router-dom'
import logo from '../../../assets/img/logo.png'
import AdminMenu from "../adminmenus"
import DashMenuBar from "./adminconfigmenu"
import AdminHeader from "../header"

import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminDesignations() {
    const [designations, setDesignations] = useState([]);
const token = sessionStorage.getItem("tokenadmin");
console.log(">>>>>>>>>>>>>>>>>token", token);
const [newDesignation, setNewDesignation] = useState('');

// Add Designation Handler
const handleAddDesignation = () => {
    axios
        .post(
            `${import.meta.env.VITE_BASE_API_URL1}/api/designations/addDesignation`,
            { designation: newDesignation }, // Send the new designation
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        .then((response) => {
            setDesignations((prevDesignations) => [...prevDesignations, response.data.data]);
            setNewDesignation(''); // Reset the input field
            console.log('Designation added:', response.data.data);
            // Close the modal (using Bootstrap's modal close functionality)
            const modal = document.getElementById('file-add');
            const modalInstance = bootstrap.Modal.getInstance(modal);
            modalInstance.hide(); 
        })
        .catch((error) => {
            console.error('Error adding designation:', error);
        });
};

// Fetch Designations using axios.post
useEffect(() => {
    axios
        .post(
            `${import.meta.env.VITE_BASE_API_URL1}/api/designations/getdesignations`,
            {
                designations:designations,
                filter: 'all', // You can modify this based on the API requirements
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
                },
            }
        )
        .then((response) => {
            setDesignations(response.data.data);
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", response.data.data);
        })
        .catch((error) => {
            if (error.response) {
                // Server responded with a status outside the 2xx range
                console.error('Response error:', error.response.data);
                console.error('Status:', error.response.status);
                console.error('Headers:', error.response.headers);
            } else if (error.request) {
                // No response received from server
                console.error('Request error:', error.request);
            } else {
                // Other errors
                console.error('Error:', error.message);
            }
        });
}, []);

// Rendering logic (for input field and designations list)

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
                                                                    <h3 class="nk-block-title page-title">Designations</h3>
                                                                </div>
                                                                <div class="nk-fmg-actions">
                                                                    <ul class="nk-block-tools g-3">

                                                                        <li><a href="#file-add" class="btn btn-primary"
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

                                                                               
                                                                                <th class="nk-tb-col nk-tb-col-tools pl-3">
                                                                                    <ul class="nk-tb-actions gx-1 my-n1 ">
                                                                                        <li class="me-n1">
                                                                                            <td class=" tb-col-mb">
                                                                                                <a href="#file-upload" class="btn" ><em
                                                                                                    class="icon ni "></em><span>Actions</span></a></td>

                                                                                        </li>
                                                                                    </ul>
                                                                                </th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {designations.map((designation, index) => (
                                                                                <tr key={index} className="nk-tb-item">
                                                                                    <td className="nk-tb-col">{designation.designation }</td>
                                                                                    <td className="nk-tb-col nk-tb-col-tools">
                                                                                        <ul className="nk-tb-actions gx-1 my-n1">
                                                                                            <li className="me-n1">
                                                                                                <td className="tb-col-mb">
                                                                                                    <a href="#update" className="btn" data-bs-toggle="modal">
                                                                                                        <em className="icon ni ni-edit"></em><span>Edit</span>
                                                                                                    </a>
                                                                                                    <a href="#file-upload" className="btn">
                                                                                                        <em className="icon ni ni-trash"></em><span>Delete</span>
                                                                                                    </a>
                                                                                                </td>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </td>
                                                                                </tr>
                                                                            ))}
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="modal fade" tabindex="-1" role="dialog" id="file-add">
                                                            <div class="modal-dialog" role="document">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <h5 class="modal-title" id="exampleModalLabel">
                                                                            Add Designations</h5>
                                                                        <button type="button" class="close"
                                                                            data-bs-dismiss="modal" aria-label="Close">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        <form onSubmit={(e) => e.preventDefault()}>
                                                                            <div class="form-group">
                                                                                <label for=""
                                                                                    class="form-label  fw-bold ">Designations</label>
                                                                             <input
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                   
                                                                                    placeholder="Enter Designations"
                                                                                    value={newDesignation}
                                                                                    onChange={(e) => setNewDesignation(e.target.value)}
                                                                                />
                                                                            </div>


                                                                        </form>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <button type="button"
                                                                            class="btn btn-primary" onClick={handleAddDesignation}>Submit</button>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="modal fade" tabindex="-1" role="dialog" id="update">
                                                            <div class="modal-dialog" role="document">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <h5 class="modal-title" id="exampleModalLabel">
                                                                            Edit </h5>
                                                                        <button type="button" class="close"
                                                                            data-bs-dismiss="modal" aria-label="Close">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        <form>
                                                                            <div class="form-group">
                                                                                <label for=""
                                                                                    class="form-label  fw-bold ">Designations </label>
                                                                                <input type="text" class="form-control"
                                                                                    id="recipient-name"
                                                                                    placeholder="Enter Designation" />
                                                                            </div>


                                                                        </form>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <button type="button"
                                                                            class="btn btn-primary">Update</button>

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
} export default AdminDesignations