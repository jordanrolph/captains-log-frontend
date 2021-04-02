import React from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";
import Button from "./Button";

const NavBar = ({ isAuthenticated = true }) => {
  const handleLogout = () => null; // TODO - add logout function
  return (
    <nav className="py-3 border-b-dark border-b-4">
      <div className="px-4 flex items-center container mx-auto">
        <Logo />
        {isAuthenticated && (
          <Button
            variant="link"
            label="Abandon ship"
            onClick={handleLogout}
            className="ml-auto"
          />
        )}
      </div>
    </nav>
  );
};

export default NavBar;

NavBar.propTypes = {
  isAuthenticated: PropTypes.bool,
};
