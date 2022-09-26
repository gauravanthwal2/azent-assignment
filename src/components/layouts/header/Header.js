import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <div className="logo-container">
        <img
          src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/ltksjdrgbk0qyzupnmqz"
          alt="Azent Overseas Education"
        />
      </div>
      <div className="links"></div>
    </nav>
  );
};

export default Header;
