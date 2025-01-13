import { Link } from "react-router-dom"
import SideBar from "../dashboardslidebar"
import DashFooter from "../footer"
import DashHeader from "../header"
import MenuBar from "./profilemenu"


function ProfileNotification() {
    return (
        <>
            <body class="nk-body bg-lighter npc-general has-sidebar ">
                <div class="nk-app-root">
                    <div class="nk-main ">
                        <SideBar />
                        <div class="nk-wrap ">

                            <DashHeader />
                            <div class="nk-content ">
                    <div class="container-fluid">
                        <div class="nk-content-inner">
                            <div class="nk-content-body">
                                <div class="nk-block">
                                    <div class="card">
                                        <div class="card-aside-wrap">
                                            <div class="card-inner card-inner-lg">
                                            <div class="">
                                            <div class="">
                                                                <div class="">
                                            <div class="tab-content">
                                                <div class="tab-pane active" id="tabItem5">
                                                    <h4 class="title nk-block-title">Social Media Account Links</h4>
                                                    <p class='mb-5'>Here is your basic informations.</p>
                                                    <form action="#" class="gy-3 form-settings">
                                                        <div class="row g-3 align-center">
                                                            <div class="col-lg-5">
                                                                <div class="form-group"><label class="form-label"
                                                                        for="site-name">Facebook</label><span
                                                                        class="form-note">Specify the Id of your facebook Account
                                                                       </span></div>
                                                            </div>
                                                            <div class="col-lg-7">
                                                                <div class="form-group">
                                                                    <div class="form-control-wrap"><input type="text"
                                                                            class="form-control" id="site-name"
                                                                            placeholder="http://www.abc.com"/></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row g-3 align-center">
                                                            <div class="col-lg-5">
                                                                <div class="form-group"><label class="form-label"
                                                                        for="site-email">LinkedIn</label><span
                                                                        class="form-note">Specify the Id of
                                                                        your LinkedIn Account.</span></div>
                                                            </div>
                                                            <div class="col-lg-7">
                                                                <div class="form-group">
                                                                    <div class="form-control-wrap"><input type="text"
                                                                            class="form-control" id="site-email"
                                                                            placeholder="info@softnio.com"/></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row g-3 align-center">
                                                            <div class="col-lg-5">
                                                                <div class="form-group"><label class="form-label"
                                                                        for="site-name">Twitter </label><span
                                                                        class="form-note">Specify the id of your
                                                                        Twitter Account.</span></div>
                                                            </div>
                                                            <div class="col-lg-7">
                                                                <div class="form-group">
                                                                    <div class="form-control-wrap"><input type="text"
                                                                            class="form-control" id="site-name"
                                                                        placeholder="info.twitter"/></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row g-3 align-center">
                                                            <div class="col-lg-5">
                                                                <div class="form-group"><label class="form-label"
                                                                        for="site-email">Youtube Channel</label><span
                                                                        class="form-note">Specify the channel name of
                                                                        your Youtube Account.</span></div>
                                                            </div>
                                                            <div class="col-lg-7">
                                                                <div class="form-group">
                                                                    <div class="form-control-wrap"><input type="text"
                                                                            class="form-control" id="site-email"
                                                                            placeholder="info@softnio.com"/></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                     
                                                       
                                                       
                                                       
                                                        <div class="row g-3 ">
                                                            <div class="col-lg-12">
                                                                <div class="form-group justify-end mt-4"><button type="submit"
                                                                        class="btn btn-lg btn-primary"
                                                                        data-bs-target="#modalAlert"
                                                                        data-bs-toggle="modal">Update</button></div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                
                                               
                                            </div>
                                        </div>
                                        </div>
                                                                    
                                                                </div>
                                            </div>
                                           <MenuBar/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <DashFooter/>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}

export default ProfileNotification
