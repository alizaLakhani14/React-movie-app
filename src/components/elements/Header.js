import React from "react";
import RMDBLogo from "../images/reactMovie_logo.png";
import TMDBLogo from "../images/tmdb_logo.svg";

const Header = () => {
  return (
    <div>
      <div className="header-content">
        <img src={RMDBLogo} alt="logo" />
        <img src={TMDBLogo} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
