import React from "react";
import "./Buffering.css";
/**
 *
 * @returns {Jsx} this is the Loader or Buffer
 */
const Loader = () => {
  return (
    <div className="center">
      <div className="ring"></div>
      <span>Buffering...</span>
    </div>
  );
};

export default Loader;
