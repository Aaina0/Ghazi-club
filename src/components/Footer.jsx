import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer_container">
        <div className="footer_info">
          <Link to="/" className="logo">
            <img src={logo} alt="Footer Logo" />
          </Link>
          <div className="footer_address">
            <h4>Address</h4>
            <p>Rose Park H-3, Johar Town Lahore. 54000</p>
            <h4>Timings</h4>
            <p>9:00 am to 6:00 pm</p>
          </div>
        </div>
        <div className="footer_socials">
          <a
            href="https://www.facebook.com/nadeemsiqara"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareFacebook />
          </a>
          <a
            href="https://www.instagram.com/nadeemalijanjua/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare />
          </a>
          <a
            href="https://www.tiktok.com/@ghaziteakwoondo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillTikTok />
          </a>
        </div>
      </div>
      <div className="footer_copyright">
        <small>All rights reserved by ghazitaewondoandfitnessclub.com.</small>
      </div>
    </footer>
  );
};

export default Footer;
