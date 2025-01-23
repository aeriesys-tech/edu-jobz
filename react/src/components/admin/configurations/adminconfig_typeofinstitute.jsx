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

const TypeOfInstituteSlice = createSlice({
    name: 'types_of_institutes',
    initialState: {
        types_of_institutes: [],
        loading: false,
        error: null,
    },
    reducers: {
        setTypesOfInstitutes: (state, action) => {
            state.types_of_institutes = action.payload;
        },
        addTypeOfInstitute: (state, action) => {
            state.types_of_institutes.push(action.payload);
        },
        updateTypeOfInstitute: (state, action) => {
            const { id, updatedTypeOfInstitute } = action.payload;
            const index = state.types_of_institutes.findIndex(type => type.type_of_institute_id === id);
            if (index !== -1) {
                state.types_of_institutes[index] = {
                    ...state.types_of_institutes[index],
                    type_of_institute: updatedTypeOfInstitute,
                };
            }
        },
        deleteTypeOfInstitute: (state, action) => {
            state.types_of_institutes = state.types_of_institutes.filter(type => type.type_of_institute_id !== action.payload);
        },
    },
});

export const { setTypesOfInstitutes, addTypeOfInstitute, updateTypeOfInstitute, deleteTypeOfInstitute } = TypeOfInstituteSlice.actions;

// Create Redux Store
const store = configureStore({
    reducer: {
        types_of_institutes: TypeOfInstituteSlice.reducer,
    },
});

function AdminTypeofInstitute() {
    const dispatch = useDispatch();
    const types_of_institutes = useSelector((state) => state.types_of_institutes.types_of_institutes);
    const token = sessionStorage.getItem("tokenadmin");
    const [newTypeOfInstitute, setNewTypeOfInstitute] = useState('');
    const [selectedTypeOfInstituteId, setSelectedTypeOfInstituteId] = useState(null);
    const [updatedTypeOfInstituteName, setUpdatedTypeOfInstituteName] = useState('');

    // Fetch Type of Institutes on Component Mount
    useEffect(() => {
        axios
            .post(
                `${import.meta.env.VITE_BASE_API_URL1}/api/types_of_institutes/getTypeOfInstitutes`,
                { filter: 'all' },
                { headers: { Authorization: `Bearer ${token}` } }
            )
            .then((response) => {
                dispatch(setTypesOfInstitutes(response.data.data));
            })
            .catch((error) => {
                console.error('Error fetching type of institutes:', error);
            });
    }, [dispatch, token]);

    // Add Type of Institute Handler
    const handleAddTypeOfInstitute = () => {
        axios
            .post(
                `${import.meta.env.VITE_BASE_API_URL1}/api/types_of_institutes/addTypeOfInstitute`,
                { type_of_institute: newTypeOfInstitute },
                { headers: { Authorization: `Bearer ${token}` } }
            )
            .then((response) => {
                dispatch(addTypeOfInstitute(response.data.data));
                setNewTypeOfInstitute('');
                const modal = document.getElementById('file-add');
                const modalInstance = bootstrap.Modal.getInstance(modal);
                modalInstance.hide();
            })
            .catch((error) => {
                console.error('Error adding type of institute:', error);
            });
    };

    // Update Type of Institute Handler
    const handleUpdateTypeOfInstitute = (typeOfInstituteId, updatedTypeOfInstituteName) => {
        axios
            .post(
                `${import.meta.env.VITE_BASE_API_URL1}/api/types_of_institutes/updateTypeOfInstitute`,
                { type_of_institute_id: typeOfInstituteId, type_of_institute: updatedTypeOfInstituteName },
                { headers: { Authorization: `Bearer ${token}` } }
            )
            .then((response) => {
                dispatch(updateTypeOfInstitute({ id: typeOfInstituteId, updatedTypeOfInstitute: updatedTypeOfInstituteName }));
                const modal = document.getElementById('update');
                const modalInstance = bootstrap.Modal.getInstance(modal);
                modalInstance.hide();
            })
            .catch((error) => {
                console.error('Error updating type of institute:', error);
            });
    };

    // Delete Type of Institute Handler
    const handleDeleteTypeOfInstitute = (typeOfInstituteId) => {
        axios
            .post(
                `${import.meta.env.VITE_BASE_API_URL1}/api/types_of_institutes/deleteTypeOfInstitute`,
                { type_of_institute_id: typeOfInstituteId },
                { headers: { Authorization: `Bearer ${token}` } }
            )
            .then((response) => {
                dispatch(deleteTypeOfInstitute(typeOfInstituteId));
            })
            .catch((error) => {
                console.error('Error deleting type of institute:', error);
            });
    };

    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    const isParentActive = (basePath) => location.pathname.startsWith(basePath);

    return (
        <>
            <body className="nk-body bg-lighter npc-default has-sidebar">
                <div className="nk-app-root">
                    <div className="nk-main">
                        <AdminMenu />
                        <div className="nk-wrap ">
                            <AdminHeader />
                            <div className="nk-content ">
                                <div className="container-fluid">
                                    <div className="nk-content-inner">
                                        <div className="nk-content-body">
                                            <div className="nk-block">
                                                <div className="card">
                                                    <div className="card-aside-wrap">
                                                        <div className="nk-fmg-body nk-fmg-filebody ">
                                                          
                                                              
                                                                    <div class="nk-fmg-body-head d-none d-lg-flex">
                                                                <div class="nk-block-head-content">

                                                                    <h3 className="nk-block-title page-title">Type of Institutes</h3>
                                                                   </div>
                                                                    <div className="nk-fmg-actions">
                                                                        <ul className="nk-block-tools g-3">
                                                                            <li><a href="#file-add" className="btn btn-primary" data-bs-toggle="modal"><em className="icon ni ni-plus"></em><span>Add</span></a></li>
                                                                        </ul>
                                                                    </div>
                                                                    </div>
                                                                    <div class="">
                                                                <div class="card-inner">
                                                                    <table className="nowrap nk-tb-list nk-tb-ulist">
                                                                    <thead>
                                                                            <tr class="nk-tb-item nk-tb-head">
                                                                                <th class="nk-tb-col ">Sr. no</th>

                                                                                <th class="nk-tb-col nk-tb-col-tools">Type Of Institutes</th>


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
                                                                            {types_of_institutes.map((type, index) => (
                                                                                <tr key={type.type_of_institute_id} className="nk-tb-item">
                                                                                    <td className="nk-tb-col ">{index + 1}</td>
                                                                                    <td className="nk-tb-col nk-tb-col-tools">{type.type_of_institute}</td>
                                                                                    <td className="nk-tb-col nk-tb-col-tools">
                                                                                        <ul className="nk-tb-actions gx-1 my-n1">
                                                                                            <li className="me-n1">
                                                                                                <a href="#update" onClick={() => {
                                                                                                    setSelectedTypeOfInstituteId(type.type_of_institute_id);
                                                                                                    setUpdatedTypeOfInstituteName(type.type_of_institute);
                                                                                                }} className="btn" data-bs-toggle="modal">
                                                                                                    <em className="icon ni ni-edit"></em>
                                                                                                </a>
                                                                                                <a onClick={() => handleDeleteTypeOfInstitute(type.type_of_institute_id)} className="btn">
                                                                                                    <em className="icon ni ni-trash"></em>
                                                                                                </a>
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

                                                        {/* Add Type of Institute Modal */}
                                                        <div className="modal fade" id="file-add" tabindex="-1" role="dialog">
                                                            <div className="modal-dialog" role="document">
                                                                <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h5 className="modal-title">Add Type of Institute</h5>
                                                                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        <form onSubmit={(e) => e.preventDefault()}>
                                                                            <div className="form-group">
                                                                                <label className="form-label">Type of Institute</label>
                                                                                <input type="text" className="form-control" placeholder="Enter Type of Institute"
                                                                                       value={newTypeOfInstitute} onChange={(e) => setNewTypeOfInstitute(e.target.value)} />
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                    <div className="modal-footer">
                                                                        <button type="button" className="btn btn-primary" onClick={handleAddTypeOfInstitute}>Submit</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Edit Type of Institute Modal */}
                                                        <div className="modal fade" id="update" tabindex="-1" role="dialog">
                                                            <div className="modal-dialog" role="document">
                                                                <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h5 className="modal-title">Edit Type of Institute</h5>
                                                                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        <form onSubmit={(e) => e.preventDefault()}>
                                                                            <div className="form-group">
                                                                                <label className="form-label">Type of Institute</label>
                                                                                <input type="text" className="form-control" value={updatedTypeOfInstituteName}
                                                                                       onChange={(e) => setUpdatedTypeOfInstituteName(e.target.value)} />
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                    <div className="modal-footer">
                                                                        <button type="button" className="btn btn-primary" onClick={() => handleUpdateTypeOfInstitute(selectedTypeOfInstituteId, updatedTypeOfInstituteName)}>Update</button>
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
    );
}

const AdminInstituteApp = () => (
    <Provider store={store}>
        <AdminTypeofInstitute />
    </Provider>
);

export default AdminInstituteApp;
