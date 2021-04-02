import React from "react";
import PropTypes from "prop-types";

const IconHeart = ({ width, height }) => {
  return (
    <svg
      data-testid="IconHeart"
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44.5 38.3c.3-.4.7-.8 1.2-1L25.2 26.1l.6-1a2.2 2.2 0 10-4-2.1l-1.2 2.4L12 21a3 3 0 00-5.8-1.3l-.9 1.7a3 3 0 004.2 4.2l8.6 4.6-1.3 2.5a2.2 2.2 0 103.9 2l.6-1.1L41 44c.8-2.3 2.2-4.2 3.6-5.7z"
        fill="currentColor"
      />
      <path
        d="M91.2 32.3a16 16 0 00-12-4.7c-9.5.7-12.7 6.7-15 11.6-2.3-5-6.1-11.7-16-11.6-4 .2-7.1 1.5-9.5 3.5l8.9 4.8c2-1.1 4-1.6 6-1.2l-.4 2c-2.3-.4-5 .7-7.3 3a12.7 12.7 0 00-3.5 11.5l-2 .5a13 13 0 010-5.6l-7.6-4c-.9 6.7 1.6 13.7 4.6 17.9 3.5 4.9 8.6 9 13.1 12.8 4.8 4.2 7.8 5.8 13.8 10.8 6-5.6 15.5-11.4 23.3-19.6 3.6-3.9 6.7-7.9 7.7-14.5 1-7.1-.2-13.2-4.1-17.2z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IconHeart;

IconHeart.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
