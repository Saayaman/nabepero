import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { ReactComponent as IconArrow } from "../assets/images/icon-arrow-lg.svg";

const Button = ({ text, handleClick, size }) => {
  return (
    <button
      onClick={handleClick}
      className={cx("Button", {
        "Button-sm": size === "sm"
      })}
    >
      {text}
      <IconArrow />
    </button>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  size: PropTypes.string
};
Button.defaultProps = {
  handleClick: () => {},
  size: ""
};
export default Button;
