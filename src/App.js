import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CoRoVTrappersLogo from './CoRoVTrappersLogo.jpg';
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <h1 className="Name">
          CoRoV Trappers
        </h1>
        <h2 className="CoRoVTagLine">
          Fur-ocious Fellas Snagging Nature's Finest in Trap-tastic Adventures!
        </h2>
        <img
          src={CoRoVTrappersLogo}
          className="img-fluid CoRoVLogo"
          alt="CoRoV Trappers Logo"
        />
      </header>
    </div>
  );
}

export default App;
