import React from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";
import Button from "./Button";
import StyledLink from "./StyledLink";
import Link from "next/link";

const NavBar = ({ isAuthenticated }) => {
  const handleLogout = () => null; // TODO - add logout function
  return (
    <nav className="py-3">
      <div className="flex items-center container mx-auto">
        <Link href="/">
          <a className="focus:outline-dark hover:outline-dark">
            <Logo />
          </a>
        </Link>

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
            label="Land ahoy"
            href="/login"
            className="ml-auto -mb-2"
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
