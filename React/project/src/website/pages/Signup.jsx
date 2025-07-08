import React, { useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
import { toast } from 'react-toastify'

function Signup() {

  const redirect = useNavigate();

  const [data, setData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    mobile: "",
    image: "",
    status: ""
  })
  const changHandel = (e) => {
    setData({ ...data, id: new Date().getTime().toString(), status: "Unblock", [e.target.name]: e.target.value });
    console.log(data);
  }

  const validate = () => {
    var result = true;
    if (data.name == "") {
      toast.error('Name Field is required !')
      result = false;
    }
    if (data.email == "") {
      toast.error('Email Field is required !')
      result = false;
    }
    if (data.password == "") {
      toast.error('Password Field is required !')
      result = false;
    }
    if (data.mobile == "") {
      toast.error('mobile Field is required !')
      result = false;
    }
    if (data.image == "") {
      toast.error('image Field is required !')
      result = false;
    }
    return result;
  }
  const submitHandel = async (e) => {
    e.preventDefault();
    if (validate()) {
      const res = await axios.post(`http://localhost:3000/user`, data);
      console.log(res);
      if (res.status == 201) {
        setData({ ...data, name: "", email: "", password: "", mobile: "", image: "" });
        swal({
          title: "Success!",
          text: "Registration Successfull!",
          icon: "success",
          button: "Done",
        });
      }
    }
  }

  return (
    <div>
      <Header />
      {/* Start Content Page */}
      <div className="container-fluid bg-light py-5">
        <div className="col-md-6 m-auto text-center">
          <h1 className="h1">Signup Us</h1>

        </div>
      </div>

      {/* Start Contact */}
      <div className="container py-5">
        <div className="row py-5">
          <form className="col-md-9 m-auto" method="post" role="form" onSubmit={submitHandel}>
            <div className="row">
              <div className="form-group col-md-6 mb-3">
                <label htmlFor="inputname">Name</label>
                <input type="text" value={data.name} onChange={changHandel} className="form-control mt-1" id="name" name="name" placeholder="Name" />
              </div>
              <div className="form-group col-md-6 mb-3">
                <label htmlFor="inputemail">Mobile</label>
                <input type="number" value={data.mobile} onChange={changHandel} className="form-control mt-1" id="email" name="mobile" placeholder="Mobile" />
              </div>
              <div className="form-group col-md-6 mb-3">
                <label htmlFor="inputemail">Email</label>
                <input type="email" value={data.email} onChange={changHandel} className="form-control mt-1" id="email" name="email" placeholder="Email" />
              </div>
              <div className="form-group col-md-6 mb-3">
                <label htmlFor="inputname">password</label>
                <input type="password" value={data.password} onChange={changHandel} className="form-control mt-1" id="name" name="password" placeholder="Password" />
              </div>

              <div className="form-group col-md-12 mb-3">
                <label htmlFor="inputemail">Profile Image</label>
                <input type="url" value={data.image} onChange={changHandel} className="form-control mt-1" id="email" name="image" placeholder="Profile Image URL" />
              </div>
            </div>

            <div className="row">
              <div className="col text-start mt-2 ">
                <button type="submit" name="submit" className="btn btn-success btn-lg px-3">Signup</button>
              </div>
              <div className="col text-end mt-2">
                <Link to="/login">If you alredy registered then Login Here</Link>
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

export default Signup