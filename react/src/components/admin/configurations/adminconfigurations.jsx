

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

const countriesSlice = createSlice({
    name: 'countries',
    initialState: {
      countries: [],
      loading: false,
      error: null,
    },
    reducers: {
      setCountries: (state, action) => {
        state.countries = action.payload;
      },
      addCountry: (state, action) => {
        state.countries.push(action.payload);
      },
      updateCountry: (state, action) => {
        const { id, updatedCountry } = action.payload;
        const index = state.countries.findIndex(country => country.country_id === id);
        if (index !== -1) {
          state.countries[index] = {
            ...state.countries[index],
            country: updatedCountry,
          };
        }
      },
      deleteCountry: (state, action) => {
        state.countries = state.countries.filter(country => country.country_id !== action.payload);
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
    setCountries,
    addCountry,
    updateCountry,
    deleteCountry,
    setLoading,
    setError,
  } = countriesSlice.actions;
  
  // Create Redux Store
  const store = configureStore({
    reducer: {
      countries: countriesSlice.reducer,
    },
  });
  

function AdminCountry() {
    const [countries, setCountries] = useState([]);
    const token = sessionStorage.getItem("tokenadmin");
    console.log(">>>>>>>>>>>>>>>>>token", token)
    const [newCountry, setNewCountry] = useState('');
    const [selectedCountryId, setSelectedCountryId] = useState(null);
    const [updatedCountryName, setUpdatedCountryName] = useState('');

    const handleAddCountry = () => {
        axios
            .post(
                `${import.meta.env.VITE_BASE_API_URL1}/api/countries/addCountry`,
                { country: newCountry }, // Adjust according to API requirements
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((response) => {
                setCountries((prevCountries) => [...prevCountries, response.data.data]);
                setNewCountry(''); // Reset the input field
                console.log('Country added:', response.data.data);
                // Close the modal (using Bootstrap's modal close functionality)
                // Close the modal (using Bootstrap's modal close functionality)
                const modal = document.getElementById('file-add');
                const modalInstance = bootstrap.Modal.getInstance(modal);
                modalInstance.hide();
            })
            .catch((error) => {
                console.error('Error adding country:', error);
            });
    };
    // Fetch data using axios.post
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

    // delete 
    const handleDeleteCountry = (countryId) => {
        if (!token) {
            console.error("Token is missing");
            alert("Please log in to perform this action.");
            return;
        }
    
        axios
            .post(
                `${import.meta.env.VITE_BASE_API_URL1}/api/countries/deleteCountry`,
                { country_id: countryId },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((response) => {
                console.log('Country deleted:', response.data);
    
                // Update the state to remove the deleted country from the table
                setCountries((prev) => prev.filter((country) => country.country_id !== countryId));
    
                // alert('Country successfully deleted.');
            })
            .catch((error) => {
                console.error('Error deleting country:', error.response?.data || error);
                alert('An error occurred while deleting the country.');
            });
    };
    

    // Update
    const handleUpdateCountry = (countryId, updatedCountryName) => {
        if (!token) {
            console.error("Token is missing");
            alert("Please log in to perform this action.");
            return;
        }

        axios
            .post(
                `${import.meta.env.VITE_BASE_API_URL1}/api/countries/updateCountry`,
                { country_id: countryId, country: updatedCountryName },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((response) => {
                console.log('Country updated:', response.data);
                // Update the state with the updated country data
                setCountries((prev) =>
                    prev.map((country) =>
                        country.country_id === countryId
                            ? { ...country, country: updatedCountryName }
                            : country
                    )
                );

                // Close the modal after updating
                const modal = document.getElementById('update');
                const modalInstance = bootstrap.Modal.getInstance(modal);
                modalInstance.hide();
            })
            .catch((error) => {
                console.error('Error updating country:', error.response?.data || error);
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
                                                                    <h3 class="nk-block-title page-title">Country</h3>
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

                                                                                <th class="nk-tb-col nk-tb-col-tools">Country</th>

                                                                                {/* <th class="nk-tb-col tb-col-mb" >Added date</th> */}
                                                                                <th class="nk-tb-col nk-tb-col-tools pl-3">
                                                                                    <ul class="nk-tb-actions gx-1 my-n1 ">
                                                                                        <li class="me-n1">
                                                                                            <td class=" tb-col-mb">
                                                                                                <a  class="btn" ><em
                                                                                                    class="icon ni "></em><span>Actions</span></a></td>

                                                                                        </li>
                                                                                    </ul>
                                                                                </th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {countries.map((country,index) => (
                                                                                <tr key={country.id} className="nk-tb-item">
                                                                                    <td className="nk-tb-col">{index+1}</td>

                                                                                    <td className="nk-tb-col">{country.country}</td>
                                                                                    <td className="nk-tb-col nk-tb-col-tools">
                                                                                        <ul className="nk-tb-actions gx-1 my-n1">
                                                                                            <li className="me-n1">
                                                                                                <a href="#update" onClick={() => {
                                                                                                    setSelectedCountryId(country.country_id);
                                                                                                    setUpdatedCountryName(country.country);
                                                                                                }} className="btn" data-bs-toggle="modal">
                                                                                                    <em className="icon ni ni-edit"></em>
                                                                                                </a>
                                                                                                <a onClick={() => handleDeleteCountry(country.country_id)} className="btn" data-bs-toggle="modal">
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
                                                        <div class="modal fade" tabindex="-1" role="dialog" id="file-add">
                                                            <div class="modal-dialog" role="document">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <h5 class="modal-title" id="exampleModalLabel">
                                                                            Add Country</h5>
                                                                        <button type="button" class="close"
                                                                            data-bs-dismiss="modal" aria-label="Close">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        <form onSubmit={(e) => e.preventDefault()}>
                                                                            <div class="form-group">
                                                                                <label for=""
                                                                                    class="form-label  fw-bold ">Country </label>
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    id="country-name"
                                                                                    placeholder="Enter Country"
                                                                                    value={newCountry}
                                                                                    onChange={(e) => setNewCountry(e.target.value)}
                                                                                />
                                                                            </div>


                                                                        </form>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <button type="button"
                                                                            class="btn btn-primary" onClick={handleAddCountry}>Submit</button>

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
                                                                                    class="form-label  fw-bold ">Country </label>
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    id="updated-country-name"
                                                                                    placeholder="Enter Country"
                                                                                    value={updatedCountryName}
                                                                                    onChange={(e) => setUpdatedCountryName(e.target.value)}
                                                                                />
                                                                            </div>


                                                                        </form>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <button type="button"
                                                                            class="btn btn-primary"  onClick={() => handleUpdateCountry(selectedCountryId, updatedCountryName)}>Update</button>

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

const AdminCountrysApp = () => (
    <Provider store={store}>
      <AdminCountry />
    </Provider>
  );
  
  export default AdminCountrysApp;