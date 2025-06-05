import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

function Dashboard() {
  return (
    <div>
            <Header />
            {/* Start Content Page */}
            <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Admin Dashboard</h1>
                </div>
            </div>

            {/* Start Contact */}
            <div className="container py-5">
                <div className="row py-5">
                    
                </div>
            </div>
            {/* End Contact */}
            <Footer />
        </div>
  )
}

export default Dashboard