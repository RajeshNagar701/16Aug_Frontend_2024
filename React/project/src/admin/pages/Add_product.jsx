import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

function Add_product() {
  return (
    <div>
      <Header/>
      {/* Start Content Page */}
      <div className="container-fluid bg-light py-5">
        <div className="col-md-6 m-auto text-center">
          <h1 className="h1">Add Product</h1>
        </div>
      </div>
     
      {/* Start Contact */}
      <div className="container py-5">
        <div className="row py-5">
          <form className="col-md-9 m-auto" method="post" role="form">
            <div className="row">
              <div className="form-group offset-md-2  col-md-8 mb-3">
                <label htmlFor="inputname">Name</label>
                <input type="text" className="form-control mt-1" id="name" name="name" placeholder="Name" />
              </div>
              <div className="form-group offset-md-2  col-md-8 mb-3">
                <label htmlFor="inputname">Image</label>
                <input type="text" className="form-control mt-1" id="name" name="name" placeholder="Name" />
              </div>
              <div className="form-group offset-md-2  col-md-8 mb-3">
                <label htmlFor="inputname">Price</label>
                <input type="text" className="form-control mt-1" id="name" name="name" placeholder="Name" />
              </div>
              <div className="form-group offset-md-2  col-md-8 mb-3">
                <label htmlFor="inputname">Description</label>
                <input type="text" className="form-control mt-1" id="name" name="name" placeholder="Name" />
              </div>
              <div className="form-group offset-md-2  col-md-8 mb-3">
                <label htmlFor="inputname">Category</label>
                <input type="text" className="form-control mt-1" id="name" name="name" placeholder="Name" />
              </div>
            </div>
           
            <div className="row">
              <div className="col text-end mt-2">
                <button type="submit" className="btn btn-success btn-lg px-3">Add</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* End Contact */}
      <Footer/>
    </div>
  )
}

export default Add_product