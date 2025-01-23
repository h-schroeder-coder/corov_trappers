import React from "react";
import CoRoVTrappersLogoPreferredDark from "./CoRoVTrappersLogoPreferredDark.jpg";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav
      class="navbar fixed-top navbar-expand-lg bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img
            className="CoRoVTrappersLogoPreferredDarkIcon"
            src={CoRoVTrappersLogoPreferredDark}
            alt="CoRoV Trappers Logo Icon"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Use Our Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Shop Our Products
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                See Our Recommendations
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Connect With Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
