import React from 'react';
import cx from 'classnames';
import { ReactComponent as IconArrow } from "../assets/images/icon-arrow-lg.svg";

const Button = ({ text, handleClick, size }) => {
  return(
    <button className={cx("Button", {
      "Button-sm": size === "sm"
    })}>{text}<IconArrow /></button>
  ) 
}

export default Button;