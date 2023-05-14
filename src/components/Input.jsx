import React from 'react';
import "./Input.css"
const Input = ({type, placeholder, width, height, fontSize, margin}) => {
    return (
        <>
            <input className="input" type={type} placeholder={placeholder} style={{width: width, height: height, fontSize: fontSize, margin: margin}}/>
        </>
    );
};

export default Input;