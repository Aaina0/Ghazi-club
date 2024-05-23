import React from "react";
import PropTypes from "prop-types";
// import "./CoachingItem.css"; // Import the CSS file for styling

const Coaching = ({ image, title, description }) => {
  return (
    <div className="coaching-item">
      <img src={image} alt={title} className="coaching-item-image" />
      <h3 className="coaching-item-title">{title}</h3>
      <p className="coaching-item-description">{description}</p>
    </div>
  );
};

Coaching.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Coaching;
