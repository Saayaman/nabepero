import React from "react";

const Quote = ({ className, text }) => (
  <div className={`small-container quotes ${className}`}>{text}</div>
);

export { Quote };
