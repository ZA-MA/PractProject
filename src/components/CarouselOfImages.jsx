import React, {useEffect, useState} from 'react';
import "./CarouselOfImages.css"
import {BsCaretLeftFill, BsCaretRightFill} from "react-icons/bs";

const CarouselOfImages = () => {
    const [activeItem, setActiveItem] = useState(0)
    const changeItem = (index) => {
        if(activeItem + index < 0)
            setActiveItem(items.length-1)
        else if(activeItem + index > items.length-1)
            setActiveItem(0)
        else
            setActiveItem(activeItem + index)
    }



    const items = [
        {
            id: 0,
            src: require("../images/sample-birch-400x300.jpg")
        },
        {
            id: 1,
            src: require("../images/sample-city-park-400x300.jpg")
        },
        {
            id: 2,
            src: require("../images/sample-clouds-400x300.jpg")
        },
    ]

    return (
        <>
            <div className="carousel">
                <button className="carousel-control-prev" onClick={() => changeItem(-1)}>
                    <BsCaretLeftFill className="carousel-control-prev-icon"/>
                </button>
                    {
                        items.map(e =>
                            <div className={e.id === activeItem ? "carousel-item-active" : "carousel-item"} >
                                <img src={e.src}/>
                            </div>
                        )
                    }
                <button className="carousel-control-next" onClick={() =>changeItem(1)}>
                    <BsCaretRightFill className="carousel-control-prev-icon"/>
                </button>
            </div>
        </>
    );
};

export default CarouselOfImages;