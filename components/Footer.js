import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon/Icon";

const linkStyle = "underline hover:outline-light focus:outline-light";
const Footer = () => {
  return (
    <footer className="bg-wave-dark bg-cover bg-repeat h-48 px-4 py-3 flex flex-col items-center justify-end">
      <div className="text-light font-mono text-sm text-center">
        <span>Built with</span> <Icon name="heart" /> by{" "}
        <a
          href="https://jordanrolph.com"
          className={`${linkStyle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Jordan Rolph
        </a>{" "}
        <span>in</span> <Icon name="sun" className="items-end" />{" "}
        <a
          href="https://en.wikipedia.org/wiki/Portsmouth"
          className={`${linkStyle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Portsmouth
        </a>
        <span>, England. You can see the code on</span>{" "}
        <a
          href="https://github.com/jordanrolph/captains-log-frontend"
          className={`${linkStyle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <span>.</span>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
