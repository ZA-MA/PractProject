import React, {useState} from 'react';
import "./Dropdown.css"
import {MdArrowDropDown} from "react-icons/md";
import onClickOutside from 'react-onclickoutside';
function Dropdown({sideBarShow}){
    const [open, setOpen] = useState(false);
    const showDropdown = () => {
        setOpen(!open)
    }
    Dropdown.handleClickOutside = () => setOpen(false);

    const items = [
        {
            lable: "New project",
            key: "New project",
            link: "#",
            className: "item",

        },
        {
            lable: "Settings",
            key: "Settings",
            link: "#",
            className: "item",

        },
        {
            lable: "Profile",
            key: "Profile",
            link: "#",
            className: "item"
        },
        {
            lable: <hr/>,
            key: "hr",
            className: "item-hr"
        },
        {
            lable: "Sing out",
            key: "Sing out",
            link: "#",
            className: "item"
        },
    ]

    return (
        <>
            <div className="dropdown">
                <MdArrowDropDown className="trigger" onClick={showDropdown} style={{transform: open ? "rotate(-180deg)" : "none"}}/>
                <div className="container" style={{left: sideBarShow === false && 0, display: open ? "block" : "none"}}>
                    <ul className="items">
                        {items.map(e => {return(<li className={e.className} key={e.key}>{e.lable}</li>)})}
                    </ul>
                </div>
            </div>
        </>
    );
};

const clickOutsideConfig = {
    handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);