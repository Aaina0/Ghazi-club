import React from "react";
import { Link } from "react-router-dom";
// import "./home.css";
import pic5 from "../images/pic5.jpg";

const MainHeader = () => {
  return (
    <header className="main_header">
      <div className="continer main_header-container">
        <div className="name_header-left">
          <h4>
            Transform your fitness journey with Ghazi Taekwondo and Fitness Club
          </h4>
          <h1> Discover your potential at Ghazi Taekwondo and Fitness Club</h1>
          <p>
            Expert training, supportive community, tailored programs – start
            today at Ghazi Taekwondo and Fitness Club.
          </p>
          <Link to="/contact" className="btn lg">
            Get Started
          </Link>
        </div>
        <div className="name_header-right">
          <div className="main_header-circle"></div>
          <div className="main_header-image">
            <img src={pic5} alt="pic" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
