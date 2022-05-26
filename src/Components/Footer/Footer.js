import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
        <span className='name'>
            Digitop made by - {" "}
            <a href='https://www.linkedin.com/in/anik-gupta-2081999/' target="_blank">
                Anik Gupta
            </a>

        </span>
        <hr style={{width : "90%"}}/>

        <div className="iconContainer">
            
            <a href='https://www.instagram.com/' target="_blank">
            <i class="fab fa-instagram-square fa-2x"></i>
            </a>
            <a href='https://www.linkedin.com/in/anik-gupta-2081999/' target="_blank">
            <i class="fab fa-linkedin fa-2x"></i>
            </a>
            <a href='https://github.com/Extinctnik' target="_blank">
            <i class="fas fa-link fa-2x"></i>
            </a>   
        </div>
    </div>

  );
};

export default Footer;