import React, { useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

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
    const res = await axios.get(`http://localhost:3000/user?email=${data.email}`);
    console.log(res);
    if (res.data.length > 0) {
      if (res.data[0].password == data.password) {
        if (res.data[0].status == "Unblock") {
          
          localStorage.setItem('uid',res.data[0].id);
          localStorage.setItem('uname',res.data[0].name);
          localStorage.setItem('uemail',res.data[0].email);
          return redirect('/');
        }
        else {
          alert('Blocked Account !')
          return false;
        }
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
      <Header />
      {/* Start Content Page */}
      <div className="container-fluid bg-light py-5">
        <div className="col-md-6 m-auto text-center">
          <h1 className="h1">Login Us</h1>

        </div>
      </div>

      {/* Start Contact */}
      <div className="container py-5">
        <div className="row py-5">
          <form className="col-md-9 m-auto" method="post" role="form" onSubmit={submitHandel}>
            <div className="row">

              <div className="form-group col-md-12 mb-3">
                <label htmlFor="inputemail">Email</label>
                <input type="email" value={data.email} onChange={changHandel} className="form-control mt-1" id="email" name="email" placeholder="Email" />
              </div>
              <div className="form-group col-md-12 mb-3">
                <label htmlFor="inputname">password</label>
                <input type="password" value={data.password} onChange={changHandel} className="form-control mt-1" id="name" name="password" placeholder="Password" />
              </div>
            </div>

            <div className="row">
              <div className="col text-start mt-2">
                <button type="submit" name="submit" className="btn btn-success btn-lg px-3">Login</button>
              </div>
              <div className="col text-end mt-2">
                <Link to="/signup">If you Not registered then Signup Here</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* End Contact */}
      <Footer />
    </div>

  )
}

export default Login