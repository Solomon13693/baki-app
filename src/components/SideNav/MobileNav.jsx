import React, { useState } from 'react'
import './sidenav.css'
import Logo from '../assets/images/Logo.png'
import Home from '../assets/images/icons/Home.svg'
import Bag from '../assets/images/icons/Bag.svg'
import Swap from '../assets/images/icons/Swap.svg'
import User from '../assets/images/icons/User.svg'
import Info from '../assets/images/icons/InfoSquare.svg'

function MobileNav() {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (

        <div className="">

            <div onClick={handleClick} className="bar">

                {open ? <i className="ri-close-circle-fill"></i> : <i className="ri-bar-chart-horizontal-line"></i>}


            </div>

            <aside className={` ${open ? '' : 'left'} mobile_sideNav sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-x fixed-start px-2`} id="sidenav-main">

            <div class="sidenav-header mb-5">
                <i class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                <a class="navbar-brand m-0" href="*" >
                    <img src={Logo} class="navbar-brand-img h-100" alt="main_logo" />
                </a>
            </div>

            <div class="collapse navbar-collapse  w-auto" id="sidenav-collapse-main">

                <ul class="navbar-nav">

                    <li class="nav-item">
                        <a class="nav-link active" href="javascript:void(0)">
                            <div class="text-center me-4 d-flex align-items-center justify-content-center">

                                <img src={Home} alt="" />

                            </div>

                            <span class="nav-link-text ms-1">Home</span>

                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0)">
                            <div class="text-center me-4 d-flex align-items-center justify-content-center">

                                <img src={Bag} alt="" />

                            </div>

                            <span class="nav-link-text ms-1">Deposit</span>

                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0)">
                            <div class="text-center me-4 d-flex align-items-center justify-content-center">

                                <img src={Swap} alt="" />

                            </div>

                            <span class="nav-link-text ms-1">Mint</span>

                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0)">
                            <div class="text-center me-4 d-flex align-items-center justify-content-center">

                                <img src={User} alt="" />

                            </div>

                            <span class="nav-link-text ms-1">Swap</span>

                        </a>
                    </li>

                </ul>

            </div>

            <button className="btn btn-primary px-4 py-3 w-100"> <img src={Info} alt="" /> Guide</button>

        </aside>

        </div >


    )
}

export default MobileNav