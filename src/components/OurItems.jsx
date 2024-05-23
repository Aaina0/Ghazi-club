import React from "react";
import PropTypes from "prop-types";
import Coaching from "./Coaching"; // Correct the import path for Coaching component
// import "./OurItems.css"; // Import the CSS file for styling

const OurItems = ({ items }) => {
  return (
    <div className="our-items-container">
      {items.map((item, index) => (
        <Coaching
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

OurItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default OurItems;
