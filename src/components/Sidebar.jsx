import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import "./Sidebar.css"
import logo from "../logo/zama_logo.png"
import img from "../images/avatar.png"
import {
    FaTh,
    FaImages,
    FaExclamationCircle,
}from "react-icons/fa";
import {BsChevronBarLeft, BsChevronBarRight} from "react-icons/bs";
import Dropdown from "./Dropdown";
const Sidebar = () => {
    const [sideBarShow, setSideBarShow] = useState(true)



    const showBar = () =>{
        setSideBarShow(!sideBarShow)
    }

    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/images",
            name:"Images",
            icon:<FaImages/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaExclamationCircle/>
        },

    ]

    return (
        <>
                <div className={sideBarShow? 'sidebar open' : 'sidebar closed'}>
                    <div className="top-section">
                        {(sideBarShow === true && <img className="logo" src={logo}/>)}
                        <div className="trigger" onClick={showBar}>
                            {sideBarShow?  <BsChevronBarLeft/> : <BsChevronBarRight/>}
                        </div>
                    </div>
                    <div className="menu-items">
                    {
                        menuItem.map((item, index)=>(
                            <NavLink to={item.path} key={index} className="menu-item" style={{justifyContent: sideBarShow ? "space-evenly" : "center"}} activeclassname="menu-item-active">
                                        <div className="item-icon">{item.icon}</div>
                                        <div style={{display: sideBarShow ? "block" : "none", transition: "600ms"}} className="item-text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                    </div>
                    <div className="bottom-section">
                        <hr/>
                        <div className="account">

                            <div style={{width: sideBarShow ? '35px' : '20px', height: sideBarShow ? '35px' : '20px' }} className="avatar">
                                <img src={img}/>
                            </div>
                            <div className="account-name" style={{display: sideBarShow ? "block" : "none"}}>Максим</div>
                            <Dropdown sideBarShow={sideBarShow}/>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default Sidebar;