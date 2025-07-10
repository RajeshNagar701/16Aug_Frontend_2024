import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import axios from 'axios';
import swal from 'sweetalert';
import { toast } from 'react-toastify';

function Manage_customer() {
    useEffect(() => {
        fetch();
    });

    const [mydata, setData] = useState([]);
    const fetch = async () => {
        const user = await axios.get(`http://localhost:3000/user`);
        console.log(user.data);
        setData(user.data);
    }
    

    const deleteHandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/user/${id}`);
        fetch();
        swal({
            title: "Success!",
            text: "Customer Delete Successfull!",
            icon: "success",
            button: "Done",
        });
    }
    const statusHandel = async (id) => {
        const res = await axios.get(`http://localhost:3000/user/${id}`);
        //console.log(res.data);
        if (res.data.status == "Block") {
            var updres = await axios.patch(`http://localhost:3000/user/${id}`, { status: "Unblock" });
            toast.success('User Unblock status Updated');
            fetch();
        }
        else {
            var updres = await axios.patch(`http://localhost:3000/user/${id}`, { status: "Block" });
            toast.success('User Block status Updated');
            fetch();
        }
    }


    return (
        <div>
            <Header />
            {/* Start Content Page */}
            <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Manage Customer</h1>
                </div>
            </div>

            {/* Start Contact */}
            <div className="container py-5">
                <div className="row py-5">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Profile</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Pasword</th>
                                <th>Mobile</th>
                                <th className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                mydata.map((value, index, arr) => {
                                    return (
                                        <tr>
                                            <td>{value.id}</td>
                                            <td><img src={value.image} width="50px" alt="" /></td>
                                            <td>{value.name}</td>
                                            <td>{value.email}</td>
                                            <td>{value.password}</td>
                                            <td>{value.mobile}</td>
                                            <td className='text-center'>
                                               
                                                
                                                <button className='btn btn-primary m-1'>Edit</button>
                                                <button className='btn btn-danger m-1' onClick={() => deleteHandel(value.id)}>Delete</button>
                                                <button className='btn btn-danger m-1' onClick={() => statusHandel(value.id)}>{value.status}</button>
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

export default Manage_customer