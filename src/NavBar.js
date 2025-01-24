import React from "react";
import CoRoVTrappersLogoPreferredDark from "./CoRoVTrappersLogoPreferredDark.jpg";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav
      className="navbar fixed-top navbar-expand-lg bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            className="CoRoVTrappersLogoPreferredDarkIcon"
            src={CoRoVTrappersLogoPreferredDark}
            alt="CoRoV Trappers Logo Icon"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Use Our Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Shop Our Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                See Our Recommendations
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Connect With Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
