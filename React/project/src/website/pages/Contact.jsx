import React, { useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Contact() {

  const redirect=useNavigate();

  const [data,setData]=useState({
    id:"",
    name:"",
    email:"",
    subject:"",
    msg:""
  })
  const changHandel=(e)=>{
    setData({...data,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
    console.log(data);
  }


  const submitHandel=async(e)=>{
    e.preventDefault();
    const res=await axios.post(`http://localhost:3000/contact`,data);
    //console.log(res);
    setData({...data,name:"",email:"",subject:"",msg:""});

  
  }

  return (
    <div>
      <Header/>
      {/* Start Content Page */}
      <div className="container-fluid bg-light py-5">
        <div className="col-md-6 m-auto text-center">
          <h1 className="h1">Contact Us</h1>
          <p>
            Proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      {/* Start Map */}
      <div id="mapid" style={{ width: '100%', height: 300 }} />
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
                <label htmlFor="inputemail">Email</label>
                <input type="email" value={data.email} onChange={changHandel} className="form-control mt-1" id="email" name="email" placeholder="Email" />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="inputsubject">Subject</label>
              <input type="text" value={data.subject} onChange={changHandel} className="form-control mt-1" id="subject" name="subject" placeholder="Subject" />
            </div>
            <div className="mb-3">
              <label htmlFor="inputmessage">Message</label>
              <textarea value={data.msg} className="form-control mt-1" id="message" onChange={changHandel} name="msg" placeholder="Message" rows={8} defaultValue={""} />
            </div>
            <div className="row">
              <div className="col text-end mt-2">
                <button type="submit" name="submit" className="btn btn-success btn-lg px-3">Let’s Talk</button>
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

export default Contact