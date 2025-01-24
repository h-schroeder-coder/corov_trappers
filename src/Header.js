import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import NavBar from "./NavBar";

export default function Header () {
    return (
        <header className="Header">
        <NavBar />
            <h1 className="Name">CoRoV Trappers</h1>
            <h3 className="CoRoVTagLine">
                Fur-ocious Fellas Snagging Nature's Finest in Trap-tastic Adventures!
            </h3>
        </header>
    );
}
