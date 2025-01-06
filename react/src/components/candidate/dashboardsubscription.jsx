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
                            <div class="nk-content pb-0">
                                <div class="container-fluid">
                                    <div class="nk-content-inner">
                                        <div class="nk-content-body">
                                            <div class="nk-block-head nk-block-head-sm">
                                                <div class="nk-block-head-sub"><span>Pricing</span></div>
                                                <div class="nk-block-between">
                                                    <div class="nk-block-head-content">
                                                        <h3 class="nk-block-title page-title">Choose Suitable Plan</h3>
                                                        <div class="nk-block-des text-soft">
                                                            <p>You can change your plan any time by upgrade your plan</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-around">
                                    <div class="col-3 card pricing text-center">
                                        <div class="pricing-body">
                                            <div class="pricing-media">
                                                <img src={img} alt="" />
                                            </div>
                                            <div class="pricing-title w-220px mx-auto">
                                                <h5 class="title">Starter</h5>
                                                <span class="sub-text">If you are a small business amn please select
                                                    this plan</span>
                                            </div>
                                            <div class="pricing-amount">
                                                <div class="amount">$99 <span>/yr</span>
                                                </div>
                                                <span class="bill">1 User, Billed Yearly</span>
                                            </div>
                                            <div class="pricing-action">
                                                <a to="#" class="btn btn-primary">Select Plan</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-3 card pricing text-center">
                                        <div class="pricing-body">
                                            <div class="pricing-media">
                                                <img src={img1} alt="" />
                                            </div>
                                            <div class="pricing-title w-220px mx-auto">
                                                <h5 class="title">Pro</h5>
                                                <span class="sub-text">If you are a small business amn please select
                                                    this plan</span>
                                            </div>
                                            <div class="pricing-amount">
                                                <div class="amount">$299 <span>/yr</span>
                                                </div>
                                                <span class="bill">1 User, Billed Yearly</span>
                                            </div>
                                            <div class="pricing-action">
                                                <a to="#" class="btn btn-primary">Select Plan</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-3 card pricing text-center">
                                        <div class="pricing-body">
                                            <div class="pricing-media">
                                                <img src={img2} alt="" />
                                            </div>
                                            <div class="pricing-title w-220px mx-auto">
                                                <h5 class="title">Enterprises</h5>
                                                <span class="sub-text">If you are a small business amn please select
                                                    this plan</span>
                                            </div>
                                            <div class="pricing-amount">
                                                <div class="amount">$599 <span>/yr</span>
                                                </div>
                                                <span class="bill">1 User, Billed Yearly</span>
                                            </div>
                                            <div class="pricing-action">
                                                <a to="#" class="btn btn-primary">Select Plan</a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="nk-block mt-5 mb-5">
                                        <div class="card card-bordered">
                                            <table class="table table-features">
                                                <thead class="tb-ftr-head table-light">
                                                    <tr class="tb-ftr-item">
                                                        <th class="tb-ftr-info py-3">Features</th>
                                                        <th class="tb-ftr-plan py-3 text-center">Starter</th>
                                                        <th class="tb-ftr-plan py-3 text-center">Pro</th>
                                                        <th class="tb-ftr-plan py-3 text-center">Enterprise</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="tb-ftr-body">
                                                    <tr class="tb-ftr-item">
                                                        <td class="tb-ftr-info py-2 fw-bold">Alias record</td>
                                                        <td class="tb-ftr-plan py-2 text-center  text-primary"><em class="icon ni ni-check-thick"></em>
                                                            </td>
                                                        <td class="tb-ftr-plan py-2 text-center text-primary"><em class="icon ni ni-check-thick"></em>
                                                            </td>
                                                        <td class="tb-ftr-plan py-2 text-center text-primary"><em class="icon ni ni-check-thick" ></em>
                                                            </td>
                                                    </tr>
                                                    <tr class="tb-ftr-item">
                                                        <td class="tb-ftr-info py-2 fw-bold">Anycast DNS</td>
                                                        <td class="tb-ftr-plan py-2 text-center text-primary"><em class="icon ni ni-check-thick"></em>
                                                           </td>
                                                        <td class="tb-ftr-plan py-2 text-center text-primary"><em class="icon ni ni-check-thick"></em>
                                                            </td>
                                                        <td class="tb-ftr-plan py-2 text-center text-primary"><em class="icon ni ni-check-thick "></em>
                                                            </td>
                                                    </tr>
                                                    <tr class="tb-ftr-item"> 
                                                        <td class="tb-ftr-info py-2 fw-bold">Full API access</td>
                                                        <td class="tb-ftr-plan py-2 text-center text-primary"><em class="icon ni ni-cross"></em> </td>
                                                        <td class="tb-ftr-plan py-2 text-center text-primary"><em class="icon ni ni-check-thick"></em>
                                                            </td>
                                                        <td class="tb-ftr-plan py-2 text-center text-primary"><em class="icon ni ni-check-thick "></em>
                                                           </td>
                                                    </tr>
                                                    <tr class="tb-ftr-item">
                                                        <td class="tb-ftr-info py-2 fw-bold">Multiple-layered DoS defense</td>
                                                        <td class="tb-ftr-plan py-2 text-center text-primary"><em class="icon ni ni-cross"></em> </td>
                                                        <td class="tb-ftr-plan py-2 text-center text-primary"><em class="icon ni ni-cross"></em> </td>
                                                        <td class="tb-ftr-plan py-2 text-center text-primary "><em class="icon ni ni-check-thick "></em>
                                                            </td>
                                                    </tr>
                                                </tbody>
                                            </table>
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