import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="h-10 w-40 relative">
      <Image
        src="/logo.svg"
        alt="Captain's Log Logo"
        layout="fill"
        objectFit="contain"
        className=""
      />
    </div>
  );
};

Logo.propTypes = {};

export default Logo;
