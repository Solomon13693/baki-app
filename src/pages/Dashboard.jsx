import React from 'react'
import TopCard from '../components/AssetCards/TopCard'
import BreadCrumb from '../components/BreadCrumb'
import SideNav from '../components/SideNav/SideNav'
import Table from '../components/Table/Table'
import TraderProfile from '../components/TraderProfile/TraderProfile'

function Dashboard() {
  return (

    <div className="Dashboard">

      <SideNav />

      <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg">

        <div class="container-fluid py-1 px-3 mt-5">

          <BreadCrumb />

          <div className="row">

            <div className="col-xl-9 mt-5">

              <div className="d-flex align-items-center justify-content-between mb-5">

                <h4 className="border_left mb-0 fw-bold">ASSETS</h4>

                <p className="mb-0">More Assets <span> <i className="ri-arrow-right-line"></i> </span> </p>

              </div>

              <TopCard />

              {/* TABLE */}

              <div className="mt-5 pt-3">

                <div className="d-flex align-items-center justify-content-between mb-5">

                  <h4 className="mb-0 fw-bold">ACTIVITY</h4>

                  <p className="mb-0">More Activity <span> <i className="ri-arrow-right-line"></i> </span> </p>

                </div>

                <Table />

              </div>

            </div>

          </div>

        </div>

      </main>

      <div className="col-lg-3">

        <div className="trader">

          <TraderProfile />

        </div>

      </div>

    </div>

  )
}

export default Dashboard