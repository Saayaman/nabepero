import React from "react";

const Quote = ({ className, text }) => (
  <div className={`quotes ${className}`}>
    <p>{text}</p>
  </div>
);

export { Quote };
