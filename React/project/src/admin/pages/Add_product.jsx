import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
function Add_product() {

  useEffect(() => {
    fetch();
  }, []);

  const [mydata, setmyData] = useState([]);

  const fetch = async () => {
    const categories = await axios.get(`http://localhost:3000/categories`);
    console.log(categories.data);
    setmyData(categories.data);
  }

  //==================================================

  const redirect = useNavigate();

  const [data, setData] = useState({
    id: "",
    cate_id: "",
    name: "",
    image: "",
    price: "",
    description: "",
    status: ""
  })
  const changHandel = (e) => {
    setData({ ...data, id: new Date().getTime().toString(), status: "InStock", [e.target.name]: e.target.value });
    console.log(data);
  }

  const submitHandel = async (e) => {
    e.preventDefault();
    const res = await axios.post(`http://localhost:3000/products`, data);
    console.log('ult',res);
    setData({ ...data,cate_id:"", name: "", price: "",image: "", description: ""});
  }


  return (
    <div>
      <Header />
      {/* Start Content Page */}
      <div className="container-fluid bg-light py-5">
        <div className="col-md-6 m-auto text-center">
          <h1 className="h1">Add Product</h1>
        </div>
      </div>

      {/* Start Contact */}
      <div className="container py-5">
        <div className="row py-5">
          <form className="col-md-9 m-auto" method="post" role="form" onSubmit={submitHandel}>
            <div className="row">

              <div className="form-group offset-md-2  col-md-8 mb-3">
                <label htmlFor="inputname">Categories</label>
                <select className="form-control mt-1" name="cate_id" value={data.cate_id} onChange={changHandel}>
                  <option value="">Select Categories</option>
                  {
                    mydata.map((value, index, arr) => {
                      return (
                         <option value={value.id}>{value.name}</option>
                      )
                    })
                  }
                </select>
              </div>

              <div className="form-group offset-md-2  col-md-8 mb-3">
                <label htmlFor="inputname">Name</label>
                <input type="text" className="form-control mt-1" value={data.name} onChange={changHandel} id="name" name="name" placeholder="Name" />
              </div>
              <div className="form-group offset-md-2  col-md-8 mb-3">
                <label htmlFor="inputname">Image</label>
                <input type="url" className="form-control mt-1" value={data.image} onChange={changHandel} id="name" name="image" placeholder="Product Image URL" />
              </div>
              <div className="form-group offset-md-2  col-md-8 mb-3">
                <label htmlFor="inputname">Price</label>
                <input type="text" className="form-control mt-1" value={data.price} onChange={changHandel} id="name" name="price" placeholder="Price" />
              </div>
              <div className="form-group offset-md-2  col-md-8 mb-3">
                <label htmlFor="inputname">Description</label>
                <input type="text" className="form-control mt-1" value={data.description} onChange={changHandel} id="name" name="description" placeholder="description" />
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

export default Add_product