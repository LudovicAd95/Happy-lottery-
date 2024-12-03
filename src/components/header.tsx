import React from "react";
import "../styles/Header.css";


const Header = () => {
  return (
    <div className="header-container">
        <div className="header">
            <div className="header-img">
        <img src="src\assets\Pere-noel.png" />
        </div>
  <h1>Happy Lottery</h1>
    <img className="header-cadeaux" src="src\assets\Cadeaux.png" />
  </div>
    </div>
  );
};


export default Header;