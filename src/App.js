import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ImageCarousel from "./ImageCarousel";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <button
        type="button"
        className="btn btn-lg btn-border LearnMore-Button"
        data-bs-toggle="button"
      >
        Learn More
      </button>
      <ImageCarousel />
      <Footer />
    </div>
  );
}

export default App;
