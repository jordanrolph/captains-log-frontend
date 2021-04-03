import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const variants = {
  primary: {
    a:
      "text-light bg-dark bg-pattern-dark rounded-md py-3 px-5 font-bold text-lg",
  },
  link: {
    a: "text-dark px-1 font-mono underline",
  },
};

const StyledLink = ({ href, label, variant = "primary", className }) => {
  return (
    <Link href={href}>
      <a
        className={`flex items-center font-serif bg-repeat focus:outline-dark hover:outline-dark ${variants[variant].a} ${className}`}
      >
        {label}
      </a>
    </Link>
  );
};

export default StyledLink;

StyledLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  variants: PropTypes.oneOf(["primary", "link"]),
  className: PropTypes.string.isRequired,
};
