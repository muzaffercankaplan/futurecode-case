import React from "react";
import Carousels from "../../Components/Carousels/Carousels";
import Services from "../../Components/Services/Services";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homeContainer d-flex flex-column">
      {/* <Slider /> */}
      <Carousels />
      <Services />
    </div>
  );
};

export default HomePage;
