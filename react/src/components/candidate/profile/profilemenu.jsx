import { Link } from "react-router-dom"
import SideBar from "../dashboardslidebar"
import DashFooter from "../footer"
import DashHeader from "../header"

function MenuBar() {

    return (
        <>
            <div class="card-inner p-0">
                <ul class="link-list-menu">
                    <li><Link class="" to="/candidate/profile"><em
                        class="icon ni ni-user-fill-c"></em><span>Personal
                            Infomation</span></Link></li>
                    <li><Link
                        to="/candidate/socialmedia"><em
                            class="icon ni ni-bell-fill"></em><span>Social Media</span></Link>
                    </li>
                    <li><Link to="/candidate/experience"><em class="icon ni ni-briefcase-fill"></em><span>Experience</span></Link></li>

                    <li><Link to="/candidate/academic"><em class="icon ni ni-medal-fill"></em><span>Education</span></Link></li>
                    <li><Link to="/candidate/skill"><em
                        class="icon ni ni-activity-round-fill"></em><span>Skill</span></Link></li>
                    <li><Link to="/candidate/setting"><em
                        class="icon ni ni-lock-alt-fill"></em><span>Security
                            Settings</span></Link></li>
                    <li><Link to="/candidate/resume"><em class="icon ni ni-briefcase-fill"></em><span>Resume</span></Link></li>
                </ul>
            </div>
        </>
    )
}
export default MenuBar