import React from 'react';
import "./Button.css"
const Button = ({children,width, height, margin}) => {
    return (
        <>
            <button className="button" style={{width: width, height: height, margin: margin}}>
                {children}
            </button>
        </>
    );
};

export default Button;