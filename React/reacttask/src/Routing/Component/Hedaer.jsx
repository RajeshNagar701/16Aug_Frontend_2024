import React from 'react'
import { NavLink } from 'react-router-dom'

function Hedaer({title}) {
    return (
        <div>
            <div className="p-5 bg-primary text-white text-center">
                <h1>{title}</h1>
                
            </div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/blog">Blog</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                       
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default Hedaer