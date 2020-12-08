import React from "react";
import PropTypes from "prop-types";

const Songs = ({ className, onClick, id, song }) => {
  return (
    <li className={className} onClick={onClick} id={id}>
      {song}{" "}
    </li>
  );
};

Songs.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  song: PropTypes.string.isRequired,
};

export default Songs;
