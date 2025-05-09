import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Basic_header() {
    return (
        <div className="hero_area">
            {/* header section strats */}
            <header className="header_section">
                <div className="header_top">
                    <div className="container">
                        <div className="contact_nav">
                            <a href>
                                <i className="fa fa-phone" aria-hidden="true" />
                                <span>
                                    Call : +01 123455678990
                                </span>
                            </a>
                            <a href>
                                <i className="fa fa-envelope" aria-hidden="true" />
                                <span>
                                    Email : demo@gmail.com
                                </span>
                            </a>
                            <a href>
                                <i className="fa fa-map-marker" aria-hidden="true" />
                                <span>
                                    Location
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="header_bottom">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg custom_nav-container ">
                            <Link className="navbar-brand" to="/">
                                <img src="images/logo.png" alt />
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className> </span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="d-flex mr-auto flex-column flex-lg-row align-items-center">
                                    <ul className="navbar-nav  ">
                                        <li className="nav-item ">
                                            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                                        </li>
                                        <li className="nav-item active">
                                            <NavLink className="nav-link" to="/about"> About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/doctor">Doctors</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="quote_btn-container">
                                    <a href>
                                        <i className="fa fa-user" aria-hidden="true" />
                                        <span>
                                            Login
                                        </span>
                                    </a>
                                    <a href>
                                        <i className="fa fa-user" aria-hidden="true" />
                                        <span>
                                            Sign Up
                                        </span>
                                    </a>
                                    <form className="form-inline">
                                        <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                                            <i className="fa fa-search" aria-hidden="true" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
            {/* end header section */}
        </div>

    )
}

export default Basic_header