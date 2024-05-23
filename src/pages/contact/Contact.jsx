import React from "react";
import "./contact.css";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="container contact_container">
          <h1 className="contact_title">Get In Touch</h1>
          <p className="contact_description">
            We would love to hear from you! Follow us on social media or reach out via WhatsApp.
          </p>
          <div className="contact_wrapper">
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
            <a
              href="https://wa.me/923024403302"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsappSquare />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
