import React from "react";
import PropTypes from "prop-types";

const variants = {
  primary: {
    button:
      "text-light bg-dark bg-pattern-dark rounded-md py-3 px-5 font-lg font-bold",
    label: "text-light",
  },
  secondary: {
    button: "text-dark bg-light bg-pattern-light py-3 px-5 font-lg font-bold",
    label: "text-dark",
  },
  link: {
    button: "text-dark px-1",
    label: "",
  },
};

const Button = ({
  onClick,
  disabled = false,
  label,
  type = "button",
  variant = "primary",
  className,
}) => {
  return (
    <button
      data-testid="Button"
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`flex items-center font-serif bg-repeat focus:outline-dark hover:outline-dark ${variants[variant].button} ${className}`}
    >
      <p className={`${variants[variant].label}`}>{label}</p>
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit"]),
  variant: PropTypes.oneOf(["primary", "secondary", "link"]),
  className: PropTypes.string,
};
