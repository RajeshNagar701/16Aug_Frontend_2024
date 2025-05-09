import React from 'react'

function Contact() {
    return (
        <div>
            {/* contact section */}
            <section className="contact_section layout_padding-bottom">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Get In Touch
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <div className="form_container">
                                <form action>
                                    <div>
                                        <input type="text" placeholder="Full Name" />
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Email" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Phone Number" />
                                    </div>
                                    <div>
                                        <input type="text" className="message-box" placeholder="Message" />
                                    </div>
                                    <div className="btn_box">
                                        <button>
                                            SEND
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="img-box">
                                <img src="images/contact-img.jpg" alt />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end contact section */}
            {/* info section */}
            <section className="info_section ">
                <div className="container">
                    <div className="info_top">
                        <div className="info_logo">
                            <a href>
                                <img src="images/logo.png" alt />
                            </a>
                        </div>
                        <div className="info_form">
                            <form action>
                                <input type="email" placeholder="Your email" />
                                <button>
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="info_bottom layout_padding2">
                        <div className="row info_main_row">
                            <div className="col-md-6 col-lg-3">
                                <h5>
                                    Address
                                </h5>
                                <div className="info_contact">
                                    <a href>
                                        <i className="fa fa-map-marker" aria-hidden="true" />
                                        <span>
                                            Location
                                        </span>
                                    </a>
                                    <a href>
                                        <i className="fa fa-phone" aria-hidden="true" />
                                        <span>
                                            Call +01 1234567890
                                        </span>
                                    </a>
                                    <a href>
                                        <i className="fa fa-envelope" />
                                        <span>
                                            demo@gmail.com
                                        </span>
                                    </a>
                                </div>
                                <div className="social_box">
                                    <a href>
                                        <i className="fa fa-facebook" aria-hidden="true" />
                                    </a>
                                    <a href>
                                        <i className="fa fa-twitter" aria-hidden="true" />
                                    </a>
                                    <a href>
                                        <i className="fa fa-linkedin" aria-hidden="true" />
                                    </a>
                                    <a href>
                                        <i className="fa fa-instagram" aria-hidden="true" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="info_links">
                                    <h5>
                                        Useful link
                                    </h5>
                                    <div className="info_links_menu">
                                        <a href="index.html">
                                            Home
                                        </a>
                                        <a href="about.html">
                                            About
                                        </a>
                                        <a href="treatment.html">
                                            Treatment
                                        </a>
                                        <a href="doctor.html">
                                            Doctors
                                        </a>
                                        <a href="testimonial.html">
                                            Testimonial
                                        </a>
                                        <a className="active" href="contact.html">
                                            Contact us
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="info_post">
                                    <h5>
                                        LATEST POSTS
                                    </h5>
                                    <div className="post_box">
                                        <div className="img-box">
                                            <img src="images/post1.jpg" alt />
                                        </div>
                                        <p>
                                            Normal
                                            distribution
                                        </p>
                                    </div>
                                    <div className="post_box">
                                        <div className="img-box">
                                            <img src="images/post2.jpg" alt />
                                        </div>
                                        <p>
                                            Normal
                                            distribution
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="info_post">
                                    <h5>
                                        News
                                    </h5>
                                    <div className="post_box">
                                        <div className="img-box">
                                            <img src="images/post3.jpg" alt />
                                        </div>
                                        <p>
                                            Normal
                                            distribution
                                        </p>
                                    </div>
                                    <div className="post_box">
                                        <div className="img-box">
                                            <img src="images/post4.png" alt />
                                        </div>
                                        <p>
                                            Normal
                                            distribution
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end info_section */}
        </div>

    )
}

export default Contact