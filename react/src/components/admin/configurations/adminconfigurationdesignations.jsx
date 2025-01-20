
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import AdminMenu from "../adminmenus";
import DashMenuBar from "./adminconfigmenu";
import AdminHeader from "../header";
import DashFooter from "../../candidate/footer";
import { Link, useLocation } from 'react-router-dom';

const designationsSlice = createSlice({
    name: 'designations',
    initialState: {
      designations: [],
      loading: false,
      error: null,
    },
    reducers: {
      setDesignations: (state, action) => {
        state.designations = action.payload;
      },
      addDesignation: (state, action) => {
        state.designations.push(action.payload);
      },
      updateDesignation: (state, action) => {
        const { id, updatedDesignation } = action.payload;
        const index = state.designations.findIndex(designation => designation.designation_id === id);
        if (index !== -1) {
          state.designations[index] = {
            ...state.designations[index],
            designation: updatedDesignation,
          };
        }
      },
      deleteDesignation: (state, action) => {
        state.designations = state.designations.filter(designation => designation.designation_id !== action.payload);
      },
    },
  });
  
  export const { setDesignations, addDesignation, updateDesignation, deleteDesignation } = designationsSlice.actions;
  
  // Create Redux Store
  const store = configureStore({
    reducer: {
      designations: designationsSlice.reducer,
    },
  });

function AdminDesignations() {
    const dispatch = useDispatch();
  const designations = useSelector((state) => state.designations.designations);
  const token = sessionStorage.getItem("tokenadmin");
  const [newDesignation, setNewDesignation] = useState('');
  const [selectedDesignationId, setSelectedDesignationId] = useState(null);
  const [updatedDesignationName, setUpdatedDesignationName] = useState('');

    // Add Designation 
    useEffect(() => {
        axios
          .post(
            `${import.meta.env.VITE_BASE_API_URL1}/api/designations/getdesignations`,
            { designations: designations, filter: 'all' },
            { headers: { Authorization: `Bearer ${token}` } }
          )
          .then((response) => {
            dispatch(setDesignations(response.data.data));
          })
          .catch((error) => {
            console.error('Error fetching designations:', error);
          });
      }, [dispatch]);
    
      // Add Designation Handler
      const handleAddDesignation = () => {
        axios
          .post(
            `${import.meta.env.VITE_BASE_API_URL1}/api/designations/addDesignation`,
            { designation: newDesignation },
            { headers: { Authorization: `Bearer ${token}` } }
          )
          .then((response) => {
            dispatch(addDesignation(response.data.data));
            setNewDesignation('');
            const modal = document.getElementById('file-add');
            const modalInstance = bootstrap.Modal.getInstance(modal);
            modalInstance.hide();
          })
          .catch((error) => {
            console.error('Error adding designation:', error);
          });
      };
    
      const handleUpdateDesignation = (designationId, updatedDesignationName) => {
        axios
          .post(
            `${import.meta.env.VITE_BASE_API_URL1}/api/designations/updatedesignation`,
            { designation_id: designationId, designation: updatedDesignationName },
            { headers: { Authorization: `Bearer ${token}` } }
          )
          .then((response) => {
            dispatch(updateDesignation({ id: designationId, updatedDesignation: updatedDesignationName }));
            const modal = document.getElementById('update-designation');
            const modalInstance = bootstrap.Modal.getInstance(modal);
            modalInstance.hide();
          })
          .catch((error) => {
            console.error('Error updating designation:', error);
          });
      };
    
      const handleDeleteDesignation = (designationId) => {
        axios
          .post(
            `${import.meta.env.VITE_BASE_API_URL1}/api/designations/deleteDesignation`,
            { designation_id: designationId },
            { headers: { Authorization: `Bearer ${token}` } }
          )
          .then((response) => {
            dispatch(deleteDesignation(designationId));
          })
          .catch((error) => {
            console.error('Error deleting designation:', error);
          });
      };
    
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
                                                                                <th class="nk-tb-col ">Id</th>

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
                                                                            {designations.map((designation,index) => (
                                                                                <tr key={designation.id} className="nk-tb-item">
                                                                                    <td className="nk-tb-col">{index+1}</td>

                                                                                    <td className="nk-tb-col">{designation.designation}</td>
                                                                                    <td className="nk-tb-col nk-tb-col-tools">
                                                                                        <ul className="nk-tb-actions gx-1 my-n1">
                                                                                            <li className="me-n1">
                                                                                                <td className="tb-col-mb">
                                                                                                    <a href="#update" onClick={() => {
                                                                                                        setSelectedDesignationId(designation.designation_id); // Set the selected designation ID
                                                                                                        setUpdatedDesignationName(designation.designation); // Set the current designation name
                                                                                                    }} className="btn" data-bs-toggle="modal">
                                                                                                        <em className="icon ni ni-edit"></em>
                                                                                                    </a>
                                                                                                    <a onClick={() => handleDeleteDesignation(designation.designation_id)} className="btn">
                                                                                                        <em className="icon ni ni-trash"></em>
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
                                                                        <form onSubmit={(e) => e.preventDefault()}>
                                                                            <div class="form-group">
                                                                                <label for=""
                                                                                    class="form-label  fw-bold ">Designations </label>
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    id="updated-designation-name"
                                                                                    placeholder="Enter Designation"
                                                                                    value={updatedDesignationName}
                                                                                    onChange={(e) => setUpdatedDesignationName(e.target.value)}
                                                                                />
                                                                            </div>


                                                                        </form>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <button type="button"
                                                                            class="btn btn-primary"  onClick={() => {
                                                                                handleUpdateDesignation(selectedDesignationId, updatedDesignationName);
                                                                                
                                                                                // Get the modal by ID and close it using Bootstrap's modal API
                                                                                const modal = document.getElementById('update');
                                                                                const modalInstance = bootstrap.Modal.getInstance(modal);
                                                                                modalInstance.hide(); // Close the modal
                                                                              }}>Update</button>

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
} 
const AdminDesignationsApp = () => (
    <Provider store={store}>
      <AdminDesignations />
    </Provider>
  );
  
  export default AdminDesignationsApp;