import { Link } from "react-router-dom"

function DashFooter(){
    return (
        <>
        <div class="nk-footer">
                    <div class="container-fluid">
                        <div class="nk-footer-wrap">
                            <div class="nk-footer-copyright"> &copy; 2025 EduJobZ | All rights reserved <a
                                    href="https://softnio.com/" target="_blank">Softnio</a></div>
                            <div class="nk-footer-links">
                                <ul class="nav nav-sm">
                                 
                                    <li class="nav-item"><a target="_blank"  href="https://www.aeriesys.com/" class="nav-link"><em
                                                class="icon ni ni-globe"></em><span class="ms-1">Powered by Aeriesys Tech</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default DashFooter