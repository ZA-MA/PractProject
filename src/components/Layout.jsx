import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import "./Layout.css"
import Navbar from "./Navbar.jsx";
import Images from "../pages/Images";

const Layout = () => {
    return (
        <>
            <div className="layout">
                <BrowserRouter>
                    <Sidebar/>

                    <div className="content">
                        <Navbar />
                        <div className="content-main">
                            <Routes>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/dashboard" element={<Dashboard />} />
                                <Route path="/images" element={<Images />} />
                                <Route path="/about" element={<About />} />
                            </Routes>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        </>
    );
};

export default Layout;