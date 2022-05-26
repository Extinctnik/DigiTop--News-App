import React from "react";
import "./Navdigitop.css";
import HamburgerDrawer from "./HamburgerDrawer.js";

const Navdigitop = ({setCategory}) => {
  return (
    <div className="nav">
       <div className='icon'>
            <HamburgerDrawer setCategory= {setCategory} />
       </div>
       <img 
        style={{cursor: "pointer"}}
        src="https://i.pinimg.com/736x/b3/1a/4f/b31a4f70f95475dda253d36b2b54ab61.jpg" 
        alt="Logo" 
        height="80%"/>
        <h1>DigiTop</h1> 
    </div>
  );
};

export default Navdigitop;