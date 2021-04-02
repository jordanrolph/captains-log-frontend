import React from "react";
import PropTypes from "prop-types";

const Input = ({
  id,
  label = "Some label",
  placeholder = "Some placeholder",
  type = "text",
}) => {
  return (
    <div className="mt-5">
      <label className="block" htmlFor={id}>
        {label}
      </label>
      <input
        className="border-4 border-dark bg-light px-4 py-3 mt-1 w-80 focus:outline-dark hover:outline-dark placeholder-dark"
        placeholder={placeholder}
        type={type}
        id={id}
      />
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Input;
