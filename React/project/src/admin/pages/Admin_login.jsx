import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Admin_login() {
  const redirect = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: ""
  })
  const changHandel = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  }


  const submitHandel = async (e) => {
    e.preventDefault();
    const res = await axios.get(`http://localhost:3000/admin?email=${data.email}`);
    console.log(res);
    if (res.data.length > 0) {
      if (res.data[0].password == data.password) {
      
          localStorage.setItem('aid', res.data[0].id);
          localStorage.setItem('aname', res.data[0].name);
          localStorage.setItem('aemail', res.data[0].email);
          return redirect('/dashboard');
      }
      else {
        alert('Wong Password !')
        return false;
      }
    }
    else {
      alert('Email does not Exist !')
      return false;
    }
  }

  return (
    <div>

      <div className="container-fluid bg-light py-5">
        <div className="col-md-6 m-auto text-center">
          <h1 className="h1">Admin Login</h1>
        </div>
      </div>

      <div className="container py-5">
        <div className="row py-5">
          <form className="col-md-9 m-auto" method="post" onSubmit={submitHandel} role="form">
            <div className="row">

              <div className="form-group col-md-12 mb-3">
                <label htmlFor="inputemail">Email</label>
                <input type="email" onChange={changHandel} value={data.email} className="form-control mt-1" id="email" name="email" placeholder="Email" />
              </div>
              <div className="form-group col-md-12 mb-3">
                <label htmlFor="inputname">Name</label>
                <input type="text" onChange={changHandel}  value={data.password}  className="form-control mt-1" id="name" name="password" placeholder="Password" />
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