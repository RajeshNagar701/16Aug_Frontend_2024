import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Edit_user() {


    var redirect=useNavigate();
    var {id}=useParams();
    useEffect(() => {
        fetch();
    },[]);


    const fetch = async () => {
        const user = await axios.get(`http://localhost:3000/user/${id}`);
        setData(user.data);
    }

  const [data,setData]=useState({
    id:"",
    name:"",
    email:"",
    password:"",
    mobile:"",
    image:"",
  })


  const changHandel=(e)=>{
    setData({...data,[e.target.name]:e.target.value});
    console.log(data);
  }

  const submitHandel=async(e)=>{
    e.preventDefault();
    const res=await axios.patch(`http://localhost:3000/user/${data.id}`,data);
    return redirect('/user_profile');
  }

  return (
    <div>
      <Header/>
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
                <button type="submit" name="submit" className="btn btn-success btn-lg px-3">Save</button>
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

export default Edit_user