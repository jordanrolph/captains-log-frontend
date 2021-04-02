import React from "react";
import PropTypes from "prop-types";
import IconHeart from "./components/IconHeart";
import IconSun from "./components/IconSun";

const Icon = ({ name, size = 20, className }) => {
  const props = { width: size, height: size };
  const icons = {
    heart: <IconHeart {...props} />,
    sun: <IconSun {...props} />,
    default: <IconHeart {...props} />,
  };

  return (
    <div
      className={`inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {icons[name] || icons["default"]}
    </div>
  );
};

Icon.propTypes = {
  name: PropTypes.oneOf(["heart", "sun"]).isRequired,
  size: PropTypes.number,
};

Icon.defaultProps = {
  size: undefined,
};

export default Icon;
