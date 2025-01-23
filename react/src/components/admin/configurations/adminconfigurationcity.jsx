import DashFooter from "../../candidate/footer"
import { Link, useLocation } from 'react-router-dom'
import logo from '../../../assets/img/logo.png'
import { Provider } from "react-redux";

import AdminMenu from "../adminmenus"
import DashMenuBar from "./adminconfigmenu"
import AdminHeader from "../header"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const adminCitySlice = createSlice({
  name: 'adminCity',
  initialState: {
    states: [],
    cities: [],
    loading: false,
    error: null,
  },
  reducers: {
    setStates: (state, action) => {
      state.states = action.payload;
    },
    setCities: (state, action) => {
      state.cities = action.payload;
    },
    addCity: (state, action) => {
      state.cities.push(action.payload);
    },
    updateCity: (state, action) => {
      const { id, updatedCity } = action.payload;
      const index = state.cities.findIndex((city) => city.city_id === id);
      if (index !== -1) {
        state.cities[index] = {
          ...state.cities[index],
          ...updatedCity,
        };
      }
    },
    deleteCity: (state, action) => {
      state.cities = state.cities.filter((city) => city.city_id !== action.payload);
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
  setCities,
  addCity,
  updateCity,
  deleteCity,
  setLoading,
  setError,
} = adminCitySlice.actions;

// Create Redux Store
const store = configureStore({
  reducer: {
    adminCity: adminCitySlice.reducer,
  },
});



function AdminCity() {
    const [newCity, setNewCity] = useState('');
    const token = sessionStorage.getItem("tokenadmin");
    console.log(">>>>>>>>>>>>>>>>>token", token)
    const [cities, setCities] = useState([]);
    const [states, setStates] = useState([]);
    const [selectedStateId, setSelectedStateId] = useState('');
    const [selectedCityId, setSelectedCityId] = useState('');
    const [updatedCityName, setUpdatedCityName] = useState('');
    useEffect(() => {
        axios
            .post(
                `${import.meta.env.VITE_BASE_API_URL1}/api/states/getStates`, // Adjust endpoint as needed
                { filter: 'all' },  // Modify filter or params if necessary
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((response) => {
                if (response.data && response.data.data) {
                    setStates(response.data.data);
                    console.log("States loaded:", response.data.data);
                } else {
                    console.error("States data is missing in the response");
                }
            })
            .catch((error) => {
                console.error('Error fetching states:', error);
            });
    }, []);
    useEffect(() => {
        axios
            .post(
                `${import.meta.env.VITE_BASE_API_URL1}/api/cities/paginateCities`,
                {
                    city: cities, // Adjust based on API requirements
                    filter: 'all',
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
                    },
                }
            )
            .then((response) => {
                setCities(response.data.data.data); // Access the nested "data" array
                console.log("Cities:", response.data.data.data);
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
    }, []); // Empty dependency array means this runs once when the component mounts
    // add 
    const handleAddCity = () => {
        axios
            .post(
                `${import.meta.env.VITE_BASE_API_URL1}/api/cities/addCity`,
                {
                    state_id: selectedStateId, // ID of the selected state
                    city: newCity, // Name of the city to add
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Pass the token for authentication
                    },
                }
            )
            .then((response) => {
                console.log('City added:', response.data.data);
                // Add the new city to the existing list
                setCities((prevCities) => [...prevCities, response.data.data]);

                // Reset the form fields
                setNewCity('');
                setSelectedStateId('');

                // Close the modal
                const modal = document.getElementById('file-add');
                const modalInstance = bootstrap.Modal.getInstance(modal);
                modalInstance.hide();
            })
            .catch((error) => {
                console.error('Error adding city:', error.response?.data || error);
            });
    };
    // updates
  const handleUpdateCity = () => {
    if (!token) {
        console.error("Token is missing");
        alert("Please log in to perform this action.");
        return;
    }
    // Ensure both state ID, city ID, and city name are provided
    if (!selectedStateId || !selectedCityId || !updatedCityName) {
        alert("Please select a state, a city, and enter a new city name.");
        return;
    }
    // Prepare the data to send in the POST request
    const cityData = {
        city_id: selectedCityId,        // ID of the city to be updated
        state_id: selectedStateId,      // State ID where the city belongs
        city: updatedCityName           // The new city name
    };
    axios
        .post(
            `${import.meta.env.VITE_BASE_API_URL1}/api/cities/updateCity`,
            cityData,
            {
                headers: {
                    Authorization: `Bearer ${token}`, // Send the token in the Authorization header
                },
            }
        )
        .then((response) => {
            console.log('City updated:', response.data);

            // Update the cities list with the new city name in the local state
            setCities((prevCities) =>
                prevCities.map((city) =>
                    city.city_id === selectedCityId
                        ? { ...city, city: updatedCityName, state_id: selectedStateId }
                        : city
                )
            );

            // Hide the modal using Bootstrap modal instance
            const modal = document.getElementById('update');
            const modalInstance = bootstrap.Modal.getInstance(modal);
            modalInstance.hide();
        })
        .catch((error) => {
            console.error('Error updating city:', error.response?.data || error);
        });
};
// delete
const handleDeleteCity = (cityId) => {
    if (!token) {
        console.error("Token is missing");
        alert("Please log in to perform this action.");
        return;
    }

    axios
        .post(
            `${import.meta.env.VITE_BASE_API_URL1}/api/cities/deleteCity`,
            { city_id: cityId },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        .then((response) => {
            console.log('City deleted:', response.data);

            // Update the state to remove the deleted city from the table
            setCities((prev) => prev.filter((city) => city.city_id !== cityId));

            // alert('City successfully deleted.');
        })
        .catch((error) => {
            console.error('Error deleting city:', error.response?.data || error);
            alert('An error occurred while deleting the city.');
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
                                                                    <h3 class="nk-block-title page-title">City</h3>
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
                                                                                <th class="nk-tb-col ">State</th>
                                                                                <th class="nk-tb-col ">City</th>
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
                                                                            {cities.map((city, index) => (
                                                                                <tr className="nk-tb-item" key={city.city_id}>
                                                                                    {/* Display City Name */}
                                                                                    <td className="nk-tb-col">{index + 1}</td>
                                                                                    <td className="nk-tb-col" > {states.find((state) => state.state_id === city.state_id)?.state || "Unknown"}</td>

                                                                                    <td className="nk-tb-col">{city.city}</td>

                                                                                    {/* Actions (Edit and Delete Buttons) */}
                                                                                    <td className="nk-tb-col nk-tb-col-tools">
                                                                                        <ul className="nk-tb-actions gx-1 my-n1">
                                                                                            <li className="me-n1">
                                                                                                <td className="tb-col-mb">
                                                                                                    {/* Edit Button */}
                                                                                                    <a
                                                                                                        href="#update"
                                                                                                        className="btn"
                                                                                                        data-bs-toggle="modal"
                                                                                                        onClick={() => {
                                                                                                            setSelectedCityId(city.city_id);
                                                                                                            setUpdatedCityName(city.city);
                                                                                                        }}
                                                                                                    >
                                                                                                        <em className="icon ni ni-edit"></em>
                                                                                                        <span></span>
                                                                                                    </a>

                                                                                                    {/* Delete Button */}
                                                                                                    <a
                                                                                                   
                                                                                                        className="btn"
                                                                                                        onClick={() => handleDeleteCity(city.city_id)}
                                                                                                    >
                                                                                                        <em className="icon ni ni-trash"></em>
                                                                                                        <span></span>
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
                                                                        <h5 class="modal-title" id="exampleModalLabel">Add City</h5>
                                                                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        <div className="form-group">
                                                                            {/* State Dropdown */}
                                                                            <label className="form-label">State</label>
                                                                            <select
                                                                                id="stateSelect"
                                                                                className="form-select"
                                                                                value={selectedStateId}
                                                                                onChange={(e) => setSelectedStateId(e.target.value)}
                                                                            >
                                                                                <option value="">Select State</option>
                                                                                {states.map((state) => (
                                                                                    <option key={state.state_id} value={state.state_id}>
                                                                                        {state.state}
                                                                                    </option>
                                                                                ))}
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        <form>
                                                                            <div class="form-group">
                                                                                {/* City Input */}
                                                                                <label for="" class="form-label fw-bold">City</label>
                                                                                <input
                                                                                    type="text"
                                                                                    id="cityName"
                                                                                    className="form-control"
                                                                                    placeholder="Enter City"
                                                                                    value={newCity}
                                                                                    onChange={(e) => setNewCity(e.target.value)}
                                                                                />
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-primary"
                                                                            onClick={() => {
                                                                                handleAddCity();
                                                                                const modal = document.getElementById('file-add');
                                                                                const modalInstance = bootstrap.Modal.getInstance(modal);
                                                                                modalInstance.hide();
                                                                            }}
                                                                        >
                                                                            Submit
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="modal fade" tabindex="-1" role="dialog" id="update">
                                                            <div class="modal-dialog" role="document">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <h5 class="modal-title" id="exampleModalLabel">Update City</h5>
                                                                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        <div className="form-group">
                                                                            <label className="form-label fw-bold">State</label>
                                                                            <select
                                                                                id="stateSelect"
                                                                                className="form-select"
                                                                                value={selectedStateId}
                                                                                onChange={(e) => setSelectedStateId(e.target.value)}
                                                                            >
                                                                                <option value="">Select State</option>
                                                                                {states.map((state) => (
                                                                                    <option key={state.state_id} value={state.state_id}>
                                                                                        {state.state}
                                                                                    </option>
                                                                                ))}
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        <div className="form-group">
                                                                            {/* City Dropdown */}
                                                                            <label className="form-label fw-bold">City</label>
                                                                            <input
                                                                                type="text"
                                                                                id="updatedCityName"
                                                                                className="form-control"
                                                                                placeholder="Enter new city name"
                                                                                value={updatedCityName}
                                                                                onChange={(e) => setUpdatedCityName(e.target.value)}  />
                                                                        </div>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-primary"
                                                                            onClick={handleUpdateCity}    >
                                                                            Update City
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
    )
} 
const AdminCityApp = () => (
    <Provider store={store}>
      <AdminCity />
    </Provider>
  );
  
  export default AdminCityApp;