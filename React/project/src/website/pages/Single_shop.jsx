import React, { useEffect, useState } from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Single_shop() {

    var { id } = useParams();
    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState({})
    const fetch = async () => {
        const product = await axios.get(`http://localhost:3000/products/${id}`);
        setData(product.data);
    }

    

    return (
        <div>
            <Header />
            <section className="bg-light">
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-lg-5 mt-5">
                            <div className="card mb-3">
                                <img className="card-img img-fluid" src={data.image} alt="Card image cap" id="product-detail" />
                            </div>

                        </div>
                        {/* col end */}
                        <div className="col-lg-7 mt-5">
                            <div className="card">
                                <div className="card-body">
                                    <h1 className="h2">{data.name}</h1>
                                    <p className="h3 py-2">₹{data.price}.00</p>
                                    <p className="py-2">
                                        <i className="fa fa-star text-warning" />
                                        <i className="fa fa-star text-warning" />
                                        <i className="fa fa-star text-warning" />
                                        <i className="fa fa-star text-warning" />
                                        <i className="fa fa-star text-secondary" />
                                        <span className="list-inline-item text-dark">Rating 4.8 | 36 Comments</span>
                                    </p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <h6>ID: {data.cate_id} </h6>
                                        </li>
                                      
                                    </ul>
                                    <h6>Description:</h6>
                                    <p>{data.description}</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <h6>Avaliable Color :</h6>
                                        </li>
                                        <li className="list-inline-item">
                                            <p className="text-muted"><strong>White / Black</strong></p>
                                        </li>
                                    </ul>
                                    <h6>Specification:</h6>
                                    <ul className="list-unstyled pb-3">
                                        <li>Lorem ipsum dolor sit</li>
                                        <li>Amet, consectetur</li>
                                        <li>Adipiscing elit,set</li>
                                        <li>Duis aute irure</li>
                                        <li>Ut enim ad minim</li>
                                        <li>Dolore magna aliqua</li>
                                        <li>Excepteur sint</li>
                                    </ul>
                                    <form action method="GET">
                                        <input type="hidden" name="product-title" defaultValue="Activewear" />
                                        <div className="row">
                                            <div className="col-auto">
                                                <ul className="list-inline pb-3">
                                                    <li className="list-inline-item">Size :
                                                        <input type="hidden" name="product-size" id="product-size" defaultValue="S" />
                                                    </li>
                                                    <li className="list-inline-item"><span className="btn btn-success btn-size">S</span></li>
                                                    <li className="list-inline-item"><span className="btn btn-success btn-size">M</span></li>
                                                    <li className="list-inline-item"><span className="btn btn-success btn-size">L</span></li>
                                                    <li className="list-inline-item"><span className="btn btn-success btn-size">XL</span></li>
                                                </ul>
                                            </div>
                                            <div className="col-auto">
                                                <ul className="list-inline pb-3">
                                                    <li className="list-inline-item text-right">
                                                        Quantity
                                                        <input type="hidden" name="product-quanity" id="product-quanity" defaultValue={1} />
                                                    </li>
                                                    <li className="list-inline-item"><span className="btn btn-success" id="btn-minus">-</span></li>
                                                    <li className="list-inline-item"><span className="badge bg-secondary" id="var-value">1</span></li>
                                                    <li className="list-inline-item"><span className="btn btn-success" id="btn-plus">+</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row pb-3">
                                            <div className="col d-grid">
                                                <button type="submit" className="btn btn-success btn-lg" name="submit" value="buy">Buy</button>
                                            </div>
                                            <div className="col d-grid">
                                                <button type="submit" className="btn btn-success btn-lg" name="submit" value="addtocard">Add To Cart</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>

    )
}

export default Single_shop