import Router from "next/router";
import PropTypes from "prop-types";
import Logo from "./Logo";
import Button from "./Button";
import StyledLink from "./StyledLink";
import Link from "next/link";
import useUser from "../data/useUser";
import { logout } from "../libs/auth";

const NavBar = () => {
  const { user, loading, loggedOut, mutate } = useUser();
  const handleLogout = () => {
    logout();
    mutate(null); // optimistically update the data and revalidate
    Router.replace("/");
  };

  return (
    <nav className="py-3">
      <div className="flex items-center container mx-auto">
        <Link href={loggedOut ? "/" : "/log"}>
          <a className="focus:outline-dark hover:outline-dark">
            <Logo />
          </a>
        </Link>

        {loggedOut ? (
          <StyledLink
            variant="link"
            label="Land ahoy"
            href="/login"
            className="ml-auto -mb-2"
          />
        ) : (
          <Button
            variant="link"
            label="Abandon ship"
            onClick={handleLogout}
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
