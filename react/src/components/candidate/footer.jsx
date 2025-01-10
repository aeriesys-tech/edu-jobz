import { Link } from "react-router-dom"

function DashFooter(){
    return (
        <>
          <div class="nk-footer">
                    <div class="container-fluid">
                        <div class="nk-footer-wrap">
                            <div class="nk-footer-copyright">&copy; 2025 EduJobZ. <a href="https://softnio.com/"
                                    target="_blank">All Rights Reserved</a></div>
                            <div class="nk-footer-links">
                                <ul class="nav nav-sm">

                                    <li class="nav-item">
                                        <a data-bs-toggle="modal" href="#region" class="nav-link" style={{color:'#003366'}}>

                                            <span class="">About Us</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a data-bs-toggle="modal" href="#region" class="nav-link" style={{color:'#003366'}}>

                                            <span class="">Contact Us</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a data-bs-toggle="modal" href="#region" class="nav-link" style={{color:'#003366'}}>

                                            <span class="">FAQ's</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a data-bs-toggle="modal" href="#region" class="nav-link" style={{color:'#003366'}}    >

                                            <span class="">Term & Conditions</span>
                                        </a>
                                    </li>

                                    <li class="nav-item">
                                        <a data-bs-toggle="modal" href="#region" class="nav-link" style={{color:'#003366'}}>
                                            <span class="">Privacy policy</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default DashFooter