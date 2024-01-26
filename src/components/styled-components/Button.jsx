import React from "react";

const Button = ({ buttonName, buttonStyle }) => {
  return <button className={buttonStyle}>{buttonName}</button>;
};

export default Button;