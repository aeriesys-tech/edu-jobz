import { Link } from "react-router-dom"
import SideBar from "./dashboardslidebar"
import DashFooter from "./footer"
import DashHeader from "./header"
import img from '../../assets/images/icons/plan-s1.svg'
import img1 from '../../assets/images/icons/plan-s2.svg'
import img2 from '../../assets/images/icons/plan-s3.svg'

function Subscription() {
    return (
        <>
            <body class="nk-body bg-lighter npc-general has-sidebar ">
                <div class="nk-app-root">
                    <div class="nk-main ">
                        <SideBar />
                        <div class="nk-wrap ">

                            <DashHeader />
                            <div class="nk-content ">
                    <div class="container wide-xl">
                        <div class="nk-content-inner">
                            <div class="nk-content-body">
                                <div class="nk-content-wrap">
                                    <div class="nk-block-head nk-block-head-lg">                                        
                                        <div class="nk-block-between-md g-4">
                                        <div class="nk-block-head-content">
                                            <h3 class="nk-block-title page-title">Choose Suitable Plan</h3>
                                            <div class="nk-block-des text-soft">
                                                <p>You can change your plan any time by upgrade your plan</p>
                                            </div>
                                        </div>
                                            
                                        </div>
                                    </div>
                            <div class="nk-block">
                                        <div class="row g-gs">
                                            <div class="col-md-4 " >
                                                <div class="price-plan card card-bordered text-center" style={{borderRadius:'20px'}}>
                                                    <div class="card-inner">
                                                        <div class="price-plan-media">
                                                            <img src={img} alt=""
                                                                style={{width: "100px"}}/>
                                                        </div>
                                                        <div class="price-plan-info mt-4 ">
                                                            <h5 class="title">Starter</h5>
                                                            <span>If you are a small
                                                                business amn<br/> please select this plan</span>
                                                        </div>
                                                        <div class="price-plan-amount mt-4">
                                                            <div class="amount"
                                                                style={{fontSize: "28px", fontWeight: "500"}}>&#8377; 99
                                                                <span>/yr</span>
                                                            </div>
                                                            <span class="bill">1 User, Billed Yearly</span>
                                                        </div>
                                                        <hr class="subscription-unerline"/>
                                                        <div class="pricing-body py-1">
                                                            <ul class="pricing-features">
                                                                <li>
                                                                    <em class="icon ni ni-check-thick "></em>
                                                                    <span class="ms-3">Overall Access to EduJobZ</span>
                                                                </li>
                                                                <li>
                                                                    <em class="icon ni ni-check-thick "></em>
                                                                   <span class="ms-3">Share EduJobZ with Team via Email</span>
                                                                </li>
                                                                <li>
                                                                    <em class="icon ni ni-cross"></em>
                                                                    <span class="ms-3">Email & Phone Support</span>
                                                                </li>
                                                                <li>
                                                                    <em class="icon ni ni-cross"></em>
                                                                    <span class="ms-3">LiveChat Support</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="price-plan-action mt-1"><a href="#"
                                                                class="btn btn-primary">Select Plan</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="price-item card card-bordered text-center" style={{borderRadius:'20px'}}>
                                                    <div class="card-inner">
                                                        <div class="price-plan-media"><img src={img1}
                                                                alt="" style={{width: "100px"}}/>
                                                        </div>
                                                        <div class="price-plan-info mt-4">
                                                            <h5 class="title">Pro</h5><span>If you are a small business
                                                                amn<br/> please select this plan</span>
                                                        </div>
                                                        <div class="price-plan-amount mt-4">
                                                            <div class="amount"
                                                                style={{fontSize: "28px", fontWeight: "500"}}>&#8377; 299
                                                                <span>/yr</span>
                                                            </div><span class="bill">5 User, Billed
                                                                Yearly</span>
                                                        </div>
                                                        <hr class="subscription-unerline"/>
                                                        <div class="pricing-body py-1">
                                                            <ul class="pricing-features">
                                                                <li>
                                                                    <em class="icon ni ni-check-thick "></em>
                                                                    <span class="ms-3">Overall Access to EduJobZ</span>
                                                                </li>
                                                                <li>
                                                                    <em class="icon ni ni-check-thick "></em>
                                                                 <span class="ms-3">Share EduJobZ with Team via Email</span>
                                                                </li>
                                                                <li>
                                                                    <em class="icon ni ni-check-thick "></em>
                                                                   <span class="ms-3">Email & Phone Support</span>
                                                                </li>
                                                                <li>
                                                                    <em class="icon ni ni-cross"></em>
                                                                   <span class="ms-3">LiveChat Support</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="price-plan-action"><a href="#"
                                                                class="btn btn-primary">Select Plan</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="price-item card card-bordered text-center" style={{borderRadius:'20px'}}>
                                                    <div class="card-inner">
                                                        <div class="price-plan-media"><img src={img2}
                                                                alt="" style={{width: "100px"}}/>
                                                        </div>
                                                        <div class="price-plan-info mt-4">
                                                            <h5 class="title">Enterprise</h5><span>If you are a small
                                                                business amn<br/> please select this plan</span>
                                                        </div>
                                                        <div class="price-plan-amount mt-4">
                                                            <div class="amount"
                                                                style={{fontSize: "28px", fontWeight: "500"}}>&#8377; 599
                                                                <span>/yr</span>
                                                            </div><span class="bill">20 User, Billed
                                                                Yearly</span>
                                                        </div>
                                                        <hr class="subscription-unerline"/>
                                                        <div class="pricing-body py-1">
                                                            <ul class="pricing-features">
                                                                <li>
                                                                    <em class="icon ni ni-check-thick "></em>
                                                                    <span class="ms-3">Overall Access to EduJobZ</span>
                                                                </li>
                                                                <li>
                                                                    <em class="icon ni ni-check-thick "></em>
                                                                    <span class="ms-3">Share EduJobZ with Team via Email</span>
                                                                </li>
                                                                <li>
                                                                    <em class="icon ni ni-check-thick "></em>
                                                                   <span class="ms-3">Email & Phone Support</span>
                                                                </li>
                                                                <li>
                                                                    <em class="icon ni ni-check-thick "></em>
                                                                    <span class="ms-3">LiveChat Support</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="price-plan-action"><a href="#"
                                                                class="btn btn-primary">Select Plan</a>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
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
export default Subscription