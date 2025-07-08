import React, { useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
function Add_categories() {
  const redirect = useNavigate();

  const [data, setData] = useState({
    id: "",
    name: "",
    image: ""
  });

  const changHandel = (e) => {
    setData({ ...data, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
    console.log(data);
  }


  const submitHandel = async (e) => {
    e.preventDefault();
    const res = await axios.post(`http://localhost:3000/categories`, data);
    //console.log(res);
    setData({ ...data, name: "", image: "" });
    swal({
      title: "Success!",
      text: "Categories Added Successfull!",
      icon: "success",
      button: "Done",
    });
  }

  return (
    <div>
      <Header />
      {/* Start Content Page */}
      <div className="container-fluid bg-light py-5">
        <div className="col-md-6 m-auto text-center">
          <h1 className="h1">Add Categories</h1>
        </div>
      </div>

      {/* Start Contact */}
      <div className="container py-5">
        <div className="row py-5">
          <form className="col-md-9 m-auto" method="post" onSubmit={submitHandel} role="form">
            <div className="row">
              <div className="form-group offset-md-2  col-md-8 mb-3">
                <label htmlFor="inputname">Name</label>
                <input type="text" onChange={changHandel} value={data.name} className="form-control mt-1" id="name" name="name" placeholder="Categories Name" />
              </div>
              <div className="form-group offset-md-2  col-md-8 mb-3">
                <label htmlFor="inputname">Name</label>
                <input type="url" onChange={changHandel} value={data.image} className="form-control mt-1" id="name" name="image" placeholder="Categories URL" />
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
      <Footer />
    </div>
  )
}

export default Add_categories