import React from "react";
import image from "../images/Globe_Icon.png"

export default function NavBar(){
    return (
        <nav>
            <div>
            <img src={image} />
            <h2>My Travel Journal</h2>
            </div>
        </nav>
    )
}