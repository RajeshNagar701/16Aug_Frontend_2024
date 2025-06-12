import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import axios from 'axios';


function Manage_categories() {
    
useEffect(()=>{
    fetch();
},[]);

const [mydata,setData]=useState([]);

const fetch=async()=>{
    const categories=await axios.get(`http://localhost:3000/categories`);
    console.log(categories.data);
    setData(categories.data);
}

    return (
        <div>
            <Header />
            {/* Start Content Page */}
            <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Manage Categories</h1>
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
                            {
                                mydata.map((value,index,arr)=>{
                                    return(
                                          <tr>
                                            <td>{value.id}</td>
                                            <td>{value.name}</td>
                                            <td>{value.image}</td>
                                            <td className='text-center'>
                                            <button className='btn btn-primary m-1'>Edit</button> 
                                            <button className='btn btn-danger m-1'>Delete</button> 
                                            </td>
                                        </tr>   
                                    )
                                })
                            }
                           
                           
                        </tbody>
                    </table>

                </div>
            </div>
            {/* End Contact */}
            <Footer />
        </div>
    )
}

export default Manage_categories