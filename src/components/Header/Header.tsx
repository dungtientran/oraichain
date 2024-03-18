import React from "react";
import { Nav } from "./Nav";

const Header = () => {
  return (
    <header className=" header-container">
      <div className="header container">
        {/* Nav */}
        <Nav />

        {/* Language */}
        <div>
          <p className="text-small-thin color-secondary">English</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
