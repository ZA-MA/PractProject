import React from 'react';
import CarouselOfImages from "../components/CarouselOfImages";
import "./Images.css"
const Images = () => {
    return (
        <>
            <div className="images">
                <h1>Пример карусели картинок</h1>
                <CarouselOfImages />

            </div>
        </>
    );
};

export default Images;