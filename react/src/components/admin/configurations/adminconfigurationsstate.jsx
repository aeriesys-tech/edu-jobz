

import DashFooter from "../../candidate/footer"


import { Link, useLocation } from 'react-router-dom'
import logo from '../../../assets/img/logo.png'
import AdminMenu from "../adminmenus"
import DashMenuBar from "./adminconfigmenu"
import AdminHeader from "../header"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";

const statesSlice = createSlice({
    name: 'states',
    initialState: {
      states: [],
      countries: [],
      loading: false,
      error: null,
    },
    reducers: {
      setStates: (state, action) => {
        state.states = action.payload;
      },
      addState: (state, action) => {
        state.states.push(action.payload);
      },
      updateState: (state, action) => {
        const { id, updatedState, countryId } = action.payload;
        const index = state.states.findIndex(state => state.state_id === id);
        if (index !== -1) {
          state.states[index] = {
            ...state.states[index],
            state: updatedState,
            country_id: countryId,
          };
        }
      },
      deleteState: (state, action) => {
        state.states = state.states.filter(state => state.state_id !== action.payload);
      },
      setCountries: (state, action) => {
        state.countries = action.payload;
      },
      setLoading: (state, action) => {
        state.loading = action.payload;
      },
      setError: (state, action) => {
        state.error = action.payload;
      },
    },
  });
  
  export const {
    setStates,
    addState,
    updateState,
    deleteState,
    setCountries,
    setLoading,
    setError,
  } = statesSlice.actions;
  
  // Create Redux Store
  const store = configureStore({
    reducer: {
      states: statesSlice.reducer,
    },
  });
function AdminState() {
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);

    const token = sessionStorage.getItem("tokenadmin");
    console.log(">>>>>>>>>>>>>>>>>token", token)
    const [newState, setNewState] = useState('');
    const [selectedCountryId, setSelectedCountryId] = useState('');
    const [selectedStateId, setSelectedStateId] = useState('');

    const [updatedStateName, setUpdatedStateName] = useState('');



    useEffect(() => {
        axios
            .post(
                `${import.meta.env.VITE_BASE_API_URL1}/api/countries/getCountries`,
                {
                    country: countries, // Adjust based on API requirements
                    filter: 'all',
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
                    },
                }
            )
            .then((response) => {
                setCountries(response.data.data);
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

    useEffect(() => {
        axios
            .post(
                `${import.meta.env.VITE_BASE_API_URL1}/api/states/paginateStates`,
                {
                    state: states, // Adjust based on API requirements
                    filter: 'all',
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
                    },
                }
            )
            .then((response) => {
                setStates(response.data.data.data); // Access the nested "data" array
                console.log("States:", response.data.data.data);
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


    // add states
    const handleAddState = () => {
        axios
            .post(
                `${import.meta.env.VITE_BASE_API_URL1}/api/states/addState`,
                {
                    state: newState,
                    country_id: selectedCountryId,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((response) => {
                console.log('State added:', response.data.data);
                setStates((prevStates) => [...prevStates, response.data.data]); // Add new state to the list
                setNewState(''); // Reset the input field
                setSelectedCountryId(''); // Reset the dropdown
                // Close the modal (using Bootstrap's modal close functionality)
                const modal = document.getElementById('file-add');
                const modalInstance = bootstrap.Modal.getInstance(modal);
                modalInstance.hide();
            })
            .catch((error) => {
                console.error('Error adding state:', error);
            });
    };

    // update
    const handleUpdateState = () => {
        if (!token) {
            console.error("Token is missing");
            alert("Please log in to perform this action.");
            return;
        }

        // Ensure both country ID and state name are provided
        if (!selectedCountryId || !updatedStateName) {
            alert("Please select a country and enter a state name.");
            return;
        }

        // Assuming stateId is selected or provided somehow (e.g., when editing an existing state)
        const stateId = selectedStateId; // Make sure this state is also tracked if needed

        axios
            .post(
                `${import.meta.env.VITE_BASE_API_URL1}/api/states/updateState`,
                {
                    state_id: stateId,         // state ID to be updated
                    country_id: selectedCountryId, // selected country ID
                    state: updatedStateName     // updated state name
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((response) => {
                console.log('State updated:', response.data);
             
                setStates((prev) =>
                    prev.map((state) =>
                        state.state_id === stateId
                            ? { ...state, state: updatedStateName, country_id: selectedCountryId }
                            : state
                    )
                );

              
                const modal = document.getElementById('update');
                const modalInstance = bootstrap.Modal.getInstance(modal);
                modalInstance.hide();
            })
            .catch((error) => {
                console.error('Error updating state and country:', error.response?.data || error);
            });
    };
    const handleDeleteState = (stateId) => {
        if (!token) {
            console.error("Token is missing");
            alert("Please log in to perform this action.");
            return;
        }

        axios
            .post(
                `${import.meta.env.VITE_BASE_API_URL1}/api/states/deleteState`,
                { state_id: stateId },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((response) => {
                console.log('State deleted:', response.data);

                // Update the state to remove the deleted state from the table
                setStates((prev) => prev.filter((state) => state.state_id !== stateId));

                // alert('State successfully deleted.');
            })
            .catch((error) => {
                console.error('Error deleting state:', error.response?.data || error);
                alert('An error occurred while deleting the state.');
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
                                                                    <h3 class="nk-block-title page-title">States</h3>
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
                                                                                <th class="nk-tb-col ">Sr. no</th>
                                                                                <th class="nk-tb-col nk-tb-col-tools ">Country</th>

                                                                                <th class="nk-tb-col nk-tb-col-tools">State</th>


                                                                                <th class="nk-tb-col nk-tb-col-tools pl-3">
                                                                                    <ul class="nk-tb-actions gx-1 my-n1 ">
                                                                                        <li class="me-n1">
                                                                                            <td class=" tb-col-mb">
                                                                                                <a class="btn" ><em
                                                                                                    class="icon ni "></em><span>Actions</span></a></td>

                                                                                        </li>
                                                                                    </ul>
                                                                                </th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {states.map((state, index) => (
                                                                                <tr key={state.id} className="nk-tb-item">
                                                                                    <td className="nk-tb-col">{index + 1}</td>
                                                                                    <td className="nk-tb-col " > {countries.find((country) => country.country_id === state.country_id)?.country || "Unknown"}</td>

                                                                                    <td className="nk-tb-col nk-tb-col-tools">{state.state}</td>
                                                                                    <td className="nk-tb-col nk-tb-col-tools">
                                                                                        <ul className="nk-tb-actions gx-1 my-n1">
                                                                                            <li className="me-n1">
                                                                                            <td className="tb-col-mb">
                                                                                                <a onClick={() => {
                                                                                                    setSelectedStateId(state.state_id);
                                                                                                    setUpdatedStateName(state.state);
                                                                                                    setSelectedCountryId(state.country_id);
                                                                                                }} href="#update" className="btn" data-bs-toggle="modal">
                                                                                                    <em className="icon ni ni-edit"></em>
                                                                                                </a>
                                                                                                <a onClick={() => handleDeleteState(state.state_id)} className="btn" data-bs-toggle="modal">
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
                                                                            Add States</h5>
                                                                        <button type="button" class="close"
                                                                            data-bs-dismiss="modal" aria-label="Close">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Country</label>
                                                                            <select
                                                                                id="countrySelect"
                                                                                className="form-select"
                                                                                value={selectedCountryId}
                                                                                onChange={(e) => setSelectedCountryId(e.target.value)}
                                                                            >
                                                                                <option value="">Select Country</option>
                                                                                {countries.map((country) => (
                                                                                    <option key={country.country_id} value={country.country_id}>
                                                                                        {country.country}
                                                                                    </option>
                                                                                ))}
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        <form>
                                                                            <div class="form-group">
                                                                                <label for=""
                                                                                    class="form-label  fw-bold ">States</label>
                                                                                <input
                                                                                    type="text"
                                                                                    id="stateName"
                                                                                    className="form-control"
                                                                                    placeholder="Enter State"
                                                                                    value={newState}
                                                                                    onChange={(e) => setNewState(e.target.value)}
                                                                                />
                                                                            </div>


                                                                        </form>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <button type="button"
                                                                            class="btn btn-primary" onClick={() => {
                                                                                handleAddState();
                                                                                const modal = document.getElementById('file-add');
                                                                                const modalInstance = bootstrap.Modal.getInstance(modal);
                                                                                modalInstance.hide();
                                                                            }}>Submit</button>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="modal fade" tabindex="-1" role="dialog" id="update">
                                                            <div class="modal-dialog" role="document">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <h5 class="modal-title" id="exampleModalLabel">Edit</h5>
                                                                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        <div class="form-group">
                                                                            <label class="form-label fw-bold">Country</label>
                                                                            <select
                                                                                id="countrySelect"
                                                                                class="form-select"
                                                                                value={selectedCountryId}
                                                                                onChange={(e) => setSelectedCountryId(e.target.value)}
                                                                            >
                                                                                <option value="">Select Country</option>
                                                                                {countries.map((country) => (
                                                                                    <option key={country.country_id} value={country.country_id}>
                                                                                        {country.country}
                                                                                    </option>
                                                                                ))}
                                                                            </select>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label for="" class="form-label fw-bold">State</label>
                                                                            <input
                                                                                type="text"
                                                                                class="form-control"
                                                                                id="stateInput"
                                                                                placeholder="Enter State"
                                                                                value={updatedStateName}
                                                                                onChange={(e) => setUpdatedStateName(e.target.value)}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-primary" onClick={handleUpdateState}>Update</button>
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
const AdminStatesApp = () => (
    <Provider store={store}>
      <AdminState />
    </Provider>
  );
  
  export default AdminStatesApp;