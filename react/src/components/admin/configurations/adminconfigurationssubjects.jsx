import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import AdminMenu from "../adminmenus";
import DashMenuBar from "./adminconfigmenu";
import AdminHeader from "../header";
import DashFooter from "../../candidate/footer";
import { useLocation } from 'react-router-dom';

const subjectsSlice = createSlice({
    name: 'subjects',
    initialState: {
        subjects: [],
        loading: false,
        error: null,
    },
    reducers: {
        setSubjects: (state, action) => {
            state.subjects = action.payload;
        },
        addSubject: (state, action) => {
            state.subjects.push(action.payload);
        },
        updateSubject: (state, action) => {
            const { id, updatedSubject } = action.payload;
            const index = state.subjects.findIndex(subject => subject.subject_id === id);
            if (index !== -1) {
                state.subjects[index] = {
                    ...state.subjects[index],
                    subject: updatedSubject,
                };
            }
        },
        deleteSubject: (state, action) => {
            state.subjects = state.subjects.filter(subject => subject.subject_id !== action.payload);
        },
    },
});

export const { setSubjects, addSubject, updateSubject, deleteSubject } = subjectsSlice.actions;

const store = configureStore({
    reducer: {
        subjects: subjectsSlice.reducer,
    },
});

function AdminSubjects() {
    const dispatch = useDispatch();
    const subjects = useSelector((state) => state.subjects.subjects);
    const token = sessionStorage.getItem("tokenadmin");
    const [newSubject, setNewSubject] = useState('');
    const [selectedSubjectId, setSelectedSubjectId] = useState(null);
    const [updatedSubjectName, setUpdatedSubjectName] = useState('');

    // Fetch Subjects
    useEffect(() => {
        axios
            .post(
                `${import.meta.env.VITE_BASE_API_URL1}/api/subjects/getSubjects`,
                { subjects: subjects, filter: 'all' },
                { headers: { Authorization: `Bearer ${token}` } }
            )
            .then((response) => {
                dispatch(setSubjects(response.data.data));
            })
            .catch((error) => {
                console.error('Error fetching subjects:', error);
            });
    }, [dispatch]);

    // Add Subject Handler
    const handleAddSubject = () => {
        axios
            .post(
                `${import.meta.env.VITE_BASE_API_URL1}/api/subjects/addSubject`,
                { subject: newSubject },
                { headers: { Authorization: `Bearer ${token}` } }
            )
            .then((response) => {
                dispatch(addSubject(response.data.data));
                setNewSubject('');
                const modal = document.getElementById('file-add');
                const modalInstance = bootstrap.Modal.getInstance(modal);
                modalInstance.hide();
            })
            .catch((error) => {
                console.error('Error adding subject:', error);
            });
    };

    // Update Subject Handler
    const handleUpdateSubject = (subjectId, updatedSubjectName) => {
        axios
            .post(
                `${import.meta.env.VITE_BASE_API_URL1}/api/subjects/updateSubject`,
                { subject_id: subjectId, subject: updatedSubjectName },
                { headers: { Authorization: `Bearer ${token}` } }
            )
            .then((response) => {
                dispatch(updateSubject({ id: subjectId, updatedSubject: updatedSubjectName }));
                const modal = document.getElementById('update-subject');
                const modalInstance = bootstrap.Modal.getInstance(modal);
                modalInstance.hide();
            })
            .catch((error) => {
                console.error('Error updating subject:', error);
            });
    };

    // Delete Subject Handler
    const handleDeleteSubject = (subjectId) => {
        axios
            .post(
                `${import.meta.env.VITE_BASE_API_URL1}/api/subjects/deleteSubject`,
                { subject_id: subjectId },
                { headers: { Authorization: `Bearer ${token}` } }
            )
            .then(() => {
                dispatch(deleteSubject(subjectId));
            })
            .catch((error) => {
                console.error('Error deleting subject:', error);
            });
    };

    const location = useLocation();

    return (
        <>
            <body className="nk-body bg-lighter npc-default has-sidebar">
                <div className="nk-app-root">
                    <div className="nk-main">
                        <AdminMenu />
                        <div className="nk-wrap">

                            <AdminHeader />
                            <div className="nk-content">
                                <div className="container-fluid">
                                    <div className="nk-content-inner">
                                        <div className="nk-content-body">
                                            <div className="nk-block">
                                                <div className="card">
                                                    <div className="card-aside-wrap">
                                                        <div className="nk-fmg-body nk-fmg-filebody">
                                                            <div className="nk-fmg-body-head d-none d-lg-flex">
                                                                <div className="nk-block-head-content">
                                                                    <h3 className="nk-block-title page-title">Subjects</h3>
                                                                </div>
                                                                <div className="nk-fmg-actions">
                                                                    <ul className="nk-block-tools g-3">
                                                                        <li>
                                                                            <a href="#file-add" className="btn btn-primary" data-bs-toggle="modal">
                                                                                <em className="icon ni ni-plus"></em>
                                                                                <span>Add</span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="card-inner">
                                                                <table className="nk-tb-list nk-tb-ulist" data-auto-responsive="false">
                                                                <thead>
                                                                            <tr class="nk-tb-item nk-tb-head">
                                                                                <th class="nk-tb-col ">Sr. no</th>
                                                                                <th class="nk-tb-col nk-tb-col-tools">Subjects</th>

                                                                               


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
                                                                        {subjects.map((subject, index) => (
                                                                            <tr key={subject.subject_id} className="nk-tb-item">
                                                                                <td className="nk-tb-col">{index + 1}</td>
                                                                                <td className="nk-tb-col nk-tb-col-tools">{subject.subject}</td>
                                                                                <td className="nk-tb-col nk-tb-col-tools">
                                                                                    <ul className="nk-tb-actions gx-1 my-n1">
                                                                                        <li>
                                                                                            <a
                                                                                                href="#update-subject"
                                                                                                onClick={() => {
                                                                                                    setSelectedSubjectId(subject.subject_id);
                                                                                                    setUpdatedSubjectName(subject.subject);
                                                                                                }}
                                                                                                className="btn"
                                                                                                data-bs-toggle="modal"
                                                                                            >
                                                                                                <em className="icon ni ni-edit"></em>
                                                                                            </a>
                                                                                            <a
                                                                                                onClick={() => handleDeleteSubject(subject.subject_id)}
                                                                                                className="btn"
                                                                                            >
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
                                                        <div className="modal fade" id="file-add">
                                                            <div className="modal-dialog">
                                                                <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h5 className="modal-title">Add Subject</h5>
                                                                        <button type="button" className="close" data-bs-dismiss="modal">
                                                                            <span>&times;</span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder="Enter Subject"
                                                                            value={newSubject}
                                                                            onChange={(e) => setNewSubject(e.target.value)}
                                                                        />
                                                                    </div>
                                                                    <div className="modal-footer">
                                                                        <button type="button" className="btn btn-primary" onClick={handleAddSubject}>Submit</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="modal fade" id="update-subject">
                                                            <div className="modal-dialog">
                                                                <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h5 className="modal-title">Edit Subject</h5>
                                                                        <button type="button" className="close" data-bs-dismiss="modal">
                                                                            <span>&times;</span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder="Enter Subject"
                                                                            value={updatedSubjectName}
                                                                            onChange={(e) => setUpdatedSubjectName(e.target.value)}
                                                                        />
                                                                    </div>
                                                                    <div className="modal-footer">
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-primary"
                                                                            onClick={() => handleUpdateSubject(selectedSubjectId, updatedSubjectName)}
                                                                        >
                                                                            Update
                                                                        </button>
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

const AdminSubjectApp = () => (
    <Provider store={store}>
        <AdminSubjects />
    </Provider>
);

export default AdminSubjectApp;
