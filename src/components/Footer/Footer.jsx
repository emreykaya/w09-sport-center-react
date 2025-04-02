import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        {/* FOOTER LOGO */}
        <img src="images/logo.png" alt="Logo" />

        {/* TEXT */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt vel aliquid exercitationem totam consectetur 
          enim laboriosam animi nostrum pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere asperiores 
          dolores suscipit. Assumenda ullam veritatis molestias? Vero sequi saepe ratione?
        </p>

        {/* FOOTER MENU */}
        <div className="footer-menu">
          {/* MENU LEFT */}
          <div className="menu-left">
            <h5>Information</h5>
            <a href="#">About Us</a>
            <a href="#">Classes</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>

          {/* MENU RIGHT */}
          <div className="menu-right">
            <h5>Helpful Links</h5>
            <a href="#">Services</a>
            <a href="#">Supports</a>
            <a href="#">Terms & Condition</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
