import React from 'react'
import './topcard.css'
import Chart from '../assets/images/Chart.png'
import Chart2 from '../assets/images/Chart2.png'

function TopCard() {
    return (

        <div class="row top_card">

            <div class="col-xl-4 col-sm-6 col-md-6 col-sm-6 mb-xl-0 mb-4">

                <h5 className='fw-bold border_bottom'>USDC</h5>

                <div class="card bg-gradient">
                    <div class="card-body">
                        <div class="row">

                            <div class="col-8">
                                <div class="numbers">
                                    <p class="text-sm mb-0 text-capitalize font-weight-bold">$</p>
                                    <p class="font-weight-bolder mb-0">
                                        350,000.00
                                    </p>
                                </div>
                            </div>

                            <div className="chart">
                                <img src={Chart} alt="" />
                            </div>

                            <div className="mt-4">

                                <div className="d-flex align-items-center justify-content-between zIndex">

                                    <div className="">
                                        <p className="title">Rate</p>
                                        <p className="child">$ 1.004</p>
                                    </div>

                                    <div className="">
                                        <p className="title">24h %</p>
                                        <p className="child">+ 0.004%</p>
                                    </div>

                                    <div className="">
                                        <p className="title">7d %</p>
                                        <p className="child">+ 0.017%</p>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div class="col-xl-4 col-sm-6 col-md-6 col-sm-6 mb-xl-0 mb-4">

                <h5 className='fw-bold border_bottom'>zNGN</h5>

                <div class="card bg-gradient-outline">
                    <div class="card-body">
                        <div class="row">

                            <div class="col-8">
                                <div class="numbers">
                                    <p class="text-sm mb-0 text-capitalize font-weight-bold">₦</p>
                                    <p class="font-weight-bolder mb-0">
                                        100,000,000.00
                                    </p>
                                </div>
                            </div>

                            <div className="chart">
                                <img src={Chart2} alt="" />
                            </div>

                            <div className="mt-4">

                                <div className="d-flex align-items-center justify-content-between zIndex">

                                    <div className="">
                                        <p className="title text-dark">Rate</p>
                                        <p className="child text-dark">₦ 416.00</p>
                                    </div>

                                    <div className="">
                                        <p className="title text-dark">24h %</p>
                                        <p className="child">- 1.17%</p>
                                    </div>

                                    <div className="">
                                        <p className="title text-dark">7d %</p>
                                        <p className="child">- 10.17%</p>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div class="col-xl-4 col-sm-6 col-md-6 col-sm-6 mb-xl-0 mb-4">

                <h5 className='fw-bold border_bottom'>zZAR</h5>

                <div class="card bg-gradient-outline">
                    <div class="card-body">
                        <div class="row">

                            <div class="col-8">
                                <div class="numbers">
                                    <p class="text-sm mb-0 text-capitalize font-weight-bold">R</p>
                                    <p class="font-weight-bolder mb-0">
                                        500,000.00
                                    </p>
                                </div>
                            </div>

                            <div className="chart">
                                <img src={Chart2} alt="" />
                            </div>

                            <div className="mt-4">

                                <div className="d-flex align-items-center justify-content-between zIndex">

                                    <div className="">
                                        <p className="title text-dark">Rate</p>
                                        <p className="child text-dark">R 16.00</p>
                                    </div>

                                    <div className="">
                                        <p className="title text-dark">24h %</p>
                                        <p className="child">- 0.002%</p>
                                    </div>

                                    <div className="">
                                        <p className="title text-dark">7d %</p>
                                        <p className="child">- 0.01%</p>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default TopCard