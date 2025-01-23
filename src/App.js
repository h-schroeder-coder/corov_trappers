import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CoRoVTrappersLogoPreferredDark from './CoRoVTrappersLogoPreferredDark.jpg';
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <h1 className="Name">CoRoV Trappers</h1>
        <img
          src={CoRoVTrappersLogoPreferredDark}
          className="img-fluid w-25 CoRoVLogo"
          alt="CoRoV Trappers Logo"
        />
        <h2 className="CoRoVTagLine">
          Fur-ocious Fellas Snagging Nature's Finest in Trap-tastic Adventures!
        </h2>
      </header>
    </div>
  );
}

export default App;
