import React from 'react'

function Admin_login() {
  return (
    <div>
      
      <div className="container-fluid bg-light py-5">
        <div className="col-md-6 m-auto text-center">
          <h1 className="h1">Admin Login</h1>
        </div>
      </div>
    
      <div className="container py-5">
        <div className="row py-5">
          <form className="col-md-9 m-auto" method="post" role="form">
            <div className="row">
              
              <div className="form-group col-md-12 mb-3">
                <label htmlFor="inputemail">Email</label>
                <input type="email" className="form-control mt-1" id="email" name="email" placeholder="Email" />
              </div>
              <div className="form-group col-md-12 mb-3">
                <label htmlFor="inputname">Name</label>
                <input type="text" className="form-control mt-1" id="name" name="name" placeholder="Password" />
              </div>
            </div>
          
            <div className="row">
              <div className="col text-end mt-2">
                <button type="submit" className="btn btn-success btn-lg px-3">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* End Contact */}
      
    </div>
  )
}

export default Admin_login