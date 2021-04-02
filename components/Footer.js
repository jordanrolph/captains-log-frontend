import React from "react";
import PropTypes from "prop-types";

const linkStyle = "underline hover:outline-light focus:outline-light";
const Footer = () => {
  return (
    <footer className="bg-wave-dark bg-cover bg-repeat h-40 flex flex-col justify-end px-4 py-3">
      <div className="text-light">
        Built with HEART by{" "}
        <a
          href="https://jordanrolph.com"
          className={`${linkStyle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Jordan Rolph
        </a>{" "}
        in SUN{" "}
        <a
          href="https://en.wikipedia.org/wiki/Portsmouth"
          className={`${linkStyle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Portsmouth, England
        </a>
        . See the code on{" "}
        <a
          href="https://github.com/jordanrolph/captains-log-frontend"
          className={`${linkStyle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
