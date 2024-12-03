// import React from "react";
import "../styles/header.css";


const Header = () => {
  return (
    <div className="header-container">
        <div className="header">
            <div className="header-img">
        <img src="src\assets\Pere-noel.png" alt="santclaus"/>
        </div>
  <h1>Happy Lottery</h1>
    <img className="header-cadeaux" src="src\assets\Cadeaux.png" alt="gifts" />
  </div>
    </div>
  );
};


export default Header;