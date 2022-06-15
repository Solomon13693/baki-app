import React from 'react'
import './profile.css'
import User from '../assets/images/User.png'
import Trade from '../assets/images/icons/SwapWhite.png'

function TraderProfile() {
    return (

        <div className="card px-4 py-5">

            <div className="text-center m-auto">

                <h5 className="fw-bold"> Trader Profile </h5>

                <div className="image mt-5">
                    <img src={User} alt="" />
                </div>

                <p className="mt-2">Han Ji Pyeong</p>

                <a className='edit_profile' href="/"> Edit Profile </a>

            </div>

            <div className="details mt-4">

                <h5 className="fw-bold">Account</h5>

                <div className="d-flex align-items-center justify-content-between my-3">
                    <h6>Joined</h6>
                    <p>June 22, 2020</p>
                </div>

                <div className="d-flex align-items-center justify-content-between my-3">
                    <h6>Assets Total</h6>
                    <p>$1,312,000.00</p>
                </div>

            </div>

            <div className="details mt-4">

                <h5 className="fw-bold">Assets</h5>

                <div className="d-flex align-items-center justify-content-between my-3">
                    <p>USDC</p>
                    <p>350,000,000 USDC</p>
                </div>

                <div className="d-flex align-items-center justify-content-between my-3">
                    <p>cUSD</p>
                    <p>1,000 cUSD</p>
                </div>

                <div className="d-flex align-items-center justify-content-between my-3">
                    <p>DAI</p>
                    <p>1,500 DAI</p>
                </div>

                <div className="d-flex align-items-center justify-content-between my-3">
                    <p>zNGN</p>
                    <p>100,000,000 zNGN</p>
                </div>

                <div className="d-flex align-items-center justify-content-between my-3">
                    <p>zZAR</p>
                    <p>500,000 zZAR</p>
                </div>

                <div className="more my-5 py-4">
                    <h6 className="fw-bold">More assets...</h6>
                </div>

                <button className="btn btn-primary px-4 py-3 w-100"> <img src={Trade} alt="" /> Trade Now</button>

            </div>

        </div>

    )
}

export default TraderProfile