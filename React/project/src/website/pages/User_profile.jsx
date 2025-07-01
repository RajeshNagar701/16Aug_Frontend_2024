import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function User_profile() {

    var redirect = useNavigate();
    useEffect(() => {
        fetch();
    });

    const [mydata, setData] = useState({});
    const fetch = async () => {
        const user = await axios.get(`http://localhost:3000/user/${localStorage.getItem('uid')}`);
        console.log(user.data);
        setData(user.data);
    }
    return (
        <div>
            <Header />

            {/* Start Featured Product */}
            <section className="bg-light">
                <div className="container py-5">
                    <div className="row text-center py-3">
                        <div className="col-lg-6 m-auto">
                            <h1 className="h1">Manage Profile</h1>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 offset-md-4 col-md-4 mb-4">
                            <div className="card h-100">

                                <img src={mydata.image} onClick={() => redirect(`/edit_user/${mydata.id}`)} className="card-img-top" alt="..." />

                                <div className="card-body">

                                    <h2 onClick={() => redirect(`/edit_user/${mydata.id}`)} className="h2 text-decoration-none text-dark">{mydata.name}</h2>
                                    <p className="card-text">
                                        ID : {mydata.id}
                                    </p>
                                    <p className="card-text">
                                        Email : {mydata.email}
                                    </p>
                                    <p className="card-text">
                                        Mobile : {mydata.mobile}
                                    </p>

                                    <button onClick={() => redirect(`/edit_user/${mydata.id}`)} className='btn btn-primary'>
                                        Edit
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* End Featured Product */}
            <Footer />
        </div>
    )
}

export default User_profile