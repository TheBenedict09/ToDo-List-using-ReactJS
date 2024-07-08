import React from "react";
import image from "../images/image.png"
export default function Hero(){
    return (
        <div className="hero">
            <img src={image}/>
            <h1>
                Online Experiences
            </h1>
            <p>
            Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}