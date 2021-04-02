import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="h-8 w-36 relative">
      <Image
        src="/logo.png"
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
