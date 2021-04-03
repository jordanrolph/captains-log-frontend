import React from "react";
import PropTypes from "prop-types";

const EntryCard = ({ entry }) => {
  return (
    <div>
      <p>{entry.entryId}</p>
      <p>
        {entry.content.substring(0, 40)}
        {entry.content.length > 40 && "..."}
      </p>
    </div>
  );
};

export default EntryCard;

EntryCard.propTypes = {
  entry: PropTypes.shape({
    entryId: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.number,
  }),
};
