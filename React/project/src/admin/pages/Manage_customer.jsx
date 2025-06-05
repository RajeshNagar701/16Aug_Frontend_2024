import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
function Manage_customer() {
  return (
     <div>
            <Header />
            {/* Start Content Page */}
            <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Manage Customer</h1>
                </div>
            </div>

            {/* Start Contact */}
            <div className="container py-5">
                <div className="row py-5">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mens</td>
                                <td>Mens.jpg</td>
                                <td className='text-center'>
                                   <button className='btn btn-primary m-1'>Edit</button> 
                                   <button className='btn btn-danger m-1'>Delete</button> 
                                </td>
                            </tr>
                           
                        </tbody>
                    </table>

                </div>
            </div>
            {/* End Contact */}
            <Footer />
        </div>
  )
}

export default Manage_customer