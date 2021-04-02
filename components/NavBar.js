import React from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";
import Button from "./Button";
import StyledLink from "./StyledLink";

const NavBar = ({ isAuthenticated }) => {
  const handleLogout = () => null; // TODO - add logout function
  return (
    <nav className="py-3">
      <div className="px-4 flex items-center container mx-auto">
        <Logo />
        {isAuthenticated ? (
          <Button
            variant="link"
            label="Abandon ship"
            onClick={handleLogout}
            className="ml-auto -mb-2"
          />
        ) : (
          <StyledLink
            variant="link"
            label="Sign in"
            href="/login"
            className="ml-auto -mb-2"
          ></StyledLink>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

NavBar.propTypes = {
  isAuthenticated: PropTypes.bool,
};
