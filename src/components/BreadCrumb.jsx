import React, { useState } from 'react'
import MobileNav from './SideNav/MobileNav'

function BreadCrumb() {

    const [fiexed, setFixed] = useState(false);

    const fixed = () => {
        if (window.scrollY >= 150) {
            setFixed(true);
        } else {
            setFixed(false);
        }
    };

    window.addEventListener("scroll", fixed);

    return (

        <nav className={`${fiexed ? "fixed" : ""} `} aria-label="breadcrumb">

            <div className="d-flex align-items-center justify-content-between">

                <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                    <li class="breadcrumb-item text-sm"> Dashboard </li>
                    <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Home</li>
                </ol>

                <div className="">
                    <MobileNav />
                </div>

            </div>

        </nav>

    )
}

export default BreadCrumb