import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BeaversOverBoat from "./media/BeaversOverBoat.jpg";
import BeaversinRound from "./media/BeaversinRound.jpg";
import FursOnBarnWall from "./media/FursOnBarnWall.jpg";
import BeaversHangingPinned from "./media/BeaversHangingPinned.jpg";
import WTAD5Table from "./media/WTAD5Table.jpg";
import "./ImageCarousel.css";

export default function ImageCarousel () {
    return (
      <div className="ImageCarousel container">
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <h2 className="WhatWeDo">What We Do</h2>
          <div className="carousel-inner w-80">
            <div className="carousel-item active">
              <img
                src={BeaversinRound}
                className="d-block w-80"
                alt="Beavers, raccoons, and other animals laid out in a circle in the snow"
              />
            </div>
            <div className="carousel-item">
              <img
                src={WTAD5Table}
                className="d-block w-80"
                alt="Wisconsin Trappers Association District 5 Event"
              />
            </div>
            <div className="carousel-item">
              <img
                src={BeaversOverBoat}
                className="d-block w-80"
                alt="Beavers Lying on Boat"
              />
            </div>
            <div className="carousel-item">
              <img
                src={FursOnBarnWall}
                className="d-block w-80"
                alt="Furs Hanging on Side of Barn"
              />
            </div>
            <div className="carousel-item">
              <img
                src={BeaversHangingPinned}
                className="d-block w-80"
                alt="Beaver Furs Haning and Pelts Pinned in Background"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
}