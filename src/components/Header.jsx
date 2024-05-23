import React from 'react';
import PropTypes from 'prop-types';
// import './Header.css'; // Ensure this matches exactly with your file name

const Header = ({ title, image, children }) => {
  return (
    <header className="header" style={{ backgroundImage: `url(${image})` }}>
      <div className="header-content">
        <h1>{title}</h1>
        <p>{children}</p>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Header;
