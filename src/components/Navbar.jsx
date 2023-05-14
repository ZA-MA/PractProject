import React from 'react';
import "./Navbar.css"
import Input from "./Input";
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                </ul>

                <div className="navbar-search">
                    <Input type="text" placeholder="Search..."/>
                </div>
            </div>
        </>
    );
};

export default Navbar;